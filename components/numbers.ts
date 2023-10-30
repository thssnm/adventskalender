export type CalendarItemType = {
  number: string;
  title: string;
  text: string;
  brewAdvices: {
    brewer: string;
    grinding: string;
    temperature: string;
    ratio: string;
    time: string;
    notes: string;
  };
  additionalInfos: {
    roastery: string;
    name: string;
    city: string;
    taste: string;
    roast: string;
    variety: string;
    region: string;
    processing: string;
    recommendation: string;
    url: string;
  };
};

export type Numbers = CalendarItemType[];

export const numbers: Numbers = [
  { number: "10", title: "title", text: "" },
  { number: "12", title: "title", text: "" },
  {
    number: "1",
    title: "title",
    text: "Herzlich willkommen zum diesjährigen Adventskalender",
  },
  { number: "9", title: "title", text: "" },
  { number: "17", title: "title", text: "" },
  { number: "8", title: "title", text: "" },
  { number: "6", title: "title", text: "" },
  { number: "18", title: "title", text: "" },
  {
    number: "2",
    title: "title",
    text: "",
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
  { number: "23", title: "title", text: "" },
  { number: "13", title: "title", text: "" },
  { number: "21", title: "title", text: "" },
  { number: "5", title: "title", text: "" },
  { number: "20", title: "title", text: "" },
  { number: "3", title: "title", text: "" },
  { number: "24", title: "title", text: "" },
  { number: "19", title: "title", text: "" },
  { number: "7", title: "title", text: "" },
  { number: "15", title: "title", text: "" },
  { number: "4", title: "title", text: "" },
  { number: "16", title: "title", text: "" },
  { number: "22", title: "title", text: "" },
  { number: "11", title: "title", text: "" },
  {
    number: "14",
    title: "title",
    text: "",
  },
];

/*   

{
    number: "",
    title: "",
    text: "",
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
