import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post({ username, usernameCaption, userAvatar, post }) {
  return (
    <div className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar className="post__avatar" src={userAvatar} alt={username} />
        <h2>{username}</h2>
      </div>

      {/* image */}
      <img className="post__image" src={post} alt="" />

      {/* username + caption */}
      <h3 className="post__text">
        <strong>{username}</strong>: {usernameCaption}
      </h3>
    </div>
  );
}

export default Post;
