var l = [123, 1234, 123, 90];
var a = l[1]; 
console.log(a); //1234
l.length; //4

//************************* *

var guest_list = ["Hemanth", "Ram", "Suresh", "Vasu"];
console.log(guest_list);
/*(4) ['Hemanth', 'Ram', 'Suresh', 'Vasu']
0:"Hemanth"
1:"Ram"
2:"Suresh"
3:"Vasu"
length: 4
=====================================*/
var guest_list = ["Hemanth", "Ram", "Suresh", "Vasu", "Tester", "Veera", "Swamy"];
var a = prompt("What is your name?");

if (guest_list.includes(a)) {
  console.log("Welcome, " + a + "! Have a good party.");
} else {
  console.log("Sorry, " + a + ". You aren't on the guest list, May be next time.");
}
/*=====================
var output = [];
output.push(1);
output.push(2);
console.log(output);
======================= */
var output = [];
var i = 1;

function fizzbuzz() {
    if (i % 3 === 0 && i % 5 === 0) {
        output.push("FizzBuzz");
    } else if (i % 3 === 0) {
        output.push("Fizz");
    } else if (i % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(i);
    }
    i++;
    console.log(output);
}
====================
//automated code for above for 1-100
var output = [];

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
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
    console.log(output);
}

// Call the function to generate FizzBuzz from 1 to 100
fizzbuzz();

====================
var people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    // Generate a random index based on the length of the array
    var randomIndex = Math.floor(Math.random() * names.length);
    
    // Get the random name from the list
    var randomPerson = names[randomIndex];
    
    // Return the output message
    return randomPerson + " is going to buy lunch today!";
}

var result = whosPaying(people);
console.log(result);
=========================





