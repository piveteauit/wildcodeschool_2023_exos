

const axios  = {
  get: (url) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'err') return reject({code: 500})
      return resolve({
        data: [
          {id: 1, nom: "TOTO"},
          {id: 2, nom: "TATA"},
          {id: 3, nom: "TITI"}
        ],
        untasdechose: {}
      });
    }, 1_000)
  })
}

function maCallback(monSuperParams) {
  monState = monSuperParams
  console.log("Dans le then: ", monState)
}

function monHook() {
  console.log("Before ---> ", 0)


  console.log(axios.get('http://qqch.com'))

  // II: Objet
const sampleObject = {
  name: "toto",
  surname: "tata"
};
const {surname} = sampleObject;  // Ceci revient au même que: 
                                // const surname = sampleObject.surname;
  axios.get('err')
    .then(({data}) => console.log('---',  data))
    .catch(console.log)

  console.log("After ---> ", 1)
}




const toto = [
  {id: 1, nom: "TOTO"},
  {id: 2, nom: "TATA"}, /// === element
  {id: 3, nom: "TITI"}
]

function print(monParam) {
  console.log(monParam)
}


function incrementId(user) {
  console.log('-----', toto)
  user.id += 1
}

toto.forEach(incrementId)



monHook();
