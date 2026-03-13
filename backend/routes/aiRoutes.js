const express = require("express");
const router = express.Router();
const generateCategoryAI = require("../services/aiService");

router.post("/generate-category", async (req, res) => {

const { name, description, material } = req.body;

const result = await generateCategoryAI(name, description, material);

res.json(result);

});

module.exports = router;