// Get modal element
var modal_2 = document.getElementById("simpleModal-2");
// Get open modal button
var modalBtn_2 = document.getElementById("modalBtn-2");
// Get close button
var closeBtn_2 = document.getElementsByClassName("closeBtn-2")[0];

// Listen for open click
modalBtn_2.addEventListener("click", openModal_2);
// Listen for close click
closeBtn_2.addEventListener("click", closeModal_2);
// Listen for outside click
window.addEventListener("click", outsideClick_2);

// Function to open modal
function openModal_2() {
  modal_2.style.display = "block";
}

// Function to close modal
function closeModal_2() {
  modal_2.style.display = "none";
}

// Function to close modal if outside click
function outsideClick_2(e) {
  if (e.target == modal_2) {
    modal_2.style.display = "none";
  }
}
