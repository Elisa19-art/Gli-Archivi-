const documents = [
  {
    id: 1,
    title: "DOCUMENTO 001",
    date: "DATA",
    characters: [1],
    keywords: ["parola", "chiave"],
    text: "QUI SCRIVERAI TU IL TESTO DEL DOCUMENTO."
  },
  {
    id: 2,
    title: "DOCUMENTO 002",
    date: "DATA",
    characters: [2],
    keywords: ["altra", "parola"],
    text: "QUI SCRIVERAI TU IL TESTO DEL DOCUMENTO."
  },
  {
    id: 3,
    title: "DOCUMENTO 003",
    date: "DATA",
    characters: [3],
    keywords: [],
    text: "QUI SCRIVERAI TU IL TESTO DEL DOCUMENTO."
  },
  {
    id: 4,
    title: "DOCUMENTO 004",
    date: "DATA",
    characters: [4],
    keywords: [],
    text: "QUI SCRIVERAI TU IL TESTO DEL DOCUMENTO."
  },
  {
    id: 5,
    title: "DOCUMENTO 005",
    date: "DATA",
    characters: [5],
    keywords: [],
    text: "QUI SCRIVERAI TU IL TESTO DEL DOCUMENTO."
  }
];


/* =========================================================
   PERSONAGGI
   ========================================================= */

