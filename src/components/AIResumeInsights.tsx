"use client";
import { useState } from "react";

export default function AIResumeInsights() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // --- NEW: pre-response logic for common keywords
  function getLocalReply(prompt: string): string | null {
    const lower = prompt.toLowerCase();

    // summary or resume → short summary about your resume
    if (lower.includes("summary") || lower.includes("resume")) {
      return `Edisson Guevara is a Computational Science & Engineering major with a strong foundation in Applied Mathematics, 
software development, and AI integration. He has hands-on experience in GPU computing, .NET web services, and full-stack 
web development using Next.js and React. His resume reflects a balance of research experience, technical problem-solving, 
and creative design projects like AI-driven apps and browser-based games.`;
    }

    // skills keyword → list of highlights
    if (lower.includes("skill")) {
      return `Edisson’s key skills include:
- Full-stack web development (Next.js, React, Tailwind CSS)
- C# and .NET API development with SQLite integration
- Python for scientific computing (Numba, CUDA, FFT)
- AI and OpenAI API integration
- Game and UI design with HTML5 Canvas & Blazor`;
    }

    return null;
  }

  async function analyze() {
    if (!text.trim()) return;
    setLoading(true);

    // NEW: local quick reply check
    const local = getLocalReply(text);
    if (local) {
      setResult(local);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "resume", text }),
      });
      const data = await res.json();
      setResult(data.reply || "No result");
    } catch (err) {
      setResult("Error: unable to connect to AI service.");
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your resume text here… or type 'summary' or 'skills'"
        className="min-h-32 rounded-xl border border-white/20 bg-transparent px-3 py-2 text-sm"
      />
      <button
        onClick={analyze}
        disabled={loading || !text.trim()}
        className="self-start px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50"
      >
        {loading ? "Analyzing…" : "Get Insights"}
      </button>
      {result && (
        <div className="rounded-xl border border-white/10 p-3 bg-black/30 text-sm whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}
