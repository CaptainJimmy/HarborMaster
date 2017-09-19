// Google Auth

// Ready Document
$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDi2Zs7n8LyknyyVYiiYfVh3XoxHmzSoIo",
    authDomain: "harbormaster-180023.firebaseapp.com",
    databaseURL: "https://harbormaster-180023.firebaseio.com",
    projectId: "harbormaster-180023",
    storageBucket: "",
    messagingSenderId: "411348476711"
  };
  firebase.initializeApp(config);

  // declare variable for Firebase database
  var database = firebase.database();

  // Auth using a popup.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

    $(document).on('submit', '.signIn', function() {
      alert("I work");
      firebase.auth().signInWithPopup(provider).then(function(result) {
       // This gives you a Google Access Token.
       var token = result.credential.accessToken;
       // The signed-in user info.
       var user = result.user;
       $('.content').show();
       loggedIn();
       
      });
      $(this).removeClass('signIn')
        .addClass('signOut')
    });

    $(document).on('click', '.signOut', function () {
      firebase.auth().signOut().then(function() {
        $('.content').hide();
      }, function(error) {
        // An error happened.
      });
      $(this).removeClass('signOut')
        .addClass('signIn')
    });