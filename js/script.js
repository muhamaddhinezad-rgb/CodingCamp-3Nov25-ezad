/// Displaya welcome message when the page loads
welcomeMessage();

function welcomeMessage() {
    /// prompt the user for their name
    let name = prompt("please enter your name:");

    if (name != null) {
        
    /// set the wecome message
    document.getElementById('welcome-speech').innerHTML = 'Hello ' + name + ', welcome to Ezad Company!';
    }
}
///validate the contact form
function validateForm() {   

    }