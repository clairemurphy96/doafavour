/* global auth */

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    setupUI(user);
  } else {
    console.log('user logged out');
    setupUI();
  }
});

//All constants in profile.html page
const profileEmail = document.querySelector('.profile-email');
const profileID = document.querySelector('.profile-id');
const profileBio = document.querySelector('.profile-bio');
const profileAddress = document.querySelector('.profile-address');
const profileCountry = document.querySelector('.profile-country');
const profileName = document.querySelector('.profile-name');
const profileSkill = document.querySelector('.profile-skill');
const DAFcoins = document.querySelector('.dafcoins');
const DAFcoinsAccount = document.querySelector('.dafcoinsaccount');
const dafbalance = document.getElementById("newbalance");

const setupUI = (user) => {
  if (user) {
    // email info
    const email = `
      <div>${user.email}</div>
    `;
    profileEmail.innerHTML = email;
    
    // uid of user logged in
    const uid = `
      <div>${user.uid}</div>
    `;
    profileID.innerHTML = uid;
    
        //bio from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const bio = `
      <div>${doc.data().bio}</div>
    `;
    profileBio.innerHTML = bio;
    });
    
    //address from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const address = `
      <div>${doc.data().address}</div>
    `;
    profileAddress.innerHTML = address;
    });
    
    //country from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const country = `
      <div>${doc.data().country}</div>
    `;
    profileCountry.innerHTML = country;
    });
    
    //name from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const name = `
      <div>${doc.data().name}</div>
    `;
    profileName.innerHTML = name;
    });
    
    //skill from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const skill = `
      <div>${doc.data().skill}</div>
    `;
    profileSkill.innerHTML = skill;
    });
    
    //number of daf coins from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      var dafcoin = `
      <div>${doc.data().DAFcoins}</div>
    `;
    DAFcoins.innerHTML = dafcoin;
    dafbalance.innerHTML = dafcoin;
    });
  
  } else {
    // clear account info if user is logged out 
    profileEmail.innerHTML = '';
    profileID.innerHTML = '';
    profileBio.innerHTML = '';
    profileAddress.innerHTML = '';
    profileCountry.innerHTML = '';
    profileName.innerHTML = '';
    profileSkill.innerHTML = '';
    DAFcoins.innerHTML = '';
    dafbalance.innerHTML = '';
  }
};

// Get the modal for the DAF account 
var modal = document.getElementById('myModal');
var sendmodal = document.getElementById('SendCoinsModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var sendbtn = document.getElementById("sendcoins");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var sendspan = document.getElementsByClassName("sendclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

sendbtn.onclick = function() {
  sendmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

sendspan.onclick = function() {
  sendmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == sendmodal) {
    sendmodal.style.display = "none";
  }
}
//send coins works for function, balance says not a number 
    function sendCoins(){
    const sendcoinsForm = document.querySelector('#sendcoins-form');
    var y = parseInt(document.getElementById("newbalance").value);
    var x = parseInt(document.getElementById("sendcoins-hours").value);
    document.getElementById("hours").innerHTML = x;
    var youruid = document.getElementById("your-uid").value;
    var test = dafbalance.value;
    var testing = parseInt(test);
    
    var z = myFunction(parseInt(y), x);
    function myFunction(a, b){
        return a - b;
    }
    document.getElementById("total").innerHTML = z;
    
    db.collection("users").doc(youruid).update({
    "DAFcoins": parseInt(z)
})
.then(function() {
    console.log("Document successfully updated!");
    window.alert("Balance updated! You have successfully sent coins to " + sentuid);
    sendcoinsForm.reset();
});
    var sentuid = document.getElementById("sendcoins-uid").value;
        var w = sendFunction(1, x);
        function sendFunction(a, b){
            return a + b;
        }
        
    document.getElementById("sentcoinsbal").innerHTML = w;
        
    db.collection("users").doc(sentuid).update({
    "DAFcoins": w
})
.then(function() {
    console.log("Coins sent to other user");
});
}
