const express = require("express");
const route = express.Router()
const protectRoute = require("../middleware/protectRoute");
const {getUserProfile,getSuggestedUsers,followUnfollowUser,updateUser} = require("../controllers/user.controller")

route.get("/profile/:username", protectRoute, getUserProfile);
route.get("/suggested", protectRoute, getSuggestedUsers);
route.post("/follow/:id", protectRoute, followUnfollowUser);
route.post("/update", protectRoute, updateUser);


module.exports = route