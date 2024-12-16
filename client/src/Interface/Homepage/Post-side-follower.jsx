import React from "react";
import story from "../../assets/story.jpg";

function PostSideFollower() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg ">
      {/* Follower List */}
      {[...Array(21)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 mb-1 bg-white rounded-md shadow hover:shadow-lg transition duration-200 last:mb-0"
        >
          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={story}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
            />
            <div>
              <p className="text-base font-medium text-gray-800">
                Follower Name
              </p>
              <p className="text-sm text-gray-500">@username</p>
            </div>
          </div>

          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostSideFollower;
