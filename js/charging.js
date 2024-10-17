document.addEventListener("DOMContentLoaded", function () {
    let iconLink = document.querySelector("#charging");

    function charging() {
        if (iconLink.childElementCount > 0) {
            let chargingIcon = iconLink.querySelector(".bi-battery-half");
            if (chargingIcon) {
                iconLink.removeChild(chargingIcon);
            }
        }

        // Create and append the charging icon
        let newIcon = document.createElement('i');
        newIcon.className = "bi bi-battery-charging";
        iconLink.appendChild(newIcon);

        setTimeout(notCharging, 500);
    }

    function notCharging() {
        // Remove the charging icon
        let chargingIcon = iconLink.querySelector(".bi-battery-charging");
        if (chargingIcon) {
            iconLink.removeChild(chargingIcon);
        }

        // Create and append the battery half icon
        let newIcon = document.createElement('i');
        newIcon.className = "bi bi-battery-half";
        iconLink.appendChild(newIcon);

        setTimeout(charging, 500);
    }

    // alert("Last Test");
    charging();
});
