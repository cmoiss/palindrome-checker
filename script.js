// This will empty the input
// capture only words (regexp)
// don't show sugestions

const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const regexp = /([A-Z]|[a-z])\w+/;

const checkIfItIsAPalindrome = (textInput) => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        // Pass all words to lower case
        const inputValueLowerCase = inputValue.toLowerCase();

        // Transform words to arrays
        const inputArray = Array.from(inputValueLowerCase);
        const reversedArray = inputArray.toReversed();

        // Check if working
        alert(inputArray)
        alert(`Array reverso: ${reversedArray}`);
    } else {
        alert("Please input a value");
    }
}

textInput.addEventListener("keypress", () => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkIfItIsAPalindrome(textInput)
    }
});

checkButton.addEventListener("click", () => {
    event.preventDefault();
    checkIfItIsAPalindrome(textInput);
});