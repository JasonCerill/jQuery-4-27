//create a user constructor and display on console.
class User {
    constructor(fname, lname, email, password, gender){
        this.firstname=fname;
        this.lname=lname;
        this.email=email;
        this.password=password;
        this.gender=gender;
    }
}

function isValid(user){
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
    valid=false;
    console.log("Add Email");
    $("#txtEmail").addClass("input-error");

    }
    if(user.password.length==0){
        valid=false;
        console.log("Add Password");
        $("#txtPassword").addClass("input-error");
        }

    return valid;
}

function register(){
    let inputfName = $("#txtFirstName").val();
    let inputlName = $("#txtLastName").val();
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtEmail").val();
    let inputGender=$("#txtGender").val();


    
    let newUser = new User(inputfName,inputlName, inputEmail, inputPassword, inputGender);
    console.log(newUser);
    if(isValid(newUser)){
        saveUser(newUser);
    }
}

 function init(){
     console.log("init function");
 


    let user1= new User("Jason", "Cerilli", "jasoncer@gmail.com", "123456");
    let user2= new User("Michael", "Scott", "mikescott@dundermifflin.com", "67890");

console.log(user1,user2);
 
}

window.onload=init;