"use strict"
// we use prototype for adding methods and properties and functions of object

const Satyam = function(fName,bYear){
    this.fName = fName
    this.bYear = bYear
}

const satyamDetail = new Satyam("satyam-shukla",123)

console.log(satyamDetail)

console.log(satyamDetail instanceof Satyam,"-----------------------")

// doubt
Satyam.prototype.fullname= function(){
    console.log("satyam-shukla-a")
}
Satyam.prototype.developer="backend dev"

console.log(satyamDetail.developer,"**********************satyamDetail.developer")
satyamDetail.fullname()


console.log(satyamDetail.__proto__,"@@@@@@@@@@@@@@@@@")