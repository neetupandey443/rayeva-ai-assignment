const express = require("express");
const router = express.Router();

const generateCategoryAI = require("../services/aiService");

router.post("/generate-category", async (req,res)=>{

const {name,description,material} = req.body;

const aiResponse = await generateCategoryAI(name,description,material);

try {

let cleanText = aiResponse
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

const json = JSON.parse(cleanText);

res.json(json);

} catch (error) {

console.log("AI RAW RESPONSE:", aiResponse);

res.json({
category:"Parsing failed",
subcategory:"",
tags:[],
sustainability:[]
});

}

});

module.exports = router;