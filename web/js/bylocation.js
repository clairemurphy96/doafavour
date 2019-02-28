/* global firebase */

//https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data 

//Declaring variables 
var selectList = document.getElementById("countrylist");
const div = document.querySelector('.main-list');

//When the dropdown of countries are selected hide all and then display only the combined by Location
selectList.onclick = function(){
    div.innerHTML = "";
    console.log(this.value);
    var x = this.value;
    var toReturnCombined = combined.filter(function(o){
        return o.post_location.toUpperCase() === x.toUpperCase();
    });
    console.log(toReturnCombined);
    toReturnCombined.forEach(function(o){
        console.log(o);
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p><b> " + o.post_date + "</b></p><p><b>Name: </b> " + o.post_name + "</p><p><b> Location: </b> " + o.post_location + "</p><p><b> Message: </b> " + o.post_message + "</p><div class='row'><div class='col-12 col-md-1'><p><b> Email: </b></p></div><div class='col-12 col-md-3'><p onClick='myFunction(this)'>" + o.post_email + "</p></div><div class='col-12 col-md-3'><button class='btn foode-btn btn-sm active'>Click email address to copy</button></div></div><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
    });
};

    //Copy email address text to clipboard
    function myFunction(e){
      var c=document.getElementById('inputEmail');
      c.value=e.textContent;
          c.select();
          try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'successfully' : 'unsuccessfully'
        alert(c.value + ' email copied!');
          }catch(err) {
        alert('Falied to copy.');
          }
    }

var combined = [];
//Skill1
var roofRef1 = firebase.database().ref().child("bakingskills");
    
    roofRef1.on("child_added", snap => {
        combined.push(snap.val());
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        var postdate = snap.child("post_date").val();

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
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p><b> " + o.post_date + "</b></p><p><b>Name: </b> " + o.post_name + "</p><p><b> Location: </b> " + o.post_location + "</p><p><b> Message: </b> " + o.post_message + "</p><div class='row'><div class='col-12 col-md-1'><p><b> Email: </b></p></div><div class='col-12 col-md-3'><p onClick='myFunction(this)'>" + o.post_email + "</p></div><div class='col-12 col-md-3'><button class='btn foode-btn btn-sm active'>Click email address to copy</button></div></div><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
    })

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


