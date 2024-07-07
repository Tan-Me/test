const express = require("express")
const cors = require('cors');
const indexRouter = require("./routes/indexRouter")
const bodyParser = require("body-parser")
const imageCompressionRouter = require("./routes/ImageCompressionRoute")
const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/', indexRouter);

app.use('/imageCompression', imageCompressionRouter);


module.exports = app;