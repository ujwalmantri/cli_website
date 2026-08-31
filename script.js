const output = document.getElementById("output");
const input = document.getElementById("command-input");
const promptText = "[visitor@jarvis ~]$";
const whoamiText = 
"name      ujwal\n"+
"role      computer science student\n"+
"focus     machine learning, mathematics, boxing\n"+
"type      'help' to see available commands\n" + 
"\n";


const commands = {
    help: function (){
        output.textContent = output.textContent + 
            "about   - about me\n" + 
            "clear   - clear the terminal\n" +
            "help    - check available commands\n" +
            "\n";
    },

    about: function (){
        output.textContent = output.textContent + 
            "Hi, I'm Ujwal.\n" +
            "I'm a Second Year Computer Science Student interested in Machine Learning, Maths, & Boxing\n" + 
            "This portfolio is a work in progress, built command by command.\n"+
            "\n"
            ;
    },

    clear: function(){
        output.textContent = "";
    },

    whoami: function () {
        output.textContent = output.textContent + whoamiText;
    }
};

input.addEventListener("keydown", function (event){
    if (event.key === "Enter"){

        let command = input.value.trim();

        output.textContent = output.textContent + promptText + " " + command + "\n"
        if(command === ""){
            // eat 5 star; do nothing
        }
        else if (command in commands){
            commands[command]();
        } else {
            output.textContent = output.textContent +
            "Command not found: " + command + "\n" +
            "Type 'help' to see available commands.\n";
        }

        input.value = "";
    }
});

output.textContent = promptText + " whoami\n" + whoamiText;