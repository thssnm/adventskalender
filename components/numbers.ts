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
      processing?: string | undefined;
      recommendation?: string | undefined;
      cupScore?: string | undefined;
      url?: string | undefined;
      notes?: string | undefined;
    }
  | undefined;

export type CalendarItemType = {
  number: string | undefined;
  title?: string | undefined;
  userName?: string | undefined;
  brewAdvices?: BrewAdvices | undefined;
  additionalInfos?: AdditionalInfos | undefined;
};

export type Numbers = CalendarItemType[];

export const numbers: Numbers = [
  {
    number: "10",
  },
  { number: "12", title: "title", userName: "" },
  {
    number: "1",
    title: "title",
    userName: "Herzlich willkommen zum diesjährigen Adventskalender",
  },

  { number: "9", title: "title", userName: "" },
  { number: "17", title: "title", userName: "" },
  { number: "8", title: "title", userName: "" },

  {
    number: "6",
    title: "",
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
      roast: "",
      variety: "Sidra",
      region: "Sozoranga , Loja, Ecuador",
      processing: "Red Double Anaerobic Washed",
      recommendation: "",
      url: "https://www.sumocoffeeroasters.com/product-page/yambamine-ecuador-1",
      notes: `Für meinen Geschmack der beste Kaffee, den ich dieses Jahr getrunken habe, von einem wirklich tollen Röster – aus diesem Grund meiner Meinung nach ein würdiger Kaffee für ein besonderes Türchen des Adventskalenders. :)  
      Als Sidra eine außergewöhnliche Varietät, komplex aufbereitet. Meiner Meinung nach ein exzellentes Beispiel für einen anaerob gewaschen aufbereiteten Kaffee, der zwar vergleichsweise lange fermentiert ist, jedoch keinesfalls ins überfermentierte abrutscht.  
      Sumo ist ein Röster, der mit funky aufbereiteten Bohnen sehr gut umgehen kann und diese fantastisch röstet. \nDa stark aufbereitete Bohnen schneller Farbe annehmen, sehen die Bohnen deutlich dunkler aus, als sie geschmacklich in der Tasse sind. 
      Geschmacklich für mich ein sehr süß-beeriger Kaffee mit einer tollen Säure und insgesamt sehr komplexem Charakter. Ein großartiges Beispiel für einen außergewöhnlichen, superleckeren Kaffee aus Ecuador.`,
    },
    //1kg = 187
  },

  { number: "18", title: "title", userName: "" },
  {
    number: "2",
    title: "title",
    userName: "",
    brewAdvices: {
      brewer: "Orea V3",
      grinding: "Comandante 19 Clicks",
      temperature: "91°C",
      ratio: "15gr to 250gr",
      time: "2:35min",
      notes: "3 mal 50gr",
    },
    additionalInfos: {
      roastery: "Cafe Mundus",
      name: "Äthiopien – Amaderero",
      city: "Dueren",
      taste: "Rote Früchte, Schokokolade, floral",
      roast: "Medium / Omniroast",
      variety: "Heirloom",
      region: "Yirgacheffe",
      processing: "super natural",
      recommendation: "Handfilter, Aeropress, Presskanne, Siebträger",
      url: "https://www.cafemundus.com/products/athiopien-hambela?variant=46614488285508",
    },
  },
  { number: "23", title: "title", userName: "" },
  { number: "13", title: "title", userName: "" },
  { number: "21", title: "title", userName: "" },
  { number: "5", title: "title", userName: "" },
  { number: "20", title: "title", userName: "" },
  { number: "3", title: "title", userName: "" },

  {
    number: "24",
    title: "",
    userName: "SebiEspresso",
    brewAdvices: {
      brewer: "",
      grinding: "",
      temperature: "",
      ratio: "",
      time: "",
      recipe: [],
    },
    additionalInfos: {
      roastery: "DAK Coffee Roasters",
      name: "Grenadine Vol. II",
      producer: "Nestor Lasso",
      city: "Amsterdam, Niederlande",
      taste: "Erdbeere, Kirsche, Süß, Rote Früchte, Toffee",
      roast: "",
      variety: "Ombligon",
      region: "Huila, Columbien",
      processing: "Natural (Aerob und Anaerobe Thermalshock Fermentation)",
      recommendation: "",
      url: "https://dakcoffeeroasters.com/shop/coffee/grenadine-volume%20II?quantity=250g&roast=filter",
      notes: `Hier kommt der Trend 2023 schlechthin: DAK in Kombination mit Nestor Lasso von der Finca El Diviso. Das verspricht hochwertige Bohnen, aufwändig prozessiert :)  
        Ich habe von der Variätet irgendwann im Verlauf der WBC 2023 gelesen und wieder vergessen, bis vor kurzem DAK mit diesem Kaffee kam. Das klang einfach sehr spannend und ich wollte euch diesen Kaffee mal zeigen.  
        Wer mehr zum Kaffee lesen möchte findet unter [What is Ombligon coffee & could it become more popular?](#https://perfectdailygrind.com/2023/08/what-is-ombligon-variety-coffee/) eine schöne Lektüre.  
        Viel Spaß mit dem Kaffee und eine schöne Weihnachtszeit, Sebi`,
    },
    //1kg - 132,50
  },

  { number: "19", title: "title", userName: "" },
  { number: "7", title: "title", userName: "" },
  { number: "15", title: "title", userName: "" },
  { number: "4", title: "title", userName: "" },
  { number: "16", title: "title", userName: "" },
  { number: "22", title: "title", userName: "" },
  { number: "11", title: "title", userName: "" },
  {
    number: "14",
    title: "title",
    userName: "",
  },
]; /*

/*   

{
    number: "",
    title: "",
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
      processing: "",
      recommendation: "",
      url: "",
      notes: "",
    },
  }, 
  
  */

