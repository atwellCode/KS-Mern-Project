import React from "react";

function LowerHeader() {
  return (
    <header className="fixed bottom-0 left-0 w-full z-50 shadow-t-md">
      <nav className="flex justify-around items-center h-16 bg-gradient-to-r  from-gray-900 to-slate-700 text-white font-semibold">
        {/* Home */}
        <div className="flex flex-col items-center gap-1">
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <h4 className="text-sm">HOME</h4>
        </div>

        {/* Message */}
        <div className="flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12M2.25 11.5c0 1.6 1.123 3 2.707 3.227 1.129.166 2.27.293 3.423.379a1.14 1.14 0 0 1 .865.501L12 21l2.755-4.133c.18-.267.515-.444.865-.501 1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.627 2.707-3.228V7c0-1.602-1.123-3-2.707-3.227A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 4.746 2.25 6.14 2.25 7.741v3.759Z"
            />
          </svg>
          <h4 className="text-sm">MESSAGE</h4>
        </div>

        {/* Add Post */}
        <div className="flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h4 className="text-sm">ADD POST</h4>
        </div>

        {/* Search */}
        <div className="flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <h4 className="text-sm">SEARCH</h4>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 1.5c-2.67 0-8 1.34-8 4V19h16v-1.5c0-2.66-5.33-4-8-4Z"
            />
          </svg>
          <h4 className="text-sm ">PROFILE</h4>
        </div>
      </nav>
    </header>
  );
}

export default LowerHeader;
