type BrewAdvices =
  | {
      brewer?: string | undefined;
      grinding?: string | undefined;
      temperature?: string | undefined;
      ratio?: string | undefined;
      time?: string | undefined;
      notes?: string | undefined;
      recipe?: string[] | undefined;
    }
  | undefined;

type AdditionalInfos =
  | {
      name?: string | undefined;
      roastery?: string | undefined;
      producer?: string | undefined;
      city?: string | undefined;
      taste?: string | undefined;
      roast?: string | undefined;
      variety?: string | undefined;
      region?: string | undefined;
      processing?: string | undefined;
      recommendation?: string | undefined;
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
      recipe: [""],
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
];

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
