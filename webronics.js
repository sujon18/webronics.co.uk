// navigation
const menuButton = document.querySelector(".custom-navbar-toggler");
const menuIcon = document.querySelector(".menu-icon");

// Add a click event listener to the button
menuButton.addEventListener("click", function () {
  // Check the current source of the menu icon
  if (menuIcon.src.includes("list.svg")) {
    // If the current source is "list.svg", change it to the closing menu image
    menuIcon.src = "./assets/closing-btn.svg";
  } else {
    // If the current source is the closing menu image, change it back to "list.svg"
    menuIcon.src = "./assets/list.svg";
  }
});

// section-1
var typed = new Typed(".auto-type", {
  strings: ["Welcome to WebRoNics", "We strive for the extraordinary" ],
  typeSpeed: 150,
  backSpeed: 150,
  showCursor:false, 
  loop:false
});
