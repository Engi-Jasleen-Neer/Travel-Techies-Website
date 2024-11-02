const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');


const Booking = require("./models/Booking");

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


// MongoDB connection
mongoose.connect("mongodb+srv://aroralakshay67:traveltechies@tourguidebookings.878t1.mongodb.net/" )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// API endpoint to handle booking
app.post("/api/book", async (req, res) => {
    const { location, guide, days, totalCost } = req.body;


    try {
        console.log("Call Recieved")
        const booking = new Booking({ location, guide, days, totalCost });
        
        await booking.save();

        res.status(201).json({ message: "Booking saved successfully!" });

    } catch (error) {
        console.error("Error saving booking:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
