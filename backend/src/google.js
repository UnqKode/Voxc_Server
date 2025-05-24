import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();


async function askGemini(prompt, apiKey) {
  if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
    console.log("Prompt must be a non-empty string.");
    return;
  }
  const key = apiKey || process.env.API_KEY;
  const ai = new GoogleGenerativeAI(key);
  
  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash",
      generationConfig: {
        temperature: options.temperature || 0.7,
        topP: options.topP || 1.0,
        stopSequences: options.stopSequences || []
      }
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("🤖 Gemini says:", text);
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

export default askGemini;