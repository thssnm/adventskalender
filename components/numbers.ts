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
  { number: "10", userName: "" },
  { number: "12", userName: "" },
  { number: "1", userName: "" },
  { number: "9", userName: "" },
  { number: "17", userName: "" },
  { number: "8", userName: "" },
  { number: "6", userName: "" },
  { number: "18", userName: "" },
  { number: "2", userName: "" },
  { number: "23", userName: "" },
  { number: "13", userName: "" },
  { number: "21", userName: "" },
  { number: "5", userName: "" },
  { number: "20", userName: "" },
  { number: "3", userName: "" },
  { number: "24", userName: "" },
  { number: "19", userName: "" },
  { number: "7", userName: "" },
  { number: "15", userName: "" },
  { number: "4", userName: "" },
  { number: "16", userName: "" },
  { number: "22", userName: "" },
  { number: "11", userName: "" },
  { number: "14", userName: "" },
]; /*

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
      recipe: [""],
    },
    additionalInfos: {
      roastery: "",
      name: "",
      farm: ""
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

/*
 

//______________Eric00

  {
    number: "1", //number is fix 6
    userName: "Eric00",
    brewAdvices: {
      brewer: "V60 01, Cafec Abaca rot",
      grinding:
        "medium, ein wenig feiner als sonst. Ich bin bei 64mm SSP MP Scheiben 500-550 Micron ab Schleifpunkt. Eine Comandante besitze ich aktuell nicht, würde dort aber round about 20 Clicks anpeilen.",
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
    number: "2", //number is fix 24
    userName: "SebiEspresso",
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
    number: "3",
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
      recommendation: "",
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
    number: "5",
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
    number: "6",
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
    number: "7",
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
    number: "8",
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
    number: "9",
    userName: "Konstantinos",
    additionalInfos: {
      roastery: "Cøffe",
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
    },
    //1kg -  48,90 €
  },

  {
    number: "10",
    userName: "Konstantinos",
    additionalInfos: {
      roastery: "Rösterei VIER",
      farm: "El Paraiso",
      producer: "Diego Samuel Bermudez",
      city: "Düsseldorf",
      taste: "Pfirsich - Joghurt - Erdbeere",
      variety: "Castillo",
      height: "1950m",
      region: "Cauca / Piendamo, Kolumbien",
      microlot: "Frutos Rojos",
      processing: "washed & anaerobic",
      recommendation: "Siebträger, Filter, French Press, Aeropress",
      url: "https://roesterei-vier.de/diegobermudezfrutosrojos",
    },
    //1kg - 50,90 €
  },




  ________________Philipp82
  */
