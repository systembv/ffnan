import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



let firebaseConfig = {
    apiKey: "AIzaSyCvP1xQbtqbaKcj7EA1xonIKm99IqqN-kQ",
    authDomain: "finan-a3b85.firebaseapp.com",
    projectId: "finan-a3b85",
    storageBucket: "finan-a3b85.appspot.com",
    messagingSenderId: "801860521948",
    appId: "1:801860521948:web:45b7603d066a42e78f0919"
  };
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default firebase;
