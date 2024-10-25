const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");

checkButton.addEventListener("click", () => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        const inputArray = Array.from(inputValue);
        alert(inputArray)
    } else {
        alert("Please input a value");
    }    
});