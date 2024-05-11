const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 80;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://anupdangi28:farmers123@localfarmersapp.8bbteeb.mongodb.net/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Define schema for the collection
const registerUserSchema = new mongoose.Schema({
    name: String,
    email:String,
    username:String,
    password:String
});

// Define the model
const Supplier = mongoose.model('userregisters', registerUserSchema);

// Endpoint to export MongoDB data to a JSON file
app.get('/customer', async (req, res) => {
    try {
        // Get all documents from the collection
        const documents = await Supplier.find({});

        // Write documents to a JSON file
        const outputFilePath = './admin/overallcustomer.json';
        fs.writeFileSync(outputFilePath, JSON.stringify(documents));

        // Send success response with the file path
        res.json({ success: true, message: 'MongoDB data exported successfully.', file: outputFilePath });
    } catch (error) {
        console.error('Error exporting MongoDB data:', error);
        res.status(500).json({ success: false, message: 'Failed to export MongoDB data.', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
