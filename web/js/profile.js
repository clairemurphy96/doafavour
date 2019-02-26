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

//function thats passed through varaible to get the value of the DAFcoins field of user were sending coins to 
function myFunction(input){
    var toID = document.getElementById("sendcoins-uid").value;
        db.collection('users').doc(toID).get().then(doc => {
        console.log('toUsersbal', doc.data().DAFcoins);
        toUserCoins = doc.data().DAFcoins;
    });
}
//calculates current balance minus inputted hours to output z and updates the database of the user
    function sendCoins(){
    const sendcoinsForm = document.querySelector('#sendcoins-form');
    var youruid = document.getElementById("your-uid").value;
    var sentuid = document.getElementById("sendcoins-uid").value;
    var hours = parseFloat(document.getElementById("sendcoins-hours").value);
    document.getElementById("hours").innerHTML = hours;
    var calAnswer = 0.0;
    calAnswer = parseFloat(balance - hours);
    document.getElementById("total").innerHTML = parseFloat(calAnswer);
    
    db.collection("users").doc(youruid).update({
    "DAFcoins": calAnswer
})
.then(function() {
    console.log("Document successfully updated!");
    window.alert("Balance updated! You have successfully sent coins to " + sentuid);
    sendcoinsForm.reset();
});
//calculates the balance of the user being sent the coins and adds the coins to their balance 
        var toUserTotal = sendFunction(toUserCoins, hours);
        function sendFunction(a, b){
            return a + b;
        }
        
    document.getElementById("sentcoinsbal").innerHTML = toUserTotal;
        
    db.collection("users").doc(sentuid).update({
    "DAFcoins": toUserTotal
})
.then(function() {
    console.log("Coins sent to other user");
});

}

//Latest posts
//Declaring variables 
var selectList = document.getElementById("countrylist");
const div = document.querySelector('.main-list');

//When the dropdown of countries are selected hide all and then display only the combined by Location
selectList.onclick = function(){
    div.innerHTML = "";
    console.log(this.value);
    var x = this.value;
    var toReturnCombined = combined.filter(function(o){
        return o.post_name.toUpperCase() === x.toUpperCase();
    });
    console.log(toReturnCombined)
    toReturnCombined.forEach(function(o){
        console.log(o)
        $(table_body).append("<div class='panel-body'><table class='table profile__table'><tbody><tr><th><strong>" + o.post_date + "</strong></th></tr><tr><th><strong>Name</strong></th><td>" + o.post_name + "</td></tr><tr><th><strong>Location</strong></th><td>" + o.post_location + "</td></tr><tr><th><strong>Message</strong></th><td>" + o.post_message + "</td></tr><tr><th><strong>Email</strong></th><td>" + o.post_email + "</td></tr></tbody></table></div>");
                
      })
}

var combined = []
//Skill1
var roofRef1 = firebase.database().ref().child("bakingskills");
    
    roofRef1.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });

//Skill2
var roofRef2 = firebase.database().ref().child("gardeningskills");
    
    roofRef2.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });

//Skill3
var roofRef3 = firebase.database().ref().child("diyskills");
    
    roofRef3.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });

//Skill4
var roofRef4 = firebase.database().ref().child("hardwaresoftwareskills");
    
    roofRef4.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
 
    });
    
//Skill5
var roofRef5 = firebase.database().ref().child("musicskills");
    
    roofRef5.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });
    
//Skill6
var roofRef6 = firebase.database().ref().child("drivingskills");
    
    roofRef6.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });
    
//Skill7
var roofRef7 = firebase.database().ref().child("babysittingskills");
    
    roofRef7.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });

//Skill8
var roofRef8 = firebase.database().ref().child("cleaningskills");
    
    roofRef8.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });
    
//Skill9
var roofRef9 = firebase.database().ref().child("photographyskills");
    
    roofRef9.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
  
    });
    
//Skill10
var roofRef10 = firebase.database().ref().child("programmingskills");
    
    roofRef10.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });
    
//Skill11
var roofRef11 = firebase.database().ref().child("languagesskills");
    
    roofRef11.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();

    });
    
//Skill12
var roofRef12 = firebase.database().ref().child("otherskills");
    
    roofRef12.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        console.log(combined)
        combined.forEach(function(o){
        console.log(o)
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p><b>Name: </b> " + o.post_name + "</p><p><b> Location: </b> " + o.post_location + "</p><p><b> Message: </b> " + o.post_message + "</p><p><b> Email: </b> " + o.post_email + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");

    })

    });

