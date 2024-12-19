const mongoose = require("mongoose");

const connectMongoDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected Successfully!!!: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connection to mongoDB: ${error.message}`);
    };
}
module.exports = connectMongoDB;    