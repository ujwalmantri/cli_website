const output = document.getElementById("output")
const input = document.getElementById("command-input")

input.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        let command = input.value;
        // output.textContent = output.textContent + input.value + "\n";

        if (command === "help"){
            output.textContent = output.textContent + 
                "about   - about me\n" + 
                "clear   - clear the terminal\n" +
                "help    - check available commands\n"
                ;
        } else if (command === "about"){
            output.textContent = output.textContent + 
                "Hi, I'm Ujwal.\n" +
                "I'm a Second Year Computer Science Student interested in Machine Learning, Maths, & Boxing\n" + 
                "This portfolio is a work in progress, built command by command.\n"
                ;
        } else if (command === "clear"){
            output.textContent = "";
        } else {
            output.textContent = output.textContent + 
            "Command not found: " + command + "\n" +
            "Type 'help' to see available commands\n";
        }


        input.value = "";
    }
})