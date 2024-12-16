/* eslint-disable no-unused-vars */
 
import React, { useState } from "react";
import PostSideFollower from "./Post-side-follower";
import story from "../../assets/story.jpg";

function Post() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      <div className="h-full w-full bg-pink-200 flex flex-col sm:flex-row justify-center gap-3 p-4">
        <div className="h-full w-full sm:w-2/3 bg-slate-500">
          this is post side
        </div>
        <div className="h-full w-full sm:w-1/3">
          <PostSideFollower/>
        </div>
      </div>
    </>
  );
  
}

export default Post;
