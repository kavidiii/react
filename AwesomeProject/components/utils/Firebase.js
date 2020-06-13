import firebase from 'react-native-firebase'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Firebase = {
  uploadPost: post => {
    console.log(post)
    console.log(post.photo)
    console.log(post.title)
    return firebase.firestore().collection('posts').add({postPhoto:post.photo,postTitle:post.title}) 
    
    // this.ref.set({postPhoto:this.post.photo,
    //   postTitle:this.post.title}) 
      }}
//     var newobj={
//       uid_to:'K365J32fddel3QTxGG94VksXtQP2',
//       monto:23,
//       fecha:new Date(),
//       user:{
//           from_name:"fabri"
//       },
//       status:'pending'
//   }
//    return firebase.firestore().collection('transacciones').doc('RqVngIRyiJV2XTogLSONZIqoe5h1').set('K365J32fddel3QTxGG94VksXtQP2',23);
//   }
// }
//   },
//   getPosts: () => {
//     return firebase
//       .firestore()
//       .collection('posts')
//       .get()
//       .then(function(querySnapshot) {
//         let posts = querySnapshot.docs.map(doc => doc.data())
//         // console.log(posts)
//         return posts
//       })
//       .catch(function(error) {
//         console.log('Error getting documents: ', error)
//       })
//   }
// }

export default Firebase