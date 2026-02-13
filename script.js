// Elements
const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");

const firstStage = document.getElementById("first-stage");
const secondStage = document.getElementById("second-stage");
const finalStage = document.getElementById("final-stage");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondYes = document.querySelector(".second-yes");

// Open envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContainer.style.display = "flex";
});

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// First YES → Show Love Letter
yesBtn.addEventListener("click", () => {
    firstStage.style.display = "none";
    secondStage.style.display = "block";
});

// Second YES → Show Dancing Cat
secondYes.addEventListener("click", () => {
    secondStage.style.display = "none";
    finalStage.style.display = "block";
});
