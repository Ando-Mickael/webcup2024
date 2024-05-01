const OpenAI = require("openai");

async function textGenerate(messages) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0].message.content;
}

async function imageGenerate(prompt, size) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt,
    size,
  });

  return image.data[0].url;
}

module.exports = {
  textGenerate,
  imageGenerate,
};