const characters = [

  /* =========================
     ALBERO DI MERLINO
     ========================= */

  {
    id: "merlino",
    name: "Merlino",
    power: "Potente",
    birth: "",
    death: "",
    biography: "QUI SCRIVERAI LA BIOGRAFIA.",
    father: null,
    mother: null,
    spouse: "belladonna",
    documents: []
  },

  {
    id: "belladonna",
    name: "Belladonna",
    power: "Potente",
    birth: "",
    death: "",
    biography: "QUI SCRIVERAI LA BIOGRAFIA.",
    father: null,
    mother: null,
    spouse: "merlino",
    documents: []
  },

  {
    id: "thalassia",
    name: "Thalassia",
    power: "Media",
    birth: "",
    death: "",
    biography: "Figlia di Merlino e Belladonna.",
    father: "merlino",
    mother: "belladonna",
    spouse: "dagda",
    documents: []
  },

  {
    id: "balthazar",
    name: "Balthazar",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlio di Merlino e Belladonna.",
    father: "merlino",
    mother: "belladonna",
    spouse: "vespra",
    documents: []
  },

  {
    id: "totmes",
    name: "Totmes",
    power: "Scarsa",
    birth: "",
    death: "",
    biography: "Figlio di Merlino e Belladonna.",
    father: "merlino",
    mother: "belladonna",
    spouse: null,
    documents: []
  },

  {
    id: "sycoraxa",
    name: "Sycoraxa",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlia di Merlino e Belladonna. La sua discendenza collegherà le due grandi linee familiari.",
    father: "merlino",
    mother: "belladonna",
    spouse: "xantos",
    documents: []
  },

  {
    id: "dagda",
    name: "Dagda",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Coniuge di Thalassia.",
    father: null,
    mother: null,
    spouse: "thalassia",
    documents: []
  },

  {
    id: "morozov",
    name: "Morozov",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlio di Thalassia e Dagda.",
    father: "dagda",
    mother: "thalassia",
    spouse: "valeda",
    documents: []
  },

  {
    id: "valeda",
    name: "Valeda",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Coniuge di Morozov.",
    father: null,
    mother: null,
    spouse: "morozov",
    documents: []
  },

  {
    id: "armacus",
    name: "Armacus",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlio biologico di Morozov e Valeda. Successivamente viene adottato da Kyzen.",
    father: "morozov",
    mother: "valeda",
    spouse: "flaminia",
    adoptedBy: "kyzen",
    documents: []
  },

  {
    id: "vespra",
    name: "Vespra",
    power: "Media",
    birth: "",
    death: "",
    biography: "Coniuge di Balthazar.",
    father: null,
    mother: null,
    spouse: "balthazar",
    documents: []
  },

  {
    id: "zenobia",
    name: "Zenobia",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlia di Balthazar e Vespra.",
    father: "balthazar",
    mother: "vespra",
    spouse: "mamivaza",
    documents: []
  },

  {
    id: "zaccaria",
    name: "Zaccaria",
    power: "Medio",
    birth: "",
    death: "",
    biography: "Figlio di Balthazar e Vespra.",
    father: "balthazar",
    mother: "vespra",
    spouse: "shei",
    documents: []
  },

  {
    id: "mamivaza",
    name: "Mamivaza",
    power: "Medio",
    birth: "",
    death: "",
    biography: "Coniuge di Zenobia.",
    father: null,
    mother: null,
    spouse: "zenobia",
    documents: []
  },

  {
    id: "miranda",
    name: "Miranda",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlia di Zenobia e Mamivaza.",
    father: "mamivaza",
    mother: "zenobia",
    spouse: null,
    documents: []
  },

  {
    id: "zacmovis",
    name: "Zacmovis",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlio di Zenobia e Mamivaza.",
    father: "mamivaza",
    mother: "zenobia",
    spouse: null,
    documents: []
  },

  {
    id: "mugrut",
    name: "Mugrut",
    power: "Medio",
    birth: "",
    death: "",
    biography: "Figlio di Zenobia e Mamivaza.",
    father: "mamivaza",
    mother: "zenobia",
    spouse: null,
    documents: []
  },

  {
    id: "shei",
    name: "Shei",
    power: "Media",
    birth: "",
    death: "",
    biography: "Coniuge di Zaccaria.",
    father: null,
    mother: null,
    spouse: "zaccaria",
    documents: []
  },

  {
    id: "cerridwen",
    name: "Cerridwen",
    power: "Media",
    birth: "",
    death: "",
    biography: "Figlia di Zaccaria e Shei.",
    father: "zaccaria",
    mother: "shei",
    spouse: null,
    documents: []
  },


  /* =========================
     ALBERO DI THOMAS
     ========================= */

  {
    id: "thomas",
    name: "Thomas",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Capostipite della seconda linea genealogica.",
    father: null,
    mother: null,
    spouse: "lianna",
    documents: []
  },

  {
    id: "lianna",
    name: "Lianna",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Coniuge di Thomas.",
    father: null,
    mother: null,
    spouse: "thomas",
    documents: []
  },

  {
    id: "xantos",
    name: "Xantos",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlio di Thomas e Lianna. Il suo matrimonio con Sycoraxa unisce le due grandi linee genealogiche.",
    father: "thomas",
    mother: "lianna",
    spouse: "sycoraxa",
    documents: []
  },

  {
    id: "luna",
    name: "Luna",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlia di Thomas e Lianna.",
    father: "thomas",
    mother: "lianna",
    spouse: null,
    documents: []
  },

  {
    id: "ciprian",
    name: "Ciprian",
    power: "Scarso",
    birth: "",
    death: "",
    biography: "Figlio di Xantos e Sycoraxa.",
    father: "xantos",
    mother: "sycoraxa",
    spouse: "melli",
    documents: []
  },

  {
    id: "ipaparoti",
    name: "Ipaparoti",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlio di Xantos e Sycoraxa.",
    father: "xantos",
    mother: "sycoraxa",
    spouse: null,
    documents: []
  },

  {
    id: "melli",
    name: "Melli",
    power: "Umana",
    birth: "",
    death: "",
    biography: "Coniuge di Ciprian.",
    father: null,
    mother: null,
    spouse: "ciprian",
    documents: []
  },

  {
    id: "ivain",
    name: "Ivain",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlio di Ciprian e Melli. Successivamente sposa Wanrt.",
    father: "ciprian",
    mother: "melli",
    spouse: "wanrt",
    documents: []
  },

  {
    id: "kyzen",
    name: "Kyzen",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlio di Ciprian e Melli. Adotta Armacus.",
    father: "ciprian",
    mother: "melli",
    spouse: null,
    adopts: ["armacus"],
    documents: []
  },

  {
    id: "sculd",
    name: "Sculd",
    power: "Medio",
    birth: "",
    death: "",
    biography: "Figlio di Ciprian e Melli.",
    father: "ciprian",
    mother: "melli",
    spouse: null,
    documents: []
  },

  {
    id: "tages",
    name: "Tages",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlio di Ipaparoti.",
    father: "ipaparoti",
    mother: null,
    spouse: null,
    documents: []
  },

  {
    id: "wanrt",
    name: "Wanrt",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlio di Ipaparoti. Sposa Ivain.",
    father: "ipaparoti",
    mother: null,
    spouse: "ivain",
    documents: []
  },

  {
    id: "nabu",
    name: "Nabu",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Figlio di Wanrt e Ivain.",
    father: "wanrt",
    mother: "ivain",
    spouse: null,
    documents: []
  },

  {
    id: "seiamus",
    name: "Seiamus",
    power: "Umano",
    birth: "",
    death: "",
    biography: "Discendente di Nabu. In seguito avrà una figlia con Alzacars.",
    father: "nabu",
    mother: null,
    spouse: "alzacars",
    documents: []
  },

  {
    id: "flaminia",
    name: "Flaminia",
    power: "Media",
    birth: "",
    death: "",
    biography: "Coniuge di Armacus.",
    father: null,
    mother: null,
    spouse: "armacus",
    documents: []
  },

  {
    id: "alzacars",
    name: "Alzacars",
    power: "Potente",
    birth: "",
    death: "",
    biography: "Figlio di Armacus e Flaminia.",
    father: "armacus",
    mother: "flaminia",
    spouse: "seiamus",
    documents: []
  },

  {
    id: "morgana",
    name: "Morgana",
    power: "Non-Maga",
    birth: "",
    death: "",
    biography: "Figlia di Alzacars e Seiamus.",
    father: "alzacars",
    mother: "seiamus",
    spouse: null,
    documents: []
  }
];
