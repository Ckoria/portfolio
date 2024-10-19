document.addEventListener("DOMContentLoaded", function () {

    let browserName = navigator.appName;
    let browserVersion = navigator.appVersion;
    let userAgent = navigator.userAgent;

    // Get Platform (OS)
    let platform = navigator.platform;

    // Get Device Memory (if supported)
    let deviceMemory = navigator.deviceMemory || "Not Available";

    // Get Screen Info
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let colorDepth = screen.colorDepth;

    let screenSize = "    Resolution : " +screen.width +" x "+ screen.height;
    let memory = " Memory : "+ navigator.deviceMemory + " GB";
    let internetSpeed = "  Downlink Speed: " + navigator.connection.downlink + " Mbps";

    const typingText = document.getElementById('mouse');
    const textArray = [screenSize, memory, internetSpeed];
    let arrayIndex = 0;
    let charIndex = 0;
    console.log(typingText.textContent);
    function type() {
        if (charIndex < textArray[arrayIndex].length+1) {
            typingText.innerHTML = textArray[arrayIndex].substring(0, charIndex) + "|";
            console.log(typingText);
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
