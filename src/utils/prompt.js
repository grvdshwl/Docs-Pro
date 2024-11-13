import Groq from "groq-sdk";
import { promptMessages } from "../utils/helper";
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchChatCompletion = async (text) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: `${promptMessages.keyTermsPrompt}:\n\n${text}\n`,
        },
      ],
      model: "llama3-8b-8192",
      stream: false,
      temperature: 0.5,
      response_format: { type: "json_object" },
    });

    return JSON.parse(chatCompletion.choices[0].message.content);
  } catch (err) {
    console.error("Error fetching chat completion:", err);
    throw new Error("Failed to generate information.");
  }
};
