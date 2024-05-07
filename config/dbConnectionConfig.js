const mongoose = require("mongoose")
const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected", connect.connection.host, connect.connection.name)
    } catch {
        console.log("failed to connect with database")
        process.exit(1);
    }
}

module.exports = dbConnection;