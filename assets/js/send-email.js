//send email 
function sendMail(contactForm) {

                    emailjs.send("gmail", "edmund", {
                        
                        "from_name": contactForm.name.value,
                        "from_email": contactForm.emailaddress.value,
                        "project_request": contactForm.projectsummary.value

                    })
                    
                    .then(function() { 
                        
                        $("#submit-response").text("  Message Sent!");
                        refreshModalContent();

                    }, 
                    function() {  

                        $("#submit-response").text("  Failed to send!");

                    });

                    return false;

                }

//refresh content
function refreshModalContent() {

    $(".form-control").val("");
    $(".form-control").addClass("form-refresh:focus");

}

