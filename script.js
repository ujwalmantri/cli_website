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
const experienceList = [
    // Example: 
    // {role: "Intern", organization: "Company Name", period: "Jun 2026 - Aug 2026"}
]

const educationList = [
    {
        institution: "MIT-WPU",
        degree: "B.Tech in Computer Science and Engineering",
        period: "2025-2029"
    }
];

const contactEmail = "uzwalmantri@gmail.com";

const SocialList = [
    { platform: "Github", url: "https://github.com/ujwalmantri" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ujwal-mantri/" },
    { platform: "Twitter", url: "https://twitter.com/ujwal_mantri" }
];

let commandHistory = [];
let historyIndex = -1;


const commands = {
    help: function (){
        output.textContent = output.textContent + 
            "about          - about me\n" + 
            "clear          - clear the terminal\n" +
            "contact        - my email address\n" +
            "education      - my education background\n" +
            "experience     - my work experience\n" +
            "help           - check available commands\n" +
            "projects       - list my projects\n" +
            "project go <n> - view details of project number n\n" +
            "skills         - list my skills\n" +
            "socials        - my social accounts\n" +
            "whoami         - display visitor info\n" +
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
        output.textContent = output.textContent + "Usage: project go <n>\n";
        output.textContent = output.textContent + "\n";
    },

    project: function (args) {
        if (args[0] === "go" && args[1]){
            let index = Number(args[1])-1;

            if (projectsList[index]){
                let selected = projectsList[index];
                output.textContent = output.textContent + selected.name + "\n" + 
                " " + selected.description + "\n" +
                " " + selected.link + "\n" +
                "\n";
            }
            else {
                output.textContent = output.textContent + 
                "No project found with that number. Type 'projects' to see the list.\n"
                +
                "\n";
            }
        }
        else {
            output.textContent = output.textContent + 
            "Usage: project go <n>\n" +
            "\n";
        }
    },

    experience: function () {
        if (experienceList.length === 0){
            output.textContent = output.textContent +
            "No formal experience yet - actively looking for opportunities.\n" +
            "\n";
        } else {
            for (const job of experienceList){
                output.textContent = output.textContent + 
                job.role + " at " + job.organization + " (" + job.period + ")\n" +
                "\n";
            }
        }
    },

    education: function (){
        for (const edu of educationList){
            output.textContent = output.textContent +
            edu.institution + "\n" + edu.degree + " ("+edu.period + ")\n" +
            "\n";
        }
    },

    contact: function (){
        output.textContent = output.textContent + 
        "Email: " + contactEmail + "\n" +
        "\n";
    },

    socials: function (){
        for (const social of SocialList){
            output.textContent = output.textContent + 
            social.platform + ": " + social.url + "\n";        
        } 
        output.textContent = output.textContent + "\n"; 
    }

};

input.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        let raw_input = input.value.trim();
        output.textContent = output.textContent + promptText + " " + raw_input + "\n";

        if(raw_input === ""){
            // eat 5 star; do nothing
        }else {
            let parts = raw_input.split(" ");
            let command = parts[0];
            let args = parts.slice(1);

            if (command in commands){
            commandHistory.push(raw_input);
            commands[command](args);
        } else {
            commandHistory.push(raw_input);
            output.textContent = output.textContent +
            "Command not found: " + command + "\n" +
            "Type 'help' to see available commands.\n";
        }
        }

        input.value = "";
        historyIndex = -1;
    } else if(event.key === "ArrowUp"){
        event.preventDefault();
        if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1){
            historyIndex = historyIndex + 1;
            input.value = commandHistory[commandHistory.length - 1 - historyIndex];
            input.selectionStart = input.value.length;
            input.selectionEnd = input.value.length;
        }
    } else if (event.key === "ArrowDown"){
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex = historyIndex - 1;
            input.value = commandHistory[commandHistory.length - 1 - historyIndex]
        } else if (historyIndex === 0){
            historyIndex = -1;
            input.value = ""
        }
        input.selectionStart = input.value.length;
        input.selectionEnd = input.value.length;
    }
});

output.textContent = promptText + " whoami\n" + whoamiText;