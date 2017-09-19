
$(document).ready(function() {

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


var app = document.querySelector('#app');

app.signIn = function() {
    var email = app.email;
    var password = app.password;

    if (!email || !password){
        return console.log('email and password required');
    }

    // Sign in user
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error){
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('signIn error', error);
        });
    };

app.register = function() {
    var email = app.email;
    var password = app.password;

      if (!email || !password) {
        return console.log('email and password required');
    }

    // Register User
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error){
            console.log('register error', error);
            if (error.code === 'auth/email-already-in-use') {
                var credential = firebase.auth.EmailAuthProvider.credential(email, password);

                app.signInWithGoogle()
                    .then(function(){
                        firebase.auth().currentUser.link(credential)
                            .then(function(user){
                                console.log("Account linking success", user);
                            }, function(error){
                                console.log("Account linking error", error);
                            });
                    });
            } 
        });
    };


    app.signInWithGoogle = function() {
        // Sign in with Google
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');

        return firebase.auth().signInWithPopup(provider)
            .catch(function(error){
                console.log('Google sign in error', error);
            });
    };

    app.signOut = function() {
        // Sign Out
        firebase.auth().signOut();
    };

    // Listen to auth state changes
    firebase.auth().onAuthStateChanged(function(user) {
        app.user = user;
        console.log('user', user);
    });


