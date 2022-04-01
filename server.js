const express = require("express");
const cors = require("cors"); //cors provides Express middleware to enable CORS
const app = express();
const dotenv = require('dotenv').config();
const authRouter = require('./routes/authRoute')
var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to RESTOURANT MARHABA." });
  });

app.use('/api', authRouter)


// set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });