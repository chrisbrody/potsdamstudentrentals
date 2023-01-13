// used to open mobile navigation menu
open_menu = (event) => {
    let target = event.target
    // if the target contains a certain class =
    if(target.classList.contains('mobile_menu_button')) {
        
        // find menu item
        let menu = document.querySelectorAll('nav')[1]
        // restyle that item to show it
        menu.style.transform = 'translate(0)';
    };
}

// used to close mobile navigation menu
close_menu = (event) => {
    let target = event.target

    if( target.classList.contains('close_menu') ) {
        // find menu item
        let menu = document.querySelectorAll('nav')[1]
        // restyle that item to hide it
        menu.style.transform = 'translate(-110vw)';
    }
}



const submit_contact_form = document.getElementById('submit_contact_form')
const errorDiv = document.getElementById('errorDiv')

const validateForm = (e) => {

    let usersProperty = document.getElementById('properties').value,
        usersName = document.forms["myForm"]["users_name"].value,
        usersEmail = document.forms["myForm"]["email_address"].value,
        usersPhone = document.forms["myForm"]["phone_number"].value,
        userMessage = document.forms["myForm"]["additional_message"].value,
        validEmail = false

    // stop if all fields aren't filled out
    if(!usersName || !usersEmail || !usersPhone) {
        errorDiv.innerText = 'Please fill out the whole form'
        return false
    }

    // stop if Cryto or cryto is in the username
    if (usersName.includes('Cryto') || usersName.includes('cryto')) {
        errorDiv.innerText = 'Error submitting, please try again'
        return false
    }

    // validate email
    if(usersEmail) {
        validEmail = validateEmail(usersEmail)
        // if email is invalid return error message
        if(!validEmail === true) {
            errorDiv.innerText = 'Email invalid, try again'
            return false
        }
    } 
    
    // reformat usersPhone
    if(usersPhone) {
        usersPhone = formatPhoneNumber(usersPhone)
    }

    if(userMessage.includes('http')) {
        errorDiv.innerText = 'illegal message, try again'
        return false
    }
    
    return true
}

const validateEmail = (email) => {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}

const formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
  
    return null
};

submit_contact_form.addEventListener("click", validateForm)