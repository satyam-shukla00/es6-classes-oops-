"use strict"
class Account {
    constructor(owner,currency,pin){
        this.owner = owner
        this.currency = currency
        this.pin = pin
        this.movements = []
        console.log(`Thank you for opening the account,  ${this.owner}`)
    }
    deposit(val){
        this.movements.push(val)
    }
    withdraw(val){
        this.deposit(-val)
    }
    approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log("Loan approved")    
        }
    }
}


const acc1 = new Account("Satyam","Rupee",1111)
acc1.deposit(400)
acc1.withdraw(200)
acc1.requestLoan(1000)
console.log(acc1)