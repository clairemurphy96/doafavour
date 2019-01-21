/* global db */

//const accountDetails = document.querySelector('.account-details');

//const setupUI = (user) => {
//  if (user) {
    // account info
//    db.collection('users').doc(user.uid).get().then(doc => {
//      const html = `
//        <div>Logged in as ${user.email}</div>
//        <div>${doc.data().bio}</div>
//      `;
//      accountDetails.innerHTML = html;
//    });
//  }
//};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

  
  
