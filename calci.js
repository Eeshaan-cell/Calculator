let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.onclick = function() {
        const inputField = document.querySelector("input");
        const buttonText = button.innerText;

        if (buttonText === "=") {
            try {
                let result = eval(inputField.value);
                inputField.value = result;
            } catch (error) {
                inputField.value = "Error";
            }
        } else if (buttonText === "AC") {
            inputField.value = "";
        } else {
            inputField.value += buttonText;
        }
    };
}
