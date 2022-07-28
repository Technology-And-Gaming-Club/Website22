const mongoose = require('mongoose')
const db = process.env.MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};
module.exports = connectDB;