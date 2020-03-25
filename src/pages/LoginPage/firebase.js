// const config = {
//     apiKey: 'AIzaSyBXlNhZCI0nTuzY6rJZ-JcEpsw6A5g-n_8',
//     authDomain: 'brand-s-burgers.firebaseapp.com',
//     databaseURL: 'https://brand-s-burgers.firebaseio.com',
//     projectId: 'brand-s-burgers',
//     // storageBucket: 'awesome-bb71b.appspot.com',
//     // messagingSenderId: '646496200074',
//   }
  
//   let firebaseCache
  
//   export const getUiConfig = firebase => ({
//     signInFlow: 'popup',
//     signInOptions: [
//       // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//   })
  
//   const getFirebase = firebase => {
//     if (firebaseCache) {
//       return firebaseCache
//     }
  
//     firebase.initializeApp(config)
//     firebaseCache = firebase
//     return firebase
//   }
  
//   export default getFirebase
  
import firebase from 'firebase';
// Initialize Firebase
var config = {

    // apiKey: 'AIzaSyBXlNhZCI0nTuzY6rJZ-JcEpsw6A5g-n_8',
    // authDomain: 'brand-s-burgers.firebaseapp.com',
    // databaseURL: 'https://brand-s-burgers.firebaseio.com',
    // projectId: 'brand-s-burgers',
    apiKey: "AIzaSyBXlNhZCI0nTuzY6rJZ-JcEpsw6A5g-n_8",
    authDomain: "brand-s-burgers.firebaseapp.com",
    databaseURL: "https://brand-s-burgers.firebaseio.com",
    projectId: "brand-s-burgers",
    // storageBucket: "",
    // messagingSenderId: ""
};

export const fire = firebase.initializeApp(config);
export const auth = fire.auth();

//sign up
export const createEmailPassword = (email, password) => {
   return auth.createUserWithEmailAndPassword(email, password);
}

//sign in
export const signIn = (email, password) => {
   return auth.signInWithEmailAndPassword(email, password);
}

//sign out
export const signOut = () => {
    return auth.signOut();
}

//password reset
export const passwordUpdate = (email) => {
    return auth.sendPasswordResetEmail(email);
}