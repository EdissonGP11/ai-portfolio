"use client";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // --- NEW: local pre-response logic for common keywords
  function getLocalReply(prompt: string): string | null {
    const lower = prompt.toLowerCase();

    if (lower.includes("project")) {
      return "You can explore Edisson’s featured projects on the Projects page — they include the Spectral Analysis Reasearch, Top-Down Racer, and Mini Football Heads!";
    }
    if (lower.includes("skill")) {
      return "Edisson’s key skills include Next.js, .NET, Python (Numba/CUDA), Tailwind CSS, OpenAI API integration, and creative front-end design with React.";
    }
    if (lower.includes("resume")) {
      return "You can view or download Edisson’s latest resume on the Home page (look for the Resume section).";
    }
    if (lower.includes("contact")) {
      return "You can reach Edisson via the Contact page — there’s an email and Handshake link available there.";
    }
    return null;
  }

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    // Check for a local quick-reply first
    const local = getLocalReply(userMsg.content);
    if (local) {
      setMessages((m) => [...m, { role: "assistant", content: local }]);
      setLoading(false);
      return;
    }

    // Otherwise call the API
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "portfolio", messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "(no reply)" }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Sorry, I couldn’t reach the AI service right now." }]);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="h-56 overflow-y-auto rounded-xl border border-white/10 p-3 bg-black/30">
        {messages.length === 0 && (
          <p className="text-sm text-white/50">Ask me about Edisson’s projects, skills, or resume.</p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm leading-relaxed mb-2 ${
              m.role === "assistant" ? "text-white" : "text-sky-300"
            }`}
          >
            <span className="font-semibold mr-1">
              {m.role === "assistant" ? "AI" : "You"}:
            </span>
            {m.content}
          </div>
        ))}
        {loading && <p className="text-sm text-white/50">Thinking…</p>}
      </div>

      <div className="flex items-end gap-2">
        <TextareaAutosize
          minRows={1}
          maxRows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a question"
          className="flex-1 rounded-xl border border-white/20 bg-transparent px-3 py-2 outline-none"
        />
        <button
          onClick={send}
          className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
