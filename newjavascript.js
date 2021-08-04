function formValidation(){
 
    var firstname = document.myForm.firstname;
    var lastname = document.myForm.lastname;
    var contactnumber = document.myForm.contactnumber;
    var address = document.myForm.address;
    var email = document.myForm.email;

    if(allLetter(firstname)){
        if(allLetter(lastname)){
            if(allNumber(contactnumber)){
                if(alphaNumeric(address)){
                    if(EmailValidate(email)){
                        alert("User Added Successfully")
                    }
                }
            }
        }
    } 
}

function allLetter(argument){ 
    var letters = /^[A-Za-z]+$/;
    if(argument.value.match(letters)){
        return true;
    }else{
        alert('Invalid Name! Try Again...');
        argument.focus();
        return false;
    }
}

function allNumber(argument){ 
    var numbers = /^[0-9]+$/;
    if(argument.value.match(numbers)){
        return true;
    }else{
        alert('Invalid Contact Number! Try again...');
        argument.focus();
        return false;
    }
}

function alphaNumeric(argument){ 
    var alphanumbers = /^[/^[a-zA-Z0-9\-\s]+$/;
    if(argument.value.match(alphanumbers)){
        return true;
    }else{
        alert('Invalid Address! Try Again...');
        argument.focus();
        return false;
    }
}

function EmailValidate(argument){ 
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(argument.value.match(mailformat)){
        return true;
    }else{
        alert('Invalid Email Address! Try Again...');
        argument.focus();
        return false;
    }
}
