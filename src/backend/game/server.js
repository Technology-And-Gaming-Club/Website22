require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// Connect Database
connectDB();

// Init Middleware
// Set security HTTP headers
app.use(helmet());

const limiter = rateLimit({
    max: 2,
    windowMs: 1 * 60 * 1000,
    message: "Too many requests from this IP, cool down 👀"
})
app.use('/api', limiter);
app.use(express.json({ extended: false, limit: '10kb' }));

// Define Routes
app.use("/api/player", require("./routes/Player"));
// app.use("/api/teams", require("./routes/Teams"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
