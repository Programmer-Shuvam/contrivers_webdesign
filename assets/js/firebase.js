firebase.initializeApp({
  apiKey: "AIzaSyAxRCFcOEBEp0IwbiNkpabK9UjrAiYGb4Q",
  authDomain: "contriversdev.firebaseapp.com",
  projectId: "contriversdev",
  storageBucket: "contriversdev.appspot.com",
  messagingSenderId: "1019807225038",
  appId: "1:1019807225038:web:27e3161c49b943b2abac9f",
  measurementId: "G-S162K48CSL"
});
const messaging = firebase.messaging();
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});

invokemessages = () => {
  event.preventDefault()
  let newSubscriber = new secMessages();
  newSubscriber.applyfornotification();
}



class secMessages {
  constructor(name,email){
    this.name = $("#mce-FNAME").val();
    this.email = $("#mce-EMAIL").val();
    this.token = null;
  }

  applyfornotification(){
      event.preventDefault()
      messaging.getToken({vapidKey: "BFhXwPMVMteu5xUfAFcdzjHM_6tifrDY4Jox07IR9ZZDqALX_N-xPGZACLFxC1KpI3s9w7JGHAgGdCWNdAkPqHY"})
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          this.token = currentToken;
          this.userMessageIdtoFirebase();
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    };

  userMessageIdtoFirebase(){
    var db = firebase.firestore();
    db.settings({timestampsInSnapshots:true})
    db.collection("notification").add({
      name : this.name,
      email : this.email,
      token : this.token,
      showhim: true
  }).then(() => {
          console.log("Successfully Added notification.");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

  }  
};