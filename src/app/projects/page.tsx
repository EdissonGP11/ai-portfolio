import ProjectCard from "@/components/ProjectCard";


const projects = [
{
title: "Mini Football Heads (Web Game)",
description: "Arcade soccer heads game. Physics, keyboard controls, goals, and scoring.",
tags: ["Next.js", "OpenAI", ".NET", "Blazor"],
link: "https://github.com/EdissonGP11/MiniHeads-Game.git"
},
{
title: "Spectral Analysis of Novel String Instrument",
description: "Python/Numba DSP for decay constants and resonance mapping.",
tags: ["Python", "Numba", "DSP"],
link: "https://colab.research.google.com/drive/11lDBSdH3TmHvnMJaerCVdh2BxaGMpUSC?usp=sharing"
},
{
title: "Top-Down Racer (Canvas Game)",
description: "Fast arcade racer with nitro, traffic, pickups, and a best-score tracker.",
tags: ["HTML", "Canvas", "Game"],
link: "/topdownracer", // live demo inside portfolio
repo: "https://github.com/EdissonGP11/TopDownRacer-Game", // GitHub repo
},
];


export default function ProjectsPage(){
return (
<div className="mx-auto max-w-6xl px-4 py-12">
<h1 className="text-3xl font-bold">Projects</h1>
<div className="mt-8 grid sm:grid-cols-2 gap-6">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</div>
);
}