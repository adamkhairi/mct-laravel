<?php

function translate($text, $target, $source = 'en') {
    $url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" . $source . "&tl=" . $target . "&dt=t&q=" . urlencode($text);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
    $response = curl_exec($ch);
    curl_close($ch);
    
    if (!$response) return null;
    
    $result = json_decode($response, true);
    if (!isset($result[0])) return null;
    
    $translatedText = "";
    foreach ($result[0] as $line) {
        $translatedText .= $line[0];
    }
    return $translatedText;
}

echo "Testing translation from English to German...\n";
$res = translate("Hello, welcome to Morocco!", "de");
echo "Result: " . $res . "\n";
