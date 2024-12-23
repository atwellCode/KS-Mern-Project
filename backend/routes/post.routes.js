const express = require("express");
const route  =express.Router();
const protectRoute = require("../middleware/protectRoute");
const {createPost, likeUnlikePost, commentOnPost, getAllPost,getLikedPost,  getFollowingPost,deletePost, getUserPost} = require("../controllers/post.controller")


route.get("/all", protectRoute, getAllPost);
route.get("/following", protectRoute, getFollowingPost);
route.get("/likes/:id", protectRoute, getLikedPost);
route.get("/user/:username", protectRoute, getUserPost);
route.post("/create", protectRoute, createPost);
route.post("/like/:id", protectRoute, likeUnlikePost);
route.post("/comment/:id", protectRoute, commentOnPost);
route.delete("/delete/:id", protectRoute, deletePost);



module.exports = route; 