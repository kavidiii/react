var firebase = require('react-native-firebase');
import firebaseConfig from '../android/app/google-services.json';
 
firebase.default.initializeApp(firebaseConfig);
export default firebase;