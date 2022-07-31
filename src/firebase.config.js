import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDqKkOpoxCsc1-e1Fjq6bbYupYZNLHw86E",
    authDomain: "restaurants-app-5d051.firebaseapp.com",
    databaseURL: "https://restaurants-app-5d051-default-rtdb.firebaseio.com",
    projectId: "restaurants-app-5d051",
    storageBucket: "restaurants-app-5d051.appspot.com",
    messagingSenderId: "164532353381",
    appId: "1:164532353381:web:d5315d3151f05c35b9098c"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
  