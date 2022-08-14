require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();

const  authRoutes = require('./routes/auth.js')

app.use(cors());
app.use(express.json()); // Passing JSON payloads from FE - BE
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
