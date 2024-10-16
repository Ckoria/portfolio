document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById('contact-text');
    const textArray = ["Freelancing", "Hire"];
    let arrayIndex = 0;
    let charIndex = 0;

    function type() {
        
        if (charIndex < textArray[arrayIndex].length) {
            typingText.innerHTML += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150); // Adjust typing speed here
        } else {
            setTimeout(erase, 1000); // Pause before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.innerHTML = textArray[arrayIndex].substring(0, charIndex - 1) +"_";
            charIndex--;
            setTimeout(erase, 100); // Adjust erasing speed here
        } else {
            typingText.innerHTML = "_";
            arrayIndex++;
            if (arrayIndex >= textArray.length) {
                arrayIndex = 0; // Loop back to the first item
            }
            setTimeout(type, 500); // Pause before typing the next word
        }
    }

    type();
});