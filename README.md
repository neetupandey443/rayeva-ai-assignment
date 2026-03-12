# Rayeva – AI Systems Assignment

Role: Full Stack / AI Intern  
Focus: Applied AI for Sustainable Commerce

---

# Project Overview

This project implements AI-powered modules to automate catalog management and B2B proposal generation for sustainable commerce businesses.

The system integrates a React frontend with a Node.js backend and AI models to generate structured outputs that help businesses reduce manual work.

---

# Implemented Modules

The assignment required implementing **any two modules**.  
The following modules are implemented:

## Module 1 – AI Auto Category & Tag Generator

Automatically categorizes products and generates SEO tags.

### Features

• Auto assign product category  
• Suggest subcategory  
• Generate SEO tags  
• Suggest sustainability filters  

### Input Example

Product Name:
Bamboo Toothbrush

Description:
Eco friendly toothbrush made from bamboo.

Material:
Bamboo

### Example Output

```json
{
 "category": "Personal Care",
 "subcategory": "Toothbrush",
 "tags": ["eco friendly", "bamboo toothbrush", "sustainable", "plastic free"],
 "sustainability": ["biodegradable", "plastic free"]
}
```

---

# Module 2 – AI B2B Proposal Generator

Generates AI-powered sustainability proposals for B2B clients.

### Features

• Suggest sustainable product mix  
• Budget allocation within limit  
• Estimated cost breakdown  
• Impact positioning summary  

### Input Example

Company: EcoBag Pvt Ltd  
Product: Jute Bags  
Target Client: Retail Stores

### Example Output

```json
{
 "product_mix": [
   {
     "product_name": "Jute Shopping Bags",
     "quantity": "Bulk supply for retail stores",
     "features": "Reusable, biodegradable, durable"
   }
 ],
 "budget_allocation": "50% raw materials, 30% manufacturing, 20% marketing",
 "estimated_cost": "Based on bulk order size",
 "impact_summary": "Helps retail stores reduce plastic usage and promote sustainable packaging."
}
```

---

# System Architecture

Frontend (React)

↓ REST API

Backend (Node.js + Express)

↓ API Call

AI Model (OpenRouter)

---

# Project Structure

```
rayeva-ai-assignment
│
├── backend
│   ├── routes
│   │   ├── aiRoutes.js
│   │   └── proposalRoutes.js
│   │
│   ├── services
│   │   └── aiService.js
│   │
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── App.js
│   │   └── components
│   │
│   └── package.json
│
└── README.md
```

---

# Tech Stack

Frontend  
React.js

Backend  
Node.js  
Express.js

AI Integration  
OpenRouter API

Other Tools  
Axios  
CORS  
Dotenv

---

# Environment Variables

Sensitive API keys are stored using `.env`.

Example:

```
OPENROUTER_API_KEY=your_api_key_here
```

---

# Prompt Design

AI prompts are designed to return **structured JSON outputs** to make responses machine-readable.

Example Prompt Structure:

```
Generate a structured B2B sustainability proposal.

Company: EcoBag Pvt Ltd
Product: Jute Bags
Target Client: Retail Stores

Return ONLY JSON with:

product_mix
budget_allocation
estimated_cost
impact_summary
```

This ensures the response can be directly parsed and displayed in the UI.

---

# Logging

AI prompts and responses are logged for debugging and monitoring.

Logging helps with:

• debugging AI responses  
• monitoring system behaviour  
• improving prompt design  

---

# Error Handling

The backend includes:

• API error handling  
• AI response validation  
• fallback responses  

---

# Setup Instructions

Clone the repository:

```
git clone https://github.com/neetupandey443/rayeva-ai-assignment.git
```

Install backend dependencies:

```
cd backend
npm install
```

Run backend server:

```
node server.js
```

Install frontend dependencies:

```
cd frontend
npm install
```

Run frontend:

```
npm start
```

---

# Demo

The application provides two working modules:

1. AI Category Generator
2. B2B Proposal Generator

Both modules generate AI-powered outputs in structured JSON format.

---

# Future Modules (Architecture Only)

Module 3 – AI Impact Reporting Generator

• Estimate plastic saved  
• Carbon impact estimation  
• Local sourcing impact summary  

Module 4 – AI WhatsApp Support Bot

• Order status queries  
• Return policy handling  
• Escalation to support team  

---



# GitHub Repository

https://github.com/neetupandey443/rayeva-ai-assignment
