// Part 1: Conditionals
document.getElementById("checkNumberBtn").addEventListener("click", function() {
    let number = 10; // This could be dynamic input
    let resultText = "";

    if (number > 5) {
        resultText = "The number is greater than 5.";
    } else {
        resultText = "The number is 5 or less.";
    }

    document.getElementById("numberResult").innerText = resultText;
});

// Part 2: Functions
function calculateTotal(price, discount) {
    let total = price - (price * discount / 100);
    return total;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
    let price = 100; // Example price
    let discount = 10; // Example discount
    let total = calculateTotal(price, discount);

    document.getElementById("totalResult").innerText = `Total after discount: $${total}`;
});

// Part 3: Loops
document.getElementById("generateListBtn").addEventListener("click", function() {
    let ul = document.getElementById("numberList");
    ul.innerHTML = ""; // Clear the list before generating new items

    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number: ${i}`;
        ul.appendChild(li);
    }
});

// Part 4: DOM Manipulation
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
