🧠 CommentCraft

**CommentCraft** is a lightweight Node.js-based code analysis tool that takes user-submitted code and returns meaningful, AI-generated comments using the **Gemini API**. It features a simple HTML frontend with form submission, and handles routing and response rendering without Express.

---

## 📌 Features

- ⚡ Fast and lightweight Node.js HTTP server (no Express)
- 🧠 Integrates Gemini API for intelligent comment generation
- 📤 Simple HTML form to submit code
- 📄 Separate pages for input and results
- 🎨 CSS styling served directly from server
- 🔄 Uses internal `/generate` and `/getresult` API endpoints

---

## 📁 Folder Structure

CommentCraft/
├── public/
│ ├── index.html # Code input form
│ ├── result.html # Displays the AI-generated comment
│ └── style.css # Stylesheet
├── api.js # Gemini API request logic
├── server.js # Main HTTP server
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pratyushvx/CommentCraft.git
cd CommentCraft
2. Install dependencies
This project assumes you're using Node.js v14+ and have your api.js configured to call the Gemini API.

bash
Copy
Edit
npm install
3. Run the server
bash
Copy
Edit
node server.js
Server will run at http://localhost:3000

🧪 Usage
Go to http://localhost:3000

Paste your code snippet into the input form.

Submit the form.

You’ll be redirected to /result where your Gemini-generated comments are shown.

📦 API Endpoints
Endpoint	Method	Description
/	GET	Serve the main input form
/generate	POST	Accepts code input, sends to Gemini API
/result	GET	Renders result page
/getresult	GET	Returns latest result in JSON
/style.css	GET	CSS for frontend

⚙️ Gemini API Setup
Make sure your api.js file is set up to send code to Gemini (or another LLM) and return a meaningful response.

Example (pseudo-code):

js
Copy
Edit
export default async function sendReq(code) {
  // Send code to Gemini and return comment
}
🙌 Author
Pratyush Thakur
📎 GitHub Profile

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

Let me know if:
- You want a sample `api.js` added
- You want to deploy this (e.g. with Render)
- Or you'd like this converted to an Express-based project

Happy coding! 🚀
