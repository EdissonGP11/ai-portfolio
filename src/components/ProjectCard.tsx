export default function ProjectCard({ title, description, tags, link, repo, demo }:{
title: string; description: string; tags: string[]; link: string; repo?: string; demo?: string;
}){
return (
<div className="rounded-2xl border border-white/10 p-5 transition hover:border-white/30">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold">{title}</h3>
<p className="text-sm text-white/70 mt-1">{description}</p>
</div>
<div className="flex gap-2 shrink-0">
{repo && <a className="text-xs px-3 py-1 rounded-lg border border-white/20 hover:border-white/40" href={repo} target="_blank" rel="noreferrer">GitHub</a>}
{demo && <a className="text-xs px-3 py-1 rounded-lg bg-sky-500 hover:bg-sky-400" href={demo}>Live</a>}
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
{tags.map(t => (
<span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">{t}</span>
))}
</div>
</div>
);
}