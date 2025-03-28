# Markdown Previewer

## Overview
The **Markdown Previewer** is a web-based application that allows users to write and preview Markdown syntax in real time. The application uses the [Marked.js](https://marked.js.org/) library to parse and render Markdown input dynamically.

## Features
- Live Markdown preview as you type
- Clear button to reset the input field
- Styled preview output with support for headings, lists, code blocks, bold, italics, and links
- Responsive design for both desktop and mobile devices

## Technologies Used
- **HTML5**: Structuring the web page
- **CSS3**: Styling the application with a modern and responsive layout
- **JavaScript (ES6+)**: Handling user input and rendering the Markdown output
- **Marked.js**: Parsing and rendering Markdown content

## Installation
### 1. Clone the Repository
```sh
 git clone https://github.com/your-username/markdown-previewer.git
```
### 2. Open the Project
Navigate to the project folder and open `index.html` in your web browser.

## Usage
1. Type Markdown syntax in the text area.
2. The parsed Markdown will be displayed in real-time in the preview section.
3. Click the **Clear** button to reset the input field and output.

## File Structure
```
markdown-previewer/
│── index.html        # Main HTML file
│── Styles.css        # Stylesheet for UI design
│── App.js            # JavaScript logic for Markdown parsing
│── README.md         # Documentation
```

## Code Highlights
### JavaScript Logic
```js
// Get DOM elements
let inputDiv = document.getElementById("markdown-input");
let clearBtn = document.getElementById("clear-btn");
let outputDiv = document.getElementById("markdown-output");

marked.setOptions({ breaks: true });

// Update the preview of Markdown in real-time
const updatePreview = () => {
    const markdownText = inputDiv.value;
    outputDiv.innerHTML = marked.parse(markdownText);
};

// Add Event Listeners
inputDiv.addEventListener("input", updatePreview);
clearBtn.addEventListener("click", () => {
    inputDiv.value = "";
    outputDiv.innerHTML = "";
});

// Initialize the preview
updatePreview();
```

## Known Issues
- The `clearBtn` event listener had a typo (`clearBtnearbtn`), which has been corrected.
- Some Markdown elements may not render perfectly due to library limitations.

## Future Enhancements
- Add support for dark mode
- Improve syntax highlighting for code blocks
- Allow users to download their Markdown content as a `.md` file

## License
This project is licensed under the **MIT License**.

## Author
**Saim Ahmed**

For any questions or contributions, feel free to reach out!

