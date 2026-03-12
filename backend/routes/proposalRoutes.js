const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs");

router.post("/generate-proposal", async (req, res) => {

const { company, product, target } = req.body;

const prompt = `
Generate a structured B2B sustainability proposal.

Company: ${company}
Product: ${product}
Target Client: ${target}

Return ONLY JSON in this format:

{
 "product_mix": [],
 "budget_allocation": "",
 "estimated_cost": "",
 "impact_summary": ""
}
`;

try {

const response = await axios.post(
"https://openrouter.ai/api/v1/chat/completions",
{
model: "openai/gpt-3.5-turbo",
messages: [
{
role: "user",
content: prompt
}
]
},
{
headers: {
Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type": "application/json"
}
}
);

const text = response.data.choices[0].message.content;

// Logging prompt + response
fs.appendFileSync(
"./logs/log.txt",
`PROMPT:\n${prompt}\n\nRESPONSE:\n${text}\n\n----------------\n`
);

// Parse JSON safely
let json;

try {

json = JSON.parse(text);

} catch {

json = {
product_mix: [],
budget_allocation: "",
estimated_cost: "",
impact_summary: text
};

}

res.json(json);

} catch (error) {

console.log(error);

res.json({
product_mix: [],
budget_allocation: "",
estimated_cost: "",
impact_summary: "Error generating proposal"
});

}

});

module.exports = router;