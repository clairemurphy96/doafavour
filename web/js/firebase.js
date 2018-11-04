var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");
var signupname = document.getElementById("signupname");
var signupemail = document.getElementById("signupemail");
var signuppassword = document.getElementById("signuppassword");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
    fireHeading.innerText = datasnapshot.val();
});

function submitClick() {
    
    var firebaseRef = firebase.database().ref();
    
    var messageText = mainText.value;
    
    firebaseRef.push().set(messageText);
}

function submitClicksignup() {
    
    var firebaseRef = firebase.database().ref();
    
    var messageText1 = signupname.value;
    var messageText2 = signupemail.value;
    var messageText3 = signuppassword.value;
    
    firebaseRef.push().set(messageText1);
    firebaseRef.push().set(messageText2);
    firebaseRef.push().set(messageText3);
    
}

