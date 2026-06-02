<?php

namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TourTranslationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locales = ['es', 'fr', 'de', 'it', 'pt', 'ru', 'nl', 'zh'];

        // Load the comprehensive machine-translation cache built by translate_tours.py
        $cachePath = database_path('seeders/data/translations_cache.json');
        $translationsCache = File::exists($cachePath)
            ? json_decode(File::get($cachePath), true)
            : [];

        // Also load per-locale lang files as a fallback/supplement
        $translations = [];
        foreach ($locales as $locale) {
            $path = lang_path("{$locale}.json");
            if (File::exists($path)) {
                $translations[$locale] = json_decode(File::get($path), true);
            } else {
                $translations[$locale] = [];
            }
        }

        $tours = Tour::all();

        // Comprehensive manual overrides mapping for the 9 key published tours (sourced from docx)
        // This avoids bloating the global JSON files shared with the client.
        $overrides = [
            'just-for-women-10-days' => [
                'es' => [
                    'title' => 'Solo para mujeres – 10 días / 9 noches',
                    'description' => '¡Bienvenidas damas a Marruecos! Vengan a experimentar las maravillas que ofrece Marruecos con muchas compras en las medinas históricas, clases regionales de cocina en Fez y Marrakech, una clase de danza del vientre, una fiesta de henna, un de cerámica en Fez, diseñando su propio par de caravanas de plata, visitas a cooperativas de mujeres y relajación en un hammam tradicional.',
                ],
                'fr' => [
                    'title' => 'Réservé aux femmes – 10 jours / 9 nuits',
                    'description' => 'Bienvenue mesdames au Maroc ! Venez découvrir les merveilles du Maroc avec de nombreuses séances de shopping dans les médinas historiques, des cours de cuisine régionale à Fès et Marrakech, un cours de danse du ventre, une fête au henné, un atelier de céramique à Fès, la création de vos propres boucles d\'oreilles en argent marocain, une démonstration de mode féminine marocaine, des visites de coopératives de femmes et de la relaxation dans un hammam traditionnel.',
                ],
                'de' => [
                    'title' => 'Nur für Frauen – 10 Tage / 9 Nächte',
                    'description' => 'Willkommen Damen in Marokko! Erleben Sie die Wunder Marokkos mit ausgiebigen Shoppingtouren in historischen Medinas, regionalen Kochkursen in Fès und Marrakesch, einem Bauchtanzkurs, einer Henna-Party, einem Keramik-Workshop in Fès, dem Entwerfen eigenen marokkanischen Silberohrringe, einer Vorführung marokkanischer Damenmode, Besuchen von Frauenkooperativen und Entspannung in einem traditionellen Hammam.',
                ],
                'it' => [
                    'title' => 'Solo per donne – 10 giorni / 9 notti',
                    'description' => 'Benvenute signore in Marocco! Venite a provare le meraviglie del Marocco con shopping nelle medine storiche, lezioni di cucina regionale a Fes e Marrakech, una lezione di danza del ventre, una festa all\'henné, un laboratorio di ceramica a Fes, la creazione del vostro paio di orecchini in argento marocchino, una sfilata di moda femminile marocchina, visite a cooperative di donne e relax in un hammam tradizionale.',
                ],
                'pt' => [
                    'title' => 'Apenas para mulheres – 10 dias / 9 noites',
                    'description' => 'Bem-vindas senhoras a Marrocos! Venham experimentar as maravilhas que Marrocos oferece com muitas compras nas medinas históricas, aulas regionais de culinária em Fez e Marraquexe, uma aula de dança do ventre, uma festa de hena, uma oficina de cerâmica em Fez, desenhando o seu próprio par de brincos de prata marroquinos, uma demonstração de moda feminina marroquina, visitas a cooperativas de mulheres e relaxamento num hammam tradicional.',
                ],
                'ru' => [
                    'title' => 'Только для женщин – 10 дней / 9 ночей',
                    'description' => 'Добро пожаловать в Марокко, дамы! Приезжайте испытать чудеса Марокко: шопинг в исторических мединах, кулинарные мастер-классы в Фесе и Марракеше, уроки танца живота, вечеринка с хной, гончарная мастерская в Фесе, создание собственных серебряных серег, показ марокканской женской моды, посещение женских кооперативов и отдых в традиционном хаммаме.',
                ],
                'nl' => [
                    'title' => 'Alleen voor vrouwen – 10 dagen / 9 nachten',
                    'description' => 'Welkom dames in Marokko! Ervaar de wonderen van Marokko met volop shoppen in historische medina\'s, regionale kooklessen in Fez en Marrakech, een buikdansles, een hennaparty, een keramiekworkshop in Fez, het ontwerpen van je eigen zilveren oorbellen, een demonstratie van Marokkaanse damesmode, bezoeken aan vrouwencoöperaties en ontspanning in een traditionele hammam.',
                ],
                'zh' => [
                    'title' => '女性专属之旅 – 10天 / 9晚',
                    'description' => '欢迎女士们来到摩洛哥！快来体验摩洛哥的奇妙魅力：在历史悠久的麦地那尽情购物、在菲斯和马拉喀什参加当地烹饪课、体验肚皮舞课程、指甲花派对、菲斯陶艺工作坊、设计属于自己的摩洛哥银耳环、欣赏摩洛哥女性时装展示、访问女性合作社，并在传统哈曼浴室中放松身心。',
                ],
            ],
            'mediterranean-coast-southern-morocco' => [
                'es' => [
                    'title' => 'Costa del Mediterráneo y el sur de Marruecos – 13 días',
                    'description' => 'Descubra la belleza, la cultura y la diversidad de Marruecos en este viaje inolvidable de 13 días por las ciudades imperiales del país, las costas del Atlántico y el Mediterráneo, los paisajes de montaña y el desierto del Sahara. Comenzando en Tánger, este tour lo llevará a través de los destinos más emblemáticos de Marruecos, incluyendo Rabat, Casablanca, Marrakech, Ouarzazate, Zagora, Merzouga, Midelt, Meknes, Fes, Chefchaouen y Tetuán.',
                ],
                'fr' => [
                    'title' => 'Côte méditerranéenne & Sud du Maroc – 13 jours',
                    'description' => 'Découvrez la beauté, la culture et la diversité du Maroc au cours de cet inoubliable voyage de 13 jours à travers les villes impériales du pays, les côtes atlantique et méditerranéenne, les paysages de montagne et le désert du Sahara. Au départ de Tanger, ce circuit vous emmène vers les destinations les plus emblématiques du Maroc, notamment Rabat, Casablanca, Marrakech, Ouarzazate, Zagora, Merzouga, Midelt, Meknès, Fès, Chefchaouen et Tétouan.',
                ],
                'de' => [
                    'title' => 'Mittelmeerküste & Südmarokko – 13 Tage',
                    'description' => 'Entdecken Sie die Schönheit, Kultur und Vielfalt Marokkos auf dieser unvergesslichen 13-tägigen Reise durch die Königsstädte des Landes, die Atlantik- und Mittelmeerküste, Gebirgslandschaften und die Sahara-Wüste. Diese Tour beginnt in Tanger und führt Sie zu den berühmtesten Zielen Marokkos, darunter Rabat, Casablanca, Marrakesch, Ouarzazate, Zagora, Merzouga, Midelt, Meknès, Fès, Chefchaouen und Tétouan.',
                ],
                'it' => [
                    'title' => 'Costa del Mediterraneo & Sud del Marocco – 13 giorni',
                    'description' => 'Scopri la bellezza, la cultura e la diversità del Marocco in questo indimenticabile viaggio di 13 giorni attraverso le città imperiali del paese, le coste dell\'Atlantico e del Mediterraneo, i paesaggi montani e il deserto del Sahara. Partendo da Tangeri, questo tour ti porta attraverso le destinazioni più iconiche del Marocco, tra cui Rabat, Casablanca, Marrakech, Ouarzazate, Zagora, Merzouga, Midelt, Meknes, Fes, Chefchaouen e Tetouan.',
                ],
                'pt' => [
                    'title' => 'Costa do Mediterrâneo e Sul de Marrocos – 13 dias',
                    'description' => 'Descubra a beleza, cultura e diversidade de Marrocos nesta inesquecível viagem de 13 dias pelas cidades imperiais do país, pelas costas do Atlântico e do Mediterrâneo, paisagens montanhosas e o Deserto do Saara. Começando em Tânger, este passeio leva você pelos destinos mais emblemáticos de Marrocos, incluindo Rabat, Casablanca, Marraquexe, Ouarzazate, Zagora, Merzouga, Midelt, Meknes, Fez, Chefchaouen e Tetouan.',
                ],
                'ru' => [
                    'title' => 'Средиземноморское побережье и Юг Марокко – 13 дней',
                    'description' => 'Откройте для себя красоту, культуру и разнообразие Марокко в этом незабываемом 13-дневном путешествии по имперским городам страны, побережьям Атлантики и Средиземного моря, горным ландшафтам и пустыне Сахара. Начинаясь в Танжере, этот тур проведет вас по самым культовым местам Марокко, включая Рабат, Касабланку, Марракеш, Уарзазат, Загору, Мерзугу, Мидельт, Мекнес, Фес, Шефшауэн и Тетуан.',
                ],
                'nl' => [
                    'title' => 'Middellandse Zeekust & Zuid-Marokko – 13 dagen',
                    'description' => 'Ontdek de schoonheid, cultuur en diversiteit van Marokko tijdens deze onvergetelijke 13-daagse reis door de koningssteden van het land, de Atlantische en Middellandse Zeekust, berglandschappen en de Sahara. Deze tour begint in Tanger en brengt je langs de meest iconische bestemmingen van Marokko, waaronder Rabat, Casablanca, Marrakech, Ouarzazate, Zagora, Merzouga, Midelt, Meknes, Fez, Chefchaouen en Tetouan.',
                ],
                'zh' => [
                    'title' => '地中海海岸与摩洛哥南部之旅 – 13天',
                    'description' => '在这场难忘的13天旅程中，探索摩洛哥的美丽、文化与多样性，穿越皇城、大西洋和地中海海岸线、壮丽山脉以及撒哈拉沙漠。从丹吉尔出发，行程将带您领略摩洛哥最著名的目的地，包括拉巴特、卡萨布兰卡、马拉喀什、瓦尔扎扎特、扎哥拉、梅尔祖卡、米德尔特、梅克内斯、菲斯、舍夫沙万和得土安。',
                ],
            ],
            'sahara-imperial-cities-7-days' => [
                'es' => [
                    'title' => 'Tour de las ciudades imperiales del Sahara – 7 días',
                    'description' => 'Este viaje de 7 días por Marruecos combina el encanto de las ciudades imperiales con la magia del desierto del Sahara. Comenzando en Casablanca, viajará a la vibrante ciudad de Marrakech, cruzará las montañas del Alto Atlas y se aventurará a las espectaculares dunas de Erg Chebbi en Merzouga. Explore kasbahs históricas, pasee en camello al atardecer y duerma bajo las estrellas del desierto antes de regresar a Casablanca a través del pintoresco valle de Ziz y Fez.',
                ],
                'fr' => [
                    'title' => 'Sahara & Villes Impériales – 7 jours',
                    'description' => 'Ce voyage de 7 jours au Maroc combine le charme des villes impériales et la magie du désert du Sahara. Au départ de Casablanca, vous voyagerez vers la ville vibrante de Marrakech, traverserez les montagnes du Haut Atlas et vous aventurerez dans les dunes spectaculaires de l\'Erg Chebbi à Merzouga. Explorez des kasbahs historiques, montez à dos de chameau au coucher du soleil et dormez sous les étoiles du désert avant de retourner à Casablanca via la pittoresque vallée du Ziz et Fès.',
                ],
                'de' => [
                    'title' => 'Sahara & Königsstädte – 7 Tage',
                    'description' => 'Diese 7-tägige Marokko-Reise verbindet den Charme der Königsstädte mit der Magie der Sahara-Wüste. Von Casablanca aus reisen Sie in die pulsierende Stadt Marrakesch, überqueren das Hohe Atlasgebirge und wagen sich zu den spektakulären Dünen des Erg Chebbi in Merzouga. Erkunden Sie historische Kasbahs, reiten Sie bei Sonnenuntergang auf Kamelen und schlafen Sie unter dem Wüstenhimmel, bevor Sie über das malerische Ziz-Tal und Fès nach Casablanca zurückkehren.',
                ],
                'it' => [
                    'title' => 'Sahara & Città Imperiali – 7 giorni',
                    'description' => 'Questo viaggio di 7 giorni in Marocco unisce il fascino delle città imperiali alla magia del deserto del Sahara. Partendo da Casablanca, viaggerai verso la vivace Marrakech, attraverserai le montagne dell\'Alto Atlas e ti avventurerai tra le spettacolari dune dell\'Erg Chebbi a Merzouga. Esplora kasbah storiche, fai un giro in cammello al tramonto e dormi sotto le stelle del deserto prima di tornare a Casablanca attraverso la panoramica Valle del Ziz e Fes.',
                ],
                'pt' => [
                    'title' => 'Saara e Cidades Imperiais – 7 dias',
                    'description' => 'Esta viagem de 7 dias por Marrocos combina o fascínio das cidades imperiais com a magia do Deserto do Saara. Começando em Casablanca, você viajará para a vibrante cidade de Marraquexe, cruzará as montanhas do Alto Atlas e se aventurará pelas espetaculares dunas de Erg Chebbi em Merzouga. Explore kasbahs históricas, ande de camelo ao pôr do sol e durma sob as estrelas do deserto antes de retornar a Casablanca através do cênico Vale do Ziz e Fez.',
                ],
                'ru' => [
                    'title' => 'Сахара и Имперские города – 7 дней',
                    'description' => 'Это 7-дневное путешествие по Марокко сочетает в себе очарование имперских городов и магию пустыни Сахара. Начав в Касабланке, вы отправитесь в оживленный Марракеш, пересечете горы Высокого Атласа и доберетесь до впечатляющих дюн Эрг-Шебби в Мерзуге. Исследуйте исторические касбы, покатайтесь на верблюдах на закате и переночуйте под пустынными звездами перед возвращением в Касабланку через живописную долину Зиз и Фес.',
                ],
                'nl' => [
                    'title' => 'Sahara & Koningssteden – 7 dagen',
                    'description' => 'Deze 7-daagse Marokkaanse reis combineert de allure van de koningssteden met de magie van de Sahara. Vanuit Casablanca reis je naar het bruisende Marrakech, steek je het Hoge Atlasgebergte over en trek je naar de spectaculaire duinen van Erg Chebbi in Merzouga. Verken historische kasbahs, maak een kamelentocht bij zonsondergang en slaap onder de sterrenhemel voordat je via de schilderachtige Ziz-vallei en Fez terugkeert naar Casablanca.',
                ],
                'zh' => [
                    'title' => '撒哈拉与皇城之旅 – 7天',
                    'description' => '这场为期7天的摩洛哥之旅将皇城的魅力与撒哈拉沙漠的魔力完美结合。从卡萨布兰卡出发，您将前往充满活力的马拉喀什，翻越壮丽的高阿特拉斯山脉，前往梅尔祖卡壮观的埃尔格切比沙丘。在返回卡萨布兰卡之前，探索历史悠久的城堡，在日落时分骑骆驼，睡在沙漠星空下，途经风景秀丽的济兹山谷和菲斯。',
                ],
            ],
            'andalusian-heritage-tour' => [
                'es' => [
                    'title' => 'Tour de la Herencia Andaluza',
                    'description' => 'Tras la caída de Granada en 1492, muchos musulmanes y judíos andaluces se establecieron en el norte de Marruecos, trayendo consigo un rico legado cultural que dio forma a la arquitectura, la música, la artesanía, la gastronomía y el diseño urbano de varias ciudades marroquíes. Este viaje de 8 días le invita a descubrir el notable patrimonio andaluz de Marruecos a través de sus ciudades imperiales, pueblos de montaña pintados de azul, medinas históricas y lugares declarados Patrimonio de la Humanidad por la UNESCO.',
                ],
                'fr' => [
                    'title' => 'Circuit de l\'Héritage Andalou',
                    'description' => 'Après la chute de Grenade en 1492, de nombreux musulmans et juifs andalous se sont installés dans le nord du Maroc, apportant avec eux un riche héritage culturel qui a façonné l\'architecture, la musique, l\'artisanat, la gastronomie et le design urbain de plusieurs villes marocaines. Ce voyage de 8 jours vous invite à découvrir le remarquable patrimoine andalou du Maroc à travers ses villes impériales, ses villes de montagne peintes en bleu, ses médinas historiques et ses sites classés au patrimoine mondial de l\'UNESCO.',
                ],
                'de' => [
                    'title' => 'Andalusches Erbe Tour',
                    'description' => 'Nach dem Fall von Granada im Jahr 1492 ließen sich viele andalusische Muslime und Juden im Norden Marokkos nieder und brachten ein reiches kulturelles Erbe mit, das die Architektur, Musik, das Handwerk, die Küche und das Stadtbild mehrerer marokkanischer Städte prägte. Diese 8-tägige Reise lädt Sie ein, das bemerkenswerte andalusische Erbe Marokkos in seinen Königsstädten, blau bemälten Bergdörfern, historischen Medinas und UNESCO-Welterbestätten zu entdecken.',
                ],
                'it' => [
                    'title' => 'Tour dell\'Eredità Andalusa',
                    'description' => 'Dopo la caduta di Granada nel 1492, molti musulmani ed ebrei andalusi si stabilirono nel nord del Marocco, portando con sé un ricco patrimonio culturale che ha plasmato l\'architettura, la musica, l\'artigianato, la gastronomia e il design urbano di varie città marocchine. Questo viaggio di 8 giorni ti invita a scoprire il notevole patrimonio andaluso del Marocco attraverso le sue città imperiali, i pittoreschi villaggi dipinti di blu, le medine storiche e i siti patrimonio dell\'umanità dell\'UNESCO.',
                ],
                'pt' => [
                    'title' => 'Tour da Herança Andaluza',
                    'description' => 'Após a queda de Granada em 1492, muitos muçulmanos e judeus andaluzes estabeleceram-se no norte de Marrocos, trazendo consigo um rico legado cultural que moldou a arquitetura, música, artesanato, gastronomia e desenho urbano de várias cidades marroquinas. Esta viagem de 8 dias convida-o a descobrir o notável património andaluz de Marrocos através das suas cidades imperiais, aldeias de montanha pintadas de azul, medinas históricas e locais classificados como Património Mundial da UNESCO.',
                ],
                'ru' => [
                    'title' => 'Тур «Андалузское наследие»',
                    'description' => 'После падения Гранады в 1492 году многие андалузские мусульмане и евреи поселились на севере Марокко, принеся с собой богатое культурное наследие, которое сформировало архитектуру, музыку, ремесла, кухню и градостроительный дизайн ряда марокканских городов. Это 8-дневное путешествие приглашает вас открыть для себя удивительное андалузское наследие Марокко через его имперские города, окрашенные в синий цвет горные города, исторические медины и объекты Всемирного наследия ЮНЕСКО.',
                ],
                'nl' => [
                    'title' => 'Andalusisch Erfgoed Tour',
                    'description' => 'Na de val van Granada in 1492 vestigden veel Andalusische moslims en joden zich in het noorden van Marokko. Zij brachten een rijk cultureel erfgoed mee dat de architectuur, muziek, ambachten, keuken en stedenbouw van verschillende Marokkaanse steden heeft gevormd. Deze 8-daagse reis nodigt je uit om het opmerkelijke Andalusische erfgoed van Marokko te ontdekken via de koningssteden, blauw geschilderde bergdorpjes, historische medina\'s en UNESCO-werelderfgoedlocaties.',
                ],
                'zh' => [
                    'title' => '安达卢西亚遗产之旅',
                    'description' => '随着1492年格拉纳达的沦陷，许多安达卢西亚穆斯林和犹太人在摩洛哥北部定居，带来了丰富的文化遗产，塑造了多个摩洛哥城市的建筑、音乐、手工艺、美食和城市设计。这趟为期8天的旅程邀请您通过皇城、蓝色山城、历史悠久的麦地那和联合国教科文组织世界遗产地，来发现摩洛哥非凡的安达卢西亚遗产。',
                ],
            ],
            'atlantic-coast-marrakech-10-days' => [
                'es' => [
                    'title' => 'Tour de la Costa Atlántica y Marrakech',
                    'description' => 'Un hermoso viaje a lo largo de la costa atlántica de Marruecos que combina ciudades imperiales, pueblos costeros y la vibrante ciudad de Marrakech. Este itinerario incluye Tánger, Rabat, Casablanca, El Yadida, Oualidia, Esauira, Agadir y Marrakech.',
                ],
                'fr' => [
                    'title' => 'Côte Atlantique & Marrakech – 10 jours',
                    'description' => 'Un magnifique voyage le long de la côte atlantique du Maroc combinant villes impériales, villes côtières et la ville vibrante de Marrakech. Cet itinéraire comprend Tanger, Rabat, Casablanca, El Jadida, Oualidia, Essaouira, Agadir et Marrakech.',
                ],
                'de' => [
                    'title' => 'Atlantikküste & Marrakesch – 10 Tage',
                    'description' => 'Eine wunderschöne Reise entlang der Atlantikküste Marokkos, die Königsstädte, Küstenorte und die lebendige Stadt Marrakesch miteinander verbindet. Diese Route beinhaltet Tanger, Rabat, Casablanca, El Jadida, Oualidia, Essaouira, Agadir und Marrakesch.',
                ],
                'it' => [
                    'title' => 'Costa Atlantica & Marrakech – 10 giorni',
                    'description' => 'Un bellissimo viaggio lungo la costa atlantica del Marocco che unisce città imperiali, città costiere e la vivace città di Marrakech. Questo itinerario include Tangeri, Rabat, Casablanca, El Jadida, Oualidia, Essaouira, Agadir e Marrakech.',
                ],
                'pt' => [
                    'title' => 'Costa Atlântica e Marraquexe – 10 dias',
                    'description' => 'Uma bela viagem ao longo da costa atlântica de Marrocos que combina cidades imperiais, vilas costeiras e a vibrante cidade de Marraquexe. Este itinerário inclui Tânger, Rabat, Casablanca, El Jadida, Oualidia, Essaouira, Agadir e Marraquexe.',
                ],
                'ru' => [
                    'title' => 'Атлантическое побережье и Марракеш – 10 дней',
                    'description' => 'Прекрасное путешествие вдоль атлантического побережья Марокко, сочетающее имперские города, прибрежные поселки и оживленный Марракеш. Этот маршрут включает Танжер, Рабат, Касабланку, Эль-Джадиду, Уалидию, Эс-Сувейру, Агадир и Марракеш.',
                ],
                'nl' => [
                    'title' => 'Atlantische Kust & Marrakech – 10 dagen',
                    'description' => 'Een prachtige reis langs de Atlantische kust van Marokko die koningssteden, kustplaatsen en de levendige stad Marrakech combineert. Deze route omvat Tanger, Rabat, Casablanca, El Jadida, Oualidia, Essaouira, Agadir en Marrakech.',
                ],
                'zh' => [
                    'title' => '大西洋海岸与马拉喀什之旅 – 10天',
                    'description' => '沿着摩洛哥大西洋海岸的优美旅程，完美融合了皇城、海岸城镇以及充满活力的马拉喀什。行程包括丹吉尔、拉巴特、卡萨布兰卡、杰迪代、瓦利迪耶、索维拉、阿加迪尔和马拉喀什。',
                ],
            ],
            'imperial-cities-tour-from-tangier-10d' => [
                'es' => [
                    'title' => 'Tour de las Ciudades Imperiales desde Tánger – 10 Días',
                    'description' => 'Este tour de 10 días por las Ciudades Imperiales ofrece un rico viaje a través de los destinos más históricos y culturalmente significativos de Marruecos. Comenzando en Tánger, explorará el punto de encuentro del Mediterráneo y el Atlántico, para luego continuar hacia Rabat, Casablanca, Marrakech, las cascadas de Ouzoud, Bin El Ouidane, Meknes, Volubilis, Fez, Chefchaouen y Tetuán.',
                ],
                'fr' => [
                    'title' => 'Circuit des villes impériales au départ de Tanger – 10 jours',
                    'description' => 'Ce circuit de 10 jours dans les villes impériales offre un voyage riche à travers les destinations les plus historiques et culturelles du Maroc. Au départ de Tanger, vous explorerez le point d\'incontro de la Méditerranée et de l\'Atlantique, avant de continuer vers Rabat, Casablanca, Marrakech, les cascades d\'Ouzoud, Bin El Ouidane, Meknès, Volubilis, Fès, Chefchaouen et Tétouan.',
                ],
                'de' => [
                    'title' => 'Königsstädte-Tour ab Tanger – 10 Tage',
                    'description' => 'Diese 10-tägige Königsstädte-Tour bietet eine erlebnisreiche Reise durch die historisch und kulturell bedeutendsten Ziele Marokkos. Beginnend in Tanger erkunden Sie den Treffpunkt von Mittelmeer und Atlantik, bevor Sie nach Rabat, Casablanca, Marrakesch, zu den Ouzoud-Wasserfällen, Bin El Ouidane, Meknès, Volubilis, Fès, Chefchaouen und Tétouan weiterreisen.',
                ],
                'it' => [
                    'title' => 'Tour delle Città Imperiali da Tangeri – 10 giorni',
                    'description' => 'Questo tour di 10 giorni delle Città Imperiali offre un ricco viaggio attraverso le destinazioni più storiche e culturalmente significative del Marocco. Partendo da Tangeri, esplorerai il punto d\'incontro del Mediterraneo e dell\'Atlantico, prima di continuare verso Rabat, Casablanca, Marrakech, le cascate di Ouzoud, Bin El Ouidane, Meknes, Volubilis, Fes, Chefchaouen e Tetouan.',
                ],
                'pt' => [
                    'title' => 'Tour das Cidades Imperiais a partir de Tânger – 10 dias',
                    'description' => 'Este passeio de 10 dias pelas Cidades Imperiais oferece uma rica viagem pelos destinos mais históricos e culturalmente significativos de Marrocos. Começando em Tânger, você explorará o ponto de encontro do Mediterrâneo e do Atlântico, antes de continuar para Rabat, Casablanca, Marraquexe, as Cachoeiras de Ouzoud, Bin El Ouidane, Meknes, Volubilis, Fez, Chefchaouen e Tetouan.',
                ],
                'ru' => [
                    'title' => 'Тур по имперским городам из Танжера – 10 дней',
                    'description' => 'Этот 10-дневный тур по Имперским городам предлагает насыщенное путешествие по самым историческим и культурно значимым местам Марокко. Начинаясь в Танжере, вы исследуете место слияния Средиземного моря и Атлантики, после чего отправитесь в Рабат, Касабланку, Марракеш, к водопадам Узуд, Бин-эль-Уидан, Мекнес, Волюбилис, Фес, Шефшауэн и Тетуан.',
                ],
                'nl' => [
                    'title' => 'Koningssteden tour vanuit Tanger – 10 dagen',
                    'description' => 'Deze 10-daagse Koningssteden tour biedt een rijke reis door de meest historische en cultureel belangrijke bestemmingen van Marokko. Beginnend in Tanger verken je het ontmoetingspunt van de Middellandse Zee en de Atlantische Oceaan, alvorens verder te reizen naar Rabat, Casablanca, Marrakech, Ouzoud watervallen, Bin El Ouidane, Meknes, Volubilis, Fez, Chefchaouen en Tetouan.',
                ],
                'zh' => [
                    'title' => '从丹吉尔出发的皇城之旅 – 10天',
                    'description' => '这个为期10天的皇城之旅提供了一次穿越摩洛哥最具历史和文化意义目的地的精彩旅程。从丹吉尔出发，您将探索地中海与大西洋的交汇点，然后继续前往拉巴特、卡萨布兰卡、马拉喀什、乌祖德瀑布、宾阿尔维丹、梅克内斯、沃吕比利斯、菲斯、舍夫沙万和得土安。',
                ],
            ],
            'moorish-heritage-desert-tour-11-days' => [
                'es' => [
                    'title' => 'Tour de la Herencia Morisca y el Desierto – 11 Días',
                    'description' => 'Este viaje de 11 días combina las ciudades imperiales más bellas de Marruecos, el pueblo azul de Chefchaouen, ruinas romanas, el desierto del Sahara y la costa atlántica. Desde Tánger hasta las dunas de Merzouga y la vibrante ciudad de Marrakech, este tour ofrece un descubrimiento completo de la historia, la cultura, las montañas y los paisajes desérticos de Marruecos.',
                ],
                'fr' => [
                    'title' => 'Héritage Mauresque & Désert – 11 jours',
                    'description' => 'Ce voyage de 11 jours combine les plus belles villes impériales du Maroc, la ville bleue de Chefchaouen, des ruines romaines, le désert du Sahara et la côte atlantique. De Tanger aux dunes de Merzouga et à la ville vibrante de Marrakech, ce circuit offre une découverte complète de l\'histoire, de la culture, des montagnes et des paysages désertiques du Maroc.',
                ],
                'de' => [
                    'title' => 'Maurisches Erbe & Wüstentour – 11 Tage',
                    'description' => 'Diese 11-tägige Reise verbindet die schönsten Königsstädte Marokkos, das blaue Dorf Chefchaouen, römische Ruinen, die Sahara-Wüste und die Atlantikküste. Von Tanger über die Dünen von Merzouga bis zur pulsierenden Stadt Marrakesch bietet diese Tour eine umfassende Entdeckung der Geschichte, Kultur, Berge und Wüstenlandschaften Marokkos.',
                ],
                'it' => [
                    'title' => 'Tour dell\'Eredità Moresca & Deserto – 11 giorni',
                    'description' => 'Questo viaggio di 11 giorni unisce le città imperiali più belle del Marocco, il villaggio blu di Chefchaouen, rovine romane, il deserto del Sahara e la costa atlantica. Da Tangeri alle dune di Merzouga e alla vivace città di Marrakech, questo tour offre una scoperta completa della storia, della cultura, delle montagne e dei paesaggi desertici del Marocco.',
                ],
                'pt' => [
                    'title' => 'Tour da Herança Mourisca e Deserto – 11 dias',
                    'description' => 'Esta viagem de 11 dias combina as mais belas cidades imperiais de Marrocos, a vila azul de Chefchaouen, ruínas romanas, o Deserto do Saara e a costa atlântica. De Tânger às dunas de Merzouga e à vibrante cidade de Marraquexe, este passeio oferece uma descoberta completa da história, cultura, montanhas e paisagens desérticas de Marrocos.',
                ],
                'ru' => [
                    'title' => 'Тур «Мавританское наследие и пустыня» – 11 дней',
                    'description' => 'Это 11-дневное путешествие сочетает в себе красивейшие имперские города Марокко, синий город Шефшауэн, римские руины, пустыню Сахара и атлантическое побережье. От Танжера до дюн Мерзуги и оживленного Марракеша — этот тур предлагает полное знакомство с историей, культурой, горами и пустынными пейзажами Марокко.',
                ],
                'nl' => [
                    'title' => 'Moors Erfgoed & Woestijn Tour – 11 dagen',
                    'description' => 'Deze 11-daagse reis combineert de mooiste koningssteden van Marokko, het blauwe stadje Chefchaouen, Romeinse ruïnes, de Sahara en de Atlantische kust. Van Tanger tot de duinen van Merzouga en de bruisende stad Marrakech biedt deze tour een complete ontdekking van de geschiedenis, cultuur, bergen en woestijnlandschappen van Marokko.',
                ],
                'zh' => [
                    'title' => '摩尔遗产与沙漠之旅 – 11天',
                    'description' => '这个为期11天的行程将摩洛哥最美丽的皇城、蓝色小镇舍夫沙万、罗马遗迹、撒哈拉沙漠和大西洋海岸完美融合。从丹吉尔到梅尔祖卡的沙丘以及充满活力的马拉喀什，本次行程将为您提供对摩洛哥历史、文化、山脉和沙漠景观的全面探索。',
                ],
            ],
            'northern-morocco-grand-loop-7-days' => [
                'es' => [
                    'title' => 'Gran Circuito del Norte de Marruecos – 7 Días',
                    'description' => 'Este viaje de 7 días ofrece un descubrimiento completo del norte y centro de Marruecos, combinando el encanto costero, los paisajes de montaña y el patrimonio imperial. Comenzando en Tánger, la ruta atraviesa las calles azules de Chefchaouen y las montañas del Rif hasta la ciudad mediterránea de Al Hoceima. El itinerario continúa hacia el interior hasta la capital cultural de Fez, antes de explorar las ciudades imperiales de Meknes y Rabat. El viaje concluye con un regreso por la costa a través de Arcila antes de terminar en Tánger.',
                ],
                'fr' => [
                    'title' => 'Grand Circuit du Nord du Maroc – 7 jours',
                    'description' => 'Ce voyage de 7 jours propose une découverte complète du nord et du centre du Maroc, mêlant charme côtier, paysages de montagne et patrimoine impérial. Au départ de Tanger, l\'itinéraire traverse les ruelles bleues de Chefchaouen et les montagnes du Rif jusqu\'à la ville méditerranéenne d\'Al Hoceima. Le voyage se poursuit dans les terres jusqu\'à Fès, la capitale culturelle, avant d\'explorer les villes impériales de Meknès et Rabat. Le circuit se termine par un retour côtier via Asilah avant de revenir à Tanger.',
                ],
                'de' => [
                    'title' => 'Große Nordmarokko-Rundreise – 7 Tage',
                    'description' => 'Diese 7-tägige Reise bietet eine umfassende Entdeckung Nord- und Mittelmarokkos und verbindet Küstencharme, Gebirgslandschaften und imperiales Erbe. Die Route beginnt in Tanger und führt durch die blau getünchten Straßen von Chefchaouen und das Rif-Gebirge in die Mittelmeerstadt Al Hoceima. Die Reise geht weiter ins Landesinnere zur Kulturhauptstadt Fès, bevor die Königsstädte Meknès und Rabat erkundet werden. Die Reise endet mit einer Rückfahrt entlang der Küste über Asilah, bevor sie wieder in Tanger endet.',
                ],
                'it' => [
                    'title' => 'Grande Giro del Nord del Marocco – 7 giorni',
                    'description' => 'Questo viaggio di 7 giorni offre una scoperta completa del nord e del centro del Marocco, unendo il fascino costiero, i paesaggi montani e il patrimonio imperiale. Partendo da Tangeri, il percorso attraversa le strade dipinte di blu di Chefchaouen e le montagne del Rif fino alla città mediterranea di Al Hoceima. L\'itinerario prosegue verso l\'interno fino alla capitale culturale di Fes, prima di esplorare le città imperiali di Meknes e Rabat. Il viaggio si conclude con un rientro lungo la costa via Asilah prima di terminare a Tangeri.',
                ],
                'pt' => [
                    'title' => 'Grande Circuito do Norte de Marrocos – 7 dias',
                    'description' => 'Esta viagem de 7 dias oferece uma descoberta completa do norte e centro de Marrocos, combinando charme costeiro, paisagens montanhosas e herança imperial. Começando em Tânger, a rota passa pelas ruas pintadas de azul de Chefchaouen e pelas montanhas do Rif até a cidade mediterrânica de Al Hoceima. O itinerário continua para o interior até a capital cultural de Fez, antes de explorar as cidades imperiais de Meknes and Rabat. A viagem conclui com um retorno costeiro via Asilah antes de terminar em Tânger.',
                ],
                'ru' => [
                    'title' => 'Большое кольцо по Северному Марокко – 7 дней',
                    'description' => 'Это 7-дневное путешествие предлагает полное знакомство с северной и центральной частями Марокко, сочетая в себе прибрежное очарование, горные пейзажи и имперское наследие. Начинаясь в Танжере, маршрут пролегает через синие улицы Шефшауэна и горы Риф к средиземноморскому городу Эль-Хосейма. Маршрут продолжается вглубь страны к культурной столице Фесу, а затем к имперским городам Мекнес и Рабат. Путешествие завершается возвращением вдоль побережья через Асилу перед прибытием в Танжер.',
                ],
                'nl' => [
                    'title' => 'Grote Noord-Marokko Rondreis – 7 dagen',
                    'description' => 'Deze 7-daagse reis biedt een complete ontdekking van Noord- en Centraal-Marokko en combineert kustcharme, berglandschappen en imperiaal erfgoed. Beginnend in Tanger reist de route door de blauwgekalkte straten van Chefchaouen en het Rifgebergte naar de mediterrane stad Al Hoceima. Het schema gaat landinwaarts naar de culturele hoofdstad Fez, alvorens de koningssteden Meknes en Rabat te verkennen. De reis eindigt met een terugkeer langs de kust via Asilah om weer te eindigen in Tanger.',
                ],
                'zh' => [
                    'title' => '摩尔北部大环线之旅 – 7天',
                    'description' => '这个为期7天的行程提供对摩洛哥北部和中部的全面探索，结合了海岸魅力、山地景观和皇城遗迹。从丹吉尔出发，路线穿过舍夫沙万的蓝色街道和里夫山脉，抵达地中海城市阿尔霍塞马。随后深入内陆前往文化之都菲斯，再探索皇城梅克内斯和拉巴特。行程在经过艾西拉沿海返回丹吉尔后结束。',
                ],
            ],
            'south-morocco-tour-6-days' => [
                'es' => [
                    'title' => 'Tour del Sur de Marruecos – 6 Días',
                    'description' => 'Este viaje de 6 días por el sur de Marruecos ofrece una mezcla perfecta de descubrimiento cultural, paisajes escénicos y relajación. Comenzando en Casablanca, viajará a Marrakech, explorará sus monumentos más emblemáticos, viajará a través de las montañas del Alto Atlas hasta Ait Ben Haddou, declarada por la UNESCO, experimentará la atmósfera del desierto en Zagora con un paseo en camello en las dunas de Tinfou y descubrirá Uarzazat, el "Hollywood de Marruecos".',
                ],
                'fr' => [
                    'title' => 'Circuit du Sud du Maroc – 6 jours',
                    'description' => 'Ce voyage de 6 jours dans le sud du Maroc offre un mélange parfait de découverte culturelle, de paysages pittoresques et de détente. Au départ de Casablanca, vous voyagerez vers Marrakech pour explorer ses monuments emblématiques, traverserez les montagnes du Haut Atlas jusqu\'à Ait Ben Haddou, classé à l\'UNESCO, ferez l\'expérience de l\'atmosphère du désert à Zagora avec une promenade à dos de chameau dans les dunes de Tinfou, et découvrirez Ouarzazate, le "Hollywood du Maroc".',
                ],
                'de' => [
                    'title' => 'Südmarokko-Rundreise – 6 Tage',
                    'description' => 'Diese 6-tägige Reise durch Südmarokko bietet eine perfekte Mischung aus kultureller Entdeckung, malerischen Landschaften und Entspannung. Von Casablanca aus reisen Sie nach Marrakesch, um die berühmten Sehenswürdigkeiten zu erkunden, fahren über das Hohe Atlasgebirge zum UNESCO-Weltkulturerbe Ait Ben Haddou, erleben die Wüstenatmosphäre in Zagora bei einem Kamelritt in den Tinfou-Dünen und entdecken Ouarzazate, das "Hollywood Marokkos".',
                ],
                'it' => [
                    'title' => 'Tour del Sud del Marocco – 6 giorni',
                    'description' => 'Questo viaggio di 6 giorni nel sud del Marocco offre una miscela perfetta di scoperta culturale, paesaggi panoramici e relax. Partendo da Casablanca, viaggerai verso Marrakech, ne esplorerai i monumenti iconici, viaggerai attraverso le montagne dell\'Alto Atlas fino ad Ait Ben Haddou, patrimonio dell\'UNESCO, vivrai l\'atmosfera del deserto a Zagora con un giro in cammello sulle dune di Tinfou e scoprirai Ouarzazate, la "Hollywood del Marocco".',
                ],
                'pt' => [
                    'title' => 'Tour do Sul de Marrocos – 6 dias',
                    'description' => 'Esta viagem de 6 dias pelo sul de Marrocos oferece uma mistura perfeita de descoberta cultural, paisagens pitorescas e relaxamento. Começando em Casablanca, você viajará para Marraquexe, explorará seus marcos icônicos, viajará pelas montanhas do Alto Atlas até Ait Ben Haddou, listada pela UNESCO, experimentará a atmosfera do deserto em Zagora com um passeio de camelo nas dunas de Tinfou e descobrirá Ouarzazate, o "Hollywood de Marrocos".',
                ],
                'ru' => [
                    'title' => 'Тур по Южному Марокко – 6 дней',
                    'description' => 'Это 6-дневное путешествие по южному Марокко предлагает идеальное сочетание культурных открытий, живописных пейзажей и отдыха. Начав в Касабланке, вы отправитесь в Марракеш, исследуете его культовые достопримечательности, совершите путешествие через горы Высокого Атласа к объекту ЮНЕСКО Айт-Бен-Хадду, прочувствуете атмосферу пустыни в Загоре с катанием на верблюдах по дюнам Тинфу и откроете для себя Уарзазат — "Голливуд Марокко".',
                ],
                'nl' => [
                    'title' => 'Zuid-Marokko Rondreis – 6 dagen',
                    'description' => 'Deze 6-daagse reis door Zuid-Marokko biedt een perfecte mix van culturele ontdekking, schilderachtige landschappen en ontspanning. Beginnend in Casablanca reis je naar Marrakech om de iconische bezienswaardigheden te verkennen, steek je het Hoge Atlasgebergte over naar het door UNESCO beschermde Ait Ben Haddou, ervaar je de woestijnsfeer in Zagora met een kamelentocht in de Tinfou-duinen en ontdek je Ouarzazate, het "Hollywood van Marokko".',
                ],
                'zh' => [
                    'title' => '摩尔南部之旅 – 6天',
                    'description' => '这个为期6天的摩洛哥南部之旅完美融合了文化探索、自然风光和休闲放松。行程从卡萨布兰卡开始，前往马拉喀什探寻其标志性地标，翻越高阿特拉斯山脉到达联合国教科文组织列入名录的阿伊特·本·哈杜，在扎哥拉体验沙漠风情并骑骆驼漫步于廷富沙丘，最后探索被称为“摩洛哥好莱坞”的瓦尔扎扎特。',
                ],
            ],
        ];

        foreach ($tours as $tour) {
            // Merge per-locale translations: cache takes priority, lang/*.json as fallback
            $mergedTranslations = [];
            foreach ($locales as $locale) {
                $mergedTranslations[$locale] = array_merge(
                    $translations[$locale] ?? [],
                    $this->buildLocaleMap($translationsCache, $locale)
                );
            }

            // Apply standard translations
            foreach ($locales as $locale) {
                $this->translateField($tour, 'title', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'description', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'duration', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'nights', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'starting_point', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'arrival_city', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'accommodation', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'guide', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'trip_type', $locale, $mergedTranslations[$locale]);
                $this->translateField($tour, 'difficulty', $locale, $mergedTranslations[$locale]);
                $this->translateCommaSeparated($tour, 'languages', $locale, $mergedTranslations[$locale]);
                $this->translateArrayOfObjects($tour, 'itinerary', $locale, $mergedTranslations[$locale], ['day', 'title', 'description']);
                $this->translateArrayOfStrings($tour, 'included', $locale, $mergedTranslations[$locale]);
                $this->translateArrayOfStrings($tour, 'excluded', $locale, $mergedTranslations[$locale]);
            }

            // Apply manual overrides (curated professional translations) for key tours
            if (isset($overrides[$tour->id])) {
                foreach ($overrides[$tour->id] as $locale => $localeData) {
                    if (isset($localeData['title'])) {
                        $tour->setTranslation('title', $locale, $localeData['title']);
                    }
                    if (isset($localeData['description'])) {
                        $tour->setTranslation('description', $locale, $localeData['description']);
                    }
                }
            }

            $tour->save();
        }
    }

    /**
     * Build a flat locale => translation map from the full cache structure.
     *
     * @param  array<string, array<string, string>>  $cache
     * @return array<string, string>
     */
    private function buildLocaleMap(array $cache, string $locale): array
    {
        $map = [];
        foreach ($cache as $en => $localeData) {
            if (isset($localeData[$locale])) {
                $map[$en] = $localeData[$locale];
            }
        }

        return $map;
    }

    private function translateField(Tour $tour, string $field, string $locale, array $translations): void
    {
        $currentValue = $tour->getRawOriginal($field);

        if (! $currentValue) {
            return;
        }

        // If it's already JSON, get the 'en' translation
        if (str_starts_with($currentValue, '{') || str_starts_with($currentValue, '[')) {
            $decoded = json_decode($currentValue, true);
            if (is_array($decoded) && isset($decoded['en'])) {
                $englishValue = $decoded['en'];
            } else {
                return;
            }
        } else {
            $englishValue = $currentValue;
            $tour->setTranslation($field, 'en', $englishValue);
        }

        if (is_string($englishValue) && isset($translations[$englishValue])) {
            $tour->setTranslation($field, $locale, $translations[$englishValue]);
        }
    }

    private function translateArrayOfStrings(Tour $tour, string $field, string $locale, array $translations): void
    {
        $englishArray = $tour->getTranslation($field, 'en', false);

        if (! is_array($englishArray)) {
            return;
        }

        $translatedArray = [];
        foreach ($englishArray as $item) {
            $translatedArray[] = $translations[$item] ?? $item;
        }

        $tour->setTranslation($field, $locale, $translatedArray);
    }

    private function translateArrayOfObjects(Tour $tour, string $field, string $locale, array $translations, array $keysToTranslate): void
    {
        $englishArray = $tour->getTranslation($field, 'en', false);

        if (! is_array($englishArray)) {
            return;
        }

        $translatedArray = [];
        foreach ($englishArray as $item) {
            if (is_array($item)) {
                $translatedItem = $item;
                foreach ($keysToTranslate as $key) {
                    if (isset($item[$key]) && is_string($item[$key]) && isset($translations[$item[$key]])) {
                        $translatedItem[$key] = $translations[$item[$key]];
                    }
                }
                $translatedArray[] = $translatedItem;
            } else {
                $translatedArray[] = $item;
            }
        }

        $tour->setTranslation($field, $locale, $translatedArray);
    }

    private function translateCommaSeparated(Tour $tour, string $field, string $locale, array $translations): void
    {
        $englishString = $tour->getTranslation($field, 'en', false);

        if (! is_string($englishString)) {
            return;
        }

        $items = array_map('trim', explode(',', $englishString));
        $translatedItems = [];
        foreach ($items as $item) {
            $translatedItems[] = $translations[$item] ?? $item;
        }

        $tour->setTranslation($field, $locale, implode(', ', $translatedItems));
    }
}
