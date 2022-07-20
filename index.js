const express = require("express");
const cors = require('cors')
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser= require('body-parser');

const indexRouter = require("./routes/datacarbon");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors())


app.get("/", (req, res) => {
    res.send("Hello Carbon");
});

app.use("/coinmarketcap", indexRouter);


module.exports = app;