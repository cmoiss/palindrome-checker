// don't show sugestions

const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");

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
        
        // test only
        alert(`Os itens capturados no regexp são: \n${inputValueOnlyLetters}`);

        // Pass all words to lower case
        const inputValueLowerCase = inputValueOnlyLetters.toString().toLowerCase();

        // Transform words to arrays
        const inputArray = Array.from(inputValueLowerCase);
        const reversedArray = inputArray.toReversed();

        const inputValue = inputArray.toString();
        const reversedInputValue = reversedArray.toString();

        if (inputValue === reversedInputValue) {
            isPalindrome = true;
        }

        printWorking(inputArray, reversedArray);

        return isPalindrome;
    } else {
        alert("Please input a value");
    }
};

const printResult = () => {
    if (checkIfItIsAPalindrome(textInput)) {
        alert("É pal");
    } else {
        alert("Qisso ga");
    }
}

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