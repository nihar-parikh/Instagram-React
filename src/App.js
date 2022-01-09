import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import database from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // useEffect(() => {
  //   const postCol = collection(database, "posts");
  //   console.log("postCol", postCol);
  //   const postSnapshot = getDocs(postCol);
  //   console.log("postSnapshot", postSnapshot);
  //   setPosts(postSnapshot.docs.map((doc) => doc.data()));
  // }, []);

  return (
    <div className="app">
      <div className="app__header">
        {/* <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="insta-logo"
        /> */}
        <h1>Instagram</h1>
      </div>
      <center>
        {posts.map((post) => (
          <Post
            username={post.username}
            usernameCaption={post.usernameCaption}
            userAvatar={post.userAvatar}
            post={post.post}
          />
        ))}
      </center>
    </div>
  );
}

export default App;
