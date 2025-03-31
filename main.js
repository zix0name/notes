const root = document.querySelector("#root");

const app = document.createElement("div");
app.className = "app";

// add form for notes
const form = document.createElement("form");
form.className = "form";
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a note...";
input.className = "input";
const button = document.createElement("button");
button.type = "submit";
button.className = "button";
button.innerText = "Add Note";
form.appendChild(input);
form.appendChild(button);
app.appendChild(form);

// add notes list
const notesList = document.createElement("ul");
notesList.className = "notes-list";
app.appendChild(notesList);

// add notes count
const notesCount = document.createElement("div");
notesCount.className = "notes-count";
notesCount.innerText = "Notes count: 0";
app.appendChild(notesCount);

// add notes array
let notes = [];
// add notes count variable
let count = 0;
// add event listener to form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteText = input.value.trim();
  if (noteText) {
    notes.push(noteText);
    count++;
    input.value = "";
    renderNotes();
  }
});
// add renderNotes function
function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteItem = document.createElement("li");
    noteItem.className = "note-item";
    noteItem.innerText = note;
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      notes.splice(index, 1);
      count--;
      renderNotes();
    });
    noteItem.appendChild(deleteButton);
    notesList.appendChild(noteItem);
  });
  notesCount.innerText = `Notes count: ${count}`;
}
// add styles
const style = document.createElement("style");

style.innerHTML = `
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}
.app {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.input {
    width: 70%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.button:hover {
    background-color: #0056b3;
}
.notes-list {
    list-style: none;
    padding: 0;
}
.note-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
.delete-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.delete-button:hover {
    background-color: #c82333;
}
.notes-count {
    margin-top: 20px;
    font-weight: bold;
}
`;
// append style to head
const head = document.querySelector("head");
head.appendChild(style);
// append app to root
root.appendChild(app);
// append notes to local storage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}
// load notes from local storage
function loadNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notes = JSON.parse(savedNotes);
    count = notes.length;
    renderNotes();
  }
}
// load notes on page load
loadNotes();
// save notes on page unload
window.addEventListener("beforeunload", saveNotes);
// add clear notes button
const clearButton = document.createElement("button");
clearButton.className = "clear-button";
clearButton.innerText = "Clear Notes";
clearButton.addEventListener("click", () => {
  notes = [];
  count = 0;
  renderNotes();
});
app.appendChild(clearButton);
// add styles for clear button
style.innerHTML += `
.clear-button {
    padding: 10px 20px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.clear-button:hover {
    background-color: #c82333;
}
`;
// append clear button to app
app.appendChild(clearButton);
// add clear notes function
function clearNotes() {
  notes = [];
  count = 0;
  renderNotes();
}
// add event listener to clear button
clearButton.addEventListener("click", clearNotes);
// append app to root
root.appendChild(app);
// append style to head
// background like a gradient
style.innerHTML += `
body {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
}
`;
// transpaent background for notes list
style.innerHTML += `
.notes-list {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
}
`;
// add shadow to notes list
style.innerHTML += `
.notes-list {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to note item
style.innerHTML += `
.note-item {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to delete button
style.innerHTML += `
.delete-button {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to clear button
style.innerHTML += `
.clear-button {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to button
style.innerHTML += `
.button {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to input
style.innerHTML += `
.input {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to form
style.innerHTML += `
.form {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;
// add shadow to app
style.innerHTML += `
.app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
`;
// add favicon
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href =
  "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093"; // replace with your favicon url

favicon.type = "image/png";
head.appendChild(favicon);
