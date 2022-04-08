const express = require("express");
const cors = require("cors"); //cors provides Express middleware to enable CORS
const app = express();
const dotenv = require('dotenv').config();
var corsOptions = {
  origin: "http://localhost:8080"
};

//* the will let us get data the data form post
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to RESTOURANT MARHABA." });
  });

//* Require Routes
const authRouter = require('./routes/authRoute')
const categoryRouter = require('./routes/categoryRoute')
const repasRouter = require('./routes/repasRoute')
const orderRouter = require('./routes/orderRoute')
const factureRouter = reuire('./routes/factureRoue')


//* Register Our Routes
app.use("/api", authRouter)
app.use("/api/category", categoryRouter)
app.use("/api/repas", repasRouter)
app.use("/api/order", orderRouter)
app.use("/api/facture", factureRouter)

// set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });