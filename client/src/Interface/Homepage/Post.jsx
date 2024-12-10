import React, { useState } from "react";
import story from "../../assets/story.jpg";
import userImage from "../../assets/story.jpg"; // Replace with your user image path
// import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

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
    <div className="h-full w-full bg-slate-50 flex justify-center">
      <div className="h-auto w-full lg:w-1/2 md:w-1/2 bg-white shadow-md rounded-lg p-4">
        <div className="m-4"> 
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={userImage}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">User Name</h3>
              <p className="text-sm text-gray-500">@username</p>
            </div>
          </div>

          {/* Post Image */}
          <div className="mb-4">
            <img src={story} alt="Post" className="w-full h-auto rounded-lg" />
          </div>

          {/* Like and Dislike */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
              Dislike
            </button>
          </div>

          {/* Post Title and Caption */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">Post Title</h2>
            <p className="text-gray-600">
              Caption for the post. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque asperiores optio sit voluptate
              impedit quaerat iure laborum voluptatibus, repellendus voluptatem!
            </p>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <div className="mb-4">
              {comments.length > 0 ? (
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {comment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
              />
              <button
                onClick={handleAddComment}
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="m-4"> 
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={userImage}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">User Name</h3>
              <p className="text-sm text-gray-500">@username</p>
            </div>
          </div>

          {/* Post Image */}
          <div className="mb-4">
            <img src={story} alt="Post" className="w-full h-auto rounded-lg" />
          </div>

          {/* Like and Dislike */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
              Dislike
            </button>
          </div>

          {/* Post Title and Caption */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">Post Title</h2>
            <p className="text-gray-600">
              Caption for the post. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque asperiores optio sit voluptate
              impedit quaerat iure laborum voluptatibus, repellendus voluptatem!
            </p>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <div className="mb-4">
              {comments.length > 0 ? (
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {comment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
              />
              <button
                onClick={handleAddComment}
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="m-4"> 
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={userImage}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">User Name</h3>
              <p className="text-sm text-gray-500">@username</p>
            </div>
          </div>

          {/* Post Image */}
          <div className="mb-4">
            <img src={story} alt="Post" className="w-full h-auto rounded-lg" />
          </div>

          {/* Like and Dislike */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                />
              </svg>
              Dislike
            </button>
          </div>

          {/* Post Title and Caption */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">Post Title</h2>
            <p className="text-gray-600">
              Caption for the post. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque asperiores optio sit voluptate
              impedit quaerat iure laborum voluptatibus, repellendus voluptatem!
            </p>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <div className="mb-4">
              {comments.length > 0 ? (
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {comment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
              />
              <button
                onClick={handleAddComment}
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;