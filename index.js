

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */

/* if(true){
    console.log('bonjour')
} */



/*
VRAI ET VRAI = VRAI
VRAI ET FAUX = FAUX 
FAUX ET FAUX = FAUX

VRAI OU FAUX = VRAI
VRAI OU VRAI = VRAI
FAUX OU FAUX = FAUX
*/

/* const age = 119
const contry = 'us'

if(
    (contry === 'us' && age >= 18) ||
    (contry === 'fr' && age >= 16)
){
    console.log('Vous avez le droit de conduire')
} */


/* if (age >= 19) {
    console.log('Vous avez plus de 18 ans, vous etes majeur !')
} */

let year = 2024

const yourBirthDay = prompt('How is your birth day :')

const age = year - yourBirthDay 
if(age <= 12){
    console.log('Je vous  propose de suivre la serie Tom-Tom et Nana')
}else if (age <= 18){
    console.log(' je vous propose de suivre 1000 et une mort insollite')
}else{
    console.log('Je vous propose de suivre Sharck killer 7')
}

//demander un nombre d'utilisateurs exemple 9 x 2 puis voir et lafficher si le positif ou négatif

const A = prompt('Premier chiffre : ')
const B = prompt('Deuxieme chiffre : ')

const result = A * B 

if (result > 0){
    console.log(`La reponse de ${A} et ${B} est ${result} qui est positif`)
}else{
    console.log(`La reponse de ${A} et ${B} est ${result} qui est negatif`)
}