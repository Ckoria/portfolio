document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById('name-text');
    const textArray = ["Sindiso Ndlovu", "Chris Blvck"];
    let arrayIndex = 0;
    let charIndex = 0;

    function type() {
        
        if (charIndex < textArray[arrayIndex].length) {
            console.log(textArray[arrayIndex].charAt(charIndex));
            typingText.innerHTML += textArray[arrayIndex].charAt(charIndex)+ "_";
            charIndex++;
            setTimeout(type, 150); // Adjust typing speed here
        } else {
            setTimeout(erase, 1000); // Pause before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.innerHTML = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100); // Adjust erasing speed here
        } else {
            arrayIndex++;
            if (arrayIndex >= textArray.length) {
                arrayIndex = 0; // Loop back to the first item
            }
            setTimeout(type, 500); // Pause before typing the next word
        }
    }

    type();
});