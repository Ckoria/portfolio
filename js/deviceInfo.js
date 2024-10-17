document.addEventListener("DOMContentLoaded", function () {
    // Get Browser Info
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

    let mousePosition = document.querySelector("#mouse");
    mousePosition.innerHTML += "    Resolution : " +screen.width +" x "+ screen.height +
    " Memory : "+ navigator.deviceMemory + " GB" +"  Downlink Speed: " + navigator.connection.downlink + " Mbps";
});
