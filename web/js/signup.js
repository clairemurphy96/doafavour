//DELETE
var db = firebase.firestore();

function storeData() {
    
    var nameText = document.getElementById("signupname").value;
    var emailText = document.getElementById("signupemail").value;
    var passwordText = document.getElementById("signuppassword").value;
    var address1Text = document.getElementById("signupaddress1").value;
    var address2Text = document.getElementById("signupaddress2").value;
    var countyText = document.getElementById("signupcounty").value;
    var countryText = document.getElementById("signupcountry").value;
    var skillText = document.getElementById("signupskill").value;
    var otherText = document.getElementById("signupother").value;
    
 db.collection("userDetails").doc().set({
    name: nameText,
    email: emailText,
    password: passwordText,
    address1: address1Text,
    address2: address2Text,
    county: countyText,
    country: countryText,
    skill: skillText,
    other: otherText
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    location.href = "index.html";
}

function storePost() {
    
    var namePost = document.getElementById("postName").value;
    var emailPost = document.getElementById("postEmail").value;
    var messagePost = document.getElementById("postMessage").value;
    
    db.collection("gardeningposts").doc().set({
        name: namePost,
        email: emailPost,
        message: messagePost
    })

.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

 window.alert("Post Uploaded");
 window.location.reload();
 
}

const list_div = document.querySelector("#list_div");

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
     
     list_div.innerHTML += "<div class='contact-content-area'<div class='list-item'><p>" + doc.data().name + "</p><p>Email: " + doc.data().email + "</p><p>Skill: " + doc.data().skill + "</p></div></div>";
    });
}); 

const postlist = document.querySelector("#postlist");

db.collection("gardeningposts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
     
     postlist.innerHTML += "<div class='contact-content-area'><div class='list-item'><p>Name: " + doc.data().name + 
             "</p><p>Email: " + doc.data().email + "</p><p> Message: " + doc.data().message + 
             "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><a class='btn like-btn'>Like</a>\n\
                <p type='text' id='like'></p></div></div>";
     
    });
}); 

