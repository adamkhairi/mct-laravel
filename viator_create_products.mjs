/**
 * Viator Product Creator - via CDP WebSocket to existing Chromium
 */
import { readFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const WebSocket = require('ws');

const res = await fetch('http://127.0.0.1:9222/json/version');
const data = await res.json();
const WS_BROWSER_URL = data.webSocketDebuggerUrl;
const TOURS_FILE = '/tmp/published_tours.json';
const VIATOR_PRODUCTS_URL = 'https://supplier.viator.com/products/';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

class CDP {
  constructor() {
 this.ws = null; this.msgId = 1; this.pending = new Map(); 
}
  async connect(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    await new Promise((res, rej) => {
 this.ws.on('open', res); this.ws.on('error', rej); 
});
    this.ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data.toString());

        if (msg.id && this.pending.has(msg.id)) {
          const { resolve, reject } = this.pending.get(msg.id);
          this.pending.delete(msg.id);

          if (msg.error) {
reject(new Error(`CDP: ${msg.error.message}`));
} else {
resolve(msg.result);
}
        }
      } catch {
        // Ignore messages that are not valid JSON responses.
      }
    });
  }
  send(method, params = {}, sessionId = null) {
    return new Promise((resolve, reject) => {
      const id = this.msgId++;
      this.pending.set(id, { resolve, reject });
      const msg = { id, method, params };

      if (sessionId) {
msg.sessionId = sessionId;
}

      this.ws.send(JSON.stringify(msg));
      setTimeout(() => {
 if (this.pending.has(id)) {
 this.pending.delete(id); reject(new Error(`Timeout: ${method}`)); 
} 
}, 30000);
    });
  }
  async attachToTarget(targetId) {
    const { sessionId } = await this.send('Target.attachToTarget', { targetId, flatten: true });
    await this.send('Runtime.enable', {}, sessionId);
    await this.send('Page.enable', {}, sessionId);

    return sessionId;
  }
  async eval(session, expr) {
    const result = await this.send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }, session);

    return result?.result?.value;
  }
  async getTargets() {
 const { targetInfos } = await this.send('Target.getTargets');

 return targetInfos; 
}
  async newTab(url) {
 const { targetId } = await this.send('Target.createTarget', { url }); await sleep(3000);

 return targetId; 
}
  close() {
 this.ws.close(); 
}
}

async function clickButton(cdp, s, text, timeout = 10000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const clicked = await cdp.eval(s, `(()=>{const b=Array.from(document.querySelectorAll('button,[role="button"]')).find(el=>el.innerText.trim()===${JSON.stringify(text)});if(b){b.click();return true;}return false;})()`);

    if (clicked) {
return;
}

    await sleep(500);
  }

  throw new Error(`Button not found: "${text}"`);
}

async function getURL(cdp, s) {
 return cdp.eval(s, 'window.location.href'); 
}

async function dismissModal(cdp, s) {
  const text = await cdp.eval(s, 'document.body.innerText');

  if (text && (text.includes('$29') || text.includes('Launch Assist'))) {
    try {
 await clickButton(cdp, s, 'Continue', 4000); await sleep(2000); console.log('  → Modal dismissed'); 
} catch {
      console.warn('  → Continue button was not available; keeping the modal open.');
    }
  }
}

