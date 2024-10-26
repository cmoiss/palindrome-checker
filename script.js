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
    const regexp = /[A-Za-zÀ-ÿ]+/g;
    return inputValue.match(regexp);
}

const textProcessing = (text) => {
    // Capture only letters
    const textOnlyLetters = captureOnlyLetters(text)

    // Pass all words to lower case
    const textLowerCase = textOnlyLetters.toString().toLowerCase();

    // Remove graphic accents
    const textWithoutAccents = textLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return textWithoutAccents;
};

const checkIfItIsAPalindrome = (textInput) => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        let isPalindrome = false;

        emptyInputContent(textInput);

        // Transform words to arrays
        const inputArray = Array.from(textProcessing(inputValue)).filter((letter) => letter !== ",");
        const reversedArray = inputArray.toReversed();

        const input = inputArray.toString();
        const reversedInput = reversedArray.toString();

        if (input === reversedInput) {
            isPalindrome = true;
        }

        // console.log(inputArray);
        // printWorking(inputArray, reversedArray);

        return isPalindrome;
    } else {
        // Exit function if input is empty
        return;
    }
};

const printResult = () => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        resultBlock.classList.remove("hide");

        if (checkIfItIsAPalindrome(textInput)) {
            resultBlock.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
        } else {
            resultBlock.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
        }
    } else {
        alert("Please input a value");
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