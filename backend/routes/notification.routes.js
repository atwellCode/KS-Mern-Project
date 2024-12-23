const express = require("express");
const protectRoute = require("../middleware/protectRoute");
const route = express.Router();
const {getNotification,deleteNotification} = require("../controllers/notification.controller")

route.get("/notification", protectRoute, getNotification);
route.delete("/delete", protectRoute, deleteNotification)

module.exports = route;