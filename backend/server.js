const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");
const proposalRoutes = require("./routes/proposalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", aiRoutes);
app.use("/api", proposalRoutes);

app.get("/", (req, res) => {
  res.send("AI Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});