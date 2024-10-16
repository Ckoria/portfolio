(function(){
    emailjs.init("S-xzMs8CE5bJDZTr5");
})();

function sendEmail() {
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    // Log the template params to ensure they are being populated correctly
    emailjs.send("service_ahftsii", "template_74zl8gs", templateParams)
        .then(function(response) {
        }, function(error) {
            alert("FAILED. Error: " + error.text);
        });
}
