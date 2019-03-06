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

//Declaing constants & variables 
const profileEmail = document.querySelector('.profile-email');
const profileID = document.querySelector('.profile-id');
const profileBio = document.querySelector('.profile-bio');
const profileDOB = document.querySelector('.profile-dob');
const profileAddress = document.querySelector('.profile-address');
const profileCountry = document.querySelector('.profile-country');
const profileName = document.querySelector('.profile-name');
const profileSkill = document.querySelector('.profile-skill');
const profileSkill2 = document.querySelector('.profile-skill2');
const DAFcoins = document.querySelector('.dafcoins');
const dafbalance = document.getElementById("newbalance");
var balance;
var toUserCoins;
var toUserInput = document.getElementById("your-uid");
var myUID;
var userName;
var userskill2;
var userEmail;

//If the user is logged in it will access the database for this information and display it 
const setupUI = (user) => {
  if (user) {
    // email info
    const email = `
      <div>${user.email}</div>
    `;
    profileEmail.innerHTML = email;
    userEmail = user.email;
    
    // uid of user logged in
    const uid = `
      <div>${user.uid}</div>
    `;
    profileID.innerHTML = uid;
    myUID = user.uid;   //reads outside a div
    
    // bio from logged in user from database 
    db.collection('users').doc(user.uid).get().then(doc => {
      const bio = `
      <div>${doc.data().bio}</div>
    `;
    profileBio.innerHTML = bio;
    });
    
    // DOB from logged in user from database 
    db.collection('users').doc(user.uid).get().then(doc => {
      const dob = `
      <div>${doc.data().DOB}</div>
    `;
    profileDOB.innerHTML = dob;
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
    userName = doc.data().name;
    });
    
    //skill from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const skill = `
      <div>${doc.data().skill}</div>
    `;
    profileSkill.innerHTML = skill;
    });
    
    //second skill from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
      const skill2 = `
      <div>${doc.data().skill2}</div>
    `;
    profileSkill2.innerHTML = skill2;
    userskill2 = doc.data().skill2;
    });
    
    //number of daf coins from logged in user from database
    db.collection('users').doc(user.uid).get().then(doc => {
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

            //Modal 
// Get the modal for each of the 4 modals
var modal = document.getElementById('myModal');
var sendmodal = document.getElementById('SendCoinsModal');
var biomodal = document.getElementById('bioModal');
var skillmodal = document.getElementById('skillModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var sendbtn = document.getElementById("sendcoins");
var biobtn = document.getElementById("updatebiobutton");
var skillbtn = document.getElementById("updateskillbutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var sendspan = document.getElementsByClassName("sendclose")[0];
var biospan = document.getElementsByClassName("bioclose")[0];
var skillspan = document.getElementsByClassName("skillclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};
sendbtn.onclick = function() {
  sendmodal.style.display = "block";
};
biobtn.onclick = function() {
  biomodal.style.display = "block";
};
skillbtn.onclick = function() {
  skillmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
sendspan.onclick = function() {
  sendmodal.style.display = "none";
};
biospan.onclick = function() {
  biomodal.style.display = "none";
};
skillspan.onclick = function() {
  skillmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
window.onclick = function(event) {
    if (event.target === sendmodal) {
    sendmodal.style.display = "none";
  }
};
window.onclick = function(event) {
    if (event.target === biomodal) {
    biomodal.style.display = "none";
  }
};
window.onclick = function(event) {
    if (event.target === skillmodal) {
    skillmodal.style.display = "none";
  }
};

//Gets DAFcoin balance of other user
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
    
    //If DAF Balance is 0 alert user that they have no coins to send 
    if (balance < 1){
        window.alert("Unfortunately, you have no DAF coins to send. Earn coins by completing post requests");
    } else {
         var calAnswer = 0.0;
        calAnswer = balance - hours;
        document.getElementById("total").innerHTML = calAnswer;
    }
    
        db.collection("users").doc(youruid).update({
        "DAFcoins": calAnswer       //new balance
    })
    .then(function() {
        console.log("Document successfully updated!");
        window.alert("Balance updated! You have successfully sent coins to " + sentuid);
        sendcoinsForm.reset();
    });
    
    //calculates the balance of the user being sent the coins and adds the coins to their balance 
        var toUserTotal = sendFunction(toUserCoins, hours);
        function sendFunction(a, b){
            return a + b;   //new balance of other user
        }
        
    document.getElementById("sentcoinsbal").innerHTML = toUserTotal;
        
    db.collection("users").doc(sentuid).update({
    "DAFcoins": toUserTotal
    })
    .then(function() {
        console.log("Coins sent to other user");
//        window.alert("Balance updated! Coins successfully sent to" + sentuid);
    });   
}

//Updating users bio 
function updateBIO() {
    const updatebioForm = document.querySelector('#updatebio-form');
    var updatetextarea = document.getElementById("updatebio").value;
    const textarea = document.querySelector('.updateBIO');
    
    db.collection("users").doc(myUID).update({
        "bio": updatetextarea
    })
    .then(function() {
    window.alert("Bio successfully updated!");
    })
    .catch(function(error) {
        // Handle Errors here.
        console.error("Error updating bio: ", error);
    });
}

//Updating skill
function updateSKILL() {
    var updateskill = document.getElementById("skilllist").value;
    
    db.collection("users").doc(myUID).update({
        "skill": updateskill
    })
    .then(function() {
    window.alert("Skill successfully updated!");
    })
    .catch(function(error) {
        // Handle Errors here.
        console.error("Error updating skill: ", error);
    });
    
}

//Adding a second skill
function addsecondSKILL() {
    var addsecondskill = document.getElementById("secondskilllist").value;
    
    db.collection("users").doc(myUID).update({
        "skill2": addsecondskill
    })
    .then(function() {
    window.alert("Skill successfully added! Congratulations you now have a second skill");
    })
    .catch(function(error) {
        // Handle Errors here.
        console.error("Error adding skill: ", error);
    });
    
}

//Display latest posts of logged in user using an 2 different arrays and concatating them

//array
var allSnaps = [];

    firebase.database().ref().child("bakingskills").once("value", bakingSnap => {
    firebase.database().ref().child("gardeningskills").once("value", gardeningSnap => {
    firebase.database().ref().child("diyskills").once("value", diySnap => {
    firebase.database().ref().child("hardwaresoftwareskills").once("value", hardsoftwareSnap => {
    firebase.database().ref().child("musicskills").once("value", musicSnap => {
    firebase.database().ref().child("drivingskills").once("value", drivingSnap => {
    firebase.database().ref().child("babysittingskills").once("value", babysittingSnap => {
    firebase.database().ref().child("cleaningskills").once("value", cleaningSnap => {
    firebase.database().ref().child("photographyskills").once("value", photographySnap => {
    firebase.database().ref().child("programmingskills").once("value", programmingSnap => {
    firebase.database().ref().child("languagesskills").once("value", languageSnap => {
    firebase.database().ref().child("otherskills").once("value", otherSnap => {
    
        bakingSnap = bakingSnap.val();          //get value
        gardeningSnap = gardeningSnap.val();
        diySnap = diySnap.val();
        hardsoftwareSnap = hardsoftwareSnap.val();
        musicSnap = musicSnap.val();
        drivingSnap = drivingSnap.val();
        babysittingSnap = babysittingSnap.val();
        cleaningSnap = cleaningSnap.val();
        photographySnap = photographySnap.val();
        programmingSnap = programmingSnap.val();
        languageSnap = languageSnap.val();
        otherSnap = otherSnap.val();
        
            var bakingArray = Object.keys(bakingSnap).map(k =>{                     //Skill 1 
                bakingSnap[k]._key = k;
                return bakingSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var gardeningArray = Object.keys(gardeningSnap).map(k => {              //Skill 2
                gardeningSnap[k]._key = k;
                return gardeningSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var diyArray = Object.keys(diySnap).map(k => {                          //Skill 3 
                diySnap[k]._key = k;
                return diySnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var hardsoftwareArray = Object.keys(hardsoftwareSnap).map(k => {        //Skill 4
                hardsoftwareSnap[k]._key = k;
                return hardsoftwareSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var musicArray = Object.keys(musicSnap).map(k => {                      //Skill 5
                musicSnap[k]._key = k;
                return musicSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var drivingArray = Object.keys(drivingSnap).map(k => {                  //Skill 6
                drivingSnap[k]._key = k;
                return drivingSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var babysittingArray = Object.keys(babysittingSnap).map(k => {          //Skill 7
                babysittingSnap[k]._key = k;
                return babysittingSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var cleaningArray = Object.keys(cleaningSnap).map(k => {                //Skill 8
                cleaningSnap[k]._key = k;
                return cleaningSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var photographyArray = Object.keys(photographySnap).map(k => {          //Skill 9
                photographySnap[k]._key = k;
                return photographySnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var programmingArray = Object.keys(programmingSnap).map(k => {           //Skill 10
                programmingSnap[k]._key = k;
                return programmingSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var languageArray = Object.keys(languageSnap).map(k => {                //Skill 11
                languageSnap[k]._key = k;
                return languageSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
            var otherArray = Object.keys(otherSnap).map(k => {                      //Skill 12
                otherSnap[k]._key = k;
                return otherSnap[k];
            }).filter(o => o.post_email.toUpperCase() === userEmail.toUpperCase());
        
        //combined all the separate arrays into 1 combined and concat because otherwise it would arrays inside arrays which wouldn't work
        var combined = [bakingArray, gardeningArray, diyArray, hardsoftwareArray, musicArray, drivingArray, babysittingArray, cleaningArray, photographyArray, programmingArray, languageArray, otherArray];
        allSnaps = Array.prototype.concat.apply([], combined);
       
       var returnnewtoold = allSnaps.sort(function(a,b){            //returning from newest to oldest date
           var keyA = new Date(a.post_date),
               keyB = new Date(b.post_date);
            // Compare the 2 dates
            if(keyA < keyB) return 1;
            if(keyA > keyB) return -1;
            return 0;
       });
       console.log(returnnewtoold, "returnnewtoold");
        console.log(allSnaps);
        //displaying array in 'table_body' class
        returnnewtoold.forEach(function(o){
        console.log(o);
        $(table_body).append("<div class='panel-body'><table class='table profile__table'><tbody><tr><th><strong>" + o.post_date + "</strong></th></tr><tr><th><strong>Name</strong></th><td>" + o.post_name + "</td></tr><tr><th><strong>Location</strong></th><td>" + o.post_location + "</td></tr><tr><th><strong>Message</strong></th><td>" + o.post_message + "</td></tr><tr><th><strong>Email</strong></th><td>" + o.post_email + "</td></tr></tbody></table></div>");
    
    }); 
     }); 
      }); 
       });
        });
         });
          });
           });
            });
             });
              });
               });
                });