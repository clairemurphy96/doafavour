/* global firebase */

const auth = firebase.auth();                                           //declaring constants 
const accountDetails = document.querySelector('.account-details');
const loggedInLinks = document.querySelectorAll('.logged-in');
const userID = document.querySelector('.userID');

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    loggedin(user);
  } else {
    console.log('user logged out');
    loggedin();
  }
});


const loggedin = (user) => {
  if (user) {
    // email info
    const email = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = email;
    
    // uid of user logged in
    const uid = `
      <div>${user.uid}</div>
    `;
    userID.innerHTML = uid;
    
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    userID.innerHTML = '';
    
  }
};

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.alert("You are logged out.");
});


