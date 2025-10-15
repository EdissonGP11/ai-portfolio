import { NextResponse } from "next/server";
import { chatComplete } from "@/lib/ai";

type ChatRole = "system" | "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };
type Body =
  | { mode: "portfolio"; messages?: ChatMessage[] }
  | { mode: "resume"; text?: string }
  | { mode?: string; messages?: ChatMessage[]; text?: string };

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    if (body.mode === "portfolio") {
      const sys =
        process.env.PORTFOLIO_SYSTEM_PROMPT ||
        "You are a helpful portfolio assistant.";
      const reply = await chatComplete([
        { role: "system", content: sys },
        ...(body.messages ?? []),
      ]);
      return NextResponse.json({ reply });
    }

    if (body.mode === "resume") {
      const prompt = `You are a concise career coach. Given the resume text, provide:

1) A 3-4 sentence professional summary tailored to software/DS roles.
2) 3 key strengths in bullet points.
3) 1-2 suggestions to improve impact.

Resume:
${body.text || ""}`;
      const reply = await chatComplete([
        { role: "system", content: "Be specific, kind, and actionable." },
        { role: "user", content: prompt },
      ]);
      return NextResponse.json({ reply });
    }

    return NextResponse.json({ reply: "Unknown mode" }, { status: 400 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
