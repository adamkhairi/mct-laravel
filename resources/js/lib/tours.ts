export interface Tour {
    id: string;
    title: string;
    duration: string;
    nights: string;
    startingPoint: string;
    description: string;
    url?: string;
    image?: string;
    accommodation?: string;
    arrivalCity?: string;
    guide?: string;
    tripType?: string;
    difficulty?: string;
    languages?: string;
    itinerary?: { day: string; title: string; description: string }[];
    included?: string[];
    excluded?: string[];
}

export const tours: Tour[] = [
    {
        id: 'imperial-cities-tour-from-casablanca',
        title: 'Imperial Cities Tour From Casablanca',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Casablanca',
        description:
            'This 8-day imperial cities tour begins in Casablanca, visiting the impressive Hassan II Mosque, then heads to Tangier for its seaside charm and historic medina. From there, journey to the...',
        url: 'https://mct-tours.com/trip/imperial-cities-tour-from-casablanca/',
        accommodation: 'Hotels',
        arrivalCity: 'Casablanca',
        guide: 'Local guide ( Tangier, Fez, Volubilis, Marrakech)',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/kjsdmsdsf.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca',
                description:
                    "Arrival at Casablanca, then start a leisurely day with the city tour including Hassan II Mosque distinguished by its Moorish architecture and it's really the highlight of the city of Casablanca. Stop next Mohamed the V Square. Visit the Habous quarter with its Andalusian architectural style.\nAccommodation: Casablanca - Hotel\nIncluded Activities: Casablanca - Visit Hassan II Mosque (from the outside). Casablanca - Mohammed V Square\nIncluded Meals: Dinner",
            },
            {
                day: 'Day 2',
                title: 'Casablanca - Tangier',
                description:
                    'After breakfast drive to Tangier, the gate of the north of Morocco to Europe, upon arrival, visit the Cap Spartel have a nice view on Spain coastlines. Cap Spartel is the meeting point between Atlantic Ocean and Mediterranean Sea, stop for a short time to take some pictures of the light house. Stop for lunch in the city of Tangier then, discover the medina of Tangier at the beginning visit the Kasbah Museum founded in the seventh century by the sultan Moulay Ismael. The palace is converted later to a museum which enclose the exhibition of the different items like wood, Roman Mosaics, jewellery.\nIncluded Activities: Tangier – Cap Spartel, Tangier - Kasbah Museum\nIncluded Meals: Breakfast at hotel, Dinner at hotel',
            },
            {
                day: 'Day 3',
                title: 'Tangier – Chefchaouen – Fes',
                description:
                    'After breakfast Drive to Chefchaouen crossing a part of the Rif Mountains with its rich flora including pin trees, cork trees. Chaouen is a picturesque hillside town built by refugees from Andalusia as a haven from the invading Christians. Chefchaouen, with its Spanish character is very attractive, pass through the whitewashed houses, with tiny balconies, blue-painted doors all these kinds of houses are located in different alleyways of the medina. Stop to visit the Kasbah, located in heart of the town, founded in the XVII century it called Outa Hammam. After lunch depart to Fes.\nIncluded Activities: Chefchaouen – visit of the Kasbah, The old medina with its unfinished alleyways\nIncluded Meals: Breakfast, Dinner at a hotel in Fes',
            },
            {
                day: 'Day 4',
                title: 'Fès City Tour',
                description:
                    "Breakfast at your hotel then set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Fez was the first Imperial City, founded in the 9th century. Among the sites you will see the impressive medina with its different gates, Mosques, tanneries, Attarine Medersa, Nejjarine Fountain and its Fondouk, the latter is housing a museum devoted to wood crafts in a beautifully restored 18th century building. After lunch in a typical Moroccan restaurant in the Medina, continue the city tour including the potter quarter the King's palace (from outside) and Bab Boujloud.\nIncluded Activities: Fez – visit of the Karaoiuyine Mosque, Fez - Visit of El-Attarine Medersa, Fez - visit of Fondouk El-Nejjarine, Fez - visit of the King's Palace (from outside) and Bab Boujloud.\nIncluded Meals: Fes - Breakfast at hotel, Fes - Dinner at hotel",
            },
            {
                day: 'Day 5',
                title: 'Fes – Volubilis – Meknes – Rabat',
                description:
                    "After breakfast, drive to the Roman city founded by King Juba II. Volubilis is well known for its beautifully preserved mosaics. Spend your time admiring this Roman site, which has been declared a UNESCO World Heritage Site. Under Roman power, it became one of the granaries of the Empire and grew to 20,000 inhabitants. After the tour, drive to the city of Meknes and stop for lunch. Meknes is a 17th-century city whose medina has been classified by UNESCO as a World Heritage Site since 1994. The city tour includes Moulay Ismail's Mausoleum, and the majestic Bab Mansour. After lunch, drive to the city of Rabat.\nIncluded Activities: Visit of Volubilis, Meknes – visit of the Tomb of Moulay Ismail, Meknes – visit of the gate of Bab Mansour\nIncluded Meals: Breakfast, Dinner at Hotel",
            },
            {
                day: 'Day 6',
                title: 'Rabat – Casablanca – Marrakech',
                description:
                    'After breakfast, start the city tour of Rabat, the capital of the country, including the Royal Palace from the outside, Mohammed V Mausoleum, Hassan Tower. Drive to Casablanca stop for lunch. After lunch drive to Marrakech crossing very vast plateau, like the fertile Chawia lands and the desertic Rhamna ones.\nIncluded Activities: Rabat - Visit of the Royal Palace (from outside), Rabat – visit of Mohammed V Mausoleum, Rabat – visit of the Hassan Tower\nIncluded Meals: Breakfast, Dinner at Hotel',
            },
            {
                day: 'Day 7',
                title: 'Marrakech City Tour',
                description:
                    'After a leisurely breakfast, begin your tour of the Red Pearl of Morocco. Among the sites are the Koutoubia Mosque, Medrassa Ben Youssef. Stop for lunch, and then learn about Moroccan crafts from workers at a craft co-operative inside the medina. After lunch at a typical restaurant, have a tour inside the souk (market) beginning and ending at Jamaa El Fna Square, a World Heritage Site. Here you will see a medieval scene, complete with jugglers, fortune tellers, snake charmers, dancers, herbalists, food and juice vendors.\nIncluded Activities: Marrakech - Koutoubia Mosque, Marrakech - Medersa Ben Youssef, Walking Tour inside the markets (souks), Marrakech - Djemma el Fna square\nIncluded Meals: Breakfast, Dinner at Hotel',
            },
            {
                day: 'Day 8',
                title: 'Departure',
                description:
                    'After check-out in your hotel, you will be transported to the airport for your return flight home. This concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals (Breakfast, Dinners)',
        ],
        excluded: ['Any personal costs', 'Drinks and Lunches'],
    },
    {
        id: 'spiritual-tour',
        title: 'Spiritual Tour',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Casablanca',
        description:
            "This journey designed to deepen one's spiritual experience. Morocco is famous of tolerant Islam since the creation the first Arab Dynasty (from Idrissi since today), many Suffi Scholars joined the...",
        url: 'https://mct-tours.com/trip/spiritual-tour/',
        accommodation: 'Hotels',
        arrivalCity: 'Casablanca',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/DJI_0126-1-990x490.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca',
                description:
                    "Arrival at Casablanca, then start a leisurely day with the city tour including Hassan II Mosque distinguished by its Moorish architecture, it's the highlight of the city of Casablanca, pray a Salat in the Mosque and continue the visit of Casablanca if time allows (Mohamed the V Square and the Habous quarter with its Andalusian architectural style). Dinner and overnight at Hotel.",
            },
            {
                day: 'Day 2',
                title: 'Casablanca – Rabat – Tangier',
                description:
                    'Drive to Rabat the capital of Morocco, for a city tour including the Royal Palace (from the outside), the residence of the King Mohammed VI, Mausoleum of Mohammed V and Hassan tower. After Duhr Prayer at Rabat in Sunnah Mosque, have lunch at a local restaurant then head to Tangier. Upon arrival visit the Cap Spartel and see where the Atlantic sea meets the Mediterranean sea, discover Hercules Cave and finish at Salat Ishae at Mohammed V Mosque then check in Hotel.',
            },
            {
                day: 'Day 3',
                title: 'Tangier – Tetouan – Chefchaouen',
                description:
                    'Early morning start the city tour of Tangier stop next 9th April square, pass near the Mendoubia. Visit Kasbah Quarter, enclosing the Kasbah Museum, cross different quarters leading to the Grand Socco, petit Socco and surrounding souks. Pray Duhr Salat at Tangier and have lunch then depart towards the blue city of Chefchaouen via Tetouan. Discover the white medina of Tetouan, known as "the daughter of Granada", visit the Guersa Kebira square, one of the bustling souks, then visit the Medina. After the visit of Tetouan proceed to the blue town of Chefchaouen, built in 1471 by Moorish exiles from Spain. Pray Almaghreb or Ishae Salat then check in at the hotel for the overnight with dinner.',
            },
            {
                day: 'Day 4',
                title: 'Chefchaouen – Moulay Idriss – Fez',
                description:
                    'After breakfast you can walk through the small medina and discover its small souks. After the visit travel to Fez via Ouazzan where you will have lunch. After a couple of hours drive, you will get to Moulay Idriss, visit the citadel of Moulay Idriss, founded in the 8th century by Moulay Idriss Al Akbar, grandson of the Prophet. This citadel is considered the cradle of Sufism to Moroccan society and the first Islamic Dynasty in Morocco, then travel to Fez.',
            },
            {
                day: 'Day 5',
                title: 'Fez City Tour',
                description:
                    "After breakfast, set out for a city tour of Fez, the spiritual and intellectual capital of Morocco. Visit the Al Quaraouiyine Mosque and University, one of the world's oldest universities. Explore the medina including the Tanneries, Attarine Medersa, Nejjarine Fountain, and traditional artisan workshops. Pray at the various mosques encountered along the journey.",
            },
            {
                day: 'Day 6',
                title: 'Fez – Ifrane – Marrakech',
                description:
                    'After breakfast, drive towards Marrakech with a stop in Ifrane, an alpine city known for its beautiful park and ski resort. Continue through the scenic Middle Atlas Mountains before arriving in Marrakech for dinner and overnight.',
            },
            {
                day: 'Day 7',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, begin a city tour of the Red Pearl of Morocco. Visit the Koutoubia Mosque, the Saadian Tombs, Bahia Palace, and Ben Youssef Madrasa. Explore the colorful souks inside the medina before heading to Jemaa el-Fnaa Square, a UNESCO World Heritage Site. Pray at the various mosques encountered along the journey.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech – Merzouga',
                description:
                    'After breakfast, depart toward the Sahara Desert through the High Atlas Mountains, passing through Ouarzazate and the Road of a Thousand Kasbahs. Arrive at Merzouga, home to the spectacular Erg Chebbi dunes. Enjoy sunset prayers on the dunes. Overnight at the desert camp.',
            },
            {
                day: 'Day 9',
                title: 'Merzouga – Fez',
                description:
                    'Early morning sunrise prayers on the dunes. After breakfast, journey back through the Middle Atlas Mountains toward Fes, stopping for prayers along the way.',
            },
            {
                day: 'Day 10',
                title: 'Departure',
                description:
                    'After breakfast, transfer to the airport for your return flight home. This concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals (Breakfast, Dinners)',
        ],
        excluded: ['Any personal costs', 'Drinks and Lunches'],
    },
    {
        id: 'moorish-heritage-and-desert',
        title: 'Moorish Heritage and Desert',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Tangier',
        description:
            "Embark on an unforgettable journey through Morocco's rich history and stunning landscapes. This tour combines the exploration of ancient Moorish cities with the thrill of a desert adventure.",
        url: 'https://mct-tours.com/trip/moorish-heritage-and-desert/',
        accommodation: 'Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/moorish-heritage.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier – Chefchaouen',
                description:
                    'Morning arrival at Tangier, start a leisurely day with a tour including the Cap Spartel to have a nice view on Spain coastlines. Cap Spartel is the meeting point between Atlantic ocean and Mediterranean sea, after a short stop visit the Hercules Caves. Drive to discover the medina of Tangier, visit the Kasbah museum founded in the seventh century by the sultan Moulay Ismael. Drive to Chefchaouen crossing a part of the Rif mountains. Upon arrival stop for lunch. Chaouen is a picturesque hillside town built by refugees from Andalusia as a haven from the invading Christians. Chefchaouen, with its Spanish character, whitewashed houses, tiny balconies, blue-painted doors and its different alleyways is a lovely place to stroll. Stop to visit the Kasbah located in heart of the town founded in the XVII century. Dinner and overnight in Chaouen.',
            },
            {
                day: 'Day 2',
                title: 'Chefchaouen – Volubilis – Fes',
                description:
                    "After breakfast drive to Fez, crossing the major part of the Rif mountains. On the way stop to Volubilis. The site of the most impressive Roman site in Morocco. Under the Romans, it became one of the granaries of the Roman Empire and grew to 20,000 inhabitants. It exported olives and wheat to Rome as well as the lions used at the gladiator's games in the Colosseum. Stop for lunch in Volubilis and then drive to Fes. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 3',
                title: 'Fez City Tour',
                description:
                    "Breakfast at your hotel then set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Fez was the first Imperial City, founded in the 9th century. Among the sites you will see the impressive medina with its different gates, Mosques, tanneries, Attarine Medersa, Nejjarine Fountain and its Fondouk, the latter is housing a museum devoted to wood crafts in a beautifully restored 18th century building. Lunch in a typical Moroccan restaurant in the Medina. After lunch visit the Mellah or Jewish Quarter, the King's palace (from outside) and Bab Boujloud. Dinner and overnight at your hotel in Fez.",
            },
            {
                day: 'Day 4',
                title: 'Fez – Erfoud – Merzouga',
                description:
                    'Arise early for the drive to Erfoud with a stop in Ifrane, an alpine city known for its beautiful park and its famous ski resort. Continue your drive to Midelt, a town located between the Middle Atlas and High Atlas Mountains. Stop for lunch. After lunch start to cross the beautiful fertile valleys of Ziz and Tafilalet. Stop in Erfoud, visit a marble center where 500 million year old fossils are extracted, polished and exported around the globe. Drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes, the highest in Africa and one of the filming sites for Lawrence of Arabia. Take an optional camel trek to watch the sun set behind the Sahara dunes. Camp overnight in a nomad tent, furnished inside with a comfortable clean cot, fresh linens and blankets set on colorful Moroccan carpets.',
            },
            {
                day: 'Day 5',
                title: 'Erfoud – Todra – Ouarzazate',
                description:
                    'After breakfast, travel through the spectacular Dades Valley and Todra Gorge, known as the "Valley of a Thousand Kasbahs." Enjoy dramatic landscapes, palm groves, and traditional irrigation systems. The Todra Gorge offers one of Morocco\'s most impressive natural canyons with sheer cliffs rising dramatically on each side. Continue to Ouarzazate for dinner and overnight.',
            },
            {
                day: 'Day 6',
                title: 'Ouarzazate – Marrakech',
                description:
                    'After breakfast, visit the famous Ait Benhaddou Kasbah, a UNESCO World Heritage Site and filming location for many international movies such as Gladiator and Lawrence of Arabia. Continue through the High Atlas Mountains, with a stop for tea with a local Berber family. Arrive in Marrakech for dinner and overnight.',
            },
            {
                day: 'Day 7',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, explore Marrakech, the "Red Pearl of Morocco." Visit the Koutoubia Mosque (exterior), Saadian Tombs, Bahia Palace, and Ben Youssef Madrasa. Continue to the souks of the medina, where traditional crafts are still practiced. End the day at Jemaa el-Fnaa Square, a UNESCO World Heritage Site filled with storytellers, musicians, snake charmers, dancers, herbalists, food stalls. Dinner in a traditional restaurant and overnight in Marrakech.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech – Essaouira',
                description:
                    'After breakfast, drive to the coastal city of Essaouira. En route, visit an Argan oil cooperative. Upon arrival, explore the UNESCO-listed medina, Skala fortress, artisan shops, and the Atlantic coastline. Enjoy fresh seafood for lunch and free time in the relaxed seaside atmosphere. Dinner and overnight in Essaouira.',
            },
            {
                day: 'Day 9',
                title: 'Essaouira – Safi – El Jadida – Casablanca',
                description:
                    'Depart towards Casablanca along the Atlantic coast. Stop in Safi, a traditional fishing port with Portuguese heritage, then continue to Oualidia for lunch. Proceed to El Jadida, a former Portuguese stronghold known for its historic cistern and fortified walls. Continue to Casablanca for dinner and overnight.',
            },
            {
                day: 'Day 10',
                title: 'Casablanca – Rabat – Tangier',
                description:
                    "After breakfast, visit Casablanca, including the Hassan II Mosque and Mohammed V Square. Continue to Rabat, Morocco's capital, for lunch and a guided tour of the Royal Palace (exterior), Mohammed V Mausoleum, Hassan Tower, and the Chellah Necropolis. In the afternoon, drive back to Tangier crossing the fertile Gharb plains. Dinner and overnight in Tangier.",
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals (Breakfast, Dinners)',
        ],
        excluded: ['Any personal costs', 'Drinks and Lunches'],
    },
    {
        id: 'toubkal-ascent-and-berber-villages',
        title: 'TOUBKAL ASCENT AND BERBER VILLAGES',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Marrakech',
        description:
            'This 8-day adventure combines the challenge of ascending Mount Toubkal with the cultural immersion of exploring Berber villages. Trek through stunning mountain landscapes, witness traditional Berber life, and enjoy breathtaking...',
        url: 'https://mct-tours.com/trip/toubkal-ascent-and-berber-villages/',
        accommodation: 'Hotels',
        tripType: 'Long-tours',
        difficulty: 'Medium',
        arrivalCity: 'Marrakech',
        guide: 'From day 01 to day 08',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/457149812_930908055739944_2152329296083154882_n.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Marrakech',
                description:
                    'Arrival at Marrakech airport where you will meet an MCT representative and your High Atlas Mountain trekking guide for your briefing of the trekking tour. Dinner and overnight at your hotel in Marrakech.',
            },
            {
                day: 'Day 2',
                title: 'Marrakech - Imlil- Imenane Valley',
                description:
                    'After breakfast we depart for Imlil, a 1 1/2 hour drive into the foothills of the western High Atlas Mountains. As the road begins to climb, the beauty of the valley, river and small villages is more like a painting. Imlil, a beautiful mountain village surrounded by walnut and fruit trees is the starting point for the climb up Mount Toubkal (4167m), the highest peak in North Africa.  The air in Imlil is crisp and clear as the town stands at an altitude of 1740 meters. We meet our muleteers and cook and then load up the mules for our journey.  We set out along the trail going upstream to the river of Imenane passing through groves of almond trees of the Assif Imenane Valley.  Overnight in our tented camp in the unique terraced village of Arg (1500m) a 2 hour trek.',
            },
            {
                day: 'Day 3',
                title: 'Imenane Valley - Tacheddirt',
                description:
                    'After breakfast we set out along the trail to Tacheddirt. Along the way we pass streams, fields of wheat, walnut, apple and cherry trees.  We see the many Berber villages set amongst terraced plots on the hillside including Amskere (1707m), Ikkiss (1740m), Tamguist and finally Tacheddirt. Tacheddirt, a pretty village set amid the mountains is an example of a well maintained balance of humans and nature with its stony homes perched on the hillsides and its terraced irrigated plots. Overnight in our tented camp in the village of Tacheddirt (2314m) a 5 hour trek.',
            },
            {
                day: 'Day 4',
                title: 'Tacheddirt - Aremd',
                description:
                    'After breakfast we set out along the trail to Aremd. We cross through the Imenane Valley with its many Berber villages tucked precariously on the slopes. We cross the Tamatert Pass (2279m) where we stop to admire the Imlil and Imenane Valleys.  As we make our descent to the village of Aremd we take in the views of the magnificent Mount Toubkal. Aremd, built on a peculiar geographical phenomenon called a rock glacier is a striking village of terraced homes built one on top of the other overlooking ancient irrigated terraced fields of fruit trees and vegetables.  Overnight in a gite accommodation including a shower in the village of  Aremd (1900m) a 4 hour trek.',
            },
            {
                day: 'Day 5',
                title: 'Aremd - Mouflon Refuge',
                description:
                    'After breakfast we make our ascent following a steep zigzag path up the right hand side of the valley with the bulk of Toubkal on our left. As the path levels out we see the Mouflon Refuge (3200m) in the distance tucked well below the pass. Overnight in our tented camp near the refuge.  A 6 ½ hour trek.',
            },
            {
                day: 'Day 6',
                title: 'Toubkal Summit - Mouflon Refuge',
                description:
                    'We wake early for our ascent of Toubkal. As we cross a small river gorge of the Ait Mizane we find the first of the boulder slopes as we take in the beautiful sunrise. We hike up a steep scree slope to the summit (4167m). There we find a large iron structure and weather permitting excellent views.  The best view is to the south with its layered Saharan Plateau broken by the extinct volcano Siroua. We return to our camp near the refuge for the night, a 7 hour trek.',
            },
            {
                day: 'Day 7',
                title: 'Mouflon Refuge - Sidi Chamharouch - Imlil - Marrakech',
                description:
                    'After breakfast we set off towards the north along steeply descending, zigzagging trails of the higher slopes of the Valley of Assif n’Isougouane towards the Berber village of Sidi Chamharouch (3106m) set beside a waterfall and small stream.  Sacred to the Berbers and many people who make pilgrimages here there is a shrine where the locals hang strips of cloth and pile up stones. We continue to Imlil where we finish our trek in the High Atlas Mountains. A  6 hour trek. We say goodbye to our cook, muleteers and mules. From Imlil you pick up your transport to return to Marrakech for dinner and overnight in your hotel.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech',
                description:
                    'After breakfast you will be transported to the Marrakech airport for your return flight home. From here you say goodbye to your mountain guide. This concludes the services ofMoroccan Club Travel.',
            },
        ],
        included: [
            'Cook',
            'Breakfast',
            'Picnic lunch',
            'Dinner',
            'Tents',
            'Experienced licensed bi-lingual mountain guide',
            'Mules and muleteers',
            'Private round trip transportation from & to Marrakech',
        ],
        excluded: [
            'Tips for the guide, cook and muleteers',
            'Medical or accident insurance outside of the vehicle',
            'Drinks',
        ],
    },
    {
        id: 'the-grand-morocco-tour-13-days',
        title: 'The grand Morocco tour 13 days',
        duration: '13 Days',
        nights: '12 Nights',
        startingPoint: 'Casablanca',
        description:
            "Morocco's history begins in Neolithic times with the first traces of human inhabitants dated from 12,000 B.C. Due to its strategic location, it was occupied by a series of invaders...",
        url: 'https://mct-tours.com/trip/the-grand-morocco-tour-13-days/',
        accommodation: 'Hotels',
        arrivalCity: 'Casablanca',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        guide: 'local guides (Tangier, Volubilis, Fes,Marrakech)',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/WhatsApp-Image-2023-01-27-a-15.32.00.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca',
                description:
                    'Arrival at Casablanca, then start a leisurely day with the city tour including Hassan II Mosque (from outside) distinguished by its Moorish architecture and it’s really the highlight of the city of Casablanca after vist Mohamed V Square and the Habous quarter with its Andalusian architectural style.\nAccommodation\n•\tCasablanca- Hotel\nIncluded Activities\n•\tCasablanca -Visit Hassan II Mosque (from the outside).\n•\tCasablanca – Visit Mohammed V Square\n•\tCasablanca – Visit Habous quarter\nIncluded Meals\n•\tDinner',
            },
            {
                day: 'Day 2',
                title: 'Casablanca - Rabat',
                description:
                    'Drive to Rabat, the capital of Morocco for a city tour including the Royal Palace, (from the outside) the residence of the King Mohammed VI, Mausoleum of Mohammed V and Hassan tower. Stop for lunch at a local restaurant in Rabat. After lunch. Free at leisure.\nAccommodation• Rabat - HotelIncluded Activities• Rabat-Visit the Royal Palace (from the outside).• Rabat- Visit Mausoleum of Mohammed V• Rabat- Visit Mausoleum of Mohammed V• Rabat- Visit Hassan towerIncluded Meals• Breakfast at hotel• Dinner at Hotel',
            },
            {
                day: 'Day 3',
                title: 'Rabat – Ouazzane - Chefchaouen',
                description:
                    'After breakfast drive to Chefchaouen, arrive at Ouazzane and stop for lunch, after Lunch continue to Chefchaouen. Upon arrival start the city tour by foot finish at hotel.\nAccommodation• Chefchaouen – Riad or HotelIncluded Activities• Chefchaouen -Visit city of Chefchaouen\nIncluded Meals• Breakfast at hotel• Dinner at Hotel',
            },
            {
                day: 'Day 4',
                title: 'Chaouen -Tetouan- Tangier – Chaouen',
                description:
                    'Breakfast at your hotel, and then continue to Tetouan, a city that built by the Moors fleeing from Spain was once the capital of the country’s Spanish zone. The town’s Andalusian heritage can be seen in its medina, its culinary traditions, architecture, music and embroidery. Declared a World Heritage Site by UNESCO, the old souk (market) presents many opportunities for buying well-made hand crafts and other items. After the visit of Tetouan drive to Tangier. Upon arrival stop at the Cap spartel then drive to the old city for lunch, after lunch visit the Kasbah Quarter, Kasbah Museum, the Grand Socco, Petit Socco and surrounding souks. Enjoy the night life of lively Tangier, the port-of-call for many cruise liners.Check in hotel\nAccommodation• Tangier - HotelIncluded Activities• Tetouan- short visit of the city• Tangier – Cap spartel• Tangier- Kasbah Quarter, Kasbah Museum, Grand Socco, Petit SoccoMeals Included• Breakfast at hotel• Lunch at a Local Restaurant in Tangier• Dinner at hotel',
            },
            {
                day: 'Day 5',
                title: 'Chaouen – Volubilis – Meknes - Fez',
                description:
                    'After breakfast, early check out from hotel, drive to Fez by crossing the major part of the Rif mountains. On the way stop to Volubilis. The site of the most impressive Romansite in Morocco. Under the Romans, it became one of the granaries of the Roman Empire and grew to 20,000 inhabitants. It exported olives and wheat to Rome as well as the lions used at the gladiator’s games in the Colosseum.After the tour, drive to the city of Meknes and stop for lunch. Meknes is a 17th-century city whose medina has been classified by UNESCO as a World Heritage Site since 1994. The city tour includes the Tomb of Moulay Ismail, place el Hedim, and the majestic Bab Mansour. Then drive to FesAccommodation• Fes - HotelIncluded Activities• Visit of Volubilis• Meknes – visit place el Hedim,• Meknes – visit of the Tomb of Moulay Ismail,• Meknes – visit of the gate of Bab MansourIncluded Meals• Breakfast• Dinner at Hotel',
            },
            {
                day: 'Day 6',
                title: 'Fez city tour',
                description:
                    'Breakfast at your hotel then set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Fez was the first Imperial City, founded in the 9th century. Among the sites you will visit the impressive medina with its different gates, Mosques, tanneries, Karaoiuyine Mosque, Attarine Medersa, Nejjarine Fountain and its Fondouk, the latter is housing a museum devoted to wood crafts in a beautifully restored 18th century building. Stop for lunch visit the potter quarter to see the process of making mosaics, stop next the King&#039;s palace (from outside) and Bab Boujloud.\nAccommodation• Fes - HotelIncluded Activities• Fez – visit of the Karaoiuyine Mosque.• Visit of El-Attarine Medersa .• The potter quarters• Visit of the blue gate• Fez - visit of the King&#039;s Palace (from outside) and Bab Boujeloud.• Fez – visit of the Medina with a walking tourMeals Included• Breakfast• Dinner at Hotel',
            },
            {
                day: 'Day 7',
                title: 'Fez – Ifrane – Midelt – Errachidia- Merzouga',
                description:
                    'After breakfast drive to Erfoud with a stop in Ifrane, an alpine city known for its beautiful park and its famous ski resort. Continue your drive to Midelt, a town located between the Middle Atlas and High Atlas Mountains and stop for lunch.After lunch drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes is the highest in Africa and one of the filming sites for Lawrence of Arabia. Arrive at hotel and check in , (take an optional camel trek to watch the sun set behind the Sahara dunes)Arrive to Merzouga and check in hotelAccommodation• Hotel at MerzougaIncluded Activities• Ifrane- Short stop• Midelt – Short stop• Errachidia - Short stop• Merzouga – Enjoy sunset &amp; sunrise on the dunesIncluded Meals\n• Breakfast at hotel• Dinner at hotel at Merzouga',
            },
            {
                day: 'Day 8',
                title: 'Merzouga – Todgha - Tinghir - Ouarzazate – Ait Ben Haddou',
                description:
                    'After breakfast, drive to Todra Gorge, passing through the old town of Tinerhir with Sheer cliffs rise up dramatically on each side of the narrow corridor that forms the Todgha Gorge, Mountain goats and eagles are sometimes seen on the high cliffs. Todgha Gorges provide some of the best seasonal bird watching sites in Morocco, with many types of larks, sand grouse, buzzards, falcon, warblers, finches, and others in seasonal period of the year. After lunch drive to Ait Ben Haddou via Ouarzazate. Ouarzazate, the Hollywood city of Morocco … Ouarzazate is the base for film studios where many famous films were made, such as, Gladiator, the Four Feathers, Romancing the Stone, Cleopatra, the Sheltering Sky, Jewel of the Nile and Lawrence of Arabia… visit the Kasbah Tifoultoute and continue driving to Ait Ben Haddou. Arrive and check in HotelAccommodation• Ait Ben Haddou or Ouarzazate - Hotel or RiadIncluded Activities• Todra Gorges – Short break• Enjoy the Dades Valley• Kalaat Megouna- short stop• Ouarzazate - visit the Kasbah TifoultouteIncluded Meals• Breakfast at Hotel• Dinner at Hotel',
            },
            {
                day: 'Day 9',
                title: 'Ait Ben Haddou - Marrakech',
                description:
                    'After breakfast, visit the Kasbah of Ait Benhaddou, an exceptionally well-preserved site which was declared a World Heritage Site by UNESCO in 1987. Stop for lunch in Tichka then Continue driving to Marrakech crossing amazing landscapes of the high Atlas Mountains.Arrive at Marrakech and free time at leisure. check in your hotelAccommodation• Hotel at MarrakechIncluded Activities\n• Visit of Kasbah Ait Ben Haddou• Free time at Marrakech on the arrivalIncluded Meals• Breakfast at hotel• Dinner at hotel',
            },
            {
                day: 'Day 10',
                title: 'Marrakech',
                description:
                    'After a leisurely breakfast, meet your guide and begin your tour of the Red Pearl of Morocco. Among the sites are the Koutoubia Mosque, Medrassa Ben Youssef, and Dar El Bacha, stop for lunch at a typical restaurant, and then learn about Moroccan crafts from workers at a craft co-operative inside the medina. Later, have a tour inside the souk (market) beginning and ending at Jamaa El Fna Square, a World Heritage Site. Here you will see a medieval scene, complete with jugglers, fortune tellers, snake charmers, dancers, herbalists, food and juice vendors. Experience all of the sights, sounds, smells, tastes and contrasts of this exotic place. Back to hotel for a break, then have an optional dinner at a local restaurant with Fantasia show.Accommodation• Hotel at MarrakechIncluded Activities• Marrakech - craft co-operative• Marrakech- Koutoubia Mosque• Marrakech- Medrassa Ben Youssef• Marrakech- Dar El Bacha• Marrakech – Walking Tour inside the medina• Marrakech - Djemma el Fna squareIncluded Meals• Breakfast at hotel',
            },
            {
                day: 'Day 11',
                title: 'Marrakech – Essaouira',
                description:
                    'Enjoy a leisurely breakfast, and then drive west to the picturesque coastal town of Essaouira located on the Atlantic Ocean. Overlooking a scattering of wave-ravaged offshore islands, it offers a sandy beach stretching for miles to the south, while richly forested hills extend to the east. Ancient and narrow alleys wind through the medina and among the souks, a World Heritage Site. Artists, fishermen, farmers, craftsman all live peacefully in this enchanted coastal town. On the way we stop at an Argan Oil cooperative. Enjoy a fresh seafood lunch in Essaouira and after we visit the Skala and stroll through the medina. Dinner and overnight at your hotel in Essaouira.\nAccommodation• Hotel or Riad at EssaouiraIncluded Activities• Essaouira - craft co-operative• Essaouira – Skala – Stroll - Medina\nIncluded Meals• Breakfast at hotel• Dinner at Hotel',
            },
            {
                day: 'Day 12',
                title: 'Essaouira – Safi - El Jadida – Casablanca',
                description:
                    'Enjoy a leisurely breakfast and depart for Casablanca, crossing the different fertile plateau of Doukkala and Abda. On the way, stop in Safi, a fishing city where the Portuguese influence is seen in the ruins of the Ksar El Bahr fortress. Stop for lunch in El Jadida, after lunch visit the main Portuguese port in North Africa, and the center of all Portuguese operations in the Atlantic Ocean. Mazagan, as it was called by the Portuguese, was under their control until the 19th century when Morocco re-conquered and renamed it El Jadida. The influence of the Portuguese remains, especially in a cistern which could hold enough water for 5,000 people for two months. Dinner and overnight at your hotel in Casablanca.\nAccommodation• Hotel at CasablancaIncluded Activities• Safi – short stop• El Jadida – visit the skala\nIncluded Meals• Breakfast at hotel• Dinner at Hotel',
            },
            {
                day: 'Day 13',
                title: 'Departure',
                description:
                    'After check out, you will be transported to the airport for your return flight home. \r\n\r\nThis concludes the services of Moroccan Club Travel.\r\n\r\n',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals ( Breakfasts and Dinners)',
        ],
        excluded: ['Any personal costs', 'Drinks', 'Lunches'],
    },
    {
        id: 'imperial-cities-and-south-tour-from-tangier',
        title: 'Imperial Cities and South Tour From Tangier',
        duration: '13 Days',
        nights: '12 Nights',
        startingPoint: 'Tangier',
        description:
            "This tour offers a captivating journey along the Mediterranean coast, showcasing the country's stunning landscapes, rich history, and vibrant culture. From the bustling port city of Tangier to the ancient...",
        url: 'https://mct-tours.com/trip/imperial-cities-and-south-tour-from-tangier/',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        arrivalCity: 'Tangier',
        guide: 'Imperial cities ( Tangier, Marrakech, Fes)',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/Photo-des-villes-imperiales-2007-093.jpg',
        accommodation: 'Hotels, Camp',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier',
                description:
                    'Morning arrival at Tangier, start a leisured day andstart the city tour including the Cap Spartel facing the Spanish coastlines. The Cap Spartel itself is the meeting point between the Atlantic Ocean and the Mediterranean Sea.After this external tour,drive to discover the Medina of Tangier at the beginning, visit the Kasbah Museum founded in the seventh century by the Sultan Moulay Ismael. In the beginning of the XX century, the palace was converted to a National Museum characterised by the exhibition of the different items like wood, Roman Mosaics, jewellery …..Stop for lunch and discover the Medina of Tangier, including grand Socco,petit Socco, ending the tour next the port.Dinner and overnight atyour hotel in Tangier.\nDay2: Tangier/Rabat/CasablancaAfter breakfast, drive to Rabat the administrative and political capital of the countrysince 1912. Start the city tour of Rabat, including the Royal Palace fromthe outside, Mohammed V Mausoleum, Hassan Tower, Challah Necropolis. Stop for lunch, afternoon drive to Casablanca.Dinner and accommodation at your hotel in Casablanca',
            },
            {
                day: 'Day 2',
                title: 'Tangier - Rabat - Casablanca',
                description:
                    'After breakfast, drive to Rabat the administrative and political capital of the countrysince 1912. Start the city tour of Rabat, including the Royal Palace fromthe outside, Mohammed V Mausoleum, Hassan Tower. Stop for lunch,Afternoon drive to Casablanca.Dinner and accommodation at your hotel in Casablanca.',
            },
            {
                day: 'Day 3',
                title: 'Casablanca - Marrakech',
                description:
                    'After breakfast, start to visit the city of Casablanca, the largest city in Morocco. It’s also the economical capital of the whole country.The city tour is including Hassan II Mosque from outside, Mohammed V Square, the Habous neighborhood, the Central Market and the Anfa area. Stop for lunch, Afternoon drive to Marrakech.\novernight and dinner at your hotel in Marrakech.',
            },
            {
                day: 'Day 4',
                title: 'Marrakech city tour',
                description:
                    'After breakfast, the entire day will be devoted to the city tour of the red city including theKoutoubia Mosque, Saadian’s Tombs and Bahia Palace. Stop for lunch, and then learn about Moroccan crafts from workers at a craft co-operative inside the medina. Later, have a tour inside the souk (market) beginning and ending at Jamaa El Fna Square, a World Heritage Site. Here you will see a medieval scene, complete with jugglers, fortune tellers, snake charmers, dancers, herbalists, food and juice vendors. Experience all of the sights, sounds, smells, tastes and contrasts of this exotic place.Dinner at one of the finest and most authentic Moroccan restaurants at Marrakech.Overnight at your hotel in Marrakech',
            },
            {
                day: 'Day 5',
                title: 'Marrakech - Ouarzazate - Zagora',
                description:
                    'After breakfast departure to Ouarzazate crossing the High Atlas Mountains with the visit of Kasbah of AitBenhaddou, which is an exceptionally well-preserved site declared by the UNESCO in 1987 as the World Heritage. Ouarzazate is the base for film studios where many famous films were made, such as Gladiator, the Four Feathers, Romancing the Stone, Cleopatra, the Sheltering Sky, Jewel of the Nile and Lawrence of Arabia. Stop for a mint tea glass with a Berber family in their home. After lunch, Continuation to Zagora which was the starting point for the sultan Ahmad al-Mansour’s legendary desert crossing toconquer Tombouctou in 1591.The route was used before and after that to trade Atlas mineral salt for African gold. Today, a sign post At Zagorainforms you that the trip is 52 days by camel, camel caravans from the south were able to break their journey and rest before heading to the east and north of Africa. Even today the town continues to be the main marketplace of the south.\nDinner and overnight at your hotel.',
            },
            {
                day: 'Day 6',
                title: 'Zagora - Alnif - Erfoud',
                description:
                    'After breakfast, departure to Erfoud via Tazzarine and Alnif through the Saghro Mountain via Rissani, the home town of the present dynasty.Visit the shrine of Moulay Ali Cherif and Ksar Ouled Ibn Abdelhalim dynasty.Dinner and overnight at your hotelin Erfoud.',
            },
            {
                day: 'Day 7',
                title: 'Erfoud - Merzouga',
                description:
                    'After breakfast drive into the Sahara Desert of MerzougaDunes, the highest in Africa and one of the filming sites for Lawrence of Arabia. Take an optional camel trek to watch the sunset behind the Sahara dunes.\nCamp overnight in a deluxe tent, furnished inside with a comfortable clean cot, fresh linens and blankets set on colorful Moroccan carpets.\nEnjoy dinner at your encampment and later, the breathtaking sight of stars in the desert sky. Or, if you prefer, you may have dinner and overnight at your hotel in Erfoud.',
            },
            {
                day: 'Day 8',
                title: 'Merzouga - Midelt - Ifrane',
                description:
                    'After breakfast, drive through the high and the middle Atlas Mountains known with its rich Forest of cedar trees. Stop in Midelt for lunch. The city is famous about the production off apples. Annually the city organizes the apple festival. Along the way, stop in Ifrane an alpine city and Sky resort surrounded by many lakes and beautiful cedar forest.Dinner and overnight at your hotel in Ifrane.',
            },
            {
                day: 'Day 9',
                title: 'Ifrane - Meknès - Fez',
                description:
                    'After breakfast have a free time to discover the alpine city. Drive to visit another imperial city called Meknes, the 17th-century city founded by Moulay Ismail, classified by the UNESCO as the World Heritage Site. Stop for Lunch, in the afternoon start the visit of the city including the Sultan’s Stables, Moulay Ismail Mausoleum, the majestic Bab Mansour, and El-Hdim Square. Drive to Fez via the fertile Saiss plateau.Dinner and overnight at your hotel in Fez.',
            },
            {
                day: 'Day 10',
                title: 'Fez - City tour',
                description:
                    'Breakfast at your hotel, then set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Fez was the first Imperial city, founded in the 9th century. Among the sites you visit the impressive medina with its different gates, mosques, tanneries, El-Attarine Medersa and the impressive Fondouk el-Nejjarine with its elegant fountain, the latter is housing a Museum devoted to wood crafts in a beautifully restored 18th century building. Lunch in a typical Moroccan restaurant in the Medina. After lunch, visit the Wood Museum, the Mellah (Jewish Quarter), the King’s palace from outside and Bab Boujloud.Dinner and overnight at your hotel in Fez.',
            },
            {
                day: 'Day 11',
                title: 'Fès - Chaouen',
                description:
                    'After breakfast, drive to the blue city of Chefchaouen, a picturesque hillside town built by refugees from Andalusia as a haven from the invading Christians. Chefchaouen, with its Spanish character, whitewashed houses, tiny balconies, blue-painted doors and alleyways is a lovely place to stroll. We visit the Kasbah in heart of the town (Outa Hammam) founded in the XVII century.Dinner and overnight at your hotel in Chaouen.',
            },
            {
                day: 'Day 12',
                title: 'Chaouen - Tetouan - Tangier',
                description:
                    'Drive to visit the city of Tetouan, built by the Moors fleeing Spain was once the capital of the country&#039;s Spanish zone. The town’s Andalusian heritage can be seen in its medina, its culinary traditions, architecture, music and embroidery. Tetouan was declared a World Heritage Site by UNESCO.After lunch visit the Archaeological Museum enclosing beautiful mosaics dating back to the Roman period, Visit the king’s palace from the outside then cross the medina of Tetouan mainly the old quarters with its traditional Andalusian style. Drive to Tangier.Dinner and overnight at your hotel in Tangier.',
            },
            {
                day: 'Day 13',
                title: 'Departure',
                description:
                    'After check out, you will be transported to the airport for your return flight home. This concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals (Breakfasts and dinners)',
        ],
        excluded: ['Any personal costs', 'Drinks & Lunches'],
    },
    {
        id: 'imperial-cities-tour-from-tangier',
        title: 'Imperial Cities Tour From Tangier',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Tangier',
        description:
            "Embark on an unforgettable adventure through Morocco's most iconic cities, starting in Tangier and ending in Marrakech. This tour offers a unique blend of history, culture, and adventure, showcasing the...",
        url: 'https://mct-tours.com/trip/imperial-cities-tour-from-tangier/',
        accommodation: 'Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        arrivalCity: 'Tangier',
        guide: 'Local guide (Marrakech, Tangier, Fez)',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/Prod_920_1.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier',
                description:
                    'Morning arrival at Tangier, start a leisurely day with the city tour including the Cap Spartel to have a nice view on Spain coastlines. Cap Spartel is the meeting point between Atlantic ocean and Mediterranean sea, after a short stop visit the Hercules Caves. Drive to discover the medina of Tangier, visit the Kasbah museum founded in the seventh century by the sultan Moulay Ismael. Stop for lunch and discover the Medina of Tangier, including grand Socco, Petit Socco, ending the tour next the port. Dinner and overnight at your hotel in Tangier.',
            },
            {
                day: 'Day 2',
                title: 'Tangier - Rabat - CASABLANCA',
                description:
                    'After breakfast, drive to Rabat  crossing the Gharb Plateau with its irrigated   and fertile  land   using  the  modern technics  for producing citrus vegetables   pinnate. Rabat is the administrative and political capital of the country. Start the city tour  including the Royal Palace from outside, Mohammed V Mausoleum, Hassan Tower, Challah Necropolis.\r\n\r\nAfter Lunch , drive to Casablanca   and  start the city  of Casablanca  including    stop  to take some picture  of   Hassan II  from the outside   cross ,the Corniche with its fancy buildings  and the  beaches.\r\nDinner and  overnight  at your hotel in Casablanca.\r\n',
            },
            {
                day: 'Day 3',
                title: 'Casablanca - Marrakech',
                description:
                    'After breakfast ,Continue   the city   tour   including    the Hassan II Mosque the largest one  in Morocco, ii worth visiting the inside  of the mosque characterized with it beautiful Andalusian architecture continue the city tour including the church of Notre \r\nDame and Habous quarter  then drive to Marrakech\r\n Dinner and overnight   at your hotel in marrakech.\r\n',
            },
            {
                day: 'Day 4',
                title: 'Marrakech city tour',
                description:
                    'After breakfast begin your tour of the Red Pearl city of Morocco. Upon arrival start The city tour includes the Koutoubia Mosque (from outside), Saadian’s Tombs, Bahia Palace, Medersa Ben Youssef, a private museum, the colorful souks (markets) inside the medina. After lunch have a tour with browsing and shopping inside the souk beginning and ending at Jamaa El Fna Square, a World Heritage Site. Here you will see a medieval scene, complete with jugglers, fortune tellers, snake charmers, dancers, herbalists, food and juice vendors, experience all of the sights, sounds, smells, tastes and contrasts of this exotic place. Dinner and overnight at your hotel in Marrakech.',
            },
            {
                day: 'Day 5',
                title: 'Marrakech - Azilal - Bin el ouidane',
                description:
                    'After breakfast departure to Beni Mellal  the city is located  in the heart of the middle Atlas  mountains  located  in a very fertile plateau  proving to the local market   citrus wheat  vegetable. The  different rural and agricultural  of these  centers  give the region  of Beni Mellal  its prosperity.  On the way   we   drive through  these  new cities    Tamellalt and Kallaat -Sraghna, then continuation to Beni Mellal for lunch and exploration of the city .\nStop for a break to have lunch .After   visit the  Kasbah and   the famous water fall of Ain Asrdoun Dinner and overnight at your hotel in Bin el widane  to benefit from the attractive landscapes of the dam bin el widane.',
            },
            {
                day: 'Day 6',
                title: 'Bin El widane - Meknes - Fes',
                description:
                    'After breakfast, drive to Meknes crossing a part of the middle atlas with its beautiful forest of oak , junipers and cedar trees from time to time you can can see some barbary Apes on the trees . Upon arrival to meknes stop for lunch .Start the city of Meknes, Morocco’s fourth Imperial city and whose medina has been classed by UNESCO as a World Heritage Site. Our tour includes Moulay Ismail’s Mausoleum, the Dar jamai Museum, the majestic Bab Mansour. Drive to Volubilis, the site of the most impressive Roman mosaics and ruins in Morocco. Under the Romans, it became one of the granaries of the Empire and grew to 20,000 inhabitants. It exported olives and wheat to Rome as well as the lions used at the gladiator’s games in the Colosseum. Continuation to Fes.\nDinner and overnight at your hotel in Fes.',
            },
            {
                day: 'Day 7',
                title: 'Fes & City tour',
                description:
                    'Breakfast at your hotel then set out for a city tour of Fez, the spiritual and intellectual capital of Morocco. Fez was the first Imperial City, founded in the 9th century. Among the sites you will see is the impressive medina with its different gates, Tanner’s quarter, Karaoiuyine Mosque, El-Attarine Medersa and the impressive Fondouk el-Nejjarine with its elegant fountain, the latter is housing a museum devoted to wood crafts in a beautifully restored 18th century building. Lunch in a typical Moroccan restaurant in the Medina. After lunch visit the Dar Batha Museum, the Mellah (Jewish Quarter), views of the King’s Palace and Bab Boujloud. Dinner and overnight at your hotel in',
            },
            {
                day: 'Day 8',
                title: 'Fes - CHAOUEN',
                description:
                    'After breakfast, drive to Chefchaouen, a picturesque hillside town built by refugees from Andalusia as a haven from the invading Christians. Chefchaouen, with its Spanish character, whitewashed houses, tiny balconies, blue-painted doors and alleyways is a lovely place to stroll. We visit the Kasbah in heart of the town founded in the XVII century.\nDinner and overnight at your hotel in Chefchaouen.',
            },
            {
                day: 'Day 9',
                title: 'Chefchaouen -Tetouan – Tangier',
                description:
                    'Breakfast at your hotel, and then depart for Tetouan, built by the Moors fleeing Spain was once the capital of the country&#039;s Spanish zone. The town’s Andalusian heritage can be seen in its medina, its culinary traditions, architecture, music and embroidery. Declared a World Heritage Site by UNESCO, the old souk (market) presents many opportunities for buying well-made hand crafts and other items. Drive to Tangier. After lunch visit the Kasbah Quarter, Kasbah Museum, the Grand Socco, Petit Socco and surrounding souks. Enjoy the night life of the lively Tangier, the port-of-call for many cruise liners.',
            },
            {
                day: 'Day 10',
                title: 'Tangier - Departure',
                description:
                    'After check out, you will be transported to the airport at  for your return flight home. This concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals (Breakfast, Dinners)',
        ],
        excluded: ['Any personal costs', 'Drinks and Lunches'],
    },
    {
        id: 'just-for-women-starting-from-casablanca',
        title: 'Just for Women Starting from Casablanca',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Casablanca',
        description:
            "Welcome ladies to Morocco! Come experience the wonders that Morocco offers with plenty of shopping in historic Medina's, regional cooking classes in Fez and Marrakech, a belly dance class, a...",
        url: 'https://mct-tours.com/trip/just-for-women-starting-from-casablanca/',
        accommodation: 'Riads and Hotels',
        tripType: 'Long-tours, Just for women',
        difficulty: 'Easy',
        guide: 'from day 1 to departure',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/DSC_0451-scaled.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca - Chefchaouen',
                description:
                    'Arrival at Casablanca airport where you will meet your English-speaking guide, collect the luxury vehicle and begin your women’s tour. Drive to the city of Chefchaouen the pearl of the Rif Mountains crossing the most important vast Gharb  plateau of Morocco, these lands are arable and specialized In the production of vegetables and citrus. Continue driving through the Rif mountains, arrive to Chaouen check in your Riad or hotel at Chechaouen\nDinner and overnight at your Riad or Hotel',
            },
            {
                day: 'Day 2',
                title: 'Chefchaouen - Meknes - Fez',
                description:
                    '\nAfter breakfast, the morning will be dedicated to discover the pearl of the Rif mountain it ‘s the city of Chefchaouen discover the beuaty of this town with its blue whitwashed streets ant its elegant Andalousian style then drive to the city of Fez. On the way stop to visit cheese cooperative created by the government under the peogramm national human decvelopment initiative to help ladies to get extra income to impove the way of their life . After the visit continue driving t crossing the rif range with its stunny landscapes and its beautiful forests continue to the city of Fes. \n\n\n\nDinner and overnight at your Riad in Fez.\n',
            },
            {
                day: 'Day 3',
                title: 'Fez workshops',
                description:
                    'After breakfast start the city tour Fez, the spiritual and intellectual capital and the first Imperial City of Morocco. Fez is the home of the largest and oldest medieval city in the world. We begin our tour in the historical Medina whose winding alleys are filled with many little shops that have been there for centuries. Stop to visit the Tanner’s Quarter which has been in the same location since the Middle Ages, Karaouiyine Mosque, one of the oldest mosques in the world, El-Attarine Medersa and the beautifully restored 18th century Fondouk el-Nejjarine. Fes is a very important center of Moraccan handy-craft like embroidery, ceramics, yellow babouches (slippers) all handmade and indicative to Fez. Stop for lunch in a typical Moroccan restaurant in the Medina.After lunch we visit an embroidery workshop where the ladies make a special blue Andalusian  embroidry  Called the point of fez the work is magical because the point of Fes appear in the same time in the front and back side of the table cloth.Overnight at your Riad in Fez',
            },
            {
                day: 'Day 4',
                title: 'Fez (work shop)',
                description:
                    'After breakfast prepare yourself for a cooking class, you can go to the Medina market to purchase the fresh ingredients and spices just like the Moroccans do every day. The chief   will let you choose  between  cooking   a  tagine  , couscous  with vegetables  or  to prepare a  Bestilla. for lunch , savor the  dishes which  you prepared  .After lunch there is free time for shopping in the Medina, then have a tea party with music at   a Moroccan house  in the medina  of Fes.\nDinner and Overnight at your Riad in Fez.',
            },
            {
                day: 'Day 5',
                title: 'Fez - Beni Mellal - Marrakech',
                description:
                    'After breakfast  drive to Marrakech, passing through the mountain resort of Ifrane famous for its skiing station.     Along the way enjoy watching   the spectacular vistas of the Middle Atlas  with its beautiful Mountains. Stop for lunch in Beni Mellal, a city surrounded by well-irrigated orange and olive groves. Cross the green, fertile plateau of Tadla. Arrive to  Marrakech in the early evening.\nDinner and overnight at your Riad at Marrakech.',
            },
            {
                day: 'Day 6',
                title: 'Marrakech (work shop)',
                description:
                    'After breakfast After  new activities will done  during the morning, firstly   visit a ceramics workshop where they make the famous  ceramics put your hand to the dough  use your hand at the potter’s wheel and have a tour of the many steps from clay to the finished piece.\nDinner and overnight at your Riad in Marrakech .',
            },
            {
                day: 'Day 7',
                title: 'Marrakech',
                description:
                    'After breakfast. possibility to perform a belly dance lesson leaded by a professional Master.To  learn the technics of belly  dancing. Belly dance schools are opened in many European countries it becomes well known over all the word, back to the Riad for a break and free at leisure till the afternoon, take a horse carriage  tour  to visit Majorelle Gardens.    Ending  the visit in the   famous Djemaa El Fna Square, an oral  World Heritage Site.\n By night it  transforms into many eateries and medieval entertainment complete with jugglers, fortune tellers,  dancers and herbalists.\ndinner and overnight at your Riad in Marrakech.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech - Essaouira',
                description:
                    'After breakfast, drive to the picturesque coastal town of Essaouira, known for its woodwork, art galleries, seafood and trendy shopping. The town offers a sandy beach stretching for miles to the south, while richly forested hills extend to the east. Ancient, and  World Heritage Site. On the way stop at a local woman’s Argan Oil Cooperative to see how this precious oil is produced to be used   in cosmetics and cooking. Arrive in Essaouira in time for a fresh seafood lunch and after. Discover  the medina of Essaouira  get free time to shop in the Medina, where there are many art galleries, crafts and with its alleyways  and its architectural  style   have free  time  to  shops.\nDinner and overnight at your Riad or Hotel in Essaouira.',
            },
            {
                day: 'Day 9',
                title: 'Essaouira - Safi - Oulidia - Casablanca',
                description:
                    'After breakfast drive to Casablanca. En route we stop for a panoramic view of Safi and for lunch in Oulidia. Continue on to Casablanca, upon arrival visit the Hassan II Mosque from outside then check in your hotel.Dinner and overnight at your hotel in Casablanca.',
            },
            {
                day: 'Day 10',
                title: 'Casablanca - Departure',
                description:
                    'After breakfast, you will be transported to the airport in Casablanca for your return flight home.This concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
            'Meals ( Breakfasts and Dinners)',
        ],
        excluded: ['Any personal costs', 'Lunches and Drinks'],
    },
    {
        id: 'best-of-morocco',
        title: 'Best of Morocco',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Casablanca',
        description:
            'Morocco, with its images of swirling sand dunes, winding passages in a medina, the local charm of traditional Berber mountain villages and the splendor and opulence of the finest Imperial cities...',
        url: 'https://mct-tours.com/trip/best-of-morocco/',
        accommodation: 'Camps and Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        arrivalCity: 'Marrakech',
        guide: 'local guides( Fes , Volubilis, Marrakech)',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/S.M01896.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca – Rabat',
                description:
                    'Morning arrival at Casablanca, then start a leisurely day with short city tour including Hassan II Mosque distinguished by its Moorish architecture and it’s really the highlight of the city of Casablanca.\nDrive to Rabat, the capital of Morocco since 1912.  After lunch, start the city tour of Rabat, the capital of the country, including the Royal Palace from the outside, Mohammed V Mausoleum, Hassan Tower, Challah Necropolis.\nEnjoy an authentic Moroccan dinner and overnight at your hotel in Rabat.\nAccommodation\nRabat - Hotel (01 night)\nIncluded Activities\nCasablanca -Visit Hassan II mosque (from the outside).Casablanca -Mohammed Mohammed V SquareRabat –Visit of the Royal Palace from the outsideRabat –Visit of the complex of Mohammed V\nOptional Activities\nLunch depends on the arrival timeRabat – Dinner  at a local restaurant or at the hotel\nMeals Included\nBreakfastDinner at hotel',
            },
            {
                day: 'Day 2',
                title: 'Rabat - Meknes - Volubilis - Fez',
                description:
                    'Check out after breakfast and drive to the 4th Imperial city, Meknes, whose medina has been classed by UNESCO as a World Heritage Site.  The  tour of  this 17th century city viewing its fine Sultan&#039;s Stables, Tomb of Moulay Ismail, Koubba El Khayatine and the majestic gate of Bab Mansour. After lunch, take a step back in time as you walk in the footsteps of the ancient Romans to see the ruins and mosaics of Volubilis, another World Heritage Site.\nAccommodation\nRiad or Hotel at Fez (01 night)\nIncluded Activities\nMeknes – Visit of the Sultan’s StablesMeknes – Visit of Moulay Ismail’s MausoleumMeknes – Visit of Koubba El KhayatineMeknes – Visit of the majestic Bab MansourVisit of  Volubilis\nOptional Activities\nMeknes – Lunch  at a restaurantFes  - Dinner  at a local restaurant\nMeals Included\nBreakfastDinner at hotel',
            },
            {
                day: 'Day 3',
                title: 'Fez',
                description:
                    'Breakfast at your hotel then set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Fez was the first Imperial City, founded in the 9th century. Among the sites you will see the impressive medina with its different gates, Mosques, tanneries, Attarine Medersa, Nejjarine Fountain and its Fondouk, the latter is housing a museum devoted to wood crafts in a beautifully restored 18th century building. After lunch in a typical Moroccan restaurant in the Medina,  the Mellah or Jewish Quarter, the King&#039;s palace (from outside) and Bab Boujloud.\nAccommodation\nHotel or Riad at Fez (01 night)\nIncluded Activities\nFez – visit of the Karaoiuyine Mosque,Fez - Visit of El-Attarine MedersaFez - visit of Fondouk el-NejjarineFez - visit of the Jewish QuarterFez - visit of the King&#039;s Palace (from outside) and Bab Boujeloud.Fez – visit of the Medina with a walking tour\nOptional Activities\nFes – Lunch  at a local restaurantFes - Dinner  at a local restaurant\nMeals Included\nBreakfastDinner at hotel',
            },
            {
                day: 'Day 4',
                title: 'Fez - Erfoud - Merzouga',
                description:
                    'Arise early for the drive to Erfoud with a stop in Ifrane, an alpine city known for its beautiful park and its famous ski resort. Continue your drive to Midelt, a town located between the Middle Atlas and High Atlas Mountains. Stop for lunch. After lunch, start to cross the beautiful fertile valleys of Ziz and Tafilalet. Stop in Erfoud, visit a marble center where 500 million year old fossils are extracted, polished and exported around the globe. Drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes, the highest in Africa and one of the filming sites for Lawrence of Arabia. Take an optional camel trek to watch the sun set behind the Sahara dunes. Camp over night in a nomad tent, furnished inside with a comfortable clean cot, fresh linens and blankets set on colourful Moroccan carpets.\nAccommodation\nCamp at Merzouga(01 night)Included ActivitiesIfrane- Short stopMidelt  – Short stopErfoud- Visit of FossilsMerzouga – enjoy the dunes\nMeals Included\nBreakfastDinner at hotel',
            },
            {
                day: 'Day 5',
                title: 'Erfoud - Todra – Ouarzazate',
                description:
                    'After breakfast, drive to Todra Gorge, passing through the old town of Tinerhir with a stop to visit the ruined Glaoui Kasbah. Sheer cliffs rise up dramatically on each side of the narrow corridor that forms the Todra Gorge. Mountain goats and eagles are sometimes seen on the high cliffs. Then drive through the Dades Valley, a spectacularly beautiful area of contrasting colours and terrains, also known as the valley of a thousand Kasbahs. The Dades Gorge is a beautiful example of the intricate and effective irrigation systems needed in this area. The lush green willows, plants and trees sway in the breezes at the bottom of the valley while the sides of the gorge are a barren, stark shade of brick red. The Dades and Todra Gorges provide some of the best seasonal bird watching sites in Morocco, with many types of lark, sand grouse, buzzards, falcon, warblers, finches, and others.\nAccommodation\nHotel at Ouarzazate(01 night)Included ActivitiesTinghir- Visit of the Glaoui KasbahTodra Gorges – Short breakEnjoy the Dades Valley\nMeals Included\nBreakfastDinner at hotel',
            },
            {
                day: 'Day 6',
                title: 'Ouarzazate – Marrakech',
                description:
                    'After breakfast, drive to Marrakech. En route, stop to visit   the Kasbah of Ait Benhaddou, an exceptionally well-preserved site which was declared a World Heritage Site by UNESCO in 1987. Ouarzazate is the base for film studios where many famous films were made, such as, Gladiator, the Four Feathers, Romancing the Stone, Cleopatra, the Sheltering Sky, Jewel of the Nile and Lawrence of Arabia.\nAccommodation\nHotel at Marrakech (01 night)Included ActivitiesOuarzazate – Short breakVisit of Kasbah Ait Ben Haddou\nOptional Activities\nAit Benhaddou - Henna TattooOuarazate - Atlas Movie StudiosOuarzazate - Kasbah Taourirt\nMeals Included\nBreakfast\nDinner at hotel',
            },
            {
                day: 'Day 7',
                title: 'Marrakech',
                description:
                    'After a leisurely breakfast, begin your tour of the Red Pearl of Morocco. Among the sites are the Koutoubia Mosque, Saadian’s Tombs, and Bahia Palace. Stop for lunch, and then learn about Moroccan crafts from workers at a craft co-operative inside the medina. Later, have a tour inside the souk (market) beginning and ending at Jamaa El Fna Square, a World Heritage Site. Here you will see a medieval scene, complete with jugglers, fortune tellers, snake charmers, dancers, herbalists, food and juice vendors. Experience all of the sights, sounds, smells, tastes and contrasts of this exotic place.\nAccommodation\nRiad or Hotel at Marrakech (1 night)\nIncluded Activities\nMarrakech - craft co-operativeMarrakech- Koutoubia MosqueMarrakech- entrance Saadian Tombs &amp; Bahia PalaceMarrakech- Medersa Ben YoussefMarrakech – Walking TourMarrakech - Djemma el Fna square\n \nMeals Included\nBreakfast\ndinner at hotel',
            },
            {
                day: 'Day 8',
                title: 'Departure',
                description:
                    'After check out, you will be transported to the airport for your return flight home.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'andalusian-heritage',
        title: 'Andalusian Heritage',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Casablanca',
        description:
            'The Moors were a genetic mixture of Arabs and Berbers who came from a region of North Africa that is present day Morocco. In the 7th century, they occupied large...',
        url: 'https://mct-tours.com/trip/andalusian-heritage/',
        accommodation: 'Camps and Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/milad-alizadeh-JibMa0FbyHw-unsplash.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca – Rabat',
                description:
                    'Morning arrival at Casablanca, start a leisurely day with a tour of the Hassan II the largest mosque in Morocco, then a stop in the new town to see Mohammed V Square lined with fine 1930’s buildings.  Drive to Rabat, the capital of Morocco and the residence of the King Mohammed VI. Stop for lunch. In the afternoon start the city tour of Rabat including the Royal Palace from the outside, the complex of Mohammed V with its Mausoleum and the ruined mosque with its tower. Enjoy an authentic Moroccan dinner and overnight at your hotel in Rabat.\nAccommodation\nRabat - Hotel (01 night)\nIncluded Activities\nCasablanca -Visit Hassan II mosque (from the outside).Casablanca -Mohammed Mohammed V SquareRabat –Visit of the Royal Palace from the outside Rabat –Visit of the complex of Mohammed V\nOptional Activities\nLunch depends on the arrival timeRabat – Dinner  at a local restaurant or at the hotel\nMeals Included\nBreakfastDinner(optinal)',
            },
            {
                day: 'Day 2',
                title: 'Rabat - Meknes – Fez',
                description:
                    'Check out after breakfast and drive to Meknes, a 17th century city whose medina has been classed by UNESCO as a World Heritage Site since 1994.  The city tour includes the Sultan’s Stables, Moulay Ismail’s Mausoleum, Koubba El Khayatine and the majestic Bab Mansour. After lunch, drive to Volubilis to admire the many different mosaics and ruins of this World Heritage Site. \r\n\r\nAccommodation\r\n\r\nRiad or Hotel at Fez (01 night)\r\n\r\nIncluded Activities\r\n\r\nMeknes – Visit of the Sultan’s Stables \r\nMeknes – Visit of Moulay Ismail’s Mausoleum\r\nMeknes – Visit of Koubba El Khayatine\r\nMeknes – Visit of the majestic Bab Mansour\r\nVisit of  Volubilis  \r\n\r\nOptional Activities\r\n\r\nMeknes – Lunch  at a restaurant \r\nFes  - Dinner  at a local restaurant \r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner(optinal)',
            },
            {
                day: 'Day 3',
                title: 'Fez',
                description:
                    'Breakfast at your hotel then set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Fez was the first Imperial City, founded in the 9th century by the sultan’s name Moulay Idriss II. Among the sites you will see is the impressive medina with its different gates, Tanner’s quarter, Karaoiuyine Mosque, El-Attarine Medersa founded in the XVI century by The Merinides Dynasty, the impressive Fondouk el-Nejjarine with its elegant fountain, the latter is housing a museum devoted to wood crafts in a beautifully restored 18th century building. After lunch in a typical Moroccan restaurant in the Medina we visit the Dar Batha Museum, the Mellah (Jewish Quarter), the King&#039;s Palace (from outside) and Bab Boujeloud. \r\n\r\nAccommodation\r\n\r\nHotel or Riad at Fez (01 night)\r\n\r\nIncluded Activities\r\n\r\nFez – visit of the Karaoiuyine Mosque, \r\nFez - Visit of El-Attarine Medersa \r\nFez - visit of Fondouk el-Nejjarine\r\nFez - visit of The Dar Batha Museum\r\nFez - visit of the Jewish Quarter\r\nFez - visit of the King&#039;s Palace (from outside) and Bab Boujeloud. \r\nFez – visit of the Medina with a walking tour\r\n\r\nOptional Activities\r\n\r\nFes – Lunch  at a local restaurant \r\nFes - Dinner  at a local restaurant \r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner(optinal)',
            },
            {
                day: 'Day 4',
                title: 'Fez - Sefrou - Bhalil – Fez',
                description:
                    'After breakfast, drive to Sefrou, an ancient town in the foothills of the Middle Atlas Mountains south of Fez.  Sefrou, a thriving commercial Center in the 12th century was a meeting place where merchants from the north met those coming up from the south of Africa. Its early inhabitants were Berber, who later adopted Judaism, and the town once had the largest Jewish community of any Moroccan city. Today, Sefrou is renowned for its distinctive embroidery and its mid-May Cherry Festival. Then drive to Bhalil, a charming Berber village with well-preserved troglodyte cave dwellings.\r\n\r\nAccommodation\r\n\r\nOvernight at Hotel/ Riad  in Fez (01 night)\r\n\r\nIncluded Activities\r\n\r\nSefrou – visit the Medina of Sefrou\r\nBhaliltown - Troglodyte dwellings.\r\n\r\nOptional activities\r\n\r\nLunch at a Local Restaurant at Sefrou\r\n Dinner at a typical Restaurant at Fes\r\n\r\nMeals included\r\n\r\nBreakfast ',
            },
            {
                day: 'Day 5',
                title: 'Fez – Chefchaouen',
                description:
                    'After breakfast, drive to Chefchaouen, a picturesque hillside town built by refugees from Andalusia as a haven from the invading Christians. Chefchaouen, with its Spanish character, whitewashed houses, tiny balconies, blue-painted doors and alleyways is a lovely place to stroll. We visit the Kasbah in heart of the town founded in the XVII century.\r\n\r\nAccommodation\r\n\r\nOvernight at Hotel/ Riad  in Chechaouen (01 night\r\n\r\nIncluded Activities\r\n\r\nChefchaouen - Goat Cheese Tasting\r\nChefchaouen - Medina walking tour\r\n\r\nOptional Activities\r\n\r\nChefchaouen  - Lunch at a restaurant/ on the way or in to Chefchaouen\r\n\r\nMeals included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 6',
                title: 'Chefchaouen -Tetouan – Tangier',
                description:
                    'Breakfast at your hotel, and then depart for Tetouan, built by the Moors fleeing Spain was once the capital of the country&#039;s Spanish zone. The town’s Andalusian heritage can be seen in its medina, its culinary traditions, architecture, music and embroidery. Declared a World Heritage Site by UNESCO, the old souk (market) presents many opportunities for buying well-made hand crafts and other items. Drive to Tangier. After lunch visit the Mendoubia, once the administrative offices of sultans ruling the area, Kasbah Quarter, Kasbah Museum, the Grand Socco, Petit Socco and surrounding souks. Enjoy the night life of the lively Tangier, the port-of-call for many cruise liners. \r\n\r\nIncluded Activities\r\n\r\nTetouan – city walking tour\r\nTangier  - 9th April square \r\nTangier - Grand Socco &amp; Petit Socco\r\nTangier - Walking Tour\r\nTangier - Kasbah Quarter\r\nTangier - Museum of Villa Harris\r\n\r\nOptional Activities\r\n\r\nLunch at a Local Restaurant\r\n Dinner at a typical Restaurant\r\n\r\nMeals included\r\n\r\nBreakfast ',
            },
            {
                day: 'Day 7',
                title: 'Departure',
                description:
                    'After check out, you will be transported to the airport for your return flight home.\r\n\r\nThis concludes the services of Moroccan Club Travel',
            },
            {
                day: 'Day 8',
                title: 'Departure Marrakech',
                description:
                    'Departure after check out, you will be transported to the airport for your return flight home. ',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'adventure-to-sahara',
        title: 'Adventure to Sahara',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Marrakech',
        description:
            'Your adventure begins in Marrakech, the Red Pearl city , into the High Atlas Mountains and down through the lush Draa and Dades Valleys with its steep gorges to the...',
        url: 'https://mct-tours.com/trip/adventure-to-sahara/',
        accommodation: 'Camps and Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/patrick-langwallner-6A6EFplTd4M-unsplash.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival Marrakech',
                description:
                    'Upon arrival to Marrakech, a city which has long been the crossroads linking sub-Saharan Africa with North Africa, a lovely city, on a site occupied since Neolithic times, Marrakech is enchanting with its skylines framed by the snow-capped High Atlas Mountains to the south, its twelfth century brick-red fortress walls, its Moorish architecture, busy souks and the world famous Jamaa El Fna Square. Check at the hotel, and then enjoy a leisurely afternoon guided orientation tour of the city including the Majorelle Gardens of Yves St. Laurent. \r\n\r\nAccommodation\r\n\r\nRiad or Hotel at Marrakech (1 night)\r\n\r\nIncluded Activities\r\n\r\nMarrakech - Djemma el Fna square\r\nMarrakech- entrance Majorelle Gardens of Yves St. Laurent\r\n\r\nOptional Activities\r\n\r\nDinner at a Typical restaurant',
            },
            {
                day: 'Day 2',
                title: 'Marrakech city Tour',
                description:
                    'After breakfast meet your tour guide of Marrakech. The city tour   will take you to the twelfth century Koutoubia Mosque, the sixteenth century Saadian Tombs and the nineteenth century Bahia Palace.  \r\n\r\n     After lunch, visit a craft co-operative to learn about Moroccan handicrafts. Afterwards we will transcend you through time as to take a walk inside the souks.   Amongst the craftsmen and traders with its mazes of alleyways filled with beautiful potteries, apothecaries, spices, silver jewelry, blacksmiths, and wooldying. The walk inside the medina, finishes at the world famous Jamaa El Fna Square, a World Heritage Site. Experience the sights, sounds, smells and tastes of this magical place complete with jugglers, fortune tellers, snake charmers, dancers and herbalists. \r\n\r\nAccommodation\r\n\r\nRiad or Hotel at Marrakech (1 night)\r\n\r\nIncluded Activities\r\n\r\nMarrakech - craft co-operative\r\nMarrakech- Koutoubia Mosque\r\nMarrakech- entrance Saadian Tombs\r\nMarrakech – Walking Tour\r\nMarrakech - Djemma el Fna square\r\n\r\nOptional Activities\r\n\r\nLunch at a Typical restaurant\r\nDinner at a Typical restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 3',
                title: 'Marrakech –Ouarzazate',
                description:
                    'After breakfast, depart for Ouarzazate, the gateway to the Sahara Desert.  Cross the high Atlas Mountains with its beautiful landscapes. En Route, visit the Kasbahs (fortress’) of Telouet and Ait Benhaddou, an exceptionally well-preserved Kasbah which was declared a World Heritage Site in 1987 by UNESCO. Ouarzazate is the center of the Moroccan film industry where many famous international films have been made including: the Gladiator, the Four Feathers, Romancing the Stone, Cleopatra, the Sheltering Sky, Jewel of the Nile and Lawrence of Arabia. \r\n\r\nAccommodation\r\n\r\nHotel at Ouarzazate(1 night)\r\n\r\nIncluded Activities\r\n\r\nTelouet -  Visit the Telouet Kasbah\r\nAit Benhaddou – Visit the Kasbah Ait Ben Haddou\r\n\r\nOptional Activities\r\n\r\nOuarazate - Atlas Movie Studios - \r\nOuarzazate - Kasbah Taourirt - \r\nLunch at a Typical restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner ',
            },
            {
                day: 'Day 4',
                title: 'Ouarzaazate – Dades Gorges – Todra Gorges – Tinerhir',
                description:
                    'After breakfast, drive along the Route of a Thousand Kasbahs to the Dades Valley, a spectacularly beautiful area of contrasting colors and terrains. At the head of the valley is the Dades Gorge, a beautiful example of the intricate and effective irrigation systems used in this area. The lush green willows, roses and alfalfa sway in the gentle breeze at the bottom of the valley using water channeled from the river while the sides of the gorge are a barren, stark shade of brick red. Nearby is Todra Gorge, above the old town of Tinerhir and the ruined Glaoui Kasbah, a palatial structure intentionally built to intimidate invaders. The gorge is a dramatic 3,200 ft. canyon in the mountains whose massive walls rise steeply, cutting off sunlight from the gravel riverbed far below.\r\n\r\n  The Dades and Todra Gorges provide some of the best seasonal bird watching sites in Morocco, with larks, sand grouse, buzzards, falcons, warblers, and finches. \r\n\r\nAccommodation\r\n\r\nHotel (1 night)\r\n\r\nIncluded Activities\r\n\r\nDades Valley - bird watching sites\r\nTinghir - Glaoui Kasbah\r\n\r\nOptional Activities\r\n\r\nLunch at a restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner',
            },
            {
                day: 'Day 5',
                title: 'Tinghir - Erfoud – Merzouga',
                description:
                    'After breakfast, depart for Erfoud across the Tafilalet valley known under the name of small Mesopotamia. Stop on the way to visit the old system of irrigation used since immemorial time called Khattara system. Arrive to Erfoud, stop for lunch and to visit a fossil factory center where 500 million year old fossils are extracted, polished and exported around the globe. From Erfoud,drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes, the highest in Africa and one of the film locations for Lawrence of Arabia. Camp overnight in a nomad tent, furnished inside with a comfortable clean cot, fresh linens and blankets set on colorful Moroccan carpets.Take an optional camel trek to watch the sunset behind the Sahara dunes.\r\n\r\nAccommodation\r\n\r\nDesert Camp (1 night)\r\n\r\nIncluded Activities\r\n\r\nErfoud - visit the old system of irrigation\r\nErfoud - visit the fossil factory center\r\nTinghir - Glaoui Kasbah\r\n\r\nMeals Included\r\n\r\nBreakfast\r\n\r\nDinner at your encampment whilst experiencing the breathtaking sight of stars in the desert sky. \r\n',
            },
            {
                day: 'Day 6',
                title: 'Merzouga – Zagora',
                description:
                    'In the early morning wake up  for an optional camel ride to see the sunrise over the sand dunes followed by breakfast at your camp.\r\n\r\n Then depart for Zagora, a town located in the Draa Valley, founded by the Arabs in the twelfth century, Zagora was the starting point for the sultan Ahmad al-Mansour’s legendary desert crossing to conquer Timbuktu in 1591.The route was used before and after that to trade Atlas mineral salt for African gold. Today, a sign post informs you that the trip is 52 days by camel! At Zagora, camel caravans from the south were able to break their journey and rest before heading to the east and north of Africa. Even today the town continues to be the main marketplace of the south. \r\n\r\nAccommodation\r\n\r\nHotel or Riad at Zagora (1 night)\r\n\r\nIncluded Activities\r\n\r\nStop for photos and Enjoy the Draa Valley\r\nAgdez – Enjoy the oases of  palm grove \r\nTamegroute - Ancient Library \r\nTamegroute - Underground Village guided tour\r\nVisit of the Ceramic Quarter\r\nZagora - visit the old system of irrigation\r\n\r\nMeals Included\r\n\r\nBreakfast\r\n\r\nDinner\r\n',
            },
            {
                day: 'Day 7',
                title: 'Zagora – Marrakech',
                description:
                    'After  breakfast  begin your return to Marrakech travelling up the beautiful Draa Valley, one of the largest valley in Morocco crossed by  a huge river  called Draa .The  region is  fertile,  located though  the extension  of the river ,palm-shaded terraced farmland which is fed by a labyrinth of irrigation channels. All habitation is concentrated in groupings of houses called ksours, usually on hillsides high above the irrigated farmland,then continue over the High Atlas Mountains to arrive in Marrakech  crossing the high pass of Tichka 2260m\r\n\r\nAccommodation\r\n\r\nHotel or Riad at Marrakech (01 night)\r\n\r\nIncluded Activities\r\n\r\nAgdez – Enjoy the oases of  palm grove \r\nVisit of the Ceramic Quarter\r\n\r\nOptional Activities\r\n\r\nLunch at a restaurant\r\nDinner at a restaurant\r\n\r\nMeals Included\r\n\r\n Breakfast',
            },
            {
                day: 'Day 8',
                title: 'Departure Marrakech',
                description:
                    'Departure after check out, you will be transported to the airport for your return flight home. ',
            },
            {
                day: 'Day 9',
                title: 'OUARZAZATE – AIT BENHADDOU - MARRAKECH',
                description:
                    'After breakfast at your hotel, visit Taourirte Kasbah, the residence of\r\npasha Glaoui who ruled the south of Morocco during French protectorate.\r\nThe Kasbah is a sample of the Berber architecture in the area since\r\nimmemorial time. Transfer to visit the fortified village of Ait Ben Haddou,\r\nchosen by UNESCO as World Heritage Site. After lunch, drive to Marrakech\r\ncrossing the High Atlas Mountains with its fabulous landscapes and stop at\r\nthe highest pass called Tichka 2260 m high.\r\n\r\nAccommodation\r\n- Hotel or Riad at Marrakech (01 night)\r\nIncluded Activities\r\n- Ouarzazate visit Taourirte Kasbah\r\n- Visit of Ait Ben Haddou\r\nOptional Activities\r\n- Lunch atAit Ben Haddou\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 10',
                title: 'Marrakech city',
                description:
                    'After breakfast drive to visit Anima gardens one of the best gardens\r\nall over the world designed by Andre Heller .After visit of the Aromatic\r\ngarden in Ourika have a lunch and back to Marrakech and enjoy visiting\r\nJamaa El Fna Square, recognized as a verbal World Heritage Site by the\r\nU.N.E.SC.O. Here you will see a medieval scene, complete with jugglers,\r\nfortune tellers, snake charmers, dancers, herbalists, food and juice vendors,\r\nexperience all of the sights, sounds, smells, tastes and contrasts of this exotic\r\nplace.\r\n\r\nAccommodation\r\n- Riad or Hotel at Marrakech (1 night)\r\nIncluded Activities\r\n- Marrakech - visit Anima gardens\r\n- Ourika - the Aromatic garden\r\n- Marrakech – Enjoy Djemma el Fna square\r\n\r\nOptional Activities\r\n- Lunch at a Typical restaurant\r\n- Dinner at a Typical restaurant\r\nMeals Included\r\n- Breakfast',
            },
            {
                day: 'Day 11',
                title: 'MARRAKECH - CASABLANCA',
                description:
                    'Breakfast at the hotel head on to visit the new Aman museum, a\r\nunique museum in Morocco the visit will take you to know about irrigation\r\nsystems used in Morocco in agricultural field since immemorial time . Drive\r\nto visit the Medina with its colorful market visit Madersa Ben Youssef and the\r\nprivate Museum of Marrakech.\r\nAfter lunch depart to Casablanca crossing many fertile plateaus like\r\nRhamna and Chaouia Dinner and overnight in Casablanca.\r\n\r\nAccommodation\r\n- Hotel at Casablanca (01 night)\r\nIncluded Activities\r\n\r\n- Marrakech -Visit Aman museum\r\n- Marrakech-Medina Walking Tour\r\n- Marrakech -Visit Madersa Ben Youssef\r\nOptional Activities\r\n- Lunch at a Typical restaurant at Casablanca\r\n- Dinner at a Typical restaurant at Marrakech\r\n- Meals Included\r\n- Breakfast',
            },
            {
                day: 'Day 12',
                title: 'CASABLANCA – DEPARTURE',
                description:
                    'After breakfast you will be transferred to Mohamed V airport for flight back\r\nhome.\r\nEnd of our services',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'just-for-women-starting-from-marrakech',
        title: 'Just for Women Starting from Marrakech',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Marrakech',
        description:
            'Welcome to Morocco! Experience the wonders that Morocco offers with shopping in historic Medinas, regional cooking classes in Marrakech, a belly dancing class, a henna party, a ceramics workshop in...',
        url: 'https://mct-tours.com/trip/just-for-women-starting-from-marrakech/',
        accommodation: 'Hotels',
        tripType: 'Long-tours, Just for women',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/slqjkdsd.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Marrakech city tour',
                description:
                    'After breakfast, meet your tour guide and discover the city of Marrakech, with stops at the 12th century Koutoubia Mosque, the 16th century Saadian’s Tombs and the 19th century Bahia Palace. After lunch, visit a craft co-operative to learn about Moroccan handicrafts. Feel as though you are travelling through time when you take a walk inside the maze-like alleyways of the souks, amongst the craftsmen and traders offering beautiful pottery, healing remedies, spices and silver jewellery. Take the walk inside the medina, ending at the World Heritage Site of Jamaa El Fna Square. Experience the sights, sounds, smells and tastes of this magical place complete with jugglers, fortune tellers, snake charmers, dancers and herbalists.\r\n\r\nAccommodation\r\n\r\nHotel / Riad at Marrakech(01 night)\r\n\r\nIncluded Activities\r\n\r\nMarrakech- Koutoubia Mosque\r\nMarrakech- entrance Bahia Palace\r\nMarrakech – Walking Tour\r\nMarrakech - Djemma el Fna square\r\n\r\nOptional Activities\r\n\r\nMarrakech- Majorelle Gardens of Yves St. Laurent\r\nMarrakech – SPA &amp; Hammam\r\nLunch at a Local Restaurant\r\n Dinner at a typical Restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 2',
                title: 'Marrakech cooking class',
                description:
                    'After breakfast, prepare yourself for the cooking class. This culinary experience will start with a visit to the Spice Museum, which has recently opened in Marrakech. Here you will learn about the spices used in Moroccan cuisine.\r\n\r\nThen meet the chef who will welcome you to his kitchen and give you a choice of well-known Moroccan dishes to prepare: couscous with vegetables, or Tagines with vegetables and meat like lamb, goat or beef.\r\n\r\nPrepare your lunch and savor the dishes you have prepared during this Moroccan cuisine workshop experience.\r\n\r\nThen there is the option to have a spa treatment in the comfort of your Riad.\r\n\r\n\r\nAccommodation\r\n\r\nHotel / Riad at Marrakech(01 night)\r\n\r\nIncluded Activities\r\n\r\nMarrakech- Visit the Spices Museum\r\nMarrakech- enjoy the Moroccan Cooking\r\nMarrakech – Taste your handmade Moroccan cooking \r\n\r\nOptional Activities\r\n\r\nMarrakech – SPA &amp; Hammam\r\nDinner at a typical Restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 3',
                title: 'Marrakech – Experience Marrakech',
                description:
                    'After breakfast, prepare yourself for another rich experience with a choice between a pottery and an embroidery workshop. Here you will learn about the process of preparing. You will learn how to handcraft some utensils, which can be shipped to your home address once they have been dried and cooked in the fire.\r\n\r\nAccommodation\r\n\r\nHotel / Riad at Marrakech(01 night)\r\n\r\nIncluded Activities\r\n\r\nMarrakech- Visit of workshop of pottery or embroidery\r\nMarrakech- enjoy preparing articles made of earthenware or baked clay\r\n\r\nOptional Activities\r\n\r\nMarrakech – SPA &amp; Hammam\r\nDinner at a typical Restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 4',
                title: 'Marrakech - Departure',
                description:
                    'After breakfast, you will be transported to the airport for your return flight home. This includes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'just-for-women-starting-from-fes',
        title: 'Just for Women Starting from Fes',
        duration: '4 Days',
        nights: '3 Nights',
        startingPoint: 'Fes',
        description:
            'Welcome to Morocco! Experience the wonders that Morocco offers with shopping in historic Medinas, regional cooking classes in Fez, a belly dancing class, a henna party, a ceramics workshop in...',
        url: 'https://mct-tours.com/trip/just-for-women-starting-from-fes/',
        accommodation: 'Hotels',
        tripType: 'Long-tours, Just for women',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/98587576.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Fez - City tour of Fez',
                description:
                    'Breakfast is at your hotel, then we set out for a city tour of Fez, the spiritual and intellectual capital of ancient Morocco. Founded in the 9th century, Fez was the first Imperial City.\r\n\r\nAmong the sites you will see are the impressive medina with its different gates, Mosques, tanneries, Attarine Medersa, Nejjarine Fountain and its Fondouk. The latter houses a museum devoted to wood crafts, set in a beautiful restaurant in the Medina.\r\n\r\nAfter lunch, visit Dar Batha Museum, the Mellah or Jewish Quarter, the King&#039;s palace (from outside) and Bab BouJeloud.\r\n\r\nAccommodation\r\n\r\nOvernight at Hotel / Riad (01 night)\r\n\r\nIncluded Activities\r\n\r\nFez - Tanneries  quarter\r\nFez  - El-Attarine Medersa\r\nFez - Nejjarine Foundouk\r\nFez  - Medina Walking Tour\r\nFez - Jewish Quarter\r\n\r\nMeals included\r\n\r\nBreakfast \r\n\r\nOptional activities\r\n\r\nLunch at a Local Restaurant\r\n Dinner at a typical Restaurant',
            },
            {
                day: 'Day 2',
                title: 'Fez - Cooking class',
                description:
                    'After breakfast, prepare yourself for the cooking class. The staff of the cooking school will escort you to the local market, and will help you to shop alongside the locals who do this every day, to get the necessary spices, vegetables and meat to prepare your chosen meal.\r\n\r\nThen you will meet the chef in his kitchen. He will present the menu selection – well known dishes in Fez are couscous with vegetables or chicken Tagine with lemon and preserved olives - and you will choose which one you would like to cook.\r\n\r\nPrepare your lunch and savor the experience. Eat what you cooked, using all your senses to evaluate your hard work. Then you can look forward to teaching your family about your experience when you return home.\r\n\r\nAccommodation\r\n\r\nHotel / Riad at Fes (01 night)\r\n\r\nIncluded Activities\r\n\r\nFes - Visit the Spices Museum\r\nFes - enjoy the Moroccan Cooking\r\nFes – Taste your handmade Moroccan cooking \r\n\r\nOptional Activities\r\n\r\nFes – SPA &amp; Hammam\r\nDinner at a typical Restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 3',
                title: 'Fez - ceramic workshop',
                description:
                    'After breakfast, drive to the ceramic complex located not far from the city of Fez. The Moroccan government has decided to create a separate quarter for potters where they produce their handcrafted items.\r\n\r\nIn the workshop, meet the Maalem (the master) who will describe and teach you the process of making the pottery of Fez. This is considered the best pottery in Morocco.\r\n\r\nAfternoon free at leisure.\r\n\r\nAccommodation\r\n\r\nHotel / Riad at Fes(01 night)\r\n\r\nIncluded Activities\r\n\r\nFes- Visit of workshop of Ceramic\r\nFes - enjoy preparing articles made of earthenware or baked clay\r\n\r\nOptional Activities\r\n\r\nFes – SPA &amp; Hammam\r\nDinner at a typical Restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 4',
                title: 'Fez - Departure',
                description:
                    'After breakfast you will be transported to the airport for your return flight home. This includes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'jewish-heritage',
        title: 'Jewish heritage',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Casablanca',
        description:
            'Morocco today is appreciated for its natural beauty, ancient history, culture and rich diversity, the Moroccan history was characterised by the alternation of many civilisation starting from Phoenician , Roman...',
        url: 'https://mct-tours.com/trip/jewish-heritage/',
        accommodation: 'Camps and Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/Snake-Road.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca – Rabat',
                description:
                    'Arrive at Casablanca international airport\r\nMohamed V. Meet your tour guide and begin your\r\njourney with an orientation tour of Casablanca\r\nincluding the visit of Hassan II mosque from outside.\r\nDrive to Rabat, the capital of Morocco.\r\nDinner and accommodation at your hotel in Rabat.',
            },
            {
                day: 'Day 2',
                title: 'Rabat - Meknes - Volubilis',
                description:
                    'After breakfast at your hotel, start the city tour of\r\nRabat, the capital of Morocco since 1912, including\r\nthe Royal Palace from outside, Mohammed V\r\nMausoleum, Hassan Tower, Chellah Necropolis and\r\nOudaya Kasbah.\r\nAfter noon Visit the Mellah or the Jewish quarter\r\nvisit also the synagogue of Rabbi Shalom Zaoui\r\n\r\nlocated in the Medina of the city of Rabat .Drive to\r\nMeknes .\r\n- Lunch under own arrangement\r\n- Dinner and overnight in Meknes.',
            },
            {
                day: 'Day 3',
                title: 'Meknes Volubilis - Fes',
                description:
                    'After breakfast, start vi the fourth Imperial city,\r\nMeknes, which has been classified by the UNESCO\r\nas a World Heritage. Visit of the Mallah with its\r\nnarrow lanes and colorful courtyard and the main\r\nsynagogue called Talmud Tourah located in the\r\nJewish quarter. Afterwards, visit of the vast Sultan&#039;s\r\nStables Swani and the majestic gate of Bab\r\nMansour, a majestic gate characterized with its\r\nbeautiful stylish Andalusian mosaics and Roman\r\npillars. Stop for lunch and then drive to Volubilis, the\r\nRoman site in Morocco which takes you back in time\r\nonce walking in the footsteps, Continuation to Fes.\r\n- Lunch under own arrangement\r\n- Dinner and overnight at your hotel in Fes',
            },
            {
                day: 'Day 4',
                title: 'Fez city tour',
                description:
                    'After breakfast, start the city tour of Fez including\r\nthe Mellah, the oldest Jewish quarter. Visit of the\r\nJewish cemetery characterized by its white washed\r\ncemetery which is considered as one of the most\r\nbeautiful in the world. Visit of Ben Danane\r\nSynagogue, a 17th Century Synagogue, located in\r\nthe ancient Mellah. The city tour includes also Slat al\r\nFassayine Synagogue Jewish grave yard with its\r\nbrilliant white tombs.\r\n\r\nAfternoon visit of the impressive medina with its\r\ndifferent gates, Mosques, Tanneries, Bab\r\nBouJeloud, Attarine Mederssa , tanneries weavers,\r\nNejjarine fountain, Karaouyine mosque from the\r\noutside, Dar Batha Museum, Mellah, or Jewish\r\nQuarter. Then have a walk around the souks.\r\n- Lunch under own arrangement\r\n- Dinner and Overnight in Fez.',
            },
            {
                day: 'Day 5',
                title: 'Fez-Ifrane-Midelt-Merzouga',
                description:
                    'After breakfast, the day begins with a morning trip\r\nacross the Middle Atlas Mountains with its beautiful\r\ncedar forests that cover their slopes. Stop in Ifrane,\r\nan Alpine town renowned about its important ski\r\nresort .Stop for a short break for taking pictures\r\nContinue driving through the middle Atlas and\r\nadmire beautiful landscapes .Stop for lunch in\r\nMidelt. In the afternoon, drive to Errachidia through\r\nthe Middle Atlas and the High Atlas range, on the\r\nsame way cross the Ziz Valley with its magnificent\r\nGorges. Upon arrival at Erfoud visit fossils factory,\r\nthen proceed to Merzouga by 4x4 cars.\r\n- Lunch under own arrangement\r\n- Dinner and overnight at the camp in Merzouga.',
            },
            {
                day: 'Day 6',
                title: 'Merzouga -Rissani-Todra Gorges- Ouarzazate',
                description:
                    'After breakfast drive to Rissani, a town which grew\r\naround an old souk and today is enclosing the tomb\r\n\r\nof the founder of the Cherifienne Empire of Morocco,\r\nHis name is Moulay Ali Cherif. Visit Ksar Abou Am.\r\nContinue to the old town of Tinghir. Stop for lunch at\r\nTodra gorges, visit the Todra gorges and cross the\r\nRoad of 1000 Kasbahs crossing the Dades valley\r\nwith its fabulous Kasbahs and villages. Overnight\r\nat your hotel in Ouarzazate.\r\n- Lunch under own arrangement\r\n- Dinner and overnight at your hotel in Ouarzazate.',
            },
            {
                day: 'Day 7',
                title: 'Ouarzazate-Ait Benhaddou-Marrakesh',
                description:
                    'After breakfast drive to Ait Ben Haddou village, visit\r\nAit Benhaddou Kasbah recognized as world heritage\r\nby U.N.E.S.C.O SINCE 1987\r\nIt was a setting for movies such as Lawrence of\r\nArabia, and Gladiator. Share a mint tea ceremony\r\nwith a local family living at the village. Continue to\r\nMarrakesh crossing the high Atlas Mountains.\r\nPassing through the Tichka pass 2260m\r\n- Lunch under own arrangement\r\n- Dinner and overnight at your hotel in Marrakesh.',
            },
            {
                day: 'Day 8',
                title: 'Marrakesh city tour',
                description:
                    'After breakfast start Marrakesh city tour, the\r\nsights include the following monument: Koutoubia\r\nMosque, Mederssa Ben Youssef, the private\r\nmuseum, crossing the medina with its colorful\r\nmarket, Visit Saadians’ Tombs and Bahia Palace,\r\n\r\nIn the afternoon, visit Rabbi Pinhas Synagogue, the\r\noldest synagogue in Marrakech, Rabbi Pinhas, it is\r\nlocated in Rue Talmud Torah, which is still in use. Its\r\nlocation in the historic Mellah established in 1538\r\nnext to the local Jewish cemetery, the Miaara, with\r\nits brilliant white tombs.\r\nThe tour finishes at Jamaa El Fna Square.\r\n- Lunch under own arrangement\r\n- Dinner and overnight at your hotel in Marrakesh.',
            },
            {
                day: 'Day 9',
                title: 'Marrakech-Casablanca',
                description:
                    'After breakfast, drive to Casablanca crossing the\r\nHaouz plateau and Chaouia Plateau. Upon arrival\r\ncheck in and relax for a while then start the city tour\r\nof Morocco’s largest City, Casablanca.  The tour\r\nincludes the Jewish Museum and the Beth El\r\nsynagogue.\r\n- Lunch under own arrangement\r\n- Dinner and overnight at your hotel in Marrakesh.',
            },
            {
                day: 'Day 10',
                title: 'Departure Casablanca',
                description:
                    'After check out, you will be transported to the\r\nairport in Casablanca for your home flight. This\r\nconcludes our services.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'grand-morocco-tour',
        title: 'Grand Morocco Tour',
        duration: '11 Days',
        nights: '10 Nights',
        startingPoint: 'Casablanca',
        description:
            'Discover the hidden secrets in the Imperial Cities whose souks awaken your senses with their exotic spices, snake charmers, musicians and traditional craftsmen practicing their trades passed down by many...',
        url: 'https://mct-tours.com/trip/grand-morocco-tour/',
        accommodation: 'Camps and Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/rigel-No_Y3bn4lNQ-unsplash-960x450-1.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca',
                description:
                    'Meet your tour guide at Casablanca Airport and transfer to your hotel.  After a short break at your hotel start a short city tour including the visit of Hassan II Mosque and Mohammed V Square. \r\n\r\nAccommodation\r\n\r\nCasablanca - Hotel (01 night)\r\n\r\nIncluded Activities\r\n\r\nCasablanca -Visit Hassan II mosque (from the outside).\r\nCasablanca - Mohammed V Square\r\n\r\nOptional Activities\r\n\r\nCasablanca – Dinner  at a local restaurant \r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner(optinal)',
            },
            {
                day: 'Day 2',
                title: 'Casablanca - Rabat - Volubilis - Fez',
                description:
                    'After breakfast, drive to Rabat, the capital of Morocco, upon arrival visit the Royal Palace (from the outside) the residence of the King Mohammed VI, Mohammed V Mausoleum, Hassan Tower and Chellah Necropolis. After lunch drive to Volubilis, another World Heritage Site declared By U.N.E.S.C.O since 1994 with the most impressive Roman mosaics and ruins in Morocco.  Afterwards, drive to Fes through Sais Plateau.\r\n\r\nAccommodation\r\n\r\nRiad or Hotel at Fez (01 night)\r\n\r\nIncluded Activities\r\n\r\nRabat - Royal Palace (from the outside), \r\nRabat - Mohammed V Mausoleum, \r\nRabat - Hassan Tower,\r\nRabat -  Chellah Necropolis \r\nVolubilis  \r\n\r\nOptional Activities\r\n\r\nRabat – Lunch  at a restaurant \r\nFes - Dinner  at a restaurant \r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner(optinal)',
            },
            {
                day: 'Day 3',
                title: 'Fes',
                description:
                    'After breakfast start the city tour of Fez, the spiritual and intellectual capital of ancient Morocco and the first Imperial City founded in the IX century. Among the sites you will discover the impressive medina with its different gates, Tanners quarter, Karaoiuyine Mosque, El-Attarine Medersa and the impressive Fondouk el-Nejjarine with its elegant fountain, the foundouq actually is housing a museum devoted to wood crafts in a beautifully restored 18th century building.\r\n\r\n   After lunch in a typical Moroccan Restaurant in the medina finish your city tour by  visiting  the Dar Batha Museum, the Mellah (Jewish Quarter), the King&#039;s Palace from the outside and Bab Boujloud. \r\n\r\nAccommodation\r\n\r\nHotel or Riad at Fez \r\n\r\nIncluded Activities\r\n\r\nFez – Dar Batha Musuem.\r\nFez - El-Attarine Medersa\r\nFez – visit of the Jewish quarter.\r\nFez - Visit tFondouk el-Nejjarine\r\nFez – The King palace from outside\r\nFez – Bab Boujloud\r\nFez – visit of the Medina with a walking tour\r\n\r\nOptional Activities\r\n\r\nFes – Lunch  at a Local restaurant \r\nFes - Dinner  at a Local restaurant \r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner(optinal)',
            },
            {
                day: 'Day 4',
                title: 'Fez - Ifrane - Midelt- Erfoud ',
                description:
                    'After breakfast depart to Erfoud. Drive through the middle Atlas Mountains with its rich and largest cedar forest in our country. Along the way, stop in the most beautiful city: Ifrane, an alpine town and ski resort, for refreshments. \r\n\r\nHave lunch in Midelt, a town that lies on the border between the High and Middle Atlas Mountains and is the starting point for southern Morocco. After lunch, drive to Er-Rachidia, where the palm groves of the Ziz and Tafilalt begin. Keep driving through the Tafilalet valley known about the production of the best date in Morocco called the royal date or Majhoul in the language of the local.\r\n\r\nAccommodation\r\n\r\nHotel at Erfoud (01 night)\r\nIncluded Activities\r\nIfrane- Short stop\r\nMidelt  – Short stop \r\nTafilalet valley – Enjoy palm groves\r\n\r\nOptional Activities\r\n\r\nLunch at a Local Restaurant at Midelt\r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner',
            },
            {
                day: 'Day 5',
                title: 'Erfoud - Rissani - Merzouga (Erg Chebbi)',
                description:
                    'After Breakfast visit a fossil factory center where 500 million year old fossils are extracted, polished and exported around the globe. From Erfoud, drive into the Sahara Desert to Merzouga by 4WD, the site of the Merzouga Dunes, the highest in Africa and one of the film locations for Lawrence of Arabia. On the way visit Rissani, the ancient capital of Tafilalet region; it was a former major caravan center, visit of the mausoleum of Moulay Ali Cherif the founder of Alaouite Dynasty of Morocco in 1631.Lunch at local restaurant, then explore the Berber villages around, including “Khamlia” where you will attend a local Gnawas music performance. Originating from North and West Africa, the Gnawas are not only known for their music, but also their healing rituals. At the arrival have a tea ceremony followed by dinner prepared by a Berber cook and animated by the percussion music of the desert nomads. \r\n\r\nAccommodation\r\n\r\nCamp  at Merzouga(01 night)\r\nIncluded Activities\r\nErfoud- Visit of the Fossil factory\r\nErfoud- visit of the Mausoleum of Moulay\r\nSahara Desert – Enjoy the sunset\r\nSahara Desert - Amazigh dinner with Gnaoua music\r\n\r\nOptional Activities\r\n\r\nSahara Desert -Camel ride\r\nSahara Desert - Quad\r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner',
            },
            {
                day: 'Day 6',
                title: 'Merzouga - Todra Gorges – Ouarzazate',
                description:
                    'Awake before dawn for an optional camel ride to see the sun rise over the sand dunes followed by breakfast at your camp. Departure to Todra Gorges, On the way, stop to learn about the old  irrigation system used  by the local to irrigate their oasis and to produce what they needed to satisfy their daily needs .  Drive to Todra gorges, it is a dramatic 3,200 ft. canyon in the mountains whose massive walls rise steeply, cutting off sunlight from the gravel riverbed far below. Lunch at local restaurant, and then continue to Ouarzazate through the Dades Valley, a spectacularly beautiful area of contrasting colours and terrains, also known as the valley of a thousand Kasbahs.\r\n\r\nAccommodation\r\n\r\nHotel at Ouarzazate(01 night)\r\nIncluded Activities\r\nRissani - Visit of the irrigation system\r\nTodra Gorges – Short break \r\nEnjoy the Dades Valley\r\n\r\nOptional Activities\r\n\r\nLunch at a Local Restaurant at Boumalne Dades or Kalaat Mgouna\r\n Dinner at a typical Restaurant at Marrakech\r\n\r\nMeals Included\r\n\r\nBreakfast\r\nDinner',
            },
            {
                day: 'Day 7',
                title: 'Ouarzazate – Marrakech     ',
                description:
                    'After breakfast you drive to Marrakech. En route, stop to visit the Kasbah of Ait Benhaddou, a World Heritage Site. During the visit of the Kasbah, stop for a while for a mint tea with a Berber family inside the Kasbah. Stop for lunch before heading to Marrakech crossing the High Atlas Mountains with its beautiful landscapes. \r\n\r\nAccommodation\r\n\r\nHotel at Marrakech (01 night)\r\n\r\nIncluded Activities\r\n\r\nOuarzazate – Short break \r\nVisit of Kasbah Ait Ben Haddou\r\n\r\nOptional Activities\r\n\r\nAit Benhaddou - Henna Tattoo\r\nOuarazate - Atlas Movie Studios \r\nOuarzazate - Kasbah Taourirt \r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 8',
                title: 'Marrakech City Tour     ',
                description:
                    'After breakfast begin your tour of the Red Pearl city of Morocco. The city tour includes the Koutoubia Mosque (from outside), Saadian’s Tombs, Bahia Palace, Medersa Ben Youssef, a private museum, the colourful souks (markets) inside the medina. After lunch, have a tour with browsing and shopping inside the souk beginning and ending at Jamaa El Fna Square, a World Heritage Site. Here you will see a medieval scene, complete with jugglers, fortune tellers, snake charmers, dancers, herbalists, food and juice vendors, experience all of the sights, sounds, smells, tastes and contrasts of this exotic place. \r\n\r\nAccommodation\r\n\r\nRiad or Hotel at Marrakech (1 night)\r\n\r\nIncluded Activities\r\n\r\nMarrakech - craft co-operative\r\nMarrakech- Koutoubia Mosque\r\nMarrakech- entrance Saadian Tombs &amp; Bahia Palace*\r\nMarrakech- Medersa Ben Youssef\r\nMarrakech – Walking Tour\r\nMarrakech - Djemma el Fna square\r\n\r\n\r\n\r\nOptional Activities\r\n\r\nLunch at a Typical restaurant\r\nDinner at a Typical restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 9',
                title: 'Marrakech – Essaouira',
                description:
                    'After breakfast, have a new experience then drive west to the picturesque coastal town of Essaouira located on the Atlantic Ocean. Overlooking a scattering of wave-ravaged offshore islands, it offers a sandy beach stretching for miles to the south, while richly forested hills extend to the east. Ancient and narrow alleys wind through the medina and among the souks, a World Heritage Site. Artists, fishermen, farmers, craftsman all live peacefully in this enchanted coastal town. On the way we stop at an Argan Oil cooperative. Enjoy a fresh seafood lunch in Essaouira and after we visit the Skala and stroll through the medina.\r\n\r\nAccommodation\r\n\r\nRiad or Hotel at Essaouira(1 night)\r\n\r\nIncluded Activities\r\n\r\nEssaouira - Guided walking tour( Skala)\r\nEssaouira - Argan Oil cooperative\r\n\r\nOptional Activities\r\n\r\nEssaouira -  Wine Tasting at the factory\r\nEssaouira – Hammam and/or  Berber Massage \r\nEssaouira - Horse Riding \r\nEssaouira - Seafood Market Lunch \r\nLunch at a Typical restaurant\r\nDinner at a Typical restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 10',
                title: 'Essaouira - Safi - El Jadida – Casablanca      ',
                description:
                    'After breakfast, leave the city of Essaouira to depart for Casablanca, crossing the different fertile plateau of Doukkala and Abda.   On the way, stop in Safi, a fishing city where the Portuguese influence is seen in the ruins of the Ksar El Bahr fortress. Stop for lunch in El Oualidia,  after lunch  explore El Jadida, once the main Portuguese port in North Africa, and the center of all Portuguese operations in the Atlantic ocean . Mazagan, as it was called by the Portuguese, was under their control until the 19th century when Morocco re-conquered and renamed it El Jadida. The influence of the Portuguese remains, especially in the walled city left by the Portuguese visit the cistern which could hold enough water for 5,000 people for two months.\r\n\r\nAccommodation\r\n\r\nHotel at Casablanca(01 night)\r\n\r\nIncluded Activities\r\n\r\nSafi – Short visit\r\nOualidia  – Short stop\r\nEljadida-  Visit of the Portuguese cistern \r\n\r\nOptional Activities\r\n\r\nEljadida -  Lunch at a Typical restaurant\r\nCasablanca -  Dinner at restaurant\r\n\r\nMeals Included\r\n\r\nBreakfast',
            },
            {
                day: 'Day 11',
                title: 'Casablanca',
                description:
                    'After check out, you will be transported to the Casablanca airport for your return flight. \r\n\r\nThis concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: 'garden-and-sahara-tour-nature-discovery',
        title: 'Garden and Sahara Tour (Nature & Discovery)',
        duration: '12 Days',
        nights: '11 Nights',
        startingPoint: 'Casablanca',
        description:
            'Discover the hidden secrets in the Imperial Cities whose souks awaken your senses with their exotic spices, snake charmers, musicians and traditional craftsmen practicing their trades passed down by many...',
        url: 'https://mct-tours.com/trip/garden-and-sahara-tour-nature-discovery/',
        accommodation: 'Camps and Hotels',
        tripType: 'Long-tours',
        difficulty: 'Easy',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/casa.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca - Rabat',
                description:
                    'Arrival in Casablanca Mohamed V airport. Welcome and assistance by MCT guide.\r\nDrive to Rabat, the capital of Morocco. Upon arrival explore Chellah necropolis with its\r\nmagnificent gardens. After lunch, drive to Salé to visit the Bouknadel Gardens sponsored\r\nby Mohamed V Foundation. Its target is to protect the environment and give more chance\r\nfor nature’s lovers to be close to the nature, to raise their awareness and protect it against\r\nthe climate change. Dinner and accommodation in\r\nAccommodation\r\n- Rabat - Hotel (01 night)\r\nIncluded Activities\r\n -Rabat – visit the Chellah necropolis\r\n -Salé - visit the Bouknadel Gardens\r\nOptional Activities\r\n-Lunch at restaurant in Rabat\r\nMeals Included\r\n -Breakfast\r\n -Dinner',
            },
            {
                day: 'Day 2',
                title: 'Rabat – Chefchaoun',
                description:
                    'Depart to Chefchaouen a picturesque hillside town built by refugees from\r\nAndalusia.\r\nChefchaouen, with its Spanish character, whitewashed houses, tiny balconies, blue- painted doors and alleyways is a lovely place to stroll. After lunch, you start your tour with the visit of the Kasbah located in the heart of the town founded in the XVII century.\r\n\r\nAccommodation\r\n- Chefchaouen - Hotel (01 night)\r\n\r\nIncluded Activities\r\n- Chefchaouen exploring the Blue city\r\n- Chechaouen - visit of Outta Hammam kasbah\r\n\r\nOptional Activities\r\n- Lunch at restaurant in Chefchaouen\r\n\r\nMeals Included\r\n-Breakfast\r\n-Dinner',
            },
            {
                day: 'Day 3',
                title: 'CHEFCHAOUEN - MEKNES – VOLUBILIS',
                description:
                    'Check out after breakfast and drive to Meknes, whose medina has been classed by UNESCO as a World Heritage Site.  The visit includes Sultan&#039;s Stables, Koubba El Khayatine and the majestic gate of Bab Mansour. After lunch, drive to Volubilis, the Roman city in Morocco, located in very open site characterized by the beauty of its strategic location inside a very vast plateau which gives a chance to watch the ruins and the different mosaics.\r\nAccommodation\r\n- Riad or Hotel at Meknes (01 night)\r\nIncluded Activities\r\n- Meknes – Visit of the Sultan’s Stables\r\n- Meknes – Visit of Moulay Ismail’s Mausoleum\r\n- Meknes – Visit of Koubba El Khayatine\r\n- Meknes – Visit of the majestic Bab Mansour\r\n- Visit of Volubilis\r\nOptional Activities\r\n- Meknes – Lunch at a restaurant\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 4',
                title: 'Meknes - FEZ',
                description:
                    'After breakfast, drive to Fes, the oldest city of the four Moroccan Imperial Cities. Upon arrival start the city of the Old Medina including, the Tannery quarter, the Attarine Medersa, the Nejjarine Fountain, the Moulay Idriss Mausoleum and the Karaouine Mosque. After lunch, finish your visit with the panoramic view of Fez from the north side of the city.\r\n\r\nAccommodation\r\n- Hotel or Riad at Fez (01 night)\r\nIncluded Activities\r\n- Medina with a walking tour\r\n- Fez – visit of the Karaoiuyine Mosque,\r\n- Fez - Visit of El-Attarine Medersa\r\n- Fez - visit el-Nejjarine Fountain\r\n- Fez - visit of The Dar Batha Museum\r\n- Fez - visit the Moulay Idriss Mausoleum\r\n. Optional Activities\r\n- Fes – Lunch at a local restaurant\r\n\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 5',
                title: 'FEZ',
                description:
                    'After breakfast, have a walk inside the new Fez, founded in the XIV century, and\r\nvisit the largest gardens in the city called Boujloud gardens, which was used by the Merinides sultans for relaxation and picnic during spring time. Afterward, visit the Batha Museum with its magnificent gardens. Free lunch and afternoon free at leisure.\r\n\r\nAccommodation\r\n\r\n- Hotel or Riad at Fez (01 night)\r\nIncluded Activities\r\n- Fez – Medina walking tour\r\n- Fez - visit Boujloud gardens,\r\n- Fez - visit of The Dar Batha Museum\r\nOptional Activities\r\n- Fes – Lunch at a local restaurant\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 6',
                title: 'FEZ – IFRANE - MIDELT',
                description:
                    'After breakfast, drive to Midelt with a stop on the way to watch an\r\nimportant lake situated inside the forest of green oak trees. Stop in Ifrane, an\r\nalpine city known for its beautiful parks and its famous ski resort and cedar\r\ntrees. Admire the beautiful landscapes of the middle Atlas. Have a chance to\r\nfeed the maggot (Barbary Apes) monkeys living in the local cedar forest.\r\nAfternoon drive to Midelt, a town situated between the Middle Atlas and\r\nHigh Atlas Mountains.\r\n\r\nAccommodation\r\n- Hotel at Midelt (01 night)\r\nIncluded Activities\r\n- Ifrane- Short stop\r\n- Midelt – Enjoy the landscapes of the middle Atlas\r\n\r\nOptional Activities\r\n- Lunch at a Local Restaurant at Midelt\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 7',
                title: 'MIDELT – ERFOUD – MERZOUGA',
                description:
                    'After breakfast, drive to Erfoud on the way cross the beautiful fertile\r\nvalleys of Ziz and Tafilalet. Stop in Erfoud to visit a marble center where 500\r\nmillion year old fossils are extracted, polished and exported around the\r\nglobe. Stop for lunch and visit the city of Rissani the home town of Alaoui\r\ndynasty located in Tafilalet valley, known as the small Mesopotamia of Africa.\r\nAfter the visit of the Ksar Ouled Ben Abdelhalim, head over the Sahara Desert\r\nto Merzouga.\r\n\r\nAccommodation\r\n- Camp at Merzouga (01 night)\r\nIncluded Activities\r\n- Erfoud- Visit the marble center\r\n- Rissani - visit of the Ksar Ouled Ben Abdelhalim\r\n- Merzouga –Enjoy the dunes\r\nOptional Activities\r\n- Merzouga –Camel ride\r\n- Lunch at Rissani\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 8',
                title: 'MERZOUGA - TINGHIR – OUARZAZATE',
                description:
                    'Take an optional camel trek to admire the sunrise behind the Sahara\r\ndunes, return to your camp for breakfast; afterward, leave for Tinghir and\r\nTodra Gorges - the highest and narrowest gorges in Morocco stop for lunch.\r\nAfter have a free time enjoy walking inside the gorges for taking some\r\npictures .\r\n\r\nAfter lunch drive to Ouarzazate, crossing the road of the thousand\r\nKasbahs with its amazing valleys, like Dades known by the production of\r\nroses, and the Skoura valley, then arrive to the city of Ouarzazate the capital\r\nof the cinema in Africa, on the way you will have the opportunity to take\r\nsome nice photographic shots.\r\n\r\nAccommodation\r\n- Hotel or Riad at Marrakech (01 night)\r\nIncluded Activities\r\n- Ouarzazate visit Taourirte Kasbah\r\n- Visit of Ait Ben Haddou\r\nOptional Activities\r\n- Lunch atAit Ben Haddou\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 9',
                title: 'OUARZAZATE – AIT BENHADDOU - MARRAKECH',
                description:
                    'After breakfast at your hotel, visit Taourirte Kasbah, the residence of\r\npasha Glaoui who ruled the south of Morocco during French protectorate.\r\nThe Kasbah is a sample of the Berber architecture in the area since\r\nimmemorial time. Transfer to visit the fortified village of Ait Ben Haddou,\r\nchosen by UNESCO as World Heritage Site. After lunch, drive to Marrakech\r\ncrossing the High Atlas Mountains with its fabulous landscapes and stop at\r\nthe highest pass called Tichka 2260 m high.\r\n\r\nAccommodation\r\n- Hotel or Riad at Marrakech (01 night)\r\nIncluded Activities\r\n- Ouarzazate visit Taourirte Kasbah\r\n- Visit of Ait Ben Haddou\r\nOptional Activities\r\n- Lunch atAit Ben Haddou\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 10',
                title: 'Marrakech city',
                description:
                    'After breakfast drive to visit Anima gardens one of the best gardens\r\nall over the world designed by Andre Heller .After visit of the Aromatic\r\ngarden in Ourika have a lunch and back to Marrakech and enjoy visiting\r\nJamaa El Fna Square, recognized as a verbal World Heritage Site by the\r\nU.N.E.SC.O. Here you will see a medieval scene, complete with jugglers,\r\nfortune tellers, snake charmers, dancers, herbalists, food and juice vendors,\r\nexperience all of the sights, sounds, smells, tastes and contrasts of this exotic\r\nplace.\r\n\r\nAccommodation\r\n- Riad or Hotel at Marrakech (1 night)\r\nIncluded Activities\r\n- Marrakech - visit Anima gardens\r\n- Ourika - the Aromatic garden\r\n- Marrakech – Enjoy Djemma el Fna square\r\n\r\nOptional Activities\r\n- Lunch at a Typical restaurant\r\n- Dinner at a Typical restaurant\r\nMeals Included\r\n- Breakfast',
            },
            {
                day: 'Day 11',
                title: 'MARRAKECH - CASABLANCA',
                description:
                    'Breakfast at the hotel head on to visit the new Aman museum, a\r\nunique museum in Morocco the visit will take you to know about irrigation\r\nsystems used in Morocco in agricultural field since immemorial time . Drive\r\nto visit the Medina with its colorful market visit Madersa Ben Youssef and the\r\nprivate Museum of Marrakech.\r\nAfter lunch depart to Casablanca crossing many fertile plateaus like\r\nRhamna and Chaouia Dinner and overnight in Casablanca.\r\n\r\nAccommodation\r\n- Hotel at Casablanca (01 night)\r\nIncluded Activities\r\n\r\n- Marrakech -Visit Aman museum\r\n- Marrakech-Medina Walking Tour\r\n- Marrakech -Visit Madersa Ben Youssef\r\nOptional Activities\r\n- Lunch at a Typical restaurant at Casablanca\r\n- Dinner at a Typical restaurant at Marrakech\r\n- Meals Included\r\n- Breakfast',
            },
            {
                day: 'Day 12',
                title: 'CASABLANCA – DEPARTURE',
                description:
                    'After breakfast you will be transferred to Mohamed V airport for flight back\r\nhome.\r\nEnd of our services',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: '4-days-from-fes-and-back-to-marrakech',
        title: '4 Days From Fes and back to Marrakech',
        duration: '4 Days',
        nights: '3 Nights',
        startingPoint: 'Fes',
        description:
            'Embark on an unforgettable journey through the heart of Morocco, exploring its diverse landscapes, vibrant cities, and rich cultural heritage. This 4-day adventure will take you from the medieval city...',
        url: 'https://mct-tours.com/trip/4-days-from-fes-and-back-to-marrakech/',
        accommodation: 'Camp and Hotel',
        tripType: 'Long-tours, Desert tours',
        difficulty: 'Easy',
        arrivalCity: 'Marrakech',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/jdslkdlqs.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Fez - Erfoud - Merzouga',
                description:
                    'Arise early for the drive to Erfoud with a stop in Ifrane, an alpine city known for its beautiful park and its famous ski resort. Continue your drive to Midelt, a town located between the Middle Atlas and High Atlas Mountains. Stop for lunch. After lunch, start to cross the beautiful fertile valleys of Ziz and Tafilalet. Stop in Erfoud, visit a marble center where 500 million year old fossils are extracted, polished and exported around the globe. Drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes, the highest in Africa and one of the filming sites for Lawrence of Arabia. Take an optional camel trek to watch the sun set behind the Sahara dunes. Camp overnight in a nomad tent, furnished inside with a comfortable clean cot, fresh linens and blankets set on colourful Moroccan carpets. \r\n\r\nAccommodation\r\n- Camp at Merzouga(01 night)\r\n\r\nIncluded Activities\r\n- Ifrane- Short stop\r\n- Midelt  – Short stop \r\n- Erfoud- Visit of Fossils\r\n- Merzouga – enjoy the dunes\r\n\r\nOptional Activities\r\n- Lunch at a Local Restaurant at Midelt\r\n\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 2',
                title: 'Merzouga- Todra – Boumalne Dades',
                description:
                    'After breakfast, drive to Todra Gorge, passing through the old town of Tinghir with a stop to visit the ruined Glaoui Kasbah. Sheer cliffs rise up dramatically on each side of the narrow corridor that forms the Todra Gorge. Mountain goats and eagles are sometimes seen on the high cliffs. Then drive through the Dades Valley, a spectacularly beautiful area of contrasting colours and terrains, also known as the valley of a thousand Kasbahs. The Dades Gorge is a beautiful example of the intricate and effective irrigation systems needed in this area. The lush green willows, plants and trees sway in the breezes at the bottom of the valley while the sides of the gorge are a barren, stark shade of brick red. The Dades and Todra Gorges provide some of the best seasonal bird watching sites in Morocco, with many types of lark, sand grouse, buzzards, falcon, warblers, finches, and others. \r\n\r\nAccommodation\r\n- Hotel at Boumalne Dades(01 night)\r\n\r\nIncluded Activities\r\n- Tinghir- Visit of the Glaoui Kasbah \r\n- Dades Gores – Short stop \r\n\r\nOptional Activities\r\n- Lunch at a Local Restaurant at Midelt\r\n\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 3',
                title: 'Dades – Ouarzazate- Ait Ben Haddou',
                description:
                    'After breakfast, drive to Ait Ben Haddou. En route, stop at Ouarzazate for an optional sight-seeing to the film studios where many famous films were made, such as, Gladiator, the Four Feathers, Romancing the Stone, Cleopatra, the Sheltering Sky, Jewel of the Nile and Lawrence of Arabia a sightseeing , after lunch continue to Ait Benhaddou, an exceptionally well-preserved site which was declared a World Heritage Site by UNESCO in 1987. \r\n\r\nAccommodation\r\n- Hotel at Ait Ben Haddou (01 night)\r\n\r\nIncluded Activities\r\n- Ouarzazate – Short break \r\n- Visit of Kasbah Ait Ben Haddou\r\n\r\nOptional Activities\r\n- Ait Benhaddou - Henna Tattoo\r\n- Ouarazate - Atlas Movie Studios \r\n- Ouarzazate - Kasbah Taourirt \r\n\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 4',
                title: 'Dades – Ait Ben Haddou- Marrakech',
                description:
                    'After breakfast, drive to Marrakech. En route, stop to visit the Telouet Kasbah, it is a Kasbah along the former route of the caravans from the Sahara over the Atlas Mountains to Marrakech. The kasbah was the seat of the El Glaoui family&#039;s power, after the short visit continue to Marrakech,\r\n\r\nAccommodation\r\n- Riad / Hotel at Marrakech (01 night)\r\n\r\nIncluded Activities\r\n- Visit of Telouet Kasbah\r\n- Visit of Kasbah Ait Ben Haddou\r\n\r\nOptional Activities\r\n- Marrakech – Lunch at a typical restaurant\r\n- Marrakech – Hammam and SPA \r\n- Marrakech – Lunch at a typical restaurant\r\n- Marrakech – Pottery course\r\n\r\nMeals Included\r\n- Breakfast\r\n\r\nThis concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
    {
        id: '4-days-from-and-back-to-marrakech',
        title: '4 DAYS FROM AND BACK TO MARRAKECH',
        duration: '4 Days',
        nights: '3 Nights',
        startingPoint: 'Marrakech',
        description:
            "Embark on an unforgettable journey through Morocco's diverse landscapes, from the towering Atlas Mountains to the vast Sahara Desert. This 4-day adventure offers a unique blend of cultural exploration, breathtaking...",
        url: 'https://mct-tours.com/trip/4-days-from-and-back-to-marrakech/',
        accommodation: 'Camp and Hotel',
        tripType: 'Long-tours, Desert tours',
        difficulty: 'Easy',
        guide: 'Included',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/merzouga.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Marrakech  – Zagora (218 Mile)',
                description:
                    'After breakfast begin your tour, drive to Ouarzazate, the gateway to the Sahara Desert and capital of the cinema industry in which many international movies  were shot and won many times  some Oscars .Cross the high atlas with the variety of its beautiful landscapes. Stop to admire some attracted sceneries and the architecture  of the Berber houses spread along the road  \nEn route, pass the town of Agdez an unassuming town on the edge of a palm grove.   Facing  a special   mountain called Jbel Kissane  located Between Agdez and Zagora the road .stop for lunch .After continue  driving to Zagora  which a part of the beautiful Draa Valley, a land of fertile, palm-shaded terraced farmland which is fed by a labyrinth of irrigation channels. All habitation is concentrated in groupings of houses called ksours, usually on hillsides high above the irrigated farmland\nZagora  was a very interesting   center for Caravan trading  between Africa   and Europe . The sign saying “Timbuktu, 52 days by camel” evokes the great age of the trans-Saharan caravans. \n It was in Zagora that camel caravans from the south broke their journey before heading onward to the east and north of the continent and continues to be the main marketplace of the south.\nDinner and overnight  in Zagora\nAccommodation\n\nHotel at Zagora (01 night)\n\nIncluded Activities\n\nStop for photos and Enjoy the Draa Valley\nAgdez – Enjoy the oases of  palm grove\nTamegroute - Ancient Library\nTamegroute - Underground Village guided tour\nVisit of the Ceramic Quarter\n\nMeals Included\n\nBreakfast\nDinner\n',
            },
            {
                day: 'Day 2',
                title: 'Zagora - Erfoud – Merzouga (174 Mile)',
                description:
                    'Depart to Merzouga after breakfast. Stop at Alnif   village, a green spot in a valley where several Anti-Atlas mountains meet.\nThe region of Al Nif is known worldwide for its trilobite fossils, ranked second only to dinosaur fossils.\nAfter lunch at Al Nif , continue to Erfoud, into the Sahara and finally  arrive  to Merzouga  after an interesting travel in the old time  crossing many small traditional small villages with its oases .  Merzouga  is the small Saharian oasis  the town  is famous for its location at the foot of the Erg Chebbi Dunes with its golden dunes  \nCamp overnight in a nomad tent, furnished inside with comfortable clean cots, fresh linens and blankets all set on colorful Moroccan carpets. Take an optional camel trek to watch the sunset behind the Sahara dunes.\nEnjoy dinner at your camp while taking in the breathtaking sight of the Saharan desert stars.\nAccommodation\n\nCamp  at Merzouga(01 night)\n\nIncluded Activities\n\nSahara Desert – Enjoy the sunrise\nSahara Desert – Nomadic  dinner with local  music\nSahara Desert -Camel ride\n\nMeals Included\n\nBreakfast\nDinner\n',
            },
            {
                day: 'Day 3',
                title: 'Merzouga- Todra Gorges –  Ouarzazate (130 MILE)',
                description:
                    'After Breakfast, Drive to Ouarzazate ,  crossing  the Tafilalet valley known under the name of  the  small Mesopotamia    crossing   also other vallies like dades valley   Todra one,  till  to arrive the road of 1000 kasbahs    on the way have a break for the  visit at Todra Gorges, a massive trench that rises over 250 meters to form one of the most dramatic and spectacular natural sights in Morocco,\nStop    for lunch  and have a free time to admire and get some picture of the naturel site of Todra\n  In the afternoon  continue to Kalaat Mgouna known about the production of Roses   which celebrate annuayl the rose  festival on May  .After continue driving  to Ouarzazate the capital of Moroccan cinema industry in which  we can find many studios for the production\nArrive at Ouarzazate   and check in Hotel.\nAccommodation\n\nHotel at Ouarzazate  (01 night)\n\nIncluded Activities\n\nTodra Gorges – \nKalaat Mgouna – Visit the rose shop\n\nMeals Included\n\nBreakfast\nDinner\n',
            },
            {
                day: 'Day 4',
                title: 'Ouarzazate - Ait Ben Haddou – Marrakech (120 MILE)',
                description:
                    'After breakfast, start the visit of Ksar Ait Ben Haddou, an exceptionally well-preserved site which was declared a World Heritage Site in 1987 by UNESCO. Ouarzazate is also the administrative operations base for film companies where many famous films were made, among them: the Gladiator; Romancing the Stone, Cleopatra, Sheltering Sky, Jewel of the Nile and Lawrence of Arabia. Lunch on the way and continue driving to Marrakech crossing the high Atlas mountains \n \n                                End of our service',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Drinks', 'Any personal expenses'],
    },
    {
        id: 'andalusian-heritage-tour',
        title: 'Andalusian Heritage Tour',
        duration: '8 Days',
        nights: '7 Nights',
        startingPoint: 'Tangier',
        description:
            "Following the fall of Granada in 1492, many Andalusian Muslims and Jews settled in northern Morocco, bringing with them a rich cultural legacy that shaped the architecture, music, crafts, cuisine, and urban design of several Moroccan cities. This 8-day journey invites you to discover Morocco's remarkable Andalusian heritage through its imperial cities, blue-painted mountain towns, historic medinas, and UNESCO World Heritage Sites.",
        tripType: 'Cultural & Historical',
        difficulty: 'Easy',
        arrivalCity: 'Tangier',
        guide: 'Local Expert Guide',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier – Tetouan',
                description:
                    'Upon arrival in Tangier, begin a leisurely city tour including Cape Spartel, where the Atlantic Ocean meets the Mediterranean Sea, offering beautiful views toward the Spanish coastline. Continue to the famous Hercules Caves. Explore the medina of Tangier, including the Kasbah Museum, originally built during the reign of Sultan Moulay Ismail. After lunch, drive through part of the Rif Mountains toward Tetouan. Dinner and overnight in Tetouan.',
            },
            {
                day: 'Day 2',
                title: 'Tetouan – Chefchaouen',
                description:
                    "After breakfast, enjoy a guided tour of Tetouan, rebuilt by Muslims and Jews fleeing Spain during the 15th century. Visit the Archaeological Museum, home to impressive Roman mosaics, followed by an exterior visit of the Royal Palace. Continue through Tetouan's UNESCO-listed medina with its whitewashed Andalusian-style houses and lively souks. After lunch, depart for Chefchaouen. Dinner and overnight in Chefchaouen.",
            },
            {
                day: 'Day 3',
                title: 'Chefchaouen – Volubilis – Meknes',
                description:
                    "After breakfast, discover Chefchaouen, the charming blue city nestled in the Rif Mountains. Founded by Andalusian refugees, the town is known for its blue-painted streets, whitewashed houses, balconies, and peaceful atmosphere. Continue to Volubilis, Morocco's best-preserved Roman archaeological site and a UNESCO World Heritage Site. Explore its impressive mosaics, temples, triumphal arches, and ancient ruins. Lunch will be served en route. Continue to Meknes. Dinner and overnight in Meknes.",
            },
            {
                day: 'Day 4',
                title: 'Meknes – Fes',
                description:
                    "After breakfast, enjoy a guided tour of Meknes, one of Morocco's four Imperial Cities and a UNESCO World Heritage Site. The tour includes Bab Mansour Gate, the Royal Stables, Dar Jamai Museum, and El Hedim Square. After lunch, continue to Fes and visit the Bou Inania Medersa and its surrounding historic district. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 5',
                title: 'Fes City Tour',
                description:
                    "After breakfast, begin a full-day guided tour of Fes, the spiritual and intellectual capital of Morocco and the country's oldest Imperial City. Explore the medieval medina, including the Tanneries, Al Quaraouiyine Mosque and University, Al-Attarine Medersa, and the Nejjarine Fountain and Museum of Wooden Arts & Crafts. Lunch in a traditional Moroccan restaurant inside the medina. In the afternoon, visit the Mellah (Jewish Quarter), the exterior of the Royal Palace, and the famous Bab Boujloud gate. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 6',
                title: 'Fes – Rabat',
                description:
                    "After breakfast, depart for Rabat, Morocco's capital city since 1912, crossing the fertile Saïss plains known for agriculture and olive groves. Upon arrival, enjoy lunch before starting a city tour including the Royal Palace (exterior visit), the Mausoleum of Mohammed V, Hassan Tower, and the Chellah Necropolis. Dinner and overnight in Rabat.",
            },
            {
                day: 'Day 7',
                title: 'Rabat – Asilah – Tangier',
                description:
                    'After breakfast, drive north toward Tangier through the fertile Gharb plains. On the way, stop in the charming coastal town of Asilah, originally founded by the Phoenicians around 1500 BC. Explore its peaceful medina, known for its white-and-blue houses, artistic murals, and relaxed atmosphere. After lunch, continue to Tangier. Dinner and overnight in Tangier.',
            },
            {
                day: 'Day 8',
                title: 'Departure',
                description:
                    'After breakfast and hotel check-out, transfer to the airport for your departure flight. End of services.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Tangier',
            'Private transportation with English-speaking driver throughout the tour',
            'Local guides in Tetouan, Meknes, Fes, and Rabat',
            'Accommodation in selected hotels',
            'Daily breakfasts, lunches, and dinners',
            'Entrance fees to monuments and sites listed in the itinerary',
            'Visit to Volubilis Roman ruins',
            'Free time to explore medinas and historic districts',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'atlantic-coast-marrakech-10-days',
        title: 'Atlantic Coast & Marrakech Tour',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Tangier',
        description:
            "A beautiful journey along Morocco's Atlantic coastline combining imperial cities, seaside towns, and the vibrant city of Marrakech. This itinerary includes Tangier, Rabat, Casablanca, El Jadida, Oualidia, Essaouira, Agadir, and Marrakech.",
        tripType: 'Cultural & Coastal',
        difficulty: 'Easy',
        arrivalCity: 'Tangier',
        guide: 'Local Expert Guide',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier',
                description:
                    'Upon arrival in Tangier, you will meet your guide and begin a relaxed city tour. The visit includes Cap Spartel, where you can enjoy panoramic views of the Atlantic coastline and the point where the Atlantic Ocean meets the Mediterranean Sea. You will then continue to the famous Hercules Caves before exploring the historic medina of Tangier. The tour includes the Kasbah Museum, showcasing woodwork, Roman mosaics, and jewelry. Dinner and overnight in Tangier.',
            },
            {
                day: 'Day 2',
                title: 'Tangier – Rabat – Casablanca',
                description:
                    'After breakfast, departure towards Casablanca via the fertile Gharb plateau, with a stop in Rabat, the administrative capital of Morocco. Upon arrival, enjoy lunch followed by visits to the Hassan Tower and the Oudayas Kasbah. The journey then continues to Casablanca, where you will explore the city, including the Hassan II Mosque, the elegant Anfa residential district, the Ain Diab Corniche, and Mohammed V Square. Dinner and overnight in Casablanca.',
            },
            {
                day: 'Day 3',
                title: 'Casablanca – El Jadida – Oualidia',
                description:
                    'After breakfast, departure to El Jadida, formerly known as Mazagan, crossing the fertile plains of Chaouia, Doukkala, and Abda. Explore this historic Portuguese city, including its famous cistern capable of storing water for thousands of people. After lunch in El Jadida, continue to the coastal lagoon town of Oualidia for dinner and overnight.',
            },
            {
                day: 'Day 4',
                title: 'Oualidia – Essaouira',
                description:
                    'Morning departure to Essaouira, a picturesque coastal city on the Atlantic Ocean. Known for its long sandy beaches, offshore islands, and historic medina, Essaouira is a UNESCO World Heritage Site. Upon arrival, enjoy a seafood lunch before visiting the Skala fortress and exploring the charming medina with its narrow alleys, artisan shops, and vibrant atmosphere. Dinner and overnight in Essaouira.',
            },
            {
                day: 'Day 5',
                title: 'Essaouira – Agadir',
                description:
                    'After breakfast, drive along the Atlantic coast towards Agadir, passing through the beautiful Argan tree forests of the Anti-Atlas region. Upon arrival, visit Agadir Oufella, the highest viewpoint in the city, offering panoramic views over the port and modern urban area. Continue with a city tour including the fishing port, known as the first sardine port in Morocco, and the seaside promenade. Lunch, dinner, and overnight in Agadir.',
            },
            {
                day: 'Day 6',
                title: 'Agadir – Marrakech',
                description:
                    'Morning at leisure in Agadir. After lunch, departure towards Marrakech crossing scenic landscapes between the coast and the interior. Arrival in Marrakech, followed by dinner and overnight at the hotel.',
            },
            {
                day: 'Day 7',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, begin a full city tour of Marrakech, the "Red Pearl" of Morocco. The visit includes the Koutoubia Mosque (exterior), the Saadian Tombs, Bahia Palace, Ben Youssef Madrasa, and a private museum. Continue exploring the colorful souks inside the medina before heading to Jemaa el-Fnaa Square, a UNESCO World Heritage Site. Here you will experience a vibrant atmosphere with storytellers, musicians, snake charmers, dancers, food stalls, and traditional vendors. Dinner and overnight in Marrakech.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech – Casablanca – Rabat',
                description:
                    'After breakfast, departure to Rabat, the capital of Morocco. Upon arrival, visit the Royal Palace (exterior), Mohammed V Mausoleum, Hassan Tower, and the Chellah Necropolis. Dinner and overnight in Rabat.',
            },
            {
                day: 'Day 9',
                title: 'Rabat – Asilah – Tangier',
                description:
                    'Morning departure to Tangier via the fertile Gharb region, known for its agriculture. On the way, stop in Asilah, a charming coastal town famous for its whitewashed medina and artistic murals. Continue to Tangier for dinner and overnight.',
            },
            {
                day: 'Day 10',
                title: 'Departure',
                description:
                    'After breakfast and check-out, transfer to Casablanca Airport for your return flight. End of services.',
            },
        ],
        included: [
            'Airport pick-up and drop-off',
            'Private transportation with English-speaking driver throughout the tour',
            'Local guides in key cities',
            'Accommodation in selected hotels',
            'Daily breakfasts, lunches, and dinners',
            'Entrance fees to monuments and sites listed in the itinerary',
            'Free time to explore medinas and coastal towns',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'imperial-cities-tour-from-tangier-10d',
        title: 'Imperial Cities Tour From Tangier – 10 Days',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Tangier',
        description:
            "This 10-day Imperial Cities tour offers a rich journey through Morocco's most historic and culturally significant destinations. Beginning in Tangier, you'll explore the meeting point of the Mediterranean and Atlantic, then continue to Rabat, Casablanca, Marrakech, Ouzoud Waterfalls, Bin El Ouidane, Meknes, Volubilis, Fes, Chefchaouen, and Tetouan.",
        tripType: 'Cultural & Historical',
        difficulty: 'Easy',
        arrivalCity: 'Tangier',
        guide: 'Professional local guides in Rabat, Casablanca, Marrakech, and Fes',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier',
                description:
                    'Arrival in Tangier. Meet your driver and begin a leisurely day tour, including a visit to Cap Spartel, where you can enjoy a beautiful view of the Spanish coastline. Cap Spartel marks the meeting point of the Atlantic Ocean and the Mediterranean Sea. Continue to the Hercules Caves, then drive to explore the medina of Tangier. Visit the Kasbah Museum, originally founded in the 17th century by Sultan Moulay Ismail. Dinner and overnight stay at Hotel Kenzi Solazur.',
            },
            {
                day: 'Day 2',
                title: 'Tangier – Rabat – Casablanca',
                description:
                    "After breakfast, transfer to the train station and travel by TGV from Tangier to Rabat. Upon arrival, meet your driver and a local guide and begin a city tour including an exterior visit of the Royal Palace, the Mohammed V Mausoleum, the Hassan Tower, and the Chellah. After lunch, proceed to Casablanca, followed by a drive along the Corniche. Dinner and overnight in Casablanca at Hotel Val D'Anfa.",
            },
            {
                day: 'Day 3',
                title: 'Casablanca – Marrakech',
                description:
                    'After breakfast, meet your local guide and have a half-day city tour of Casablanca with a visit to the Hassan II Mosque from inside. Continue with the Church of Notre Dame de Lourdes and the Habous Quarter. Afterwards, drive to Marrakech. Dinner and overnight at Hotel Adam Park.',
            },
            {
                day: 'Day 4',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, begin your city tour of Marrakech. Visit Majorelle Garden, followed by a 1-hour city tour by horse carriage ending at a restaurant with Italian specialty. After lunch, continue sightseeing: the Koutoubia Mosque, followed by the Bahia Palace and the Ben Youssef Madrasa. Continue to the colorful souks inside the medina, ending at Jemaa el-Fnaa, a UNESCO World Heritage Site. Dinner and overnight at Hotel Adam Park.',
            },
            {
                day: 'Day 5',
                title: 'Marrakech – Ouzoud – Bin El Ouidane',
                description:
                    "After breakfast, departure from Marrakech towards Bin El Ouidane, located in the heart of the Middle Atlas Mountains. Upon arrival in Ouzoud, enjoy lunch at a local restaurant overlooking the waterfalls and take time to explore this spectacular natural site. After the visit, continue the journey to Bin El Ouidane. Dinner and overnight at Dar l'Eau Vive, where you can enjoy the peaceful landscapes of the dam and surrounding nature.",
            },
            {
                day: 'Day 6',
                title: 'Bin El Ouidane – Meknes – Volubilis – Fes',
                description:
                    "After breakfast, early departure from Bin El Ouidane at 07:00 am and drive towards Meknes, crossing a beautiful part of the Middle Atlas Mountains. Upon arrival in Meknes, enjoy lunch before starting your city tour. Meknes is Morocco's fourth Imperial city and its medina is classified as a UNESCO World Heritage Site. Visit the impressive Bab Mansour Gate, the Mausoleum of Moulay Ismail, and the Dar Jamai Museum. After the visit, continue to Volubilis, the most important Roman ruins in Morocco, famous for its well-preserved mosaics. After exploring Volubilis, continue the drive to Fes. Dinner and overnight at Royal Mirage Hotel.",
            },
            {
                day: 'Day 7',
                title: 'Fes City Tour',
                description:
                    "After breakfast, meet your local guide and set out for a full-day city tour of Fes, the spiritual and intellectual capital of Morocco, founded in the 9th century. Visit the UNESCO-listed medina, exploring its historic gates and lively atmosphere. Continue to the Tanners' Quarter, the Al Quaraouiyine Mosque, the Bou Inania Madrasa, and the beautiful Nejjarine Museum of Wooden Arts and Crafts. Enjoy lunch at a traditional Moroccan restaurant in the medina. After lunch, continue with the Dar Batha Museum, panoramic view of the Royal Palace gates, and Bab Boujloud. Dinner and overnight at Royal Mirage Hotel.",
            },
            {
                day: 'Day 8',
                title: 'Fes – Chefchaouen',
                description:
                    'After breakfast, drive to Chefchaouen, a picturesque mountain town founded by Andalusian refugees. Known for its charming blue-painted streets, whitewashed houses, and Andalusian character, Chefchaouen is ideal for a leisurely stroll. Upon arrival, check in at the hotel and the rest of the day is yours to explore this small blue city. Dinner and overnight at Hotel Parador.',
            },
            {
                day: 'Day 9',
                title: 'Chefchaouen – Tetouan – Tangier',
                description:
                    "After breakfast in Chefchaouen, depart for Tetouan, a city founded by Moors fleeing Spain and once the capital of Morocco's Spanish protectorate zone. Tetouan is renowned for its strong Andalusian heritage, visible in its medina, architecture, music, culinary traditions, and embroidery. After lunch, continue your journey to Tangier. Upon arrival, begin a city tour including the Mendoubia Gardens, the Kasbah Quarter, the Grand Socco, Petit Socco, and the surrounding souks. In the evening, free time to explore the vibrant nightlife of Tangier and dinner at your hotel.",
            },
            {
                day: 'Day 10',
                title: 'Departure',
                description:
                    'After check out, you will be transported to the airport at Casablanca for your return flight home, or to the Ferry at Tangier. This concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Airport or port pick-up and drop-off (Tangier / Casablanca)',
            'Private transportation in a comfortable air-conditioned vehicle',
            'High-speed train ticket (TGV) from Tangier to Rabat',
            'Ferry ticket from Algeciras to Tanger Med (go and back)',
            'Professional local guides in Rabat, Casablanca, Marrakech, and Fes',
            'Entrance fees to monuments and historical sites listed in the itinerary',
            'Accommodation: Tangier (2 nights), Casablanca (1 night), Marrakech (2 nights), Bin El Ouidane (1 night), Fes (2 nights), Chefchaouen (1 night)',
            'Daily breakfasts, lunches, and dinners (full board)',
            'Excursion to Ouzoud Waterfalls',
            'Visit to Volubilis Roman ruins',
            'Free time to explore medinas, souks, and scenic sites',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities and excursions',
            'Any services not mentioned in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'just-for-women-10-days',
        title: 'Just For Women – 10 Days / 9 Nights',
        duration: '10 Days',
        nights: '9 Nights',
        startingPoint: 'Casablanca',
        description:
            "Welcome ladies to Morocco! Come experience the wonders that Morocco offers with plenty of shopping in historic medinas, regional cooking classes in Fez and Marrakech, a belly dance class, a henna party, a ceramics workshop in Fez, designing your own pair of Moroccan silver earrings, a Moroccan women's fashion demonstration, visits to women's cooperatives, and relaxation in a traditional hammam.",
        tripType: 'Cultural & Just for Women',
        difficulty: 'Easy',
        arrivalCity: 'Casablanca',
        guide: 'English-speaking guide throughout the tour',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca – Chefchaouen',
                description:
                    "Arrival at Casablanca Airport, where you will meet your English-speaking guide who will guide you for the whole tour, and begin the women's tour. Drive to the city of Chefchaouen, the pearl of the Rif Mountains, crossing the most important vast plateau of Morocco. Continue driving through the Rif Mountains, then arrive to Chefchaouen after dinner and check into your riad or hotel. Dinner at local restaurant. Overnight in Chefchaouen at Hotel Parador.",
            },
            {
                day: 'Day 2',
                title: 'Chefchaouen – Meknes – Fez',
                description:
                    'After breakfast, have a short visit to the blue city of Chefchaouen, then drive to Fez. On the way, stop to visit a cheese cooperative created by the government to help ladies gain extra income. After the visit, continue driving to the town of Ouazzane for lunch. After lunch, drive to Meknes. Upon arrival, visit a winery to learn about the process of producing and tasting some of the best red and white wine produced in Morocco. Then drive to the city of Fez. Dinner and overnight at Hotel Royal Mirage.',
            },
            {
                day: 'Day 3',
                title: 'Fez City Tour & Workshop',
                description:
                    'After breakfast, start the city tour of Fez, the spiritual and intellectual capital and the first Imperial City of Morocco. We begin in the historical medina, visiting the Tanner\'s Quarter, the Karaouiyine Mosque, El-Attarine Medersa, and the beautifully restored 18th-century Fondouk el-Nejjarine. Stop for lunch in a typical Moroccan restaurant in the medina. After lunch, visit an embroidery workshop where the ladies make a special blue Andalusian design called "the Point of Fez." Dinner and overnight at Hotel Royal Mirage or Riad Anebar.',
            },
            {
                day: 'Day 4',
                title: 'Fez – Ifrane – Midelt – Errachidia – Merzouga',
                description:
                    'After breakfast, drive to Erfoud with a stop in Ifrane, an alpine city known for its beautiful park and its famous ski resort. Continue your drive to Midelt, a town located between the Middle Atlas and High Atlas Mountains, and stop for lunch. After lunch, drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes. Optional camel trek to watch the sunset behind the Sahara dunes. Dinner and overnight at Kasbah Tombouctou.',
            },
            {
                day: 'Day 5',
                title: 'Merzouga – Todra Gorge – Tinghir – Ouarzazate – Ait Ben Haddou',
                description:
                    'After breakfast, drive to Todra Gorge, passing through the old town of Tinerhir. Sheer cliffs rise up dramatically on each side of the narrow corridor that forms the Todra Gorge. After lunch, drive to Ait Ben Haddou via Ouarzazate, the "Hollywood of Morocco." Visit the Kasbah Tifoultoute. Dinner and overnight in Ait Ben Haddou (Riad Tamdakht).',
            },
            {
                day: 'Day 6',
                title: 'Ait Ben Haddou – Marrakech',
                description:
                    "After breakfast, visit Ait Ben Haddou, an exceptionally well-preserved site declared a UNESCO World Heritage Site in 1987. After the visit, continue your journey and stop for lunch at Tizi n'Tichka Pass while enjoying the stunning landscapes of the High Atlas Mountains. Proceed to Marrakech. Upon arrival, visit a ceramics workshop where you will learn about the traditional process of Moroccan pottery. Dinner and overnight at Hotel Adam Park or Riad Palais Sebban.",
            },
            {
                day: 'Day 7',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, enjoy a guided city tour including Majorelle Garden and a 1-hour city tour horse carriage, ending at a restaurant with Italian specialty. After lunch, continue sightseeing including Koutoubia Mosque, Bahia Palace, and free time at Jamaa Lafna. After the visit, return to the hotel for some rest, then proceed to dinner at Chez Ali with Fantazia show. Overnight at Hotel Adam Park or Riad Palais Sebban.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech – Ourika (Cooking Class) – Marrakech',
                description:
                    'After breakfast, head to Ourika for a new demonstration with a Berber family. Upon arrival, enjoy welcome mint tea and Moroccan pastries, then go to a Berber house for an unforgettable couscous cooking class in the traditional way. After the experience, visit the Berber town with a local person, then return to eat your lunch with the family. After lunch, enjoy a traditional henna experience guided by local women. Return to Marrakech for dinner. Overnight at Hotel Adam Park or Riad Palais Sebban.',
            },
            {
                day: 'Day 9',
                title: 'Marrakech – Essaouira',
                description:
                    "After breakfast, drive to the picturesque coastal town of Essaouira. On the way, stop at a local women's argan oil cooperative to see how this precious oil is produced. Arrive in Essaouira in time for a fresh seafood lunch, then enjoy free time to shop in the medina, where there are many art galleries, crafts, and music shops. Dinner and overnight at Riad Zahra.",
            },
            {
                day: 'Day 10',
                title: 'Essaouira – Casablanca Airport (Departure)',
                description:
                    'After breakfast, you will be transported to Casablanca Airport for your return flight home.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Casablanca',
            'Private transportation with English-speaking guide throughout the tour',
            'Accommodation: Chefchaouen (1 night), Fes (2 nights), Merzouga (1 night), Ait Ben Haddou (1 night), Marrakech (3 nights), Essaouira (1 night)',
            'Daily breakfasts, lunches, and dinners as mentioned in the itinerary',
            "Visit to women's cooperatives (cheese & argan oil)",
            'Embroidery workshop experience in Fes',
            'Ceramics and pottery workshop in Marrakech',
            'Traditional couscous cooking class with a Berber family in Ourika Valley',
            'Henna experience with local women in Ourika',
            'Winery visit and tasting in Meknes',
            'Camel trekking experience in Merzouga',
            'Entrance fees to monuments and sites listed in the itinerary',
            'Free time to explore medinas, souks, and coastal towns',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'mediterranean-coast-southern-morocco',
        title: 'Mediterranean Coast & Southern Morocco – 13 Days',
        duration: '13 Days',
        nights: '12 Nights',
        startingPoint: 'Tangier',
        description:
            "Discover the beauty, culture, and diversity of Morocco on this unforgettable 13-day journey through the country's imperial cities, Atlantic and Mediterranean coastlines, mountain landscapes, and Sahara Desert. Beginning in Tangier, this tour takes you through Morocco's most iconic destinations including Rabat, Casablanca, Marrakech, Ouarzazate, Zagora, Merzouga, Midelt, Meknes, Fes, Chefchaouen, and Tetouan.",
        tripType: 'Cultural & Adventure',
        difficulty: 'Moderate',
        arrivalCity: 'Tangier',
        guide: 'Local Expert Guides',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival in Tangier',
                description:
                    'Upon arrival in Tangier, begin a leisurely sightseeing tour. Visit Cape Spartel, where the Atlantic Ocean meets the Mediterranean Sea, and enjoy panoramic views toward Spain. Continue to the famous Hercules Caves. Later, explore the historic medina of Tangier, including the Kasbah Museum. Dinner and overnight in Tangier.',
            },
            {
                day: 'Day 2',
                title: 'Tangier – Rabat – Casablanca',
                description:
                    'After breakfast, depart for Rabat, the administrative and political capital of Morocco. Enjoy a guided city tour including the Royal Palace (exterior visit), the Mausoleum of Mohammed V, Hassan Tower, and the ancient Chellah Necropolis. After lunch, continue to Casablanca. Dinner and overnight in Casablanca.',
            },
            {
                day: 'Day 3',
                title: 'Casablanca – Marrakech',
                description:
                    'After breakfast, enjoy a city tour of Casablanca featuring the exterior of the Hassan II Mosque, Mohammed V Square, the Habous Quarter, the Central Market, and the residential Anfa district. In the afternoon, drive to Marrakech. Dinner and overnight in Marrakech.',
            },
            {
                day: 'Day 4',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, enjoy a full-day guided tour of Marrakech. Visit the Koutoubia Mosque, the Saadian Tombs, and the Bahia Palace. Continue into the medina to discover traditional Moroccan craftsmanship at a local artisan cooperative. Later, explore the colorful souks leading to the famous Jemaa el-Fnaa Square, a UNESCO World Heritage Site. Dinner at a traditional Moroccan restaurant and overnight in Marrakech.',
            },
            {
                day: 'Day 5',
                title: 'Marrakech – Ouarzazate – Zagora',
                description:
                    'After breakfast, depart toward Ouarzazate via the spectacular High Atlas Mountains and the Tizi n\'Tichka Pass. Visit the UNESCO-listed Kasbah Ait Ben Haddou. Continue to Ouarzazate, often referred to as the "Hollywood of Morocco," before enjoying a traditional mint tea with a Berber family. After lunch, continue to Zagora, once an important caravan stop on the ancient trade route to Timbuktu. Dinner and overnight in Zagora.',
            },
            {
                day: 'Day 6',
                title: 'Zagora – Alnif – Erfoud',
                description:
                    'After breakfast, travel through the beautiful landscapes of Tazzarine and Alnif, crossing the dramatic Saghro Mountains. After lunch, continue to Erfoud via Rissani, home to the Mausoleum of Moulay Ali Cherif, founder of the Alaouite Dynasty. Dinner and overnight in Erfoud.',
            },
            {
                day: 'Day 7',
                title: 'Erfoud – Merzouga Desert',
                description:
                    'After breakfast, depart for Merzouga and the spectacular Sahara dunes of Erg Chebbi. Visit Khamlia village, famous for its traditional Gnawa music performances. After lunch, enjoy a camel ride across the golden dunes to your desert camp. Spend the evening under the stars in a traditional nomadic tent. Enjoy a traditional dinner and local music around the campfire. Overnight in the desert camp.',
            },
            {
                day: 'Day 8',
                title: 'Merzouga – Midelt',
                description:
                    'After breakfast, depart through the Middle Atlas Mountains, passing cedar forests and scenic mountain landscapes. Stop in Ifrane, often called the "Switzerland of Morocco." Continue to Midelt, located between the High and Middle Atlas Mountains. Dinner and overnight in Midelt.',
            },
            {
                day: 'Day 9',
                title: 'Midelt – Ifrane – Meknes – Fes',
                description:
                    "After breakfast, travel toward Meknes, one of Morocco's four Imperial Cities and a UNESCO World Heritage Site founded by Sultan Moulay Ismail in the 17th century. Visit Bab Mansour Gate, El Hedim Square, the Royal Stables, and the Mausoleum of Moulay Ismail. After lunch, continue to Fes. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 10',
                title: 'Fes City Tour',
                description:
                    "After breakfast, enjoy a full-day guided tour of Fes, the oldest of Morocco's Imperial Cities. Explore the medieval medina, including its mosques, traditional tanneries, bustling souks, and historic madrasas such as Al-Attarine Medersa. Visit Nejjarine Fountain and the Museum of Wooden Arts & Crafts. Lunch in a traditional restaurant inside the medina. In the afternoon, visit the Dar Batha Museum, the Mellah (Jewish Quarter), the exterior of the Royal Palace, and the famous Bab Boujloud gate. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 11',
                title: 'Fes – Chefchaouen',
                description:
                    'After breakfast, depart for Chefchaouen, the charming blue city nestled in the Rif Mountains. Visit the Kasbah located in the heart of the medina and enjoy free time to stroll through the picturesque alleyways. Dinner and overnight in Chefchaouen.',
            },
            {
                day: 'Day 12',
                title: 'Chefchaouen – Tetouan – Tangier',
                description:
                    'After breakfast, depart for Tetouan, a city strongly influenced by Andalusian culture and architecture. Explore its UNESCO-listed medina, traditional souks, and artisan workshops. Continue to Tangier. After lunch, enjoy a city tour including the Mendoubia Gardens, the Kasbah Quarter, the Grand Socco, Petit Socco, and the lively local markets. Dinner and overnight in Tangier.',
            },
            {
                day: 'Day 13',
                title: 'Departure',
                description:
                    'After breakfast and hotel check-out, transfer to the airport for your departure flight. End of services.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Tangier',
            'Private transportation with English-speaking driver throughout the tour',
            'Local guides in key cities',
            'Accommodation in selected hotels',
            'Daily breakfasts, lunches, and dinners',
            'Camel trek in the Sahara Desert at Merzouga',
            'Overnight in traditional desert camp',
            'Entrance fees to monuments and sites listed in the itinerary',
            'Free time to explore medinas, souks, and scenic locations',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'moorish-heritage-desert-tour-11-days',
        title: 'Moorish Heritage & Desert Tour – 11 Days',
        duration: '11 Days',
        nights: '10 Nights',
        startingPoint: 'Tangier',
        description:
            "This 11-day journey combines Morocco's most beautiful imperial cities, the blue town of Chefchaouen, Roman ruins, the Sahara Desert, and the Atlantic coast. From Tangier to the dunes of Merzouga and the vibrant city of Marrakech, this tour offers a complete discovery of Morocco's history, culture, mountains, and desert landscapes.",
        tripType: 'Cultural & Adventure',
        difficulty: 'Moderate',
        arrivalCity: 'Tangier',
        guide: 'Local Expert Guides',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier – Chefchaouen',
                description:
                    "Upon arrival in Tangier, begin a city tour including Cap Spartel, where the Atlantic Ocean meets the Mediterranean Sea, followed by the Hercules Caves. Continue to the Kasbah Museum and explore Tangier's historic medina before lunch. In the afternoon, drive through the Rif Mountains toward Chefchaouen. Upon arrival, discover the charming blue city with its Andalusian-style architecture, narrow alleyways, and peaceful atmosphere. Visit the Kasbah in the heart of the medina. Dinner and overnight in Chefchaouen.",
            },
            {
                day: 'Day 2',
                title: 'Chefchaouen – Volubilis – Fes',
                description:
                    'After breakfast, depart for Fes via the Rif Mountains. En route, stop at Volubilis, the most important Roman archaeological site in Morocco, once a thriving city with around 20,000 inhabitants and an important grain center of the Roman Empire. After lunch at the site, continue to Fes. Dinner and overnight in Fes.',
            },
            {
                day: 'Day 3',
                title: 'Fes City Tour',
                description:
                    "After breakfast, enjoy a full guided tour of Fes, Morocco's spiritual and cultural capital and the oldest imperial city. Visit the UNESCO-listed medina with its historic gates, mosques, tanneries, Attarine Medersa, Nejjarine Fountain, and traditional artisan workshops. Continue with Dar Batha Museum, the Jewish Quarter (Mellah), the Royal Palace gates (exterior), and Bab Boujloud. Lunch in a traditional medina restaurant. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 4',
                title: 'Fes – Erfoud – Merzouga',
                description:
                    'Early departure towards the Sahara Desert with a stop in Ifrane, a beautiful alpine-style city, then continue to Midelt for lunch. Cross the scenic Ziz Valley and Tafilalet region before reaching Erfoud, known for its fossil workshops. Continue to Merzouga, at the edge of the Erg Chebbi dunes. Optional camel trek to watch the sunset over the dunes. Dinner and overnight in a desert camp or hotel in Erfoud.',
            },
            {
                day: 'Day 5',
                title: 'Erfoud – Todra – Ouarzazate',
                description:
                    'After breakfast, travel through the spectacular Dades Valley and Todra Gorge, known as the "Valley of a Thousand Kasbahs." Enjoy dramatic landscapes, palm groves, and traditional irrigation systems. The Todra Gorge offers one of Morocco\'s most impressive natural canyons. Continue to Ouarzazate for dinner and overnight.',
            },
            {
                day: 'Day 6',
                title: 'Ouarzazate – Marrakech',
                description:
                    'After breakfast, visit the famous Ait Benhaddou Kasbah, a UNESCO World Heritage Site and filming location for many international movies such as Gladiator and Lawrence of Arabia. Continue through the High Atlas Mountains, with a stop for tea with a local Berber family. Arrive in Marrakech for dinner and overnight.',
            },
            {
                day: 'Day 7',
                title: 'Marrakech City Tour',
                description:
                    'After breakfast, explore Marrakech, the "Red Pearl of Morocco." Visit the Koutoubia Mosque (exterior), Saadian Tombs, Bahia Palace, and Ben Youssef Madrasa. Continue to the souks of the medina, where traditional crafts are still practiced. End the day at Jemaa el-Fnaa Square, a UNESCO World Heritage Site filled with storytellers, musicians, snake charmers, and food stalls. Dinner in a traditional restaurant and overnight in Marrakech.',
            },
            {
                day: 'Day 8',
                title: 'Marrakech – Essaouira',
                description:
                    'After breakfast, drive to the coastal city of Essaouira. En route, visit an Argan oil cooperative. Upon arrival, explore the UNESCO-listed medina, Skala fortress, artisan shops, and the Atlantic coastline. Enjoy fresh seafood for lunch and free time in the relaxed seaside atmosphere. Dinner and overnight in Essaouira.',
            },
            {
                day: 'Day 9',
                title: 'Essaouira – Safi – El Jadida – Casablanca',
                description:
                    'Depart towards Casablanca along the Atlantic coast. Stop in Safi, a traditional fishing port with Portuguese heritage, then continue to Oualidia for lunch. Proceed to El Jadida, a former Portuguese stronghold known for its historic cistern and fortified walls. Continue to Casablanca for dinner and overnight.',
            },
            {
                day: 'Day 10',
                title: 'Casablanca – Rabat – Tangier',
                description:
                    "After breakfast, visit Casablanca, including the Hassan II Mosque and Mohammed V Square. Continue to Rabat, Morocco's capital, for lunch and a guided tour of the Royal Palace (exterior), Mohammed V Mausoleum, Hassan Tower, and the Chellah Necropolis. In the afternoon, drive back to Tangier crossing the fertile Gharb plains. Dinner and overnight in Tangier.",
            },
            {
                day: 'Day 11',
                title: 'Departure',
                description:
                    'After breakfast and check-out, transfer to Casablanca Airport for your return flight. End of services.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Tangier',
            'Private transportation with English-speaking driver throughout the tour',
            'Local guides in key cities',
            'Accommodation in selected hotels',
            'Daily breakfasts, lunches, and dinners',
            'Visit to Volubilis Roman ruins',
            'Camel trek in the Sahara Desert at Merzouga',
            'Visit to Ait Benhaddou Kasbah',
            'Entrance fees to monuments and sites listed in the itinerary',
            'Free time to explore medinas and scenic locations',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'northern-morocco-grand-loop-7-days',
        title: 'Northern Morocco Grand Loop – 7 Days',
        duration: '7 Days',
        nights: '6 Nights',
        startingPoint: 'Tangier',
        description:
            'This 7-day journey offers a complete discovery of northern and central Morocco, combining coastal charm, mountain landscapes, and imperial heritage. Starting in Tangier, the route leads through the blue streets of Chefchaouen and the Rif Mountains to the Mediterranean city of Al Hoceima. The itinerary then continues inland to the cultural capital of Fes, before exploring the imperial cities of Meknes and Rabat. The journey concludes with a coastal return via Asilah before ending in Tangier.',
        tripType: 'Cultural & Coastal',
        difficulty: 'Easy',
        arrivalCity: 'Tangier',
        guide: 'Local Expert Guides',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Tangier – Tetouan – Chefchaouen',
                description:
                    'Upon arrival in Tangier, you will meet your driver and begin a scenic journey through the mountains toward Tetouan. In Tetouan, a UNESCO-listed medina awaits, strongly influenced by Andalusian heritage, with whitewashed alleys, artisan workshops, and elegant architecture. Visit the medina, the Royal Palace area (exterior), and Bab Okla before lunch. In the afternoon, continue inland to Chefchaouen, the famous "Blue City" located in the Rif Mountains. Dinner and overnight in Chefchaouen.',
            },
            {
                day: 'Day 2',
                title: 'Chefchaouen – Al Hoceima',
                description:
                    'After breakfast, enjoy a short city tour of Chefchaouen, strolling through the medina, visiting Ras El Ma, and enjoying free time in Outa El Hammam Square. After lunch, depart toward the Mediterranean coast, passing scenic Rif landscapes, cedar forest areas, and small towns. Continue toward Al Hoceima, a coastal city known for its clear waters and national park. Dinner and overnight in Al Hoceima.',
            },
            {
                day: 'Day 3',
                title: 'Al Hoceima – Fes',
                description:
                    'After breakfast, discover Al Hoceima with a visit to its national park and Corniche, offering beautiful sea views. After lunch, depart inland toward Fes, crossing the Rif Mountains and Middle Atlas region. Along the way, enjoy changing landscapes, cedar forests, and traditional Berber villages before arriving in Fes. Dinner and overnight in Fes.',
            },
            {
                day: 'Day 4',
                title: 'Fes City Tour',
                description:
                    "After breakfast, begin a full guided tour of Fes, Morocco's spiritual and intellectual capital and one of the oldest imperial cities, founded in the 9th century. Visit the UNESCO-listed medina, including its historic gates, the tanneries, Al Quaraouiyine Mosque, Attarine Madrasa, and Nejjarine Fountain. After lunch, continue to the Mellah (Jewish Quarter), the Royal Palace gates (exterior), and Bab Boujloud. End the day with a visit to the pottery and ceramic workshops of Fes. Dinner and overnight in Fes.",
            },
            {
                day: 'Day 5',
                title: 'Fes – Meknes – Rabat',
                description:
                    "After breakfast, depart for Meknes, one of Morocco's imperial cities founded by Moulay Ismail. Visit the historic medina, Bab Mansour Gate, Moulay Ismail Mausoleum, and the Royal Stables, ending at El Hedim Square. After lunch, continue to Rabat, the capital of Morocco. Upon arrival, visit the Kasbah of the Udayas overlooking the Atlantic Ocean, followed by the Hassan Tower and Mohammed V Mausoleum. Dinner and overnight in Rabat.",
            },
            {
                day: 'Day 6',
                title: 'Rabat – Asilah – Tangier',
                description:
                    'After breakfast, depart north toward Asilah, a charming coastal town on the Atlantic Ocean. Known for its white-and-blue medina and artistic murals, Asilah hosts an international art festival that attracts artists from around the world. Enjoy free time and lunch in this peaceful seaside town. In the afternoon, continue to Tangier for dinner and overnight.',
            },
            {
                day: 'Day 7',
                title: 'Departure from Tangier',
                description:
                    'After breakfast, your tour comes to an end in Tangier. Depending on your schedule, you may transfer to Tangier Ibn Battuta Airport or take the ferry to Spain (Tarifa or Algeciras). End of services.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Tangier',
            'Private transportation with English-speaking driver throughout the tour',
            'Local guides in key cities',
            'Accommodation in selected hotels',
            'Daily breakfasts, lunches, and dinners',
            'Entrance fees to monuments and sites listed in the itinerary',
            'Free time to explore medinas and scenic locations',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'sahara-imperial-cities-7-days',
        title: 'Sahara Imperial Cities Tour – 7 Days',
        duration: '7 Days',
        nights: '6 Nights',
        startingPoint: 'Casablanca',
        description:
            "This 7-day journey through Morocco combines the charm of imperial cities with the magic of the Sahara Desert. Starting in Casablanca, you'll travel to the vibrant city of Marrakech, then cross the High Atlas Mountains to visit the UNESCO-listed Ait Ben Haddou before continuing through scenic valleys to the Sahara Desert in Merzouga. The journey continues through Fes, Chefchaouen, and concludes in Rabat before returning to Casablanca.",
        tripType: 'Cultural & Desert Adventure',
        difficulty: 'Moderate',
        arrivalCity: 'Casablanca',
        guide: 'Local guides in Marrakech, Fes, and Chefchaouen',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Casablanca – Marrakech',
                description:
                    'Arriving at Casablanca airport, meet your driver at the terminal exit. Transfer to Marrakech, arrive at hotel and check in. After some rest, transfer to Jemaa el-Fna square for a short sightseeing stop. Afterward, proceed to dinner at a local restaurant with a belly dance show. Overnight at Hotel Adam Park.',
            },
            {
                day: 'Day 2',
                title: 'Marrakech – Ait Ben Haddou',
                description:
                    'Breakfast at the hotel. At 09:00, meet your local guide and begin a half-day sightseeing tour of Marrakech, visiting Bahia Palace, Koutoubia Mosque, and the Souk. After lunch at a restaurant with Italian specialty, proceed to Ait Ben Haddou, with a toilet stop at Argan Tichka along the way. Upon arrival, check in to your riad. Dinner at hotel or riad. Overnight at Riad Tamedakhte.',
            },
            {
                day: 'Day 3',
                title: 'Ait Ben Haddou – Dades – Erfoud – Merzouga',
                description:
                    'After breakfast, have a short sightseeing at the kasbah of Ait Ben Haddou and enjoy mint tea at a local house. Afterward, transfer to Erfoud. On the way, lunch at a local restaurant in Dades. Upon arrival in Erfoud, change to 4WD vehicles and continue to your camp. Camel trek in the desert camp included (for sunset or sunrise). Sunset and sunrise over the dunes. Local music entertainment after dinner. Overnight at Luxury Camp with Air Conditioning.',
            },
            {
                day: 'Day 4',
                title: 'Merzouga – Erfoud – Midelt – Fez',
                description:
                    'Early morning, enjoy sunrise over the dunes. Breakfast at the camp. After breakfast, transfer to Erfoud by 4WD, stopping for tea at a nomad tent along the way. Upon arrival in Erfoud, change to your private car and transfer to Fez. Lunch at a local restaurant in Midelt. After lunch, proceed to Fez. Dinner and check in at Hotel Royal Mirage.',
            },
            {
                day: 'Day 5',
                title: 'Fez – Chefchaouen',
                description:
                    'After breakfast, enjoy a half-day sightseeing tour of Fez with your local guide, visiting the Tanneries, Bab Boujloud, the Souk, and the Medina. Lunch at a local restaurant in Fes. After lunch, proceed to Chefchaouen. Upon arrival, check in to your hotel. Free time until dinner. Dinner served at the hotel. Overnight at Hotel Parador.',
            },
            {
                day: 'Day 6',
                title: 'Chefchaouen – Rabat',
                description:
                    'After breakfast, enjoy a half-day sightseeing tour of Chefchaouen on foot, visiting the blue Medina. Lunch at a local restaurant. After lunch, transfer to Rabat. Upon arrival, dinner at a local restaurant in Rabat and check in to your hotel. Overnight at Hotel Helnan Chellah.',
            },
            {
                day: 'Day 7',
                title: 'Rabat – Casablanca – Departure',
                description:
                    'Breakfast at the hotel. Enjoy a short sightseeing tour of Rabat, visiting the Tour Hassan and the Mohamed V Mausoleum. After the visits, transfer to Casablanca Airport (CMN) for your departure flight. End of services.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Casablanca',
            'Private transportation with professional driver throughout the tour',
            'Local guides in Marrakech, Fes, and Chefchaouen',
            'Accommodation: Marrakech (1 night), Ait Ben Haddou (1 night), Merzouga Desert Camp (1 night – luxury camp with private facilities & A/C), Fes (1 night), Chefchaouen (1 night), Rabat (1 night)',
            'Daily breakfasts, lunches, and dinners as mentioned in the itinerary',
            'Visit to Ait Ben Haddou Kasbah',
            '4WD desert transfers between Erfoud and Merzouga',
            'Camel trekking experience (sunset or sunrise) in the Sahara Desert',
            'Traditional music entertainment at the desert camp',
            'Tea stop with nomadic family in the desert',
            'Free time to explore medinas and scenic locations',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: 'south-morocco-tour-6-days',
        title: 'South Morocco Tour – 6 Days',
        duration: '6 Days',
        nights: '5 Nights',
        startingPoint: 'Casablanca',
        description:
            'This 6-day journey through southern Morocco offers a perfect blend of cultural discovery, scenic landscapes, and relaxation. Starting in Casablanca, you\'ll travel to Marrakech, explore its iconic landmarks, journey through the High Atlas Mountains to the UNESCO-listed Ait Ben Haddou, experience the desert atmosphere in Zagora with a camel ride at the Tinfou Dunes, and discover Ouarzazate, the "Hollywood of Morocco."',
        tripType: 'Cultural & Desert',
        difficulty: 'Easy',
        arrivalCity: 'Casablanca',
        guide: 'Local guide for city tours in Marrakech',
        languages: 'English, French, Spanish',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival in Casablanca & Transfer to Marrakech',
                description:
                    'Upon arrival at Casablanca Mohammed V International Airport (CMN), you will be met by your English-speaking driver and transfer directly to Marrakech. On the way, there will be a short stop at a supermarket. After arriving in Marrakech, check in to your hotel. Dinner served at the hotel. Stay at Hotel Adam Park.',
            },
            {
                day: 'Day 2',
                title: 'Full Day Sightseeing in Marrakech',
                description:
                    'After breakfast, meet your local English-speaking guide for a full day of sightseeing in Marrakech. The tour begins with a visit to the Majorelle Garden, followed by lunch at an Italian restaurant. After lunch, continue with a visit to the Bahia Palace then Ben Youssef Madrasa. In the evening, enjoy dinner at a restaurant featuring a traditional belly dance show. Stay at Hotel Adam Park.',
            },
            {
                day: 'Day 3',
                title: 'Marrakech – Ait Ben Haddou – Zagora',
                description:
                    "After breakfast, meet your driver and transfer to Zagora. Along the way, have a WC stop at Tizi n'Tichka Pass, followed by lunch at a local restaurant in Ait Ben Haddou. After lunch, visit Ait Ben Haddou to explore one of Morocco's most iconic historical sites. Afterwards, proceed to Zagora. Upon arrival, check in to your hotel and enjoy dinner. Stay at Riad Lamane in Zagora.",
            },
            {
                day: 'Day 4',
                title: 'Zagora – Ouarzazate – Marrakech',
                description:
                    'Early in the morning, enjoy the sunrise over the Tinfou Dunes with your driver, including a camel ride. After breakfast, meet your driver and transfer toward Ouarzazate. Upon arrival, enjoy lunch at a local restaurant. After lunch, visit Taourirt Kasbah and continue the journey back to Marrakech. On arrival, check in to your riad. Dinner at the riad. Optional: visit the Atlas Film Studios (pay on spot). Stay at Riad Palais Sebban in Marrakech.',
            },
            {
                day: 'Day 5',
                title: 'Spa & Half Day Sightseeing in Marrakech',
                description:
                    'Enjoy a relaxed morning at your leisure. At 12:00, your local guide will meet you and escort you into the heart of the old medina for a traditional lunch, where you will savor Tanjia. After lunch, continue discovering the vibrant atmosphere of the medina. At 16:00, indulge in a traditional Moroccan wellness ritual with a relaxing session at a Hammam, including a cleansing steam bath and soothing massage. Later, dinner at a local restaurant overlooking Jemaa el-Fnaa. Stay at Riad Palais Sebban in Marrakech.',
            },
            {
                day: 'Day 6',
                title: 'Marrakech – Casablanca Airport',
                description:
                    'After breakfast at the Riad, meet your driver and transfer by private car to Casablanca Mohammed V International Airport (CMN). Upon arrival at the airport, clients will check in independently for their flight.',
            },
        ],
        included: [
            'Airport pick-up and drop-off in Casablanca',
            'Private transportation with English-speaking driver throughout the tour (except Day 5)',
            'Local guide for city tours in Marrakech on Day 2 and Day 5',
            'Accommodation: Marrakech (2 nights at hotel), Zagora (1 night), Marrakech (2 nights at Riad)',
            'Daily breakfasts, lunches, and dinners as mentioned in the itinerary',
            'Visit to Majorelle Garden',
            'Visit to Bahia Palace and Ben Youssef Madrasa',
            'Visit to Ait Ben Haddou Kasbah',
            'Camel ride experience at Tinfou Dunes',
            'Visit to Taourirt Kasbah',
            'Spa experience in Marrakech (45 min Traditional Hammam and Massage)',
            'Free time to explore medinas and local markets',
        ],
        excluded: [
            'International flights',
            'Travel insurance',
            'Optional visit to Atlas Film Studios (pay on spot)',
            'Beverages and personal expenses',
            'Tips and porterage',
            'Optional activities not mentioned',
            'Any services not listed in the inclusions',
            'Peak season supplements',
            'Gratuities',
        ],
    },
    {
        id: '3-days-from-fes-and-back-to-marrakech',
        title: '3 Days From Fes and back to Marrakech',
        duration: '3 Days',
        nights: '2 Nights',
        startingPoint: 'Fes',
        description:
            "This 3-day tour offers an incredible opportunity to explore the diverse landscapes and rich culture of Morocco. Starting in Fes, you'll venture into the Sahara Desert, experiencing the breathtaking beauty...",
        url: 'https://mct-tours.com/trip/3-days-from-fes-and-back-to-marrakech/',
        accommodation: 'Camp and Hotel',
        tripType: 'Short tours',
        difficulty: 'Easy',
        arrivalCity: 'Marrakech',
        languages: 'English, Chinese, French, Spanish',
        image: '/images/tours/ourzazate.jpg',
        itinerary: [
            {
                day: 'Day 1',
                title: 'Day 1: Fez - Erfoud - Merzouga ',
                description:
                    'Arise early for the drive to Erfoud with a stop in Ifrane, an alpine city known for its beautiful park and its famous sky resort; continue your drive to Midelt, a town located between the Middle Atlas and High Atlas Mountains, and stop for lunch.\r\n\r\nAfter lunch, start crossing the beautiful fertile valleys of Ziz and Tafilalet. Stop in Erfoud and visit a marble center where 500 million year old fossils are extracted, polished and exported on the globe. Drive into the Sahara Desert to Merzouga, the site of the Merzouga Dunes, the highest in Africa and one of the filming sites for Lawrence of Arabia. Take an optional camel trek to watch the sun set behind the Sahara dunes. Camp overnight in a nomad tent, furnished inside with a comfortable clean cot, fresh linens and blankets set on colourful Moroccan carpets. \r\n\r\nAccommodation\r\n\r\nCamp at Merzouga(01 night)\r\nIncluded Activities\r\nIfrane- Short stop\r\nMidelt  – Short stop \r\nErfoud- Visit of Fossils\r\nMerzouga – enjoy the dunes\r\n\r\nOptional Activities\r\n\r\nLunch at a Local Restaurant at Midelt\r\n\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 2',
                title: 'Merzouga- Todra – Ouarzazate',
                description:
                    'After breakfast, drive to Todra Gorge, passing through the old town of Tinghir with a stop to visit the ruined Glaoui Kasbah. Sheer cliffs rise up dramatically on each side of the narrow corridor that forms the Todra Gorge. Mountain goats and eagles are sometimes seen on the high cliffs. Then drive through the Dades Valley, a spectacularly beautiful area of contrasting colours and terrains, also known as the valley of a thousand Kasbahs. The Dades Gorge is a beautiful example of the intricate and effective irrigation systems needed in this area. The lush green willows, plants and trees sway in the breezes at the bottom of the valley while the sides of the gorge are a barren, stark shade of brick red. The Dades and Todra Gorges provide some of the best seasonal bird watching sites in Morocco, with many types of lark, sand grouse, buzzards, falcon, warblers, finches, and others. \r\n\r\nAccommodation\r\n- Hotel at Ouarzazate(01 night)\r\nIncluded Activities\r\n- Tinghir- Visit of the Glaoui Kasbah\r\n- Todra Gorges – Short break \r\n- Enjoy the Dades Valley\r\nOptional Activities\r\n- Lunch at a Local Restaurant at Boumalne Dades or Kalaat Mgouna\r\n- Dinner at a typical Restaurant at Marrakech\r\nMeals Included\r\n- Breakfast\r\n- Dinner',
            },
            {
                day: 'Day 3',
                title: 'Ouarzazate – Marrakech',
                description:
                    'After breakfast, Have an optional sight-seeing to the film studios where many famous films were made, such as, Gladiator, the Four Feathers, Romancing the Stone, Cleopatra, the Sheltering Sky, Jewel of the Nile and Lawrence of Arabia, then drive to Ait Ben Haddou, En route, stop to visit the Kasbah, an exceptionally well-preserved site which was declared a World Heritage Site by UNESCO in 1987. Stop for a mint tea glass with a Berber family in their home. \r\n- Hotel at Marrakech (01 night)\r\nIncluded Activities\r\n- Ouarzazate – Short break \r\n- Visit of Kasbah Ait Ben Haddou\r\nMeals Included\r\n- Breakfast\r\n\r\nOptional Activities\r\n- Ait Benhaddou - Henna Tattoo\r\n- Ouarazate - Atlas Movie Studios \r\n- Ouarzazate - Kasbah Taourirt \r\n\r\nThis concludes the services of Moroccan Club Travel.',
            },
        ],
        included: [
            'Transfer from and back to Airport.',
            'A Comfort A/C Van/ minibus in your disposition all Days, with English speaking driver and local tour guides.',
        ],
        excluded: ['Any personal costs', 'Drinks'],
    },
];
