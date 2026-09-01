# CLI Portfolio

A personal portfolio website, built incrementally as a learning project.

## Vision

A terminal-style portfolio where visitors interact through typed commands 
It covers sections like (about, projects, skills, experience, education, and contact), all inside a terminal interface.

## Current Progress

**Day 1 - Initial CLI Interface**

- Basic terminal-style input and output using HTML, CSS and Javascript
- Command parsing and handling implemented
- Working commands: 'help', 'about', 'clear'
- Unknown commands are handled with a fallback message
- no styling/theming, animations, command history, or additional commands yet

**Day2 -Styling and Interaction Improvements**

- Terminal-style visual theme (dark background, monospace font, styled prompt)
- Command handling refactored into a registry for easier maintenance
- Commands echo into a persistent scrollback, like a real terminal
- Working commands 'help', 'about', 'clear', 'whoami'
- Input trimming and empty-input handling to match real terminal behaviour
- Still no responsive/mobile design, command history, or additional content commands (`projects`, `skills`, etc.)

## Technology Stack

- **HTML** — page structure
- **CSS** — visual styling and layout
- **JavaScript** — command parsing, DOM manipulation, and interactivity

No frameworks or build tools are used yet.

## Architecture

1. The visitor types a command into the input field.
2. On pressing Enter, the current input value is captured int a variable.
3. The command is compared against known command names using conditional logic.
4. 
(a) A matching command apeends its corresponding output to the terminal display.
(b) An unmatched command triggers a fallback message.
5. Input field is cleared, ready for the next command.

## Project Structure

```
cli_website/
├── index.html      # Page structure and layout
├── style.css        # Visual styling
├── script.js        # Command parsing and terminal behavior
├── .gitignore        # Files excluded from version control
└── README.md        # Project documentation
```


## Setup 

No installation or dependencies are required.
1. Clone the repository:
git clone https://github.com/ujwalmantri/cli_website.git
2. Open 'index.html' directly in a web browser

## Usage

Once opened in a web browser, type a command into the input firld and press Enter to see the corresponding output.

## Commands

| Command | Description |
|---------|-------------|
| `help`  | List available commands |
| `about` | Display a short introduction |
| `clear` | Clear the terminal output |
| `whoami` | Display visitor info |

## Testing

No automated tests exist yet. Each command was manually tested in the browser after implementation to confirm correct behavior, including edge cases such as case-sensitive input and unknown commands.

## Roadmap

**Done**
- Terminal-style input and output
- `help`, `about`, `clear` commands
- Unknown command handling
- Terminal -style visual theming
- Command registry architecture for easier maintenance
- Command echoing and scrollback history display

**Planned**
- Additional commands: `projects`, `skills`, `experience`, `education`, `contact`
- Command history and arrow-key navigation
- Responsive design for mobile and tablet
- Accessibility improvements
- Deployment to a live URL

## Learnings

**Day1**
- Basics of HTML and JavaScript
- Git Fundamentals

**Day2**
- Basics of CSS
- Using Objects in JavaScript to store key:value pairs