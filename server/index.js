const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const URI = process.env.URI;

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 1000
mongoose.connect(process.env.URI).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});




app.get("/", (req, res) => {
    res.send("Hello World");
}   );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

