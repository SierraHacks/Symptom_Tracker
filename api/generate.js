import { Configuration, OpenAIApi } from "openai";


function generatePrompt(person, search) {
  prompt = "Generate a diagnostic for the following person:\n"
  for (let info in person.info) {
    prompt += `${info}: ${person.info[info]}\n`;
  }
  prompt += "Symptoms:\n"
  for (let symptomnum in person.symptoms) {
    prompt += `${symptomnum}: ${person.symptoms[symptomnum]}\n`;
  }
  prompt += `Here is what a google search revealed ${search}`
  return prompt;
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function getResponse(person, search) {
  try {
    const completion = await openai.chat.completions.create({
      model: "text-davinci-003",
      messages: [{ role: 'user', content: generatePrompt(person,search) }],
    });
    return completion.choices
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}
