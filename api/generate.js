// pages/api/generate.js
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = req.body.prompt;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1024,
    temperature: 0.5,
  });

  res.status(200).json({ response: response.data.choices[0].text });
}