// var firebase = require('react-native-firebase');
// import firebaseConfig from '../android/app/google-services.json';
 
// firebase.default.initializeApp(firebaseConfig);
// let firestore= firebase.firestore();
// export default firebase;
var firebase = require('react-native-firebase');
const config={
    "project_info": {
      "project_number": "95886158164",
      "firebase_url": "https://mobilegit-71188.firebaseio.com",
      "project_id": "mobilegit-71188",
      "storage_bucket": "mobilegit-71188.appspot.com"
    },
    "client": [
      {
        "client_info": {
          "mobilesdk_app_id": "1:95886158164:android:83b6b1d35b29b6e45100c1",
          "android_client_info": {
            "package_name": "com.awesomeproject"
          }
        },
        "oauth_client": [
          {
            "client_id": "95886158164-h98odfffco2r701rcqd0grvbfr6dpret.apps.googleusercontent.com",
            "client_type": 3
          }
        ],
        "api_key": [
          {
            "current_key": "AIzaSyC6Zz2LXWnIqImvnQJK3WyxxfGk4ZnJS9c"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": [
              {
                "client_id": "95886158164-h98odfffco2r701rcqd0grvbfr6dpret.apps.googleusercontent.com",
                "client_type": 3
              }
            ]
          }
        }
      }
    ],
    "configuration_version": "1"
  }
  firebase.default.initializeApp(config); 
  export default firebase; 