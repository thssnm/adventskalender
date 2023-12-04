type BrewAdvices =
  | {
      brewer?: string | undefined;
      grinding?: string | undefined;
      temperature?: string | undefined;
      ratio?: string | undefined;
      time?: string | undefined;
      notes?: string | undefined;
      recipe?: string[] | undefined;
      additionalRecipe?: string[] | undefined;
      moreAdditionalRecipe?: string[] | undefined;
    }
  | undefined;

type AdditionalInfos =
  | {
      name?: string | undefined;
      roastery?: string | undefined;
      producer?: string | undefined;
      farm?: string | undefined;
      city?: string | undefined;
      taste?: string | undefined;
      roast?: string | undefined;
      variety?: string | undefined;
      region?: string | undefined;
      height?: string | undefined;
      processing?: string | undefined;
      microlot?: string | undefined;
      recommendation?: string | undefined;
      cupScore?: string | undefined;
      url?: string | undefined;
      notes?: string | undefined;
    }
  | undefined;

export type CalendarItemType = {
  number: string | undefined;
  userName?: string | undefined;
  brewAdvices?: BrewAdvices | undefined;
  additionalInfos?: AdditionalInfos | undefined;
};

export type Numbers = CalendarItemType[];

export const numbers: Numbers = [
  //______________Christiantar
  {
    number: "6", //number is fix 6
    userName: "Eric00",
    brewAdvices: {
      brewer: "V60 01, Cafec Abaca rot",
      grinding: `medium, ein wenig feiner als sonst. Ich bin bei 64mm SSP MP Scheiben 500-550 Micron ab Schleifpunkt. Eine Comandante besitze ich aktuell nicht, würde dort aber round about 20 Clicks anpeilen.  
        Kingrinder K6 (70-75 Clicks)  
        Empfehlung ist eine Mühle mit möglichst viel Klarheit`,
      temperature: "93-95 Grad",
      ratio: "18g/300g",
      time: "2:30 min",
      notes:
        "Ich nutze für den Kaffee eine leicht abgewandelte Version des V60 Rezepts von Jonathan Gagne.",
      recipe: [
        "0:00: Vertiefung in der Mitte des Kaffeebetts, 60g Bloom, leichter Swirl.",
        "0:45: langsam auf 180g in Flower-Pattern oder Kreisen aufgießen, leichter Swirl.",
        "Kurz bevor alles durchgelaufen ist, zwischen 1:20 und 1:35: langsam auf 300g in Flower-Pattern oder Kreisen aufgießen, leichter Swirl.",
        "Drawdown ca. 2:30 min.",
      ],
    },
    additionalInfos: {
      name: "Yambamine",
      producer: "Diana Velez",
      roastery: "S U M O",
      city: "Dublin, Ireland",
      taste:
        "Rote reife Früchte, Cantaloupe, Brombeere, Rum, Vanille, roter Apfel. Super süß, saftig mit prickelnder Säure. (DeepL)",
      variety: "Sidra",
      region: "Sozoranga , Loja, Ecuador",
      processing: "Red Double Anaerobic Washed",
      height: "1800m",
      url: "https://www.sumocoffeeroasters.com/product-page/yambamine-ecuador-1",
      notes: `Für meinen Geschmack der beste Kaffee, den ich dieses Jahr getrunken habe, von einem wirklich tollen Röster – aus diesem Grund meiner Meinung nach ein würdiger Kaffee für ein besonderes Türchen des Adventskalenders. :)  
      Als Sidra eine außergewöhnliche Varietät, komplex aufbereitet. Meiner Meinung nach ein exzellentes Beispiel für einen anaerob gewaschen aufbereiteten Kaffee, der zwar vergleichsweise lange fermentiert ist, jedoch keinesfalls ins überfermentierte abrutscht.  
      Sumo ist ein Röster, der mit funky aufbereiteten Bohnen sehr gut umgehen kann und diese fantastisch röstet. \nDa stark aufbereitete Bohnen schneller Farbe annehmen, sehen die Bohnen deutlich dunkler aus, als sie geschmacklich in der Tasse sind. 
      Geschmacklich für mich ein sehr süß-beeriger Kaffee mit einer tollen Säure und insgesamt sehr komplexem Charakter. Ein großartiges Beispiel für einen außergewöhnlichen, superleckeren Kaffee aus Ecuador.`,
    },
    //1kg = 187
  },

  //_______________SebiEspresso
  {
    number: "24", //number is fix 24
    userName: "SebiEspresso",
    brewAdvices: {
      notes:
        "Der Kaffee ist sehr durchlässig. Bitte nicht wundern, wenn er auch trotz feinem Mahlgrad schnell läuft. Da er eine hohe Qualität hat, kann bzw. sollte er sogar etwas unterextrahiert werden.",
      recipe: [
        "Klassisch:",
        "Brüher: V60",
        "Ratio: 20gr Kaffee - 320gr Wasser (1:16)",
        "Temperatur: 94°C bis kochend",
        "Mahlgrad: fein bis fein-medium (C40 ca. 20 Klicks, Fellow Ode V2 4-5, DF64 mit SSP Cast V2 45-50, JX-Pro 3.3.0)",
        "Aufguss JH One-Cup:",
        "00:00 64 gr -> Swirl -> Bloom",
        "00:45 128 gr",
        "01:10 192 gr",
        "01:30 256 gr",
        "01:50 320 gr -> Gently Swirl",
        "ca. 2:45 Draw Down",
      ],
      additionalRecipe: [
        "Experimentell:",
        "Brüher: V60",
        "Ratio: 20gr Kaffee - 320gr Wasser (1:16)",
        "Temperatur: 60°C und kochend",
        "Mahlgrad: fein-medium (C40 ca. 22 Klicks, Fellow Ode V2 5, DF64 mit SSP Cast V2 50-55, JX-Pro 3.4.0)",
        "Aufguss (Samo Bloom):",
        "00:00 60 gr mit 60°C Wasser -> Swirl -> Bloom",
        "02:00 - 02:30 auf 320 gr mit etwa 10gr/s aufgießen -> Draw Down",
      ],
      moreAdditionalRecipe: [
        "Daily Routine (Switch):",
        "Brüher: Hario Switch",
        "Ratio: 20gr Kaffee - 300gr Wasser (1:15)",
        "Temperatur: kochend",
        "Mahlgrad: fein bis fein-medium (C40 ca. 20 Klicks, Fellow Ode V2 4-5, DF64 mit SSP Cast V2 45-50, JX-Pro 3.3.0)",
        "Aufguss (Samo Bloom):",
        "00:00 150 gr aufgießen mit Switch OFFEN!",
        "00:45 300 gr aufgießen mit Switch GESCHLOSSEN",
        "02:00 Switch öffnen -> Draw Down ca. 2:50",
      ],
    },
    additionalInfos: {
      roastery: "DAK Coffee Roasters",
      name: "Grenadine Vol. II",
      producer: "Nestor Lasso",
      city: "Amsterdam, Niederlande",
      taste: "Erdbeere, Kirsche, Süß, Rote Früchte, Toffee",
      variety: "Ombligon",
      region: "Huila, Columbien",
      processing: "Natural (Aerob und Anaerobe Thermalshock Fermentation)",
      height: "1950m",
      url: "https://dakcoffeeroasters.com/shop/coffee/grenadine-volume%20II?quantity=250g&roast=filter",
      notes: `Hier kommt der Trend 2023 schlechthin: DAK in Kombination mit Nestor Lasso von der Finca El Diviso. Das verspricht hochwertige Bohnen, aufwändig prozessiert :)  
        Ich habe von der Variätet irgendwann im Verlauf der WBC 2023 gelesen und wieder vergessen, bis vor kurzem DAK mit diesem Kaffee kam. Das klang einfach sehr spannend und ich wollte euch diesen Kaffee mal zeigen.  
        Wer mehr zum Kaffee lesen möchte findet unter [What is Ombligon coffee & could it become more popular?](#https://perfectdailygrind.com/2023/08/what-is-ombligon-variety-coffee/) eine schöne Lektüre.  
        Viel Spaß mit dem Kaffee und eine schöne Weihnachtszeit, Sebi`,
    },
    //1kg - 132,50
  },

  //______________Christiantar
  {
    number: "14",
    userName: "Christiantar",
    brewAdvices: {
      brewer: "V60",
      grinding: "Commandante: 24 clicks",
      temperature: "93 Grad",
      ratio: "18g/300g",
      time: "2:30 - 2:45",
      recipe: [
        "0:00: Bloom mit 36g Wasser",
        "0:45: Add 124g Wasser ( -> 160g total)",
        "1:30: Add 140g Wasser ( -> 300g total)",
        "Ziel-Brühzeit 2:30 - 2:45",
      ],
    },
    additionalInfos: {
      roastery: "Roasticious",
      name: "La Senda Vibrante",
      farm: "Finca La Senda",
      producer: "Arnoldo Pérez Melendez and Maria Eugenia Escobar",
      taste: "Tropische Früchte, Ananas, Melasse, leicht weinig (DeepL) ",
      variety: "Caturra",
      region: "Acatenango, Guatemala",
      processing: "Carbonic maceration",
      cupScore: "88+",
      url: "https://roasticious.com",
    },

    //1kg - 60
  },
  {
    number: "4",

    userName: "Christiantar",
    brewAdvices: {
      brewer: "V60",
      grinding: "Commandante: 24 Clicks",
      temperature: "93 Grad",
      ratio: "18g/300g",
      time: "2:30 - 2:45",
      recipe: [
        "0:00: Bloom mit 36g Wasser",
        "0:45: Add 124g Wasser ( -> 160g total)",
        "1:30: Add 140g Wasser ( -> 300g total)",
        "Ziel-Brühzeit 2:30 - 2:45",
      ],
    },
    additionalInfos: {
      roastery: "Roasticious",
      name: "Sholi Women",
      farm: "Kundwa Women Coffee smallholder farmers",
      producer: "Abateraninkunga Ba Sholi Co-operative",
      taste: "Holunderblüte, Zitrusfrüchte, leichtes Karamell (DeepL)",
      variety: "Bourbon",
      region: "Cyeza, Mughanga district, Rwanda",
      processing: "Washed",
      url: "https://roasticious.com",
    },
    //1kg - 64
  },

  //_____________________________Inalina
  {
    number: "1",
    userName: "Inalina",
    brewAdvices: {
      brewer: "Hario V60 / Origami",
      grinding: "Comandante: 18-20 Clicks",
      temperature: "93 Grad",
      ratio: "1:16",
      time: "2:15 - 2:40",
    },
    additionalInfos: {
      roastery: "Seekind",
      city: "Ravensburg",
      name: "Forest Cósmic",
      farm: "San Luis",
      producer: "Omar Arango",
      taste: "tropische Früchte • Demerara Zucker • Zitrusfrüchte",
      variety: "Bourbon, Typica, Caturra",
      region: "Libano Tolima, Kolumbien",
      processing: "Natural Anearob",
      height: `1680 – 1800m`,
      recommendation: "Filter, French Press, Aero Press",
      url: "https://seekind.coffee/shop/forest-cosmic-filter/",
      notes: `Omar Arango nimmt einen Teil seiner besten Ernte auf der Farm San Luis und platziert sie in einem Fass im Wald.  
        Ein Schamane führt vor der Schließung des Deckels ein Ritual aus, um den Kaffee zu segnen. Der Kaffee fermentiert nur durch Hilfe natürlicher Hefen des Kolumbianischen Regenwaldes.`,
    },
    //1kg - 68
  },
  {
    number: "12",
    userName: "Inalina",
    brewAdvices: {
      brewer: "Graycano, V60, Origami, Kalita, Fellow X, AeroPress",
      grinding: "Comandante: 22 Clicks",
      temperature: "93 Grad (Aeropress 88 Grad)",
      ratio: "15g/250g (Aeropress 15g/220g)",
      time: "2:45 (Aeropress 1:40)",
      notes:
        "Das Rezept funktioniert genau so gut mit 18g/300ml; in dem Fall dann in 60ml/120ml Schritten gießen und Mahlgrad etwas gröber (23/24 Klicks)",
      recipe: [
        "Graycano, V60, Origami, Kalita, Fellow X:",
        "Brew Ratio 15g Kaffee - 250g Wasser; Temperatur 93° ; 22 Klicks C40 MK4",
        "0:00 - 0:10 - 50ml - Swirl",
        "0:10 - 0:45 - (Bloom)",
        "0:45 - 1:00 - 100ml",
        "1:15 - 1:25 - 50ml",
        "1:45 - 1:55 - 50ml - anschließend Swirl",
        "2:45 - fertig",
      ],
      additionalRecipe: [
        "AeroPress inverted.",
        "15g Kaffee; ( 22 Klicks) ; 220ml Wasser; 88°",
        "0:00 - 0:30 mit 50ml Wasser aufgießen und 5 x langsam umrühren",
        "0:30 - 1:00 und bis 220ml auffüllen, 5 x umrühren, danach filter drauf und auf Server platzieren",
        "bei 1:10 Minuten anfangen langsam zu pressen, fertig bei 1:40 Minuten.",
      ],
    },
    additionalInfos: {
      roastery: "Schön",
      name: "CHEPSANGOR HILLS",
      producer: "Dr. Rosebella Langat",
      city: "Burgebrach",
      taste:
        "Traube, Pflaume, Cranberry, Steinfrucht Johannisbeere, Cashew Nuss",
      roast: "hell",
      variety: "SL-28; SL-34; Ruiru11, Batian",
      region: "Nandi County, Kenia",
      processing: "Natural - Anaerob (Sleeping Bag)",
      recommendation: "",
      height: "1749m",
      cupScore: "87",
      url: "https://schoenkaffee.de/products/chepsangor-hills-sleeping-bag-kenia-natural",
      notes: `Eine kleine Besonderheit in der Aufbereitung hat der Chepsangor Hills zusätzlich zu bieten. Direkt nach der Ernte werden die Kirschen in schwarzen Säcken (Sleeping Bags) für fünf Tage anaerob fermentiert.  
        Chepsangor Hills liegt in Nandi County bei Westkenia. Die Farm ist im Besitz von Dr. Rosebella Langat und ihrem Mann. Sie bauen selber Kaffee an und arbeiten direkt mit den Kaffeebauern zusammen, um die besten verfügbaren Bohnen zu finden. Sie begannen 2016 mit dem Anbau und brachten den Kaffee zum entpulpen in die Kabsaos Genossenschaft.   
        Zurzeit ist Chepsangor Hills eines der professionellsten Projekte in der Region. Denn es fördert das nachhaltige Wachstum des Kaffees durch umweltfreundliche und landwirtschaftliche Praktiken. Die Vision von Rosebella ist es, lokalen Gemeinschaften, insbesondere Frauen, dabei zu helfen, eine nachhaltige soziale, ökologische und wirtschaftliche Stärkung zu erreichen.  
        Sie haben ein Kompost-Projekt für organischen Dünger. Außerdem nutzen sie ein Grünhaus mit mehrlagigen sun drying beds, sodass die Naturals schneller und unabhängig von Regen getrocknet werden können.Der Kaffee wird in 30 kg Säcken aus Jute importiert. Der Sleeping Bag Kaffee wird sogar vakuumverpackt.`,
    },
    //1kg - 67,90
  },

  //______________Richard

  {
    number: "9",
    userName: "Richard",
    brewAdvices: {
      brewer: "V60",
      temperature: "95 Grad",
      ratio: "15g/250g",
      time: "2:20",
    },
    additionalInfos: {
      roastery: "INDUSTRA.COFFEE",
      name: "MUNDAYO",
      farm: "Nensebo, West Arsi",
      city: "Brünn, Tschechien",
      region: "ETHIOPIA",
      height: "1900m",
      processing: "washed",
      url: "https://industra.coffee/en/product/ethiopia-mundayo-filter/",
    },

    //1kg - 58,43 €
  },

  {
    number: "15",
    userName: "Richard",
    brewAdvices: {
      brewer: "V60",
      temperature: "95 Grad",
      ratio: "15g/250g",
      time: "2:20",
    },
    additionalInfos: {
      roastery: "INDUSTRA.COFFEE",
      name: "TEJAO",
      farm: "Sierra Mazateca, Oaxaca",
      city: "Brünn, Tschechien",
      variety: "Typica, Bourbon",
      region: "MEXICO",
      processing: "washed",
      url: "https://industra.coffee/en/product/mexico-tejao-filter/",
    },
    //1kg - 58,43 €
  },

  //____________________Konstantinos

  {
    number: "19",
    userName: "Konstantinos",
    additionalInfos: {
      roastery: "Das CØFFE",
      name: "Colombia",
      producer: "Wilson Ordonez",
      city: "Düsseldorf",
      taste: "Nektarine, Marshmallow, Magnolie",
      roast: "Light",
      variety: "Caturra, Typica",
      region: "San Augustin, Huila",
      height: "1850m",
      processing: "washed",
      url: "https://dascoffe.store/products/colombia-250g?variant=46840961401177",
      notes: `Das CØFFE röstet zwar nicht erst seit gestern, haben aber seit diesem Jahr deutlich mehr Varietät ins Haus gebracht.  
        Durch die guten Beziehungen konnten die Betreiben viele Kaffees aus Kolumbien sourcen und starten langsam so richtig durch. Den Kaffee habe ich persönlich noch nicht getestet, hoffe aber, dass er euch geschmeckt hat!`,
    },
    //1kg -  48,90 €
  },

  {
    number: "10",
    userName: "Konstantinos",
    additionalInfos: {
      roastery: "Rösterei VIER",
      name: "Frutos Rojos",
      farm: "El Paraiso",
      producer: "Diego Samuel Bermudez",
      city: "Düsseldorf",
      taste: "Pfirsich, Erdbeere, Jogurt",
      roast: "Omni",
      variety: "Castillo",
      height: "1950m",
      region: "Cauca / Piendamo, Kolumbien",
      microlot: "Frutos Rojos",
      processing: "Washed Anaerobic",
      recommendation: "Siebträger, Filter, French Press, Aeropress",
      url: "https://roesterei-vier.de/diegobermudezfrutosrojos",
      notes: `Das Benchmark-Lot von Diego Bermudez geröstet von Rösterei Vier in Düsseldorf.  
        Kein anderes Lot von Ihm ist so sauber und zeigt die weiteren Potenziale von Fermentation und Kaffee.`,
    },
    //1kg - 50,90 €
  },

  //___________Dirk_H
  {
    number: "5",
    userName: "Dirk_H",
    brewAdvices: {
      grinding: "mittel-fein bis fein",
      temperature: "96-100°C",
      ratio: "1:16",
      time: "2:40 - 3:00",
    },
    additionalInfos: {
      roastery: "Leuchtfeuer",
      name: "No.2",
      producer: "Don Eli - Carlos Montero",
      city: "Wedel",
      taste: "Passionsfrucht, süße Mangostane und ein Coca Cola Finish",
      roast: "Light",
      variety: "Catuai",
      region: "Tarrazú | La Pastora, Costa Rica",
      height: "1900m | 2000m",
      processing: "Natural Anaerobic, 5 tage tank fermented, slow dried",
      cupScore: "88",
      url: "https://www.leuchtfeuer.coffee/products/specialty-coffee-filterkaffee-costa-rica-no2",
      notes: "Experimental Lot, Ernte 2022",
    },
    //1kg -  70€
  },
  {
    number: "16",
    userName: "Dirk_H",
    brewAdvices: {
      grinding: "eher fein mahlen",
      ratio: "1:16",
      time: "2:20 - 2:40",
      notes: "Schmeckt optimal, wenn man ihn etwas runterkühlen lässt",
    },
    additionalInfos: {
      roastery: "Elbgold",
      name: "La Pachuca",
      producer: "Roberto Mata Naranjo",
      city: "Hamburg",
      taste: "Rote Grütze, Weisse Melisse, Kandis",
      variety: "Caturra Amarillo",
      region: " Tarrazú | Valle de Dota, Costa Rica",
      processing: "Juicy Honey Fermentation",
      url: "https://www.elbgoldshop.com/products/filterkaffee-la-pachuca-juicy-honey-fermentation-0250g",
      notes:
        " Juicy Honey Fermentation: Dafür werden die Kirschen geschält und in ihrer eigenen Mucilage plus dem Fruchtfleisch eines weiteren Lots 120 Stunden fermentiert.",
    },
    //1kg -  71,60€
  },

  //____________Saxaddict

  {
    number: "3",
    userName: "Saxaddict",
    brewAdvices: {
      brewer: "V60",
      grinding: "Comandante 23 Clicks",
      temperature: "92-93 Grad",
      ratio: "1:15 - 1:16",
      time: "2:30 - 3:00",
      recipe: ["Blooming plus 3 Pours"],
    },
    additionalInfos: {
      roastery: "Mokxa",
      name: "RIVENSE",
      producer: "Isabel Rojas und dessen Familie",
      city: "Strasbourg, France",
      taste:
        "Un café complexe et suave, sur des notes d'ananas confit, muscat et zestes d'agrumes",
      roast: "Omni",
      variety: "Caturra",
      region: "Chirrippo, Costa Rica",
      height: "2000m",
      processing: "Anaerobe Fermentation",
      recommendation: "Siebträger, Frechpress, Bialetti, Chemex, Aeropress",
      cupScore: "87",
      url: "https://www.cafemokxa.com/nos-cafes/459-5240-costa-rica-rivense.html#/25-conditionnement-250grs/29-mouture-grains",
      notes: `Das Ehepaar Isabel Rojas und Regulo Ureña, das in einem Gebiet mit hoher Biodiversität lebt, nimmt seine Verantwortung für die Umwelt sehr ernst. Sie haben ihre Farm Café Rivense auf kreative Weise aufgebaut und wenden nachhaltige Methoden an, die von der Beschattung der Kaffeebäume bis hin zur Bodenanalyse reichen, um den Wasserverbrauch und den Einsatz von Betriebsmitteln zu minimieren.  
Ihre Söhne haben sich dem Abenteuer angeschlossen, und jeder bringt nun seine eigenen Fähigkeiten ein, so dass sie jeden Schritt der Verarbeitung der Bohnen akribisch verfolgen können!`,
    },
    //1kg -  60€
  },
  {
    number: "18",
    userName: "Saxaddict",
    brewAdvices: {
      brewer: "V60",
      grinding: "Comandante 23 Clicks",
      temperature: "92-93 Grad",
      ratio: "1:15 - 1:16",
      time: "2:30 - 3:00",
      recipe: ["Blooming plus 3 Pours"],
    },
    additionalInfos: {
      roastery: "Mokxa",
      name: "EL NIÑO",
      producer: "Jairon Hernan Moreno Ruiz",
      city: "Strasbourg, France",
      taste:
        "Un café juteux aux notes fruitées de prune et myrtille exprimant une belle acidité sur le fruit de la passion",
      roast: "Hell",
      variety: "Parainema",
      region: "La Leona, Santa Barbara, Honduras",
      height: "1500m",
      processing: "Gewaschen",
      recommendation: "V60, Chemex, Aeropress, Frechpress",
      cupScore: "87",
      url: "https://www.cafemokxa.com/nos-cafes/466-5403-honduras-el-nino.html#/25-conditionnement-250grs/29-mouture-grains",
      notes: `Jairon Moreno stammt aus einer Familie von Kaffeebauern.  
Nachdem er sieben Jahre lang beharrlich Kaffeebäume in einer Umgebung angebaut hatte, in der die Temperaturen zu kalt waren, verkaufte und kaufte er eine verlassene Plantage auf dem Gebiet von Santa Barbara, das von einem milderen Klima profitierte.  
Jairo arbeitete weiterhin hart daran, den alten Kaffeebäumen neues Leben einzuhauchen und pflanzte neue Sorten mit einer Parzelle mit Parainema und Pacamara.  
Seine Bemühungen haben sich gelohnt, da wir heute einen seiner Kaffees probieren.`,
    },
    //1kg -  48€
  },

  //________________Philipp82
  {
    number: "7",
    userName: "Philipp82",
    additionalInfos: {
      roastery: "The Barn",
      name: "SHANTAWENE",
      farm: "Daye Bensa",
      city: "Berlin",
      taste: "Passionsfrucht, Erdbeere und Banane",
      roast: "Filter",
      variety: "Heirloom",
      region: "Sidama, Äthiopien",
      height: "1900m - 2300m",
      processing: "Anaerob",
      url: "https://de.thebarn.de/de/products/shantawene",
    },
    //1kg -  72€
  },
  {
    number: "17",
    userName: "Philipp82",
    additionalInfos: {
      roastery: "Father's Coffee Roastery",
      name: "Keramo Natural",
      farm: "Daye Bensa",
      city: "Ostrava, Tschechien",
      taste: "Blaubeere, Käsekuchen, Muscovado-Zucker",
      variety: "Heirloom (indigenous varieties)",
      region: "Keramo Village, Sidama, Äthiopien",
      height: "2300m",
      processing: "Natural",
      url: "https://fathers.cz/product/keramo-f/?lang=en",
    },
    //1kg -  64,40€
  },

  //______________thssnm
  {
    number: "13",
    userName: "thssnm",
    brewAdvices: {
      brewer: "V60 - Aeropress",
      temperature: "94 Grad",
      ratio: "19g/360g",
      time: "2:45",
      notes:
        "Ich kenne diesen Kaffee noch nicht deswegen ist das die Brühempfehlung des Rösters",
    },
    additionalInfos: {
      roastery: "backyard coffee",
      name: "LA LUIS",
      producer: "Juan Pablos Velez",
      city: "Frankfurt",
      taste: "Lychee, Honig, Rote Früchte",
      region: "Kolumbien",
      processing: "honey fermentation",
      recommendation: "V60 - Aeropress - Frenchpress (etwas gröber mahlen)",
      url: "https://www.backyard-coffee.com/La-Luis-250g-Filterkaffee-aus-Kolumbien/CD.LALUI0250",
      notes:
        "Für mich ein neuer Kaffee aber die Rösterei ist mir gut bekannt. Ich bestelle dort hin und wieder Filterkaffee sowie Espresso.",
    },
    //1kg -  72€
  },
  {
    number: "20",
    userName: "thssnm",
    additionalInfos: {
      roastery: "DYLAN & HARPER",
      name: "Liberica",
      farm: "Badra Estates",
      producer: "Jacob Mammen",
      city: "Wiesbaden",
      taste: "",
      roast: "Light",
      variety: "Liberica",
      region: "Indien",
      height: "900m",
      processing: "Fully Washed",
      url: "https://www.dylanandharper.de/kaffee/liberica/",
    },
    //1kg -  68€
  },

  //___________majoj

  {
    number: "8",
    userName: "majoj",
    additionalInfos: {
      roastery: "ERNST KAFFERÖSTER",
      name: "ETHIOPIA SHANTAWENE FILTER",
      farm: "Shantawene / Daye Bensa",
      city: "Köln",
      taste: "Wilde Beere, Pfirsich, Bergamotte",
      roast: "Filter",
      variety: "mixed heirloom",
      region: "Sidama Zone, Äthiopien",
      height: "1990m - 2190m",
      processing: "natural",
      notes:
        "Offenbar ist der Kaffee nicht mehr im Shop erhaeltlich deswegen geht der Link auf die Homepage",
      url: "https://www.ernst-kaffee.de",
    },
    //1kg -  50€
  },
  {
    number: "22",
    userName: "majoj",
    additionalInfos: {
      roastery: "ERNST KAFFERÖSTER",
      name: "COSTA RICA JUANACHUTE FILTER",
      farm: "Juanachute - Santa Maria de Dota",
      producer: "Luis Anastasio Castro",
      city: "Köln",
      taste: "Brombeere, Blaubeere, Oolong",
      roast: "Filter",
      variety: "Caturra, Catuai",
      region: "Tarrazú, Costa Rica",
      height: "1800m",
      processing: "red honey",
      url: "https://www.ernst-kaffee.de/products/manos-juntas-filter-2",
    },
    //1kg -  60€
  },

  //______________Hedonii
  {
    number: "2",
    userName: "Hedonii",
    brewAdvices: {
      brewer: "Flachbett-Brüher mit Kalita 185 Filter (z.B. Orea V3)",
      grinding: "fein, Comandante: 18 Clicks",
      ratio: "18g - 300g",
      time: "2:15",
      notes: "Ergibt ca. 250g Brühkaffee mit 1,4% TDS / 20% EY",
      recipe: [
        "0:00 75g Bloom",
        "0:30 75g Pour",
        "1:00 75g Pour",
        "1:30 75g Pour",
        "2:15 Draw Down",
      ],
    },
    additionalInfos: {
      name: "Colombia Pink Bourbon Natural Anaerobic 2023 Medium", //?2
      roast: "Agtron (Gourmet) 75",
      roastery: "Eigenröstung", 
      variety: "Pink Bourbon",
      region: "Quindio, Kolumbien",
      height: "1300m",
      processing: "Natural Anaerobic",
      cupScore: "87,75",
    },
    //1kg -  €
  },
  {
    number: "21",
    userName: "Hedonii",
    brewAdvices: {
      brewer: "Flachbett-Brüher mit Kalita 185 Filter (z.B. Orea V3)",
      grinding: "fein, Comandante: 18 Clicks",
      ratio: "18g - 300g",
      time: "2:15",
      notes: "Ergibt ca. 250g Brühkaffee mit 1,4% TDS / 20% EY",
      recipe: [
        "0:00 75g Bloom",
        "0:30 75g Pour",
        "1:00 75g Pour",
        "1:30 75g Pour",
        "2:15 Draw Down",
      ],
    },
    additionalInfos: {
      name: "Colombia Pink Bourbon Natural Anaerobic 2023 Light", //?2
      roast: "Agtron (Gourmet) 90",
      variety: "Pink Bourbon",
      region: "Quindio, Kolumbien",
      height: "1300m",
      processing: "Natural Anaerobic",
      cupScore: "87,75",
    },
    //1kg -  €
  },
  {
    number: "11",
    userName: "Flattie/Fanatic",
    brewAdvices: {
      grinding: "etwas feiner",
      temperature: "etwas geringer",
    },
    additionalInfos: {
      roastery: "Ertl (Eigenröstung)",
      name: "Las Alegrias",
      farm: "Finca Alegrias",
      producer: "Juan David Puerta",
      taste:
        "Noten von Schokolade, Pistazie und tropischen Früchten wie Papaya und Melone",
      variety: "Castillo",
      region: "Quindio, Kolumbien",
      height: "1420m",
      processing: "Koji fermented Natural",
      notes: `Ein experimenteller Kaffee, der sicherlich das ein oder andere Gemüt spaltet, aber ganz bestimmt eine Erfahrung wert ist: Die Castillo-Varietät wird unter Zugabe von Koji-Sporen (einem Pilz, der zur Herstellung traditioneller, japanischer fermentierter Lebensmittel verwendet wird) mehrere Tage als Natural getrocknet.  
Das Ergebnis ist ein tiefer, schwerer und vor allem cremiger Kaffee mit hohem Mouthfeel, mit Noten von Schokolade, Pistazie und tropischen Früchten wie Papaya und Melone und der bei abnehmender Temperatur ein schwer zu beschreibendes Umami-Gefühl verbreitet ;)  
Der Kaffee wurde auf einem Aillio Bullet in einer 500g Charge insgesamt 8:20 Min. mit einer Endtemperatur von 194 Grad (9 Grad after Crack) und einer Entwicklungszeit von 16 % geröstet.`,
    },
    //1kg -  €
  },

  //_________Flattie/Fanatic
  {
    number: "23",
    userName: "Flattie/Fanatic",
    additionalInfos: {
      roastery: "Ertl (Eigenröstung)",
      name: "Milagros",
      producer: "verschiedene Kleinbauern",
      taste:
        "grüne Äpfeln und Noten von Pfirsich, tropischen Früchten und eine sanfte Mandel-Note",
      roast: "",
      variety: "Geisha",
      region: "Huila, Kolumbien",
      height: "1700 - 1900m",
      processing: "Honey",
      notes: `"Milagros" bedeutet Wunder. Das Ergebnis der gewissenhaften Arbeit einer ausgewählten Gruppe von wenigen Bauern in Huila. Der Geisha wird 24 bis 36 Stunden im Fruchtfleisch und danach 48 bis 60 Stunden im Tank fermentiert. Dann erfolgt die Entpulpung, wobei ca. 40% der Mucilage zurückbleiben. Anschließend wird er 14-20 Tage in der Sonne getrocknet.  
Der Kaffee hat Geisha-typisch ein blumiges Profil mit einer komplexen Säurestruktur von grünen Äpfeln und Noten von Pfirsich, tropischen Früchten und einer sanften Mandel-Note.  
Der Kaffee wurde auf einem Aillio Bullet in einer 500g Charge insgesamt 7:52 Min. mit einer Endtemperatur von 193 Grad (7 Grad after Crack) und einer Entwicklungszeit von 13 % geröstet.`,
    },
    //1kg -  €
  },
];

/*   

    {
    number: "",
    
    userName: "",
    brewAdvices: {
      brewer: "",
      grinding: "",
      temperature: "",
      ratio: "",
      time: "",
      recipe: [],
    },
    additionalInfos: {
      roastery: "",
      name: "",
      farm: "",
      producer: "",
      city: "",
      taste: "",
      roast: "",
      variety: "",
      region: "",
      height: "",
      processing: "",
      recommendation: "",
      url: "",
      notes: "",
    },
    //1kg -  €
  }, 
  
  */