async function main() {
  const tours = JSON.parse(readFileSync(TOURS_FILE, 'utf-8'));
  console.log(`\n📋 ${tours.length} published tours to create\n`);

  const cdp = new CDP();
  await cdp.connect(WS_BROWSER_URL);
  console.log('✅ Connected to Chromium\n');

  const targets = await cdp.getTargets();
  let viatorTab = targets.find(t => t.type === 'page' && t.url.includes('supplier.viator.com'));
  let targetId = viatorTab ? viatorTab.targetId : await cdp.newTab(VIATOR_PRODUCTS_URL);
  const session = await cdp.attachToTarget(targetId);
  await sleep(2000);

  const url = await getURL(cdp, session);

  if (url.includes('login') || url.includes('signin')) {
    console.log('⚠️  Not logged in. Please log in manually first, then re-run this script.');
    cdp.close();

 return;
  }

  console.log('✅ Logged in. Starting creation loop...');

  const results = [];

  for (let i = 0; i < tours.length; i++) {
    const tour = tours[i];
    console.log(`\n${'─'.repeat(55)}`);
    console.log(`🏗️  [${i+1}/${tours.length}] ${tour.title}`);

    try {
      // Navigate to product list
      await cdp.eval(session, `window.location.href = '${VIATOR_PRODUCTS_URL}'`);
      await sleep(4000);

      // Click "Create a product"
      await clickButton(cdp, session, 'Create a product');
      await sleep(4000);
      await dismissModal(cdp, session);

      // Select Manual Creation
      const selected = await cdp.eval(session, `(()=>{
        const r=document.querySelector('input[value="MANUAL_CREATION"]');
        if(r){r.click();r.dispatchEvent(new Event('change',{bubbles:true}));return true;}
        const lbl=Array.from(document.querySelectorAll('label')).find(l=>l.innerText.includes('Manual'));
        if(lbl){lbl.click();return true;}
        return false;
      })()`);
      console.log(`  → Manual Creation selected: ${selected}`);
      await sleep(1000);

      await clickButton(cdp, session, 'Save & continue');
      await sleep(5000);
      console.log('  → URL:', await getURL(cdp, session));

      // =============================================================
      // FORM STEP: BASICS (title)
      // =============================================================
      const textInputs = await cdp.eval(session, `JSON.stringify(Array.from(document.querySelectorAll('input[type="text"],input:not([type]),textarea')).map(i=>({n:i.name,id:i.id,ph:i.placeholder,tag:i.tagName})).slice(0,15))`);
      console.log('  → Inputs on page:', textInputs);

      // Try to fill title using common selectors
      const titleFilled = await cdp.eval(session, `(()=>{
        const sels=['input[name="title"]','input#title','[data-testid*="title"] input','input[placeholder*="title" i]','input[placeholder*="name" i]','input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"])'];
        for(const s of sels){
          const el=document.querySelector(s);
          if(el&&el.offsetParent!==null){
            el.focus();
            const nd=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value');
            if(nd) nd.set.call(el,${JSON.stringify(tour.title)});
            else el.value=${JSON.stringify(tour.title)};
            el.dispatchEvent(new Event('input',{bubbles:true}));
            el.dispatchEvent(new Event('change',{bubbles:true}));
            return 'filled:'+s;
          }
        }
        return 'notfound';
      })()`);
      console.log('  → Title fill result:', titleFilled);
      await sleep(500);

      // Try Save & continue
      try {
 await clickButton(cdp, session, 'Save & continue', 5000); await sleep(3000); 
} catch (error) {
  console.warn('  → Could not submit basic details:', error.message);
}

      console.log('  → After basics URL:', await getURL(cdp, session));

      // =============================================================
      // FORM STEP: DESCRIPTION
      // =============================================================
      const descFilled = await cdp.eval(session, `(()=>{
        const sels=['textarea[name="description"]','textarea#description','[data-testid*="description"] textarea','textarea[placeholder*="description" i]','textarea'];
        for(const s of sels){
          const el=document.querySelector(s);
          if(el&&el.offsetParent!==null){
            el.focus();
            const nd=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value');
            if(nd) nd.set.call(el,${JSON.stringify(tour.description || tour.title)});
            else el.value=${JSON.stringify(tour.description || tour.title)};
            el.dispatchEvent(new Event('input',{bubbles:true}));
            el.dispatchEvent(new Event('change',{bubbles:true}));
            return 'filled:'+s;
          }
        }
        return 'notfound';
      })()`);
      console.log('  → Description fill result:', descFilled);
      await sleep(500);

      try {
 await clickButton(cdp, session, 'Save & continue', 5000); await sleep(3000); 
} catch (error) {
  console.warn('  → Could not submit the description:', error.message);
}

      console.log('  → After description URL:', await getURL(cdp, session));

      const finalURL = await getURL(cdp, session);
      results.push({ title: tour.title, status: 'partial', url: finalURL });
      console.log(`  ✅ Tour created (partially). URL: ${finalURL}`);

    } catch (err) {
      const errURL = await getURL(cdp, session).catch(() => 'unknown');
      console.error(`  ❌ Error: ${err.message} (at ${errURL})`);
      results.push({ title: tour.title, status: 'error', error: err.message, url: errURL });
    }

    await sleep(2000);
  }

  console.log('\n\n📊 Results Summary:');
  console.log('─'.repeat(55));

  for (const r of results) {
    const icon = r.status === 'error' ? '❌' : '✅';
    console.log(`${icon} ${r.title}`);

    if (r.error) {
console.log(`   Error: ${r.error}`);
}

    if (r.url) {
console.log(`   URL: ${r.url}`);
}
  }

  cdp.close();
}

main().catch(e => {
 console.error('Fatal:', e.message); process.exit(1); 
});
