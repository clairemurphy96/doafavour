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
const dafbalance = document.getElementById("newbalance");
var balance;
var toUserCoins;
var toUserInput = document.getElementById("your-uid");

//function thats passed through varaible to get the value of the DAFcoins field of user were sending coins to 
function myFunction(input){
    var toID = document.getElementById("sendcoins-uid").value;
        db.collection('users').doc(toID).get().then(doc => {
        console.log('toUsersbal', doc.data().DAFcoins);
        toUserCoins = doc.data().DAFcoins;
    });
}

//If the user is logged in it will access the database for this information and display it 
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
        console.log(doc)
        balance = doc.data().DAFcoins; //reading as a number 
      var dafcoin = `
      <div>${doc.data().DAFcoins}</div>
    `;
    DAFcoins.innerHTML = dafcoin; //reading in a string
    dafbalance.innerHTML = dafcoin;
    });
  
  } else {
    //If the user is logged out it will not access the database for this information and no information will display
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
//calculates current balance minus inputted hours to output z and updates the database of the user
    function sendCoins(){
    const sendcoinsForm = document.querySelector('#sendcoins-form');
    var youruid = document.getElementById("your-uid").value;
    var sentuid = document.getElementById("sendcoins-uid").value;
    var x = parseFloat(document.getElementById("sendcoins-hours").value);
    document.getElementById("hours").innerHTML = x;
    var y = parseFloat(document.getElementById('newbalance').value);
    var z = 0.0;
    z = parseFloat(balance - x);
    console.log('x', x);
    console.log('y', y);
    console.log(DAFcoins.innerHTML)
    console.log('z', z);
    document.getElementById("total").innerHTML = parseFloat(z);
    
    db.collection("users").doc(youruid).update({
    "DAFcoins": z
})
.then(function() {
    console.log("Document successfully updated!");
    window.alert("Balance updated! You have successfully sent coins to " + sentuid);
    sendcoinsForm.reset();
});
//calculates the balance of the user being sent the coins and adds the coins to their balance 
        var w = sendFunction(toUserCoins, x);
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
