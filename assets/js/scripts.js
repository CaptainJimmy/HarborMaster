
$(document).ready(function() {


function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').app = false;
          // [END_EXCLUDE]
        }).then(function(){
            location.replace("https://captainjimmy.github.io/HarborMaster/captain.html");
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }

    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      }).then(function() {
        alert("Success! Please Login")
      });
      // [END createwithemail]
    }

    function signInWithGoogle() {
    if (!firebase.auth().currentUser) {
        // [START createprovider]
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          
        }).then(function(){
            location.replace("https://captainjimmy.github.io/HarborMaster/captain.html");
        });
        // [END signin]
      } else {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      }
      
    }

    function signOut(){
        firebase.auth().signOut().then(function(){
            location.replace("https://captainjimmy.github.io/HarborMaster/index.html");
        });
    }

    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var photoURL = user.photoURL;
          // var uid = user.uid;
          var providerData = user.providerData;
            }
      });
      // [END authstatelistener]

      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-in-with-google').addEventListener('click', signInWithGoogle, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
      document.getElementById('signout').addEventListener('click', signOut, true);
    }

    window.onload = function() {
      initApp();
    };

});


// var app = document.querySelector('#app');

// app.signIn = function() {
//     var email = app.email;
//     var password = app.password;

//     if (!email || !password){
//         return console.log('email and password required');
//     }

//     // Sign in user
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .catch(function(error){
//             // Handle errors here
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log('signIn error', error);
//         });
//     };

// app.register = function() {
//     var email = app.email;
//     var password = app.password;

//       if (!email || !password) {
//         return console.log('email and password required');
//     }

//     // Register User
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .catch(function(error){
//             console.log('register error', error);
//             if (error.code === 'auth/email-already-in-use') {
//                 var credential = firebase.auth.EmailAuthProvider.credential(email, password);

//                 app.signInWithGoogle()
//                     .then(function(){
//                         firebase.auth().currentUser.link(credential)
//                             .then(function(user){
//                                 console.log("Account linking success", user);
//                             }, function(error){
//                                 console.log("Account linking error", error);
//                             });
//                     });
//             } 
//         });
//     };


//     app.signInWithGoogle = function() {
//         // Sign in with Google
//         var provider = new firebase.auth.GoogleAuthProvider();
//         provider.addScope('profile');
//         provider.addScope('email');

//         return firebase.auth().signInWithPopup(provider)
//             .catch(function(error){
//                 console.log('Google sign in error', error);
//             });
//     };

//     app.signOut = function() {
//         // Sign Out
//         firebase.auth().signOut();
//     };

//     // Listen to auth state changes
//     firebase.auth().onAuthStateChanged(function(user) {
//         app.user = user;
//         console.log('user', user);
//     });