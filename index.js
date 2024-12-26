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



const moyenne = (notes) => {
    let sum = 0
    for (let note of notes){
        sum = sum + note
    }
    return sum / notes.length
}
class Student{
    ecole = 'ligth word school'
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

    setNotes (notes){
        this.notes = notes
    }

    canPass (){
        return moyenne(this.notes) >= 10
    }
}

const john = new Student('John', 'Deo')
const jean= new Student('Jean', 'Marc')
john.setNotes(
    [10, 10, 9]
)
jean.setNotes(
    [15, 18, 16] 
)
console.log(john.canPass(), jean.canPass())