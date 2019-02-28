   
   //function for button for saving posts to the database
  function save_post(){
   var post_message = document.getElementById('post_message').value;
   var post_location = document.getElementById('post_location').value; 
   var post_name = document.getElementById('post_name').value;
   var post_email = document.getElementById('post_email').value;
  const postSkillForm = document.querySelector('#postSkill-form');
  var currentTime = new Date();
  
   var uid = firebase.database().ref().child('drivingskills').push().key;
   
   var data = {
    user_id: uid,
    post_name: post_name,
    post_location: post_location,
    post_message: post_message,
    post_email: post_email,
    post_date: currentTime
   };
   
   var updates = {};
   updates['/drivingskills/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('The post is created successfully!');
   reload_page();
   postSkillForm.reset();
  }
  
  function reload_page(){
   window.location.reload();
  }
  
  //Writing posts back from the database using innerHTML
var roofRef = firebase.database().ref().child("drivingskills");
    
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

