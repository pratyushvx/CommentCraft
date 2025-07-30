import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Use your Gemini API key here
const API_KEY = "AIzaSyD729Gf7UltsFnHb9DMIrVbHvNfLMJZxws";

// ✅ Create instance
const genAI = new GoogleGenerativeAI(API_KEY);

// ✅ Accept code string and get AI response
async function sendReq(code) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Analyze the following code:

  1. Explain what it does (add comments inline).
  2. Give the time complexity.
  3. Write 2 distinct test cases.
  
  Separate each section clearly with headings like:
  🧠 Explanation
  📈 Time Complexity
  🧪 Test Cases
  :\n\n${code}`;

  try {
    const result1 = await model.generateContent(prompt);
    const response = await result1.response;
    const result = response.text();

    console.log(result); // Or return it to frontend
    return result;
  } catch (error) {
    console.error("❌ Error:", error);
    return "Failed to get response from Gemini.";
  }
}

export default sendReq;
