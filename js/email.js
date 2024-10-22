(function(){
    emailjs.init("sjrVTDnJz5XCftztQ");  // Initialize EmailJS 
})();

function sendEmail(event) {
    event.preventDefault();  // Prevent form from submitting/reloading the page

    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,  // Fixed subject id reference
        subject: document.getElementById("subject").value,  // Fixed subject id reference
        message: document.getElementById("message").value
    };
    let msg = document.getElementById("feedback-msg");
    emailjs.send("service_ho763x9", "template_u5wtgtp", templateParams)
        .then(function(response) {
            msg.style.backgroundColor = "green";
            msg.value = `Thanks for reaching out, ${templateParams["name"]} 😉!`;
        }, function(error) {
            msg.style.backgroundColor = "red";
            msg.value = "FAILED. Error: " + error.text;
        });

}
