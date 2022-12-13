// global variables
let aboutBtn = document.querySelector("#about-btn");
let projectBtn = document.querySelector("#project-btn");
let contactBtn = document.querySelector("#contact-btn");
let aboutDiv = document.querySelector("#about-div");
let projectDiv = document.querySelector("#project-div");
let contactDiv = document.querySelector("#contact-div");
let allContentDiv = document.querySelector("#all-content-div");
let enterBtn = document.querySelector("#enter-btn");
let enterDiv = document.querySelector("#enter-div");

// functions
function init() {
  allContentDiv.classList.add("hidden");
}

function showPortfolio() {
  allContentDiv.classList.remove("hidden");
  enterDiv.classList.add("hidden");
}

function handleAboutDisplay() {
  projectDiv.classList.add("hidden");
  contactDiv.classList.add("hidden");
  aboutDiv.classList.remove("hidden");
}

function handleProjectDisplay() {
  aboutDiv.classList.add("hidden");
  contactDiv.classList.add("hidden");
  projectDiv.classList.remove("hidden");
}

function handleContactDisplay() {
  aboutDiv.classList.add("hidden");
  projectDiv.classList.add("hidden");
  contactDiv.classList.remove("hidden");
}
// function calls
enterBtn.addEventListener("click", showPortfolio);
aboutBtn.addEventListener("click", handleAboutDisplay);
projectBtn.addEventListener("click", handleProjectDisplay);
contactBtn.addEventListener("click", handleContactDisplay);
init();
