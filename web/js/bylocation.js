
function Searchcounty() {
    var location = document.getElementById('list-item:Location').value;
    var country;
    
    if(location = Cork) {
        //display cork only
    }
    else if (location = Kerry){
        //display kerry only
    }
    else if (location = Dublin) {
        //display dublin only etc..
    }
    else {
        //display all
    }
}

//Skill3
var roofRef3 = firebase.database().ref().child("diyskills");
    
    roofRef3.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><button id='like' onclick='like();'>Like</button></div></div>");
    });

//Skill4
var roofRef4 = firebase.database().ref().child("hardwaresoftwareskills");
    
    roofRef4.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><button id='like' onclick='like();'>Like</button></div></div>");
    });
    
//Skill5
var roofRef5 = firebase.database().ref().child("musicskills");
    
    roofRef5.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><button id='like' onclick='like();'>Like</button></div></div>");
    });
    
//Skill6
var roofRef6 = firebase.database().ref().child("drivingskills");
    
    roofRef6.on("child_added", snap => {
        
        var name = snap.child("post_name").val();
        var location = snap.child("post_location").val();
        var message = snap.child("post_message").val();
        
        $(table_body).append("<div class='contact-content-area'><div class='list-item'><p>Name: " + name + "</p><p> Location: " + location + "</p><p> Message: " + message + "</p><a href='messenger.html' class='btn foode-btn btn-sm'>Reply</a><button id='like' onclick='like();'>Like</button></div></div>");
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

