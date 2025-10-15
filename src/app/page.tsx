import AIChat from "@/components/AIChat";
import AIResumeInsights from "@/components/AIResumeInsights";


export default function HomePage() {
return (
<div className="mx-auto max-w-6xl px-4 py-12">
<section className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-bold leading-tight">
Hi, I’m <span className="text-sky-400">Edisson</span> — I build
data‑driven apps and playful UIs.
</h1>
<p className="mt-4 text-white/70 max-w-prose">
Senior undergrad in Computational Science & Engineering (Applied Math). I like
GPU compute, .NET, and crafting clean, accessible web experiences.
</p>
<div className="mt-6 flex gap-3">
<a className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40" href="/projects">See Projects</a>
<a className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40" href="/contact">Contact</a>
</div>
</div>
{/* Resume CTA (no profile photo) */}
<div className="rounded-2xl border border-white/10 p-5 bg-black/30">
<h2 className="text-2xl font-semibold">Grab my resume</h2>
<p className="text-sm text-white/70 mt-2">
Quick snapshot of my education, projects, and technical skills. Updated regularly.
</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a
href="/Resume.pdf"
download
className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40"
>
Download PDF
</a>
<a
href="/resume"
className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40"
>
View online
</a>
</div>
<p className="mt-3 text-xs text-white/50">PDF served from <code>/public/Resume.pdf</code></p>
</div>
</section>


<section className="mt-14 grid lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-white/10 p-4">
<h2 className="text-xl font-semibold">Ask my AI</h2>
<p className="text-sm text-white/60 mb-3">Ask about my background, projects, or skills.</p>
<AIChat />
</div>
<div className="rounded-2xl border border-white/10 p-4">
<h2 className="text-xl font-semibold">AI Resume Insights</h2>
<p className="text-sm text-white/60 mb-3">Paste resume text to get a tailored blurb + strengths.</p>
<AIResumeInsights />
</div>
</section>
</div>
);
}