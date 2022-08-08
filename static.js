"use strict"
class PersonCl{
    constructor(fristName,birthName){
        this.fristName = fristName
        this.birthName = birthName
    }
    greet(){
        console.log(`Hello ${this.fristName} sir`)
    }
}

const jessica = new PersonCl("Satyam",1996)
jessica.greet()