const express = require('express');
const cors = require('cors');
const router = require("./routes/route");

const app = express()

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('images'));
app.use('/', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`Server is listening on ${port}`)
});