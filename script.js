// pass all to lower case
// capture only words (regexp)
// When press "enter", execute
// don't show sugestions

const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");

checkButton.addEventListener("click", () => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        const inputArray = Array.from(inputValue);
        const reversedArray = inputArray.toReversed();
        alert(inputArray)
        alert(`Array reverso: ${reversedArray}`);
    } else {
        alert("Please input a value");
    }    
});