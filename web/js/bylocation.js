//https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data 
//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

/* global firebase */

var selectList = document.getElementById("countrylist");    //declaring variables & constants
const div = document.querySelector('.main-list');

//Country dropdown list - hide all, and show post of only selected country name 
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

//Copy email address text to clipboard and paste onto toEmail field in email modal
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

//Combining all the skill pages into one using an array
var combined = [];

//Skill1
var roofRef1 = firebase.database().ref().child("bakingskills");
    roofRef1.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill2
var roofRef2 = firebase.database().ref().child("gardeningskills");
    roofRef2.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill3
var roofRef3 = firebase.database().ref().child("diyskills");
    roofRef3.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill4
var roofRef4 = firebase.database().ref().child("hardwaresoftwareskills");
    roofRef4.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill5
var roofRef5 = firebase.database().ref().child("musicskills");
    roofRef5.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill6
var roofRef6 = firebase.database().ref().child("drivingskills");
    roofRef6.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill7
var roofRef7 = firebase.database().ref().child("babysittingskills");
    roofRef7.on("child_added", snap => {
        combined.push(snap.val());
    });

//Skill8
var roofRef8 = firebase.database().ref().child("cleaningskills");
    roofRef8.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill9
var roofRef9 = firebase.database().ref().child("photographyskills");
    roofRef9.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill10
var roofRef10 = firebase.database().ref().child("programmingskills");
    roofRef10.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill11
var roofRef11 = firebase.database().ref().child("languagesskills");
    roofRef11.on("child_added", snap => {
        combined.push(snap.val());
    });
    
//Skill12
var roofRef12 = firebase.database().ref().child("otherskills");
    roofRef12.on("child_added", snap => {
        combined.push(snap.val());
        
        var returnnewtoold = combined.sort(function(a,b){           //returning newest to oldest date
           var keyA = new Date(a.post_date),
               keyB = new Date(b.post_date);
            // Compare the 2 dates
            if(keyA < keyB) return 1;
            if(keyA > keyB) return -1;
            return 0;
       });
    console.log(returnnewtoold, "returnnewtoold");    
    console.log(combined);
    //displaying contents of the array into the div class 'table_body'
    returnnewtoold.forEach(function(o){
    console.log(o);
    $(table_body).append("<div class='contact-content-area'><div class='list-item'><p><b> " + o.post_date + "</b></p><p><b>Name: </b> " + o.post_name + "</p><p><b> Location: </b> " + o.post_location + "</p><p><b> Message: </b> " + o.post_message + "</p><div class='row'><div class='col-12 col-md-1'><p><b> Email: </b></p></div><div class='col-12 col-md-3'><p onClick='myFunction(this)'>" + o.post_email + "</p></div><div class='col-12 col-md-3'><button class='btn foode-btn btn-sm active'>Click email address to copy</button></div></div><button type='button' class='btn foode-btn' data-toggle='modal' data-target='#myModal'>Reply & Help and earn some tokens..</button></div></div>");
    });

    });
    
//send email to address given using external port and ajax request
  function sendEmail() {
    var toEmail = document.getElementById("inputEmail").value;
    var subject = document.getElementById("inputsubject").value;
    var text = document.getElementById("inputMessage").value;
    
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


