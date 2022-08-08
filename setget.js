"use strict"
const account = {
    owner: "satyam",
    movements:[12,24,36,48],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov)
    }    
}

console.log(account.latest)
account.latest = [60,72];
console.log(account.movements.slice(-1[-1]))