"use client";
import { useState } from "react";


export default function AIResumeInsights(){
const [text, setText] = useState("");
const [result, setResult] = useState<string>("");
const [loading, setLoading] = useState(false);


async function analyze(){
setLoading(true);
const res = await fetch("/api/chat",{
method: "POST",
headers: { "Content-Type":"application/json" },
body: JSON.stringify({ mode: "resume", text })
});
const data = await res.json();
setResult(data.reply || "No result");
setLoading(false);
}


return (
<div className="flex flex-col gap-3">
<textarea
value={text}
onChange={e=>setText(e.target.value)}
placeholder="Paste your resume text here…"
className="min-h-32 rounded-xl border border-white/20 bg-transparent px-3 py-2 text-sm"
/>
<button onClick={analyze} disabled={loading || !text.trim()} className="self-start px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50">
{loading?"Analyzing…":"Get Insights"}
</button>
{result && (
<div className="rounded-xl border border-white/10 p-3 bg-black/30 text-sm whitespace-pre-wrap">{result}</div>
)}
</div>
);
}