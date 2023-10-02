import { Configuration, OpenAIApi } from "openai";


function generatePrompt(person, search) {
  prompt = "Generate a diagnostic for the following person:\n"
  for (let info in person.info) {
    prompt += `User's ${info}: ${person.info[info]}\n`;
  }
  prompt += "Symptoms:\n"
  for (let symptomnum in person.symptoms) {
    prompt += `${symptomnum}: ${person.symptoms[symptomnum]}\n`;
  }
  prompt += `Here is what a google search revealed ${search}\n`
  return prompt;
}

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function askAI(person, search) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: generatePrompt(person,search) }],
    });
    return completion
  } catch(error) {
    throw error
  }
}
