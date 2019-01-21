
  var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('users/');
  var rowIndex = 1;
  
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   
   var row = tblUsers.insertRow(rowIndex);
   var cellId = row.insertCell(0);
   var cellName = row.insertCell(1);
   var cellEmail = row.insertCell(2);
   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.user_name));
   cellEmail.appendChild(document.createTextNode(childData.user_email));
   
   rowIndex = rowIndex + 1;
    });
  });
   
  function save_user(){
   var user_other = document.getElementById('user_other').value;
   var user_skill = document.getElementById('user_skill').value;
   var user_country = document.getElementById('user_country').value;
   var user_county = document.getElementById('user_county').value;
   var user_address2 = document.getElementById('user_address2').value;
   var user_address1 = document.getElementById('user_address1').value;
   var user_password = document.getElementById('user_password').value;   
   var user_email = document.getElementById('user_email').value;
   var user_name = document.getElementById('user_name').value;
   
  
   var uid = firebase.database().ref().child('users').push().key;
   
   var data = {
    user_id: uid,
    user_name: user_name,
    user_email: user_email,
    user_password: user_password,
    user_address1: user_address1,
    user_address2: user_address2,
    user_county: user_county,
    user_country: user_country,
    user_skill: user_skill,
    user_other: user_other
   };
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('The user is created successfully!');
   reload_page();
  }
  

  