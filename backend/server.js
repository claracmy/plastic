const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const Data = require("./data");
const { port, dbURI } = require("../config/environment");

const app = express();
app.use(cors());
const router = express.Router();

mongoose.connect(dbURI, { useMongoClient: true });

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use("/api", router);

app.get("/*", (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
