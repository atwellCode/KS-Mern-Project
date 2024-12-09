import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-gray-700 via-gray-700 to-black flex justify-center items-center">
        <div className="p-8 w-full max-w-md bg-white rounded-md">
          <h3 className="text-2xl text-center font-semibold text-gray-800 mb-6">
            Sign Up
          </h3>
          <form className="space-y-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Deo"
                className="w-full border mb-2 border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="JohnDeo_1"
                className="w-full border mb-2 border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndeo@gmail.com"
                className="w-full border mb-2 border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full border mb-2 border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Conform Password
              </label>
              <input
                type="password"
                id="c-password"
                placeholder="********"
                className="w-full border mb-2 border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <p className="text-sm text-gray-600">
              Already have an account? {""}
              <span className="text-blue-600 hover:underline  cursor-pointer">
                Login
              </span>
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              onClick={()=>{
                alert('Hello World!')
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
