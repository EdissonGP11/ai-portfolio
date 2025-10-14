import ProjectCard from "@/components/ProjectCard";


const projects = [
{
title: "AI Study Buddy Platform",
description: "LLM‑powered study helper with spaced repetition and notes.",
tags: ["Next.js", "OpenAI", ".NET"],
link: "#"
},
{
title: "Spectral Analysis of Novel String Instrument",
description: "Python/Numba DSP for decay constants and resonance mapping.",
tags: ["Python", "Numba", "DSP"],
link: "#"
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