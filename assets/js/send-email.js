//send email 
const formId = document.getElementById("form-submit"); 

formId.addEventListener('submit', function(event) {

    event.preventDefault();

    emailjs.send("gmail", "edmund", {
                        
                        "from_name": formId.name.value,
                        "from_email": formId.emailaddress.value,
                        "project_request": formId.projectsummary.value

                    })
                    .then(function() { 
                        
                        $("#submit-response").text("  Message Sent!");
                        refreshModalContent();

                    }, 
                    function() {  

                        $("#submit-response").text("  Failed to send!");

                    });

                    return false;

});



//refresh content when message is sent
function refreshModalContent() {

    $("#form-submit")[0].reset();

}

//refresh form if user closes the form.
$("#close-btn").click(function() {

    refreshModalContent();
    $("#submit-response").text("");

});