const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");
const proposalRoutes = require("./routes/proposalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", aiRoutes);
app.use("/api", proposalRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// PORT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});