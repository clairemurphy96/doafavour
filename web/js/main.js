var mainApp ={};
var userloggedin = document.getElementById("userloggedin").value();

(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = UserCredential.user.uid;
    
  }else{
      //redirect to login page
      uid = null;
      window.location.replace("login.html");
  }
});

function logOut(){
    firebase.auth().signOut();
}

    mainApp.logOut = logOut;
    
});


