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

**Day 2 - Styling and Interaction Improvements**

- Terminal-style visual theme (dark background, monospace font, styled prompt)
- Command handling refactored into a registry for easier maintenance
- Commands echo into a persistent scrollback, like a real terminal
- Working commands 'help', 'about', 'clear', 'whoami'
- Input trimming and empty-input handling to match real terminal behaviour
- Still no responsive/mobile design, command history, or additional content commands ('projects', 'skills', etc.)

**Day 3 - New Commands and Command History**

- Added 'skills' command, listing core skills s a bulleted list
- Added 'projects' command, listing project name (detailed project view planned for later)
- Implemented command history with arrow-key (↑/↓) navigation (matching real terminal behaviour)
- Working commands: `help`, `about`, `clear`, `whoami`, `skills`, `projects`

**Day 4 - Remaining core commands**

- Added `experience`, `education`, `contact`, and `socials` commands
- `experience` correctly handles an empty state (no experience yet) with a real, ready-to-use structure for future entries
- All 10 commands from the original project scope are now implemented 

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

| Command      | Description |
|--------------|-------------|
| `help`       | List available commands |
| `about`      | Display a short introduction |
| `clear`      | Clear the terminal output |
| `whoami`     | Display visitor info |
| `skills`     | List core skills |
| `projects`   | List project names |
| `experience` | Display work experience |
| `education`  | Display education background |
| `contact`    | Display contact email |
| `socials`    | List social/professional links |

## Testing

No automated tests exist yet. Each command was manually tested in the browser after implementation to confirm correct behavior, including edge cases such as case-sensitive input and unknown commands.

## Roadmap

**Done**
- Terminal-style input and output
- Terminal-style visual theming
- Command registry architecture for easier maintenance
- Command echoing and scrollback history display
- Command history with arrow-key (↑/↓) navigation
- All core commands: help`, `about`, `clear`, `whoami`, `skills`, `projects`, `experience`, `education`, `contact`, `socials`

**Planned**
- `project go <n> - detailed view for a specific project
- `certifications` command
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

**Day3**
- LIFO principle

**Day4**
- Placeholding and loops