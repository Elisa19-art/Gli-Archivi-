const documents = [
  {
    id: 1,
    title: "DOCUMENTO 001",
    date: "DATA SCONOSCIUTA",
    characters: ["CHARACTER A"],
    keywords: ["prova"],
    text: "Questo è il primo documento di prova."
  },
  {
    id: 2,
    title: "DOCUMENTO 002",
    date: "DATA SCONOSCIUTA",
    characters: ["CHARACTER B"],
    keywords: ["prova"],
    text: "Questo è il secondo documento di prova."
  },
  {
    id: 3,
    title: "DOCUMENTO 003",
    date: "DATA SCONOSCIUTA",
    characters: ["CHARACTER C"],
    keywords: ["prova"],
    text: "Questo è il terzo documento di prova."
  },
  {
    id: 4,
    title: "DOCUMENTO 004",
    date: "DATA SCONOSCIUTA",
    characters: ["CHARACTER D"],
    keywords: ["prova"],
    text: "Questo è il quarto documento di prova."
  },
  {
    id: 5,
    title: "DOCUMENTO 005",
    date: "DATA SCONOSCIUTA",
    characters: ["CHARACTER E"],
    keywords: ["prova"],
    text: "Questo è il quinto documento di prova."
  }
];


const characters = [

  {
    id: 1,
    name: "CHARACTER A",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",

    father: null,
    mother: null,
    spouse: null,

    documents: [1]
  },

  {
    id: 2,
    name: "CHARACTER B",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",

    father: 1,
    mother: null,
    spouse: null,

    documents: [2]
  },

  {
    id: 3,
    name: "CHARACTER C",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",

    father: 1,
    mother: null,
    spouse: null,

    documents: [3]
  },

  {
    id: 4,
    name: "CHARACTER D",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",

    father: 2,
    mother: null,
    spouse: null,

    documents: [4]
  },

  {
    id: 5,
    name: "CHARACTER E",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",

    father: 3,
    mother: null,
    spouse: null,

    documents: [5]
  }

];


const relationships = [

  {
    from: 1,
    to: 2,
    type: "figlio"
  },

  {
    from: 1,
    to: 3,
    type: "figlio"
  },

  {
    from: 2,
    to: 4,
    type: "figlio"
  },

  {
    from: 3,
    to: 5,
    type: "figlio"
  }

];
