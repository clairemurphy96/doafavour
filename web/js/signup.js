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
    
 db.collection("users").doc().set({
    name: nameText,
    email: emailText,
    password: passwordText,
    address1: address1Text,
    address2: address2Text,
    county: countyText,
    country: countryText,
    skill: skillText
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

const list_div = document.querySelector("#list_div");

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
     
     list_div.innerHTML += "<div class='list-item'><p>" + doc.data().name + "</p><p>Email: " + doc.data().email + "</p></div>";
    });
});
