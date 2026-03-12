const axios = require("axios");

async function generateCategoryAI(name, description, material) {

const prompt = `
You are an e-commerce AI assistant.

Product:
Name: ${name}
Description: ${description}
Material: ${material}

Return ONLY JSON.

{
"category":"",
"subcategory":"",
"tags":[],
"sustainability":[]
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

return text;

} catch (error) {

console.log("AI Error:", error.response?.data || error.message);

return JSON.stringify({
category:"Error",
subcategory:"",
tags:[],
sustainability:[]
});

}

}

module.exports = generateCategoryAI;