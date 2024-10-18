var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
//*********DICE***********

//love calculator
prompt("What is your name ?");
prompt("What is your partner name ?");

var love_score = Math.random() * 100;
love_score = Math.floor(love_score) + 1; //will get a score between 0-100

if (love_score > 70 ) {
    alert("your Love Score is " + love_score + "%." + " You love both other like Romeo & Juliet.");
}
else{
    alert("your Love Score is " + love_score + "%");
}
