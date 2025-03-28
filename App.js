
// Get DOM elements
let inputDiv=document.getElementById("markdown-input")
let clearBtn=document.getElementById("clear-btn")
let outputDiv=document.getElementById("markdown-output")

// Ensure 'breaks' option is set correctly
marked.setOptions({ breaks: true });


//  Update the preview of Markdown in realtime
const updatepreview=()=>{
    const markdownText = inputDiv.value
    outputDiv.innerHTML= marked.parse(markdownText);
}

// Add Event Listeners
inputDiv.addEventListener("input",updatepreview)
clearBtn.addEventListener("click",()=>{
    inputDiv.value=""
    outputDiv.innerHTML=""
})

// Initialize the preview
updatepreview()

