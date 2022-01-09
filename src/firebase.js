// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA-TLtRga6kVijq81aWktDUsClUdVacRRA",
  authDomain: "instagram-clone-react-9b9cd.firebaseapp.com",
  projectId: "instagram-clone-react-9b9cd",
  storageBucket: "instagram-clone-react-9b9cd.appspot.com",
  messagingSenderId: "641122484616",
  appId: "1:641122484616:web:3cbba9807beec36cf77a3d",
  measurementId: "G-378XCWXZBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

// async function getPosts(database) {
//   const postsCol = collection(database, "posts");
//   const postSnapshot = await getDocs(postsCol);
//   const postList = postSnapshot.docs.map((doc) => doc.data());
//   return postList;
// }

// getPosts();
export default database;
