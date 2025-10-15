export default function ResumePage(){
return (
<div className="mx-auto max-w-6xl px-4 py-12">
<h1 className="text-3xl font-bold">Resume</h1>
<p className="text-white/70 mt-2 text-sm">If the embed doesn’t render, use the download button.</p>
<div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
<iframe
src="/Resume.pdf#toolbar=0&navpanes=0"
className="w-full h-[80vh]"
title="Resume PDF"
/>
</div>
<a href="/Resume.pdf" download className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40">Download PDF</a>
</div>
);
}