const output = document.getElementById("output");
const input = document.getElementById("command-input");
const promptText = "[visitor@jarvis ~]$";
const whoamiText = 
"name      ujwal\n"+
"role      computer science student\n"+
"focus     machine learning, mathematics, boxing\n"+
"type      'help' to see available commands\n" + 
"\n";
const skillsList = [
    "Python",
    "SQL",
    "HTML, CSS, JavaScript",
    "Git & version control"
]

const projectsList = [
    {
        name: "Numcore",
        description: "Python library of mathematical functions, published on PyPI.",
        link: "https://github.com/ujwalmantri/numcore"
    },
    {
        name: "Image Pracessing Engine",
        description: "Basic image processing using matrix operations in Python. (in progress)",
        link:"https://github.com/ujwalmantri/image-processing-engine"
    }
];


const commands = {
    help: function (){
        output.textContent = output.textContent + 
            "about   - about me\n" + 
            "clear   - clear the terminal\n" +
            "help    - check available commands\n" +
            "projects - list my projects\n" +
            "skills  - list my skills\n" +
            "whoami  - display visitor info\n"+
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
    },

    skills: function () {
        for (const skill of skillsList){
            output.textContent = output.textContent + "- " + skill + "\n";
        }
        output.textContent = output.textContent + "\n";
    },

    projects: function () {
        for (let i = 0; i < projectsList.length; i++){
            output.textContent = output.textContent + (i+1) + ". " + projectsList[i].name + "\n";
        }
        output.textContent = output.textContent + "\n";
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