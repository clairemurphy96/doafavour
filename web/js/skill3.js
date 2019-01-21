var tblPosts = document.getElementById('tbl_posts_list');
  var databaseRef = firebase.database().ref('diyskills/');
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
   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.post_name));
   cellEmail.appendChild(document.createTextNode(childData.post_location));
   cellMessage.appendChild(document.createTextNode(childData.post_message));
   
   rowIndex = rowIndex + 1;
    });
  });
   
  function save_post(){
   var post_message = document.getElementById('post_message').value;
   var post_location = document.getElementById('post_location').value; 
   var post_name = document.getElementById('post_name').value;
  
   var uid = firebase.database().ref().child('diyskills').push().key;
   
   var data = {
    user_id: uid,
    post_name: post_name,
    post_location: post_location,
    post_message: post_message
   }
   
   var updates = {};
   updates['/diyskills/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('The post is created successfully!');
   reload_page();
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
  
var roofRef = firebase.database().ref().child("diyskills");
    
    roofRef.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><button id='like' onclick='like();'>Like</button></div></div>");
    });
    
function like(){
        var likes = 1;
        document.getElementById("like").innerHTML=likes;
        likes=likes+1;
                }



