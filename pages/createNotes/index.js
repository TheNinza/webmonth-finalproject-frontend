const createNoteInput = document.querySelector(".create-note-input");

createNoteInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});
