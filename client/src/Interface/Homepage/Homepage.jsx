import React from "react";
import Header from "../Header/Header";
import LowerHeader from "../LowerHeader/LowerHeader";
import Story from "./Story";
import Post from "./Post";


function Homepage(){
  return(
    <>
    <div className="bg-slate-400 h-auto w-100">
    <Header/>
    <LowerHeader/>
    <Story/> 
    <Post/>

    </div>
    </>
  );
}

export default Homepage;