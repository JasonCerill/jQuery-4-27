//selecting the txtEmail with JS


//let email=document.getElementById("txtEmail");

//selector type:
//id=#, class=., tag

//jQuery=$

email=$("txtEmail").val();
console.log(email);

//selecting by className

// let formControl=document.getElementsByClassName("form-control");
// for(let i=0; i<formControl.length; i++){
//     formControl[i].style.display="none";
// }



let formControl = $(".form-control");
formControl.hide();



 //selecting by tagName

//  let labels=document.getElementsByTagName("label");
//  console.log("lables")
 let labels = $("label");
 console.log(labels);