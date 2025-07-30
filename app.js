import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import sendReq from "./api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let final = "";

const server = http.createServer(async (req, res) => {
  // Serve index.html
  if (req.url === "/" && req.method === "GET") {
    const fpath = path.join(__dirname, "public", "index.html");
    try {
      const data = await fs.promises.readFile(fpath, "utf8");
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500);
      res.end("Error loading file");
    }
  }

  // Serve result.html
  else if (req.url === "/result" && req.method === "GET") {
    const fpath = path.join(__dirname, "public", "result.html");
    try {
      const data = await fs.promises.readFile(fpath, "utf8");
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    } catch (err) {
      res.writeHead(500);
      res.end("Error loading file");
    }
  }

  // Serve style.css
  else if (req.url === "/style.css" && req.method === "GET") {
    const fpath = path.join(__dirname, "public", "style.css");
    try {
      const data = await fs.promises.readFile(fpath, "utf8");
      res.writeHead(200, { "Content-type": "text/css" });
      res.end(data);
    } catch (err) {
      res.writeHead(500);
      res.end("Error loading file");
    }
  }

  // Handle POST /generate
  else if (req.url === "/generate" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const code = JSON.parse(body);
      try {
        const result = await sendReq(code.code);
        console.log("response came from gemini api");
        final = result;
        res.writeHead(302, { Location: "/result" });
        res.end();
      } catch (e) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ result: "❌ Server error" }));
      }
    });
  }

  // Serve result JSON
  else if (req.url === "/getresult" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ result: final }));
  }

  // Fallback 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Running At http://localhost:${PORT}`);
});
