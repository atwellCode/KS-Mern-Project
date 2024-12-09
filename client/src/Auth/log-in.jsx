import React from "react";

function Login() {
  return (
    <>
     <div className="h-screen w-full bg-gradient-to-r from-gray-700 via-gray-700 to-black flex justify-center items-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login Form</h3>
            <form className="space-y-2">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700" >
                        Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="johndeo@gmail.com"
                    className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none "
                    />
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700" >Password</label>
                    <input 
                    id="password"
                    type="password"
                    placeholder="********"
                    className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none "
                    />
                </div>
                <p className="text-sm text-gray-600">
                    Don't have an account? {""}
                    <span className="text-blue-600 hover:underline cursor-pointer">
                        Create Account
                    </span>
                </p>
                <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                    Login
                </button>
            </form>
        </div>
     </div>
    </>
  );
}

export default Login;
