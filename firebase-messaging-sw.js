// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: "AIzaSyAxRCFcOEBEp0IwbiNkpabK9UjrAiYGb4Q",
	authDomain: "contriversdev.firebaseapp.com",
	projectId: "contriversdev",
	storageBucket: "contriversdev.appspot.com",
	messagingSenderId: "1019807225038",
	appId: "1:1019807225038:web:27e3161c49b943b2abac9f",
	measurementId: "G-S162K48CSL"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// curl -X POST -H "Authorization: key=AAAA7XE_VM4:APA91bHJoem0aLxpOwXIIB7e4Jiq7L-5Ppbg2ueI5u_XdsOD4TksbfJ_g-lR_aDxbCEa9sQ2ckC9HI9a8Gmui6tvybRsM7zpV_jhamh5vm70096VjsPKlZMccL-0zF5IOcn2QwAttLmU" -H "Content-Type: application/json" -d "{\"to\": \"e9BoPcTXtdJin0j0-esGJW:APA91bESy9aQbHAwazPbbw3NM-sXBwfHIXuJnWRN3W3ZgfaGORkt-QDm298xBhQUmJ5EIz9GPZwbUOM1_iY9Iw5XgVlJteacuJ5D0ngDGvk0T3nTzJJVh2FM_L-msV4MkEE4dZD0i0v5\", \"notification\": { \"title\": \"Hello\", \"body\": \"World\", \"icon\": \"https://images.pexels.com/photos/2496157/pexels-photo-2496157.jpeg\", \"click_action\":  \"action.open.pexels.with.url\"},\"webpush\" : {\"fcm_options\" : \"https://images.pexels.com/photos/2496157/pexels-photo-2496157.jpeg\"}}" "https://fcm.googleapis.com/fcm/send"