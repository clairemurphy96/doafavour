/* global firebase */

//Search function to display by posts by country 
//simple query look up e.g. var query = citiesRef.where("capital", "==", true);
//https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data 
//var corkPosts = firebase.database().ref('otherskills').orderByValue('Location').equalTo('Cork');

//function Searchcounty() {
  //  var countryList = document.getElementById("countrylist").value;
    //var test = document.getElementById("table_body");
    
  //  if(countryList === "Cork") {
    //    test = corkPosts;
   // }
    //else if (location = Kerry){
        //display kerry only
   // }
   // else if (location = Dublin) {
        //display dublin only etc..
    //}
    //else {
        //display all
    //}
//}
//Skill1
var roofRef1 = firebase.database().ref().child("bakingskills");
    
    roofRef1.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });

//Skill2
var roofRef2 = firebase.database().ref().child("gardeningskills");
    
    roofRef2.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });

//Skill3
var roofRef3 = firebase.database().ref().child("diyskills");
    
    roofRef3.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });

//Skill4
var roofRef4 = firebase.database().ref().child("hardwaresoftwareskills");
    
    roofRef4.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill5
var roofRef5 = firebase.database().ref().child("musicskills");
    
    roofRef5.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill6
var roofRef6 = firebase.database().ref().child("drivingskills");
    
    roofRef6.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill7
var roofRef7 = firebase.database().ref().child("babysittingskills");
    
    roofRef7.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });

//Skill8
var roofRef8 = firebase.database().ref().child("cleaningskills");
    
    roofRef8.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill9
var roofRef9 = firebase.database().ref().child("photographyskills");
    
    roofRef9.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill10
var roofRef10 = firebase.database().ref().child("programmingskills");
    
    roofRef10.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill11
var roofRef11 = firebase.database().ref().child("languagesskills");
    
    roofRef11.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Skill12
var roofRef12 = firebase.database().ref().child("otherskills");
    
    roofRef12.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    
//Modal for sending email
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('inputName');
    var email   = document.getElementById('inputEmail');
    var message = document.getElementById('inputMessage');

    if (!name.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/claireemxx@hotmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
});


