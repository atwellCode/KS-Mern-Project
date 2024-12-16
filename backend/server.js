require('dotenv').config(); // Load environment variables at the top
const express = require('express');
const cors = require('cors');

const connectMongoDB = require("./db/connectDB");
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
  
// Database Connection
connectMongoDB();

// Routes
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});