
const n = 23; // + / - * %
const s = "string";

const  arr = ["azer", "qwer", "uiop"];
// Print "qwer"
console.log(arr[1])

// Déclaration de variables
// [const|let|var] [nom] [assignation] [valeur]
// const          obj     =            2 / "c" [] / function
const salutTonton = {
  a: "azer",
  b: "qwer",
  c: "uiop"
}

const obj = {
  a: "azer",
  b: "qwer",
  c: "uiop"
}

const key1 = "b"
const key2 = "y"
// Print "qwer"
// obj[response] === obj["b] === obj.b
console.log(obj)
console.log(obj.b, obj.d, key1, obj[key1/* "b" */], key2, obj[key2/* "y" */])


const obj2 = {
  a: {
    symbol: "a",
    position: 1
  },
  b: {
    symbol: "b",
    position: 2
  },
  c: {
    symbol: "c",
    position: 3
  }
}

console.log(`${obj2.b.symbol} est en position: ${obj2.b.position}`)

const letterArray = [
  {
    symbol: "a",
    position: 1
  },
  {
    symbol: "b",
    position: 2
  },
  {
    symbol: "c",
    position: 3
  }
]


letterArray.forEach(
  function (letter) {
    // letter = {
    //     symbol: "c",
    //     position: 3
    //   }
    console.log(`${letter.symbol} est en position: ${letter.position}`)
    console.log(letter.symbol + " est en position: " + letter.position)
  }
)

// [ "a est en position 1", "...."  ]
const newLetterArray = [];
letterArray.forEach(
  function (letter) {
    // letter = {
    //     symbol: "c",
    //     position: 3
    //   }
    // `${letter.symbol} est en position: ${letter.position}`
    newLetterArray.push(`${letter.symbol} est en position: ${letter.position}`)

  }
)
console.log("Tous en groupe: ", newLetterArray)

// [ "a est en position 1", "...."  ]
console.log(
  "Tous en group 2:",
  letterArray.map((l) => `${l.symbol} est en position: ${l.position}`),
  "Tous en group 3:",
  letterArray.forEach((l) => `${l.symbol} est en position: ${l.position}`)
)

