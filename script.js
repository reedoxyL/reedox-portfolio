const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Creative Thinker",
    "Website Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    typingText.textContent = currentWord.substring(0, letterIndex);

    if (!deleting) {
        letterIndex++;

        if (letterIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        letterIndex--;

        if (letterIndex < 0) {
            letterIndex = 0;
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

if (typingText) {
    typeEffect();
}