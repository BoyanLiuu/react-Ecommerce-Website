    
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBm4XNtOspyyrp3HtJzWosMKNNDWpwLlNM",
    authDomain: "react-ecommerce-website-88c83.firebaseapp.com",
    databaseURL: "https://react-ecommerce-website-88c83.firebaseio.com",
    projectId: "react-ecommerce-website-88c83",
    storageBucket: "react-ecommerce-website-88c83.appspot.com",
    messagingSenderId: "182783150839",
    appId: "1:182783150839:web:d175b5954fdbb14d2021f2",
    measurementId: "G-EXM0FVSTW7"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`Users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    //check if we have this user or not
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
          //store data into database
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;