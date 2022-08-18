const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000;
const path = require('path')
const { mongodb } = require("./helper");
// const routes = require('./services/admin/index')
const indexRouter = require("./routes/index");


const app = express()
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

app.use(fileUpload({
	limits: { fileSize: 50 * 1024 * 1024 },
}));
indexRouter.initialize(app);

// app.use("/", routes);

app.use(cors());


app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


app.listen(PORT, console.log(`Server running on port ${PORT}`));
