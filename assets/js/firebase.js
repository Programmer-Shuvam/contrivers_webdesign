(function(){const firebaseConfig = {
    apiKey: "AIzaSyAxRCFcOEBEp0IwbiNkpabK9UjrAiYGb4Q",
    authDomain: "contriversdev.firebaseapp.com",
    projectId: "contriversdev",
    storageBucket: "contriversdev.appspot.com",
    messagingSenderId: "1019807225038",
    appId: "1:1019807225038:web:27e3161c49b943b2abac9f",
    measurementId: "G-S162K48CSL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.getToken({vapidKey: "BFhXwPMVMteu5xUfAFcdzjHM_6tifrDY4Jox07IR9ZZDqALX_N-xPGZACLFxC1KpI3s9w7JGHAgGdCWNdAkPqHY"})
.then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

})() 