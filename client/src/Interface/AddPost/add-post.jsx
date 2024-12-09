import React from "react";
import Header from "../Header/Header";
import LowerHeader from "../LowerHeader/LowerHeader";
function AddPost() {
  return (
    <>
      <Header />
      <LowerHeader />
      <div className="w-screen bg-blue-100 h-screen flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8  rounded-md shadow-lg">
          <h3 className="font-semibold text-2xl text-center">Add Post</h3>
          <form action="" className="space-y-4">
            <div>
              <label
                htmlFor="post-title"
                className="block text-sm  font-medium text-gray-700"
              >
                Add Title
              </label>
              <input
                type="text"
                name="post-title"
                id="post-title"
                placeholder="Greeting New Clients"
                className="w-full p-2 mb-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              />
              <label
                htmlFor="post-caption"
                className="block text-sm  font-medium text-gray-700"
              >
                Add Caption
              </label>
              <textarea
                id="caption"
                rows="4"
                class="w-full p-2 mb-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                placeholder="Write your thoughts here..."
              ></textarea>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="post-image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Add image
                </label>
                <div
                  className="flex items-center justify-center border-2 border-blue-400 w-full h-32 cursor-pointer relative rounded-md"
                  style={{ borderStyle: "dashed" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span className="absolute top-20 text-gray-700 text-sm">
                    Insert or drag the image
                  </span>
                  <input
                    type="file"
                    name="post-image"
                    id="post-image"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <button className="w-full border rounded-lg  py-3 bg-blue-500 hover:bg-blue-700 text-white">Upload Post</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddPost;
