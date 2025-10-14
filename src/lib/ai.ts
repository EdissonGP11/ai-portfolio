export async function chatComplete(messages: {role:"system"|"user"|"assistant"; content:string}[]) {
const apiKey = process.env.OPENAI_API_KEY!;
const model = process.env.OPENAI_MODEL || "gpt-4o-mini";


const res = await fetch("https://api.openai.com/v1/chat/completions",{
method: "POST",
headers: {
"Content-Type":"application/json",
"Authorization":`Bearer ${apiKey}`
},
body: JSON.stringify({
model,
messages,
temperature: 0.3,
})
});
if(!res.ok){
const t = await res.text();
throw new Error(`OpenAI error: ${res.status} ${t}`);
}
const json = await res.json();
return json.choices?.[0]?.message?.content ?? "";
}