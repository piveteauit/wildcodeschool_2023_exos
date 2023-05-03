/**
 * Ces 3 fonctions font la même chose, seule la syntaxe est différente
 */
// Syntax 1 with classic function
function myFunc (param) {
  return param;
}

// Syntax 2 with arrow function - explicit return
const myFunc_2 = (param) => {
  return param;
}

// Syntax 3 with arrow function - explicit return
const myFunc_3 = (param) => param;



/**
 * Les boucles - forEach et map
 */

// forEach loop with classic syntax
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Joe"},
  {id: 3, name: "Doe"},
];

console.log("<Ligne 30>")
console.table(users) // Will print {id: 1, name: "John"}, then {id: 1, name: "John"}, ....
users.forEach(function(user, indexInArray) {
  // console.log(user); // Will print {id: 1, name: "John"}, then {id: 1, name: "John"}, ....
  user.age = 22;
  // console.log(user); // Will print {id: 1, name: "John", age: 22}, then {id: 1, name: "John", age: 22}, ....
})
console.log("<Ligne 37>")
console.table(users); // Will print {id: 1, name: "John", age: 22}, then {id: 1, name: "John", age: 22}, ....

// Now all user in users array has a new property "age".


const users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Joe"},
  {id: 3, name: "Doe"},
];
// map with classic syntax
const usersMapped = users2.map(function(user) {
  // user.city = "Biarritz"; // --> NON, en faisant ça on modifie notre variables users2, or le but d'un map est de retourner une valeur modifiée, sans modifier la valeur initiale
  return {
    ...user, // <<<------ Cette notation signifie "remet ici toutes les propriétés de user", dans notre cas cela revient à 
    city: "Biarritz"                                                                        // return {id: user.id,  name: user.name, city: "Biarritz"}
  }; //  /!!!\  With map, we need to return a value   /!!!\
})

console.log("<Ligne 57>")
console.table(users2) // Will print {id: 1, name: "John"}, then {id: 1, name: "John"}
console.log("<Ligne 59>")
console.table(usersMapped) // Will print {id: 1, name: "John", city: "Biarritz"}, then {id: 1, name: "John", city: "Biarritz"}


// I Déclaration et utilisation des objets:
//    Pour déclarer un objet on utilisera les accolades {}:
//        const monObj = { clef: "sa_valeur" }
//    Pour lire les propriétés d'un object on utilisera soit des points, soit des crochets:
//        monObj.clef --> affichera "sa_valeur"
//        monObj["clef"] --> affichera également "sa_valeur"
//
//    Si on a besoin d'avoir des clés "syntaxiquement bizarres" on devra les mettre entre quotes "" et utiliser uniquement les crochets [] pour les lire
const monObjetBizarre = {
  "prénom et nom": "John Doe",
  prenom: "John",
  nom: "Doe"
}
// console.log(monObjetBizarre."prénom et nom") ou console.log(monObjetBizarre.prénom et nom) 
//        ---> Vous renverra une élégante erreur de couleure rouge et stoppera votre script
console.log("<Ligne 78>")
console.log(monObjetBizarre["prénom et nom"]) // ---> Vous renverra bien la valeur "John Doe"


// II Déclaration et utilisation des tableaux:
//    Pour déclarer un tableau on utilisera les crochets []:
//        const monArr = ["toto", "tata"]
//    Pour lire les propriétés d'un array on utilisera des crochets avec des index numériques:
//        monArr[0] --> affichera "toto"
//        monArr[1] --> affichera "tata"



// Déstructuration

// I: Array
const sampleArray = ["toto", "tata"];
const [totoVar] = sampleArray;  // Ceci revient au même que: 
                                // const totoVar = sampleArray[0];
console.log("<Ligne 97>")
console.log(totoVar, sampleArray[0]) // Affichera bien "toto" "toto";
// Cela fonctionne de la même manière pour les paramètres des fonctions:
function printToto([maSuperVariableDestructuree]) {
  console.log(maSuperVariableDestructuree); // Affichera le premiere élément du tableau passé en paramètre
}

console.log("<Ligne 104>")
printToto(sampleArray) // Affichera donc notre "toto" de l'array sampleArray
console.log("<Ligne 106>")
printToto(["super", "ball"]) // Affichera du coup "super"


// II: Objet
const sampleObject = {
  name: "toto",
  surname: "tata"
};
const {surname} = sampleObject;  // Ceci revient au même que: 
                                // const surname = sampleObject.surname;
console.log("<Ligne 117>")
console.log(surname, sampleObject.surname, sampleObject["surname"]) // Affichera 3 fois le surname: "tata" "tata" "tata";
// Cela fonctionne aussi de la même manière pour les paramètres des fonctions:
function printTata({surname}) {
  console.log(surname); // Affichera le premiere élément du tableau passé en paramètre
}
console.log("<Ligne 123>")
printTata(sampleObject) // Affichera donc notre "toto" de l'array sampleArray
console.log("<Ligne 125>")
printTata({name: "TITI", surname: "anonyme"}) // Affichera du coup "anonyme"
console.log("<Ligne 127>")
printTata({name: "TITI", city: "Anglet"}) // Affichera en revanche undefined car la propriété "surname" n'existe pas dans l'objet passé en paramètre.
