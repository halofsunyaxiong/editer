import dynamic from "next/dynamic";
import { useState } from "react";
import "easymde/dist/easymde.min.css";
import "tailwindcss/tailwind.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  const handleSave = async () => {
    const response = await fetch("/api/saveMarkdown", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: markdown }),
    });
    if (response.ok) {
      alert("Markdown saved successfully!");
    } else {
      alert("Failed to save markdown.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <SimpleMDE value={markdown} onChange={setMarkdown} />
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
