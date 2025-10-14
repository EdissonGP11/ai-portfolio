export type Project = {
title: string;
description: string;
tags: string[];
demo?: string; // live route or external URL
repo?: string; // GitHub URL
};


export const projects: Project[] = [
{
title: "Mini Football Heads (Web Game)",
description: "Arcade soccer heads game. Physics, keyboard controls, goals, and scoring.",
tags: ["React", "Canvas", "Game"],
demo: "/miniheads",
repo: "https://github.com/EdissonGP11/MiniHeads-Game.git"
},
{
title: "AI Study Buddy Platform",
description: "LLM‑powered study helper with spaced repetition and notes.",
tags: ["Next.js", "OpenAI", ".NET"],
//repo: "https://github.com/edisson-guevara/ai-study-buddy"
},
{
title: "Spectral Analysis of Novel String Instrument",
description: "Python/Numba DSP for decay constants and resonance mapping.",
tags: ["Python", "Numba", "DSP"],
//repo: "https://github.com/edisson-guevara/spectral-analysis"
},
{
title: ".NET Book API",
description: "RESTful API with SQLite, auth, and integration tests.",
tags: ["C#", ".NET", "SQLite"],
//repo: "https://github.com/edisson-guevara/dotnet-book-api"
}
];