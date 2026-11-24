document.getElementById("myform").addEventListener("submit",function(event){
    event.preventDefault();
    let formData=new FormData(this);
    let name=formData.get("Name");
    let mobile=formData.get("Mobile");
    let email=formData.get("email");
    let address=formData.get("address").trim();

    if(name.length<3 || !/^[a-zA-Z ]+$/.test(name)){
        alert("Name must contain atleast 3 characters and should only contain letters");
        return;
    }

    if(isNaN(mobile) || !/^[0-9]{10}$/.test(mobile)){
        alert("Mobile Number must be valid");
        return;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Invalid Email,Please enter correct email");
        return;
    }

    if(address.length<10){
        alert("Address must be atleast 10 characters");
        return;
    }
})