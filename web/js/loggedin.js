/* global firebase */

const auth = firebase.auth();
const accountDetails = document.querySelector('.account-details');
const loggedInLinks = document.querySelectorAll('.logged-in');

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
    const html = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    
  }
};
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.alert("You are logged out.");
});


