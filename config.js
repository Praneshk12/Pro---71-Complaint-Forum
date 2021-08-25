import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
      apiKey: "AIzaSyD0plyhhNLZL-qu2JqzWJMot-aWzVk3fGY",
      authDomain: "complaint-forum-d5905.firebaseapp.com",
      projectId: "complaint-forum-d5905",
      storageBucket: "complaint-forum-d5905.appspot.com",
      messagingSenderId: "637469332392",
      appId: "1:637469332392:web:8e44a91a181364f76e039d"
    };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

