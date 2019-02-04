/* global firebase */

 const db = firebase.firestore();

function storeData() {
    var postName = document.getElementById('post_name').value;
    var postLocation = document.getElementById('post_location').value;
    var postMessage = document.getElementById('post_message').value;
    
    db.collection('gardeningskills').doc().set({
        name: postName,
        location: postLocation,
        message: postMessage
    })
            .then(function(){
                console.log("Document successfully written");
    })
            .catch(function(error){
                console.error("Error writing document: ", error);
    });
            window.alert("Post Uploaded");
            window.location.reload();
}
