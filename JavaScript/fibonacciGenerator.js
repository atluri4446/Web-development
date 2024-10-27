// fibonacciGenerator
function fibonacciGenerator(n) {
    // Initialize the sequence array with the first two Fibonacci numbers
    var sequence = [0, 1];

    // If n is 1, return only the first number
    if (n === 1) {
        return [0];
    }
    // If n is 2, return the first two numbers
    else if (n === 2) {
        return sequence;
    }
    
    // Start loop from index 2 to generate additional numbers in the sequence
    for (var i = 2; i < n; i++) {
        // Each new number is the sum of the previous two
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}

// Example usage
console.log(fibonacciGenerator(3)); // Output: [0, 1, 1]