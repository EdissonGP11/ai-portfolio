"use client";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";


export default function AIChat(){
const [messages, setMessages] = useState<{role:"user"|"assistant"; content:string}[]>([]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);


async function send(){
if(!input.trim()) return;
const userMsg = { role: "user" as const, content: input.trim() };
setMessages(m => [...m, userMsg]);
setInput("");
setLoading(true);


const res = await fetch("/api/chat", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ mode: "portfolio", messages: [...messages, userMsg] })
});
const data = await res.json();
setMessages(m => [...m, { role: "assistant", content: data.reply ?? "(no reply)" }]);
setLoading(false);
}


return (
<div className="flex flex-col gap-3">
<div className="h-56 overflow-y-auto rounded-xl border border-white/10 p-3 bg-black/30">
{messages.length===0 && <p className="text-sm text-white/50">Ask me about my skills, projects, or classes.</p>}
{messages.map((m,i)=>(
<div key={i} className={`text-sm leading-relaxed mb-2 ${m.role==="assistant"?"text-white":"text-sky-300"}`}>
<span className="font-semibold mr-1">{m.role==="assistant"?"AI":"You"}:</span>
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
onChange={e=>setInput(e.target.value)}
placeholder="Type a question"
className="flex-1 rounded-xl border border-white/20 bg-transparent px-3 py-2 outline-none"
/>
<button onClick={send} className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50" disabled={loading}>
Send
</button>
</div>
</div>
);
}