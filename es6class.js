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


// PersonCl.prototype.greet = function(){
//     console.log(`Hello ${this.fristName} sir`)
// }

// jessica.greet()

// classes are not hoisted 
// class are frist citizes
//  class are executed in strict mode
