var tblPosts = document.getElementById('tbl_posts_list');
  var databaseRef = firebase.database().ref('musicskills/');
  var rowIndex = 1;
  
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   
   var row = tblPosts.insertRow(rowIndex);
   var cellId = row.insertCell(0);
   var cellName = row.insertCell(1);
   var cellEmail = row.insertCell(2);
   var cellMessage = row.insertCell(3);
   var cellLocation = row.insertCell(4);
   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.post_name));
   cellEmail.appendChild(document.createTextNode(childData.post_location));
   cellMessage.appendChild(document.createTextNode(childData.post_message));
   cellLocation.appendChild(document.createTextNode(childData.post_email));
   
   rowIndex = rowIndex + 1;
    });
  });
   
   //function for button for saving posts to the database
  function save_post(){
   var post_message = document.getElementById('post_message').value;
   var post_location = document.getElementById('post_location').value; 
   var post_name = document.getElementById('post_name').value;
   var post_email = document.getElementById('post_email').value;
   const postSkillForm = document.querySelector('#postSkill-form');
  
   var uid = firebase.database().ref().child('musicskills').push().key;
   
   var data = {
    user_id: uid,
    post_name: post_name,
    post_location: post_location,
    post_message: post_message,
    post_email: post_email
   };
   
   var updates = {};
   updates['/musicskills/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('The post is created successfully!');
   reload_page();
   postSkillForm.reset();
  }
  
  function update_user(){
   var user_name = document.getElementById('user_name').value;
   var user_id = document.getElementById('user_id').value;

   var data = {
    user_id: user_id,
    user_name: user_name
   }
   
   var updates = {};
   updates['/users/' + user_id] = data;
   firebase.database().ref().update(updates);
   
   alert('The user is updated successfully!');
   
   reload_page();
  }
  
  function delete_user(){
   var user_id = document.getElementById('user_id').value;
  
   firebase.database().ref().child('/users/' + user_id).remove();
   alert('The user is deleted successfully!');
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }
  
  //Writing posts back from the database using innerHTML
var roofRef = firebase.database().ref().child("musicskills");
    
    roofRef.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        var email = snap.child("post_email").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
        
        $(inputEmail).append(email); 
    });
    

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

