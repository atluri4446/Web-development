function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

getMilk();
// =====================
function getMilk(Bottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert("Buy" + Bottle + "Bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

getMilk(5);
var cost = Bottle * 1.5;
// =====================
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var Bottle = Math.floor(money / 1.5);           //Math.floor() is rounding the total
    alert("Buy" + Bottle + "Bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5; 
  }

var change = getMilk(5); //return Value


// Exercise:
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        console.log(age * 365 + " days");
        console.log(age * 52 + " weeks");
        console.log(age * 12 + " months");
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(90);

//
function getMilk(money_paid, price_of_bottle) {

    var No_of_Bottle = Math.floor(money_paid / price_of_bottle);           //Math.floor() is rounding the total
    alert("Buy" + No_of_Bottle + "Bottles of milk");
    var change = money_paid % price_of_bottle ;
    return change;  
  }

// var Money_to_be_paid = getMilk(5, 1.5); //return Value 
console.log("Hello, Here is your change of" + getMilk(20, 3) + "$");

