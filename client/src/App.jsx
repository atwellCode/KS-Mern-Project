// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import LoginPage from "./pages/auth/login/LoginPage";
import Sidebar from "./components/common/Slidebar";
import RightPanel from "./components/common/RightPanel";

function App() {
  return (
    <BrowserRouter>
      <div className="flex max-w-6xl mx-auto">
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <RightPanel/>
      </div>
    </BrowserRouter>
  );
}

export default App;
