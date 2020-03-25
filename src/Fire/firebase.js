const config = {
    apiKey: 'AIzaSyBXlNhZCI0nTuzY6rJZ-JcEpsw6A5g-n_8',
    authDomain: 'brand-s-burgers.firebaseapp.com',
    databaseURL: 'https://brand-s-burgers.firebaseio.com',
    projectId: 'brand-s-burgers',
    // storageBucket: 'awesome-bb71b.appspot.com',
    messagingSenderId: '646496200074',
  }
  
  let firebaseCache
  
  export const getUiConfig = firebase => ({
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  })
  
  const getFirebase = firebase => {
    if (firebaseCache) {
      return firebaseCache
    }
  
    firebase.initializeApp(config)
    firebaseCache = firebase
    return firebase
  }
  
  export default getFirebase
  