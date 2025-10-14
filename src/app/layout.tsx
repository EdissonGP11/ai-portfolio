import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
// @ts-ignore - allow global CSS side-effect import without type declarations
import "./globals.css";

export const metadata: Metadata = {
title: "Edisson Guevara – Portfolio",
description: "Personal portfolio with AI chat and resume insights.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-black text-white antialiased">
<div className="min-h-screen flex flex-col">
<nav className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<a href="/" className="font-semibold tracking-tight">Edisson<span className="text-sky-400">.dev</span></a>
<div className="flex gap-6 text-sm">
<a className="hover:text-sky-300" href="/projects">Projects</a>
<a className="hover:text-sky-300" href="/about">About</a>
<a className="hover:text-sky-300" href="/contact">Contact</a>
</div>
</div>
</nav>
<main className="flex-1">{children}</main>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
© {new Date().getFullYear()} Edisson Guevara. Built with Next.js + AI.
</div>
</footer>
</div>
</body>
</html>
);
}