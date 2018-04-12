

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2Y1M1nveiUvDZ3qhcL8lvAOTkyER_zlM",
  authDomain: "userauthentication-d9c13.firebaseapp.com",
  databaseURL: "https://userauthentication-d9c13.firebaseio.com",
  projectId: "userauthentication-d9c13",
  storageBucket: "userauthentication-d9c13.appspot.com",
  messagingSenderId: "341465402406"
};
firebase.initializeApp(config);


//Global variables
var user = {
  Name: "",
  Email: "",
  Image: ""
}

var userName = "";
var userEmail = "";
var userImage = "";



/************* Authentication ****************/

  var gProvider = new firebase.auth.GoogleAuthProvider();

  var fProvider = new firebase.auth.FacebookAuthProvider();

  //Start Google Code Here
  firebase.auth().signInWithPopup(gProvider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    userName = user.displayName;
    showUserName(userName);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  //Get profile info
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present. 
  }
  //End of Google Code 

  //Start Facebook Code Here
  firebase.auth().signInWithPopup(fProvider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    
    userName = user.displayName;
    showUserName(userName);

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  //End of Facebook Code

  
  function showUserName(userName) {
    $(".showUserName").html("Hi " + userName);
  }







  //SignOut ++++NOT WORKING YET++++
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

/************** End of Google Authencation ****************/