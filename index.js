/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */
/* https://devdocs.io/*/



/* const students = [
    {
        name : 'jean',
        notes : [4, 5, 15, 16, 16]
    },
    {
        name : 'patrick',
        note : [13, 15, 5, 7, 17]
    },
    {
        name : 'mari', 
        notes : [20, 17, 10, 13, 4]
    },
    {
        name : 'victore',
        notes : [12.3, 14, 16, 3, 6]
    },
    {
        name : 'angelo',
        notes : [3, 10, 11, 18, 12]
    }
]

const moyenne = (notes) =>{
    let sum = 0
    for (let note of notes){
        sum = sum + note
    }
    return sum / notes.length
} */


const canDrive = function (age, pays){
    if(
        (age > 18 && pays === 'FR') ||
        (age > 16 && pays === 'US')
    ){
        return true
    }
    return false
}
console.log(canDrive(17, 'US'))

function greeting(name){
    console.log(`bonjour ${name}`)
}

greeting('jhon')

function maFunction(){
    console.log(this)
}
maFunction.call(3)

const a = {
    firstname : 'john',
    lastname : 'Deo',
    fullname : function (){
        console.log(this)
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

a.fullname()

const somme = (a, b) =>{
    return a + b
}
console.log(somme(1, 2))

isPaire = function (a, cb) {
    if(a % 2 === 0){
        cb(a)
    }
}

isPaire(6, function (n) {
    console.log(`Mon nombre ${n} est paire `)
})

//Exo
/* 
On cree un monbre entre 0 & 10
3 eessaies pour deviner le mot 
isRight(n)
guess()
 */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const solution = getRandomInt(10)
console.log(solution)

function isRigth(n){
    return solution === n 
}

function guess(){
    const number = prompt('Entrez un chiffre')
    return isRigth(number)
}

for (i = 0; i < 3; i++){
    if(guess()){
        console.log('bravo')
        break
    }else if (i === 2){
        console.log('vous  avez perdu !')
    }
}