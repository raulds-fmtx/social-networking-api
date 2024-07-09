const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social_network_db");

module.exports = mongoose.connection;
