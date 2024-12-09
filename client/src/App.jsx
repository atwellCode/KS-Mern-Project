import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Interface/Homepage/Homepage";
import Login from "./Auth/log-in";
import Signup from "./Auth/sign-up";
import AddPost from "./Interface/AddPost/add-post";


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      {/* User-Interface Homepage */}
      <Route exact path='/' element={<Homepage/>} />
      <Route path='add-post' element={<AddPost/>} />


      {/* User Auth */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;