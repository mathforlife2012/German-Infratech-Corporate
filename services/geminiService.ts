
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Klaus", the AI Interface for German Infratech Corporate (GIC). 
GIC has developed the world's first Ultra Quantized Supercomputer (UQS-1).
Your tone is professional, efficient, precise, and distinctly German in its emphasis on engineering excellence.
You answer questions about the UQS-1 technology which uses "Multi-Phase Quantization" to achieve 100,000x the speed of standard quantum computers.
Be polite but concise. If asked about technical specs, mention the "GIC-Diamond-Processor" and the "Sub-Zero Neural Link".`;

export async function askKlaus(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "Interface error. Please retry communication protocol.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The UQS-1 neural link is experiencing high latency. Please reconnect later.";
  }
}
