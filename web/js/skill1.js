/* global firebase */
const db = firebase.firestore();

function save_post() {
    
    var postName = document.getElementById('post_name').value;
    var postLocation = document.getElementById('post_location').value;
    var postMessage = document.getElementById('post_message').value;
    var postEmail = document.getElementById('post_email').value;
    
    db.collection('bakingskills').doc().set({
        name: postName,
        location: postLocation,
        message: postMessage,
        email: postEmail
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

const postlist = document.querySelector('#table_body');

db.collection('bakingskills').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
     
     postlist.innerHTML = "<div class='contact-content-area'><div class='list-item'><p>Name: " + doc.data().name + 
             "</p><p>Location: " + doc.data().location + "</p><p> Message: " + doc.data().message + 
             "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><a class='btn like-btn'>Like</a>\n\
                <p type='text' id='like'></p></div></div>";
     
    });
}); 

