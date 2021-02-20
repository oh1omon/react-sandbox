import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const [post, setPost] = useState();
  let { postID } = useParams();

  useEffect(() => {
    if (!post) {
      axios
        .get("http://localhost:3001/posts/" + postID)
        .then((res) => setPost(res.data));
    }
  });

  let postData = undefined;

  if (postID) {
    postData = <h1>Loading...</h1>;
  }

  if (post) {
    postData = (
      <div>
        {post.title} {post.author} {post.desc}
      </div>
    );
  }

  return postData;
};

export default SinglePost;
