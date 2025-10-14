import { NextResponse } from "next/server";
import { chatComplete } from "@/lib/ai";


export async function POST(req: Request){
try {
const { mode, messages, text } = await req.json();


if(mode === "portfolio"){
const sys = process.env.PORTFOLIO_SYSTEM_PROMPT || "You are a helpful portfolio assistant.";
const reply = await chatComplete([
{ role:"system", content: sys },
...((messages ?? []) as any[]),
]);
return NextResponse.json({ reply });
}


if(mode === "resume"){
const prompt = `You are a concise career coach. Given the resume text, provide:\n\n1) A 3-4 sentence professional summary tailored to software/DS roles.\n2) 3 key strengths in bullet points.\n3) 1-2 suggestions to improve impact.\n\nResume:\n${text || ""}`;
const reply = await chatComplete([
{ role:"system", content: "Be specific, kind, and actionable." },
{ role:"user", content: prompt }
]);
return NextResponse.json({ reply });
}


return NextResponse.json({ reply: "Unknown mode" }, { status: 400 });
} catch (e:any){
return NextResponse.json({ error: e.message }, { status: 500 });
}
}