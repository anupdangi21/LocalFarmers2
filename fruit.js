const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 800;

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

//schema for the veg products
const fruitSchema = new mongoose.Schema ({
    name : String,
    quantity : Number,
    price: String,
    description: String
});


// Define the model
const Supplier = mongoose.model('fruit', fruitSchema);

// Endpoint to export MongoDB data to a JSON file
app.get('/fruit', async (req, res) => {
    try {
        // Get all documents from the collection
        const documents = await Supplier.find({});

        // Write documents to a JSON file
        const outputFilePath = 'fruit.json';
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
