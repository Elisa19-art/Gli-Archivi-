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
    documents: [1]
  },
  {
    id: 2,
    name: "CHARACTER B",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",
    documents: [2]
  },
  {
    id: 3,
    name: "CHARACTER C",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",
    documents: [3]
  },
  {
    id: 4,
    name: "CHARACTER D",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",
    documents: [4]
  },
  {
    id: 5,
    name: "CHARACTER E",
    birth: "",
    death: "",
    biography: "BIOGRAFIA DA INSERIRE",
    documents: [5]
  }
];

const relationships = [
  {
    from: "CHARACTER A",
    to: "CHARACTER B",
    type: "relazione"
  },
  {
    from: "CHARACTER B",
    to: "CHARACTER C",
    type: "relazione"
  }
];
