   
   //function for button for saving posts to the database
  function save_post(){
   var post_message = document.getElementById('post_message').value;
   var post_location = document.getElementById('post_location').value; 
   var post_name = document.getElementById('post_name').value;
   var post_email = document.getElementById('post_email').value;
   const postSkillForm = document.querySelector('#postSkill-form');
   var currentTime = new Date();
  
   var uid = firebase.database().ref().child('musicskills').push().key;
   
   var data = {
    user_id: uid,
    post_name: post_name,
    post_location: post_location,
    post_message: post_message,
    post_email: post_email,
    post_date: currentTime
   };
   
   if (post_name === ""){
       window.alert("Please fill out the name field");
   } else if(post_location === "") {
       window.alert("Please fill out the location field");
   } else if (post_email === ""){
       window.alert("Please fill out the email field");
   } else if (post_message === "") {
       window.alert("Please fill out the message field");
   } else {
       var updates = {};
   updates['/cleaningskills/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('The post is created successfully!');
   reload_page();
   postSkillForm.reset();
   }
  }
  
  function reload_page(){
   window.location.reload();
  }
  
  //send email to address given using external port and ajax request
  function sendEmail() {
    var toEmail = document.getElementById("inputEmail").value;
    var subject = document.getElementById("inputsubject").value;
    var text = document.getElementById("inputMessage").value;
    console.log(toEmail, subject, text, "email");
      
    if (toEmail === ""){
        window.alert("Please fill out the toEmail field");
    } else if (subject === ""){
        window.alert("Please fill out the subject field");
    } else if ( text === ""){
        window.alert("Please fill out the message field");
    } else {
        console.log(toEmail, subject, text, "email");
      
      var data = {
            "toEmail": toEmail,
            "subject": subject,
            "text": text
      };
      console.log('just data', data);
      console.log('strigified', JSON.stringify(data));
       $.ajax({
        url: 'http://localhost:4000/api/v1/sendemail',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json'
        
      });
      window.alert("Email Sent!");    
    }
  }
  
  //Writing posts back from the database using innerHTML
var roofRef = firebase.database().ref().child("musicskills");
    
    roofRef.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        var postdate = snap.child("post_date").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p><b> " + postdate + "</b></p><p><b>Name: </b> " + name + "</p><p><b> Location: </b> " + location + "</p><p><b> Message: </b> " + message + "</p><div class='row'><div class='col-12 col-md-1'><p><b> Email: </b></p></div><div class='col-12 col-md-3'><p onClick='myFunction(this)'>" + email + "</p></div><div class='col-12 col-md-3'><button class='btn foode-btn btn-sm active'>Click email address to copy</button></div></div><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
   
    });
    
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
    

//function for sending emails 
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

