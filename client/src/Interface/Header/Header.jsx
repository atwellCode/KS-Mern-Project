import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center h-16 bg-gradient-to-r from-slate-700 to-gray-900 px-6 md:px-16">
        <div className="text-white text-xl font-bold">
          LOGO
        </div>

   
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
          Log In
        </button>
      </nav>
    </header>
  );
}

export default Header;
