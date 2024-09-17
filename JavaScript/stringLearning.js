//you have written 182 characters, you have -42 left

var tweet = prompt("compose your tweet");
var Tweet_lenght = tweet.length;
alert("you have written " + Tweet_lenght + " characters, you have " + (140 - Tweet_lenght) + " left.");

// var My_Tweet = "Hello Everyone please count the characters in ths string, need be greater than twitter characters (140) for a tweet to get above message";

var name = "Hemanth";
name.slice(0,4);
//  'Hema'

//allow only 140 character to enter

alert(prompt("compose your tweet").slice(0,140));

//caseing
var name = "Hemanth";
name = name.toUpperCase();
//'HEMANTH'
name = name.toLowerCase();
// 'hemanth'

// Exercise

/* My wrong code
var A = prompt("what is your name?");
alert("Hello " + (A.slice(0,1)).toUpperCase + A.slice(1,100)); */ 

var A = prompt("What is your name?");
alert("Hello " + A.slice(0, 1).toUpperCase() + A.slice(1).toLowerCase());

//Dog age to human age converter
alert("Your_DogHumanAge is " + (((prompt("What is your Dog age?"))-2)*4+21));






