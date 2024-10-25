// don't show sugestions

const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");

const printWorking = (inputArray, reversedArray) => {
    // Check if working
    alert(inputArray)
    alert(`Array reverso: ${reversedArray}`);
}

const emptyInputContent = (textInput) => {
    // This will empty the input
    textInput.value = "";
};

const captureOnlyLetters = (inputValue) => {
    // Capture only words (regexp)
    const regexp = /[A-Za-zÀ-ÿ]+/g;;
    return inputValue.match(regexp);
}

const checkIfItIsAPalindrome = (textInput) => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        emptyInputContent(textInput);

        console.log(`Os itens capturados no regexp são: \n${captureOnlyLetters(inputValue)}`);

        // Pass all words to lower case
        const inputValueLowerCase = inputValue.toLowerCase();

        // Transform words to arrays
        const inputArray = Array.from(inputValueLowerCase);
        const reversedArray = inputArray.toReversed();

        printWorking(inputArray, reversedArray);
    } else {
        alert("Please input a value");
    }
};

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