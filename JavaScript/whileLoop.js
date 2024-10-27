var i = 1;
while(i < 2){
    console.log(i);
    i++
}
// ====
var output = [];
var i = 1;

function fizzbuzz() {
    while (i <= 100){
        
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }
}
    i++;
    console.log(output);
}

/*==============
99 bootles of beer on the wall, 99 bottles of beer.
Take on down and pass it around, 98 bootles of beer on the wall.
*/
var output = [];
var i = 1;

function Beer(){
    while (i <= 99){
        if (i >= 2){
            output.push(i + " bottles of beer on the wall, " + i +" bottles of beer.");
        } else if(i===1){
            output.push(i + " bottle of beer on the wall, " + i +" bottle of beer.");
        }
        else{
            output.push("No more bottles of beer on the wall, No more bottles of beer.");
        }
    }
    i--;
    if (i > 1){
        output.push("Take on down and pass it around, " + i +" bottles of beer on the wall.");
    } else if(i === 1){
        output.push("Take on down and pass it around, " + i +" bottle of beer on the wall.");
    } else if (i === 0) {
        output.push("Take on down and pass it around, No more bottles of beer on the wall.");
    } else {
        i === 99;
        output.push("Go to buy some more beers, " + i +" bottles of beer on the wall.");
    }
    console.log(output);
}
/*===================*/
var output = [];
var i = 99;

function Beer(){
    while (i >= 0){
        if (i > 1){
            output.push(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            output.push("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
        } else if (i === 1){
            output.push(i + " bottle of beer on the wall, " + i + " bottle of beer.");
            output.push("Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            output.push("No more bottles of beer on the wall, no more bottles of beer.");
            output.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        i--;
    }
    console.log(output.join("\n"));
}

Beer();
// ==========

