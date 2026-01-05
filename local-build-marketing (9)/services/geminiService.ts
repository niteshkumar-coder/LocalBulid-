import { GoogleGenAI } from "@google/genai";

export async function generateMarketingAdvice(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are 'Local Build AI', a master marketing strategist. Provide short, lethal, and actionable advice for local businesses. Focus on YouTube, Instagram, and AI automation.",
        temperature: 0.8,
      },
    });

    return response.text || "Connection to core intelligence timed out.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: System link failed. Please ensure your API_KEY is set in Vercel environment variables.";
  }
}

export async function* streamMarketingAdvice(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    for await (const chunk of response) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Stream error occurred.";
  }
}