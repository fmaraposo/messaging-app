const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // allows to pass JSON payloads from FE to BE
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
