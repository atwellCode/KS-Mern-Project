require("dotenv").config(); // Load environment variables at the top
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;

const connectMongoDB = require("./db/connectDB");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/post.routes.js");
const notificationRoutes = require("./routes/notification.routes.js")

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_NAME,
  api_secret: process.env.CLOUDINARY_API_KEY,
  secure: true,
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/notification", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  // Database Connection
  connectMongoDB();
});
