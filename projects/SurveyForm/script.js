document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var age = document.getElementById("number");
    var currentRole = document.getElementById("dropdown")
    var featureSelect = document.getElementById("featureDropdown")
    var nameCheck;
    var emailCheck;
    var ageCheck;
    var currentRoleCheck;
    var featureSelectCheck;

    if(name.value == ""){
        alert( "Please provide your name!");
        name.focus();
        nameCheck = false;
        return false;
    } else{
        nameCheck = true;
    }
    function validateEmail(){
        var mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        if(mailformat == true){
            return true;
        } else{
            return false;
        }
    }
    if(validateEmail() == false){
        alert( "Please provide your e-mail!");
        email.focus();
        emailCheck = false;
        return false;
    } else{
        emailCheck = true;
    }
    if(age.value == ""){
        alert( "Please provide your age!");
        age.focus();
        ageCheck = false;
        return false;
    } else{
        ageCheck = true;
    }
    if(currentRole.value == "valueNullRole"){
        alert( "Please select your current role!");
        currentRole.focus();
        currentRoleCheck = false;
        return false;
    } else{
        currentRoleCheck = true;
    }
    if(featureSelect.value == "valueNullFeature"){
        alert( "Please select your favorite feature of freeCodeCamp!");
        featureSelect.focus();
        featureSelectCheck = false;
        return false;
    } else{
        featureSelectCheck = true;
    }
    if(nameCheck == true && emailCheck == true && ageCheck == true && currentRoleCheck == true && featureSelectCheck == true){
        alert("Thank you for taking your time to help us to improve the platform freeCodeCamp!");
    } else{
        alert("Please fill the form correctly!")
    }
})