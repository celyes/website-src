$(document).ready(function(){
     // initiate scrollMagic
    var controller = new ScrollMagic.Controller();
    // start animations
    var pinTitle = new ScrollMagic.Scene({
        triggerElement:'#title',
        triggerHook:0,
        duration:'35%'
    })
        .setPin('#title', {pushFollowers:false})
        .addTo(controller);
    $(".parallax").parallax();
    $(".tooltipped").tooltip({delay:0});
    $(".process .tasks p span.fa").addClass("hide-on-med-and-down");
	});

/* Basic form validation :
/
/   Note !! :
/   This simple validation does not replace server-side Validation
/   or any kind of validation that is related to your DB !
/
*/
function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phnum').value;
    var msg = document.getElementById('msg').value;

    if(name==''){
        document.getElementById('nameError').innerHTML = "You can't leave this field empty"
    }else{
        document.getElementById('nameError').innerHTML = ""}
    if(email == ''){
        document.getElementById('emailError').innerHTML = "Please enter your Email address"
    }else{
        document.getElementById('emailError').innerHTML = ""}
    if(number == ''){
        document.getElementById('phoneError').innerHTML = "Please enter your phone number"
    }else{
        document.getElementById('phoneError').innerHTML = ""}
    if(msg == ''){
        document.getElementById('msgError').innerHTML = "You have to write a message!"
    }else{
        document.getElementById('msgError').innerHTML = ""}
	if(name!='' && email!='' && number!='' && msg!=''){
		swal({
		title:"Thank you",
		text:"Your Message has been sent successfully",
		allowOutsideClick:"true",
		type:"success"
	});
	}
}
function vName(){
    document.getElementById('nameError').innerHTML = ""
}
function vMail(){
    document.getElementById('emailError').innerHTML = ""
}
function vPhone(){
    document.getElementById('phoneError').innerHTML = ""
}

function vMessage(){
    document.getElementById('msgError').innerHTML = ""
}