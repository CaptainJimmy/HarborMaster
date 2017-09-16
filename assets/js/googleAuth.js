// Google Auth

// Ready Document
$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2IqtC1ckzWzD4vR9ucDFsxwMYWa7PYXI",
    authDomain: "harbormaster-da7e3.firebaseapp.com",
    databaseURL: "https://harbormaster-da7e3.firebaseio.com",
    projectId: "harbormaster-da7e3",
    storageBucket: "harbormaster-da7e3.appspot.com",
    messagingSenderId: "940441283597"
  };
  firebase.initializeApp(config);

  // declare variable for Firebase database
  var database = firebase.database();

  // 
  $('.content').hide();

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