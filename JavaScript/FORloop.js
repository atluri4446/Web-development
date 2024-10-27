var output = [];

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {  // Declaring i with 'let' for block scope
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

fizzbuzz();



