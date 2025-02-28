import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const summarizeResume = async (text: string): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Summarize the following resume:\n\n${text}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

export const generateEmbedding = async (text: string): Promise<number[]> => {
  const model = genAI.getGenerativeModel({ model: 'embedding-001' });
  const result = await model.embedContent(text);
  return result.embedding.values;
};