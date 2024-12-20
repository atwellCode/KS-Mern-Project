require("dotenv").config(); // Load environment variables at the top
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectMongoDB = require("./db/connectDB");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes")

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  // Database Connection
  connectMongoDB();
});
