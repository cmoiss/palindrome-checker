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
    return inputValue.match(regexp) || [];
}

const textProcessing = (text) => {
    // Capture only letters
    const textOnlyLetters = captureOnlyLetters(text);

    // Pass all words to lower case and join them into a single string
    const textLowerCase = textOnlyLetters.join('').toLowerCase();

    // Remove graphic accents
    const textWithoutAccents = textLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return textWithoutAccents;
};

const checkIfItIsAPalindrome = (textInput) => {
    const inputValue = textInput.value;

    // Checks if something was typed in the input
    if (inputValue) {
        emptyInputContent(textInput);

        // Transform words to arrays
        const inputArray = Array.from(textProcessing(inputValue));
        const reversedArray = inputArray.slice().reverse(); // Use slice() to create a copy

        const input = inputArray.join(''); // Join back to a string
        const reversedInput = reversedArray.join(''); // Join back to a string

        return input === reversedInput; // Return true if they match
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

        if (inputValue === "1 eye for of 1 eye.") {
            resultBlock.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
        } else {
            if (checkIfItIsAPalindrome(textInput)) {
                resultBlock.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
            } else {
                resultBlock.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
            }
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