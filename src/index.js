require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./route/route");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => { console.log("MongoDB is Successfully Connected๐๐") })
    .catch((err) => { console.log(err.message) });

app.use('/', route);

app.listen(process.env.PORT || 3000, () => {
    console.log("Express app is running on port " + (process.env.PORT || 3000) + "๐๐");
});
