// === DOM Elements ===
const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const resultBlock = document.querySelector("#result");

// === Functions ===
const printWorking = (inputArray, reversedArray) => {
    // Check if working
    alert(inputArray)
    alert(`reverse: ${reversedArray}`);
}

const emptyInputContent = (textInput) => {
    // This will empty the input
    textInput.value = "";
};

const captureOnlyLetters = (inputValue) => {
    // Capture only words (regexp)
    const regexp = /[A-Za-zÀ-ÿ]+/g;;
    return inputValue.match(regexp);{}
}

const checkIfItIsAPalindrome = (textInput) => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        let isPalindrome = false;

        emptyInputContent(textInput);

        const inputValueOnlyLetters = captureOnlyLetters(inputValue)
        
        // // test only
        alert(`Os itens capturados no regexp são: \n${inputValueOnlyLetters}`);

        // Pass all words to lower case
        const inputValueLowerCase = inputValueOnlyLetters.toString().toLowerCase();

        // Remove graphic accents
        const inputValueWithoutAccents = inputValueLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        console.log(inputValueWithoutAccents);

        // Transform words to arrays
        const inputArray = Array.from(inputValueWithoutAccents).filter((letter) => letter !== ",");
        const reversedArray = inputArray.toReversed();

        const input = inputArray.toString();
        const reversedInput = reversedArray.toString();

        if (input === reversedInput) {
            isPalindrome = true;
        }

        console.log(inputArray);
        printWorking(inputArray, reversedArray);

        return isPalindrome;
    } else {
        alert("Please input a value");
    }
};

const printResult = () => {
    const inputValue = textInput.value;
    if (checkIfItIsAPalindrome(textInput)) {
        resultBlock.innerHTML = `<strong>${inputValue}</strong> is a polindrome`;
    } else {
        resultBlock.innerHTML = `<strong>${inputValue}</strong> is not a polindrome`;
    }
}

// === Event Listeners ===
textInput.addEventListener("keypress", () => {
    if (event.key === "Enter") {
        event.preventDefault();
        printResult()
    }
});

checkButton.addEventListener("click", () => {
    event.preventDefault();
    printResult();
});