import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { content } = req.body;
    const filePath = path.join(process.cwd(), "projects", "markdown.md");
    fs.writeFileSync(filePath, content);
    res.status(200).json({ message: "Markdown saved successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
