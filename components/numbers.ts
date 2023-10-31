type BrewAdvices =
  | {
      brewer?: string | undefined;
      grinding?: string | undefined;
      temperature?: string | undefined;
      ratio?: string | undefined;
      time?: string | undefined;
      notes?: string | undefined;
    }
  | undefined;

type AdditionalInfos =
  | {
      roastery?: string | undefined;
      name?: string | undefined;
      city?: string | undefined;
      taste?: string | undefined;
      roast?: string | undefined;
      variety?: string | undefined;
      region?: string | undefined;
      processing?: string | undefined;
      recommendation?: string | undefined;
      url?: string | undefined;
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
  { number: "6", title: "title", userName: "" },
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
  { number: "24", title: "title", userName: "" },
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
    },
    additionalInfos: {
      roastery: "",
      name: "",
      city: "",
      taste: "",
      roast: "",
      variety: "",
      region: "",
      processing: "",
      recommendation: "",
      url: "",
    },
  }, 
  
  */
