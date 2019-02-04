/* global auth */

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    setupUI(user);
  } else {
    console.log('user logged out');
    setupUI();
  }
});

const profileEmail = document.querySelector('.profile-email');
const profileID = document.querySelector('.profile-id');
const profileBio = document.querySelector('.profile-bio');
const profileAddress = document.querySelector('.profile-address');
const profileCountry = document.querySelector('.profile-country');
const profileName = document.querySelector('.profile-name');
const profileSkill = document.querySelector('.profile-skill');

const setupUI = (user) => {
  if (user) {
    // account info
    const email = `
      <div>${user.email}</div>
    `;
    profileEmail.innerHTML = email;
    
    const uid = `
      <div>${user.uid}</div>
    `;
    profileID.innerHTML = uid;
    
    db.collection('users').doc(user.uid).get().then(doc => {
      const bio = `
      <div>${doc.data().bio}</div>
    `;
    profileBio.innerHTML = bio;
    });
    
    db.collection('users').doc(user.uid).get().then(doc => {
      const address = `
      <div>${doc.data().address}</div>
    `;
    profileAddress.innerHTML = address;
    });
    
    db.collection('users').doc(user.uid).get().then(doc => {
      const country = `
      <div>${doc.data().country}</div>
    `;
    profileCountry.innerHTML = country;
    });
    
    db.collection('users').doc(user.uid).get().then(doc => {
      const name = `
      <div>${doc.data().name}</div>
    `;
    profileName.innerHTML = name;
    });
    
    db.collection('users').doc(user.uid).get().then(doc => {
      const skill = `
      <div>${doc.data().skill}</div>
    `;
    profileSkill.innerHTML = skill;
    });
  
  } else {
    // clear account info
    profileEmail.innerHTML = '';
    profileID.innerHTML = '';
    profileBio.innerHTML = '';
    profileAddress.innerHTML = '';
    profileCountry.innerHTML = '';
    profileName.innerHTML = '';
    profileSkill.innerHTML = '';
  }
};