/*
 




//schweiz Christiantar

/*     {
    number: "",
    title: "",
    userName: "Christiantar",
    brewAdvices: {
      brewer: "V60",
      grinding: "24 Clicks auf der Commandante",
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
      city: "",
      taste: "Tropische Früchte, Ananas, Melasse, leicht weinig (DeepL) ",
      roast: "",
      variety: "Caturra",
      region: "Acatenango, Guatemala",
      processing: "Carbonic maceration",
      recommendation: "",
      cupScore: "88+",
      url: "https://roasticious.com",
      notes: "",
    },

    //1kg - 60
  }, 
  {
    number: "",
    title: "",
    userName: "Christiantar",
    brewAdvices: {
      brewer: "V60",
      grinding: "24 Clicks auf der Commandante",
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
      city: "",
      taste: "Holunderblüte, Zitrusfrüchte, leichtes Karamell (DeepL)",
      roast: "",
      variety: "Bourbon",
      region: "Cyeza, Mughanga district, Rwanda",
      processing: "Washed",
      recommendation: "",
      url: "https://roasticious.com",
      notes: "",
    },
    1kg - 64
  },
  
  */

//_____________________________Inalina
/*       {
    number: "",
    userName: "Inalina",
    brewAdvices: {
      brewer: "Hario V60 / Origami",
      grinding: "Comandante: 18-20 Klicks",
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
      recommendation: "Filter, French Press, Aero Press",
      url: "https://seekind.coffee/shop/forest-cosmic-filter/",
      notes: `Omar Arango nimmt einen Teil seiner besten Ernte auf der Farm San Luis und platziert sie in einem Fass im Wald.  
        Ein Schamane führt vor der Schließung des Deckels ein Ritual aus, um den Kaffee zu segnen. Der Kaffee fermentiert nur durch Hilfe natürlicher Hefen des Kolumbianischen Regenwaldes.`,
    },
    //1kg - 68
  },
  {
    number: "",
    title: "",
    userName: "Inalina",
    brewAdvices: {
      brewer: "Graycano, V60, Origami, Kalita, Fellow X, AeroPress",
      grinding: "Comandante: 22 Klicks",
      temperature: "93 Grad (Aeropress 88 Grad)",
      ratio: "15g - 250g (Aeropress 15g - 220g)",
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
      farm: "",
      producer: "Dr. Rosebella Langat",
      city: "Burgebrach",
      taste:
        "Traube, Pflaume, Cranberry, Steinfrucht Johannisbeere, Cashew Nuss",
      roast: "hell",
      variety: "SL-28; SL-34; Ruiru11, Batian",
      region: "Nandi County, Kenia",
      processing: "Natural - Anaerob (Sleeping Bag)",
      recommendation: "",
      cupScore: "87",
      url: "https://schoenkaffee.de/products/chepsangor-hills-sleeping-bag-kenia-natural",
      notes: `Eine kleine Besonderheit in der Aufbereitung hat der Chepsangor Hills zusätzlich zu bieten. Direkt nach der Ernte werden die Kirschen in schwarzen Säcken (Sleeping Bags) für fünf Tage anaerob fermentiert.  
        Chepsangor Hills liegt in Nandi County bei Westkenia. Die Farm ist im Besitz von Dr. Rosebella Langat und ihrem Mann. Sie bauen selber Kaffee an und arbeiten direkt mit den Kaffeebauern zusammen, um die besten verfügbaren Bohnen zu finden. Sie begannen 2016 mit dem Anbau und brachten den Kaffee zum entpulpen in die Kabsaos Genossenschaft.   
        Zurzeit ist Chepsangor Hills eines der professionellsten Projekte in der Region. Denn es fördert das nachhaltige Wachstum des Kaffees durch umweltfreundliche und landwirtschaftliche Praktiken. Die Vision von Rosebella ist es, lokalen Gemeinschaften, insbesondere Frauen, dabei zu helfen, eine nachhaltige soziale, ökologische und wirtschaftliche Stärkung zu erreichen.  
        Sie haben ein Kompost-Projekt für organischen Dünger. Außerdem nutzen sie ein Grünhaus mit mehrlagigen sun drying beds, sodass die Naturals schneller und unabhängig von Regen getrocknet werden können.Der Kaffee wird in 30 kg Säcken aus Jute importiert. Der Sleeping Bag Kaffee wird sogar vakuumverpackt.`,
    },
    //1kg - 67,90
  },
  
  */
