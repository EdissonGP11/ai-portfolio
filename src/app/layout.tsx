import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Edisson Guevara – Portfolio",
  description: "Personal portfolio with AI chat and resume insights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fira.variable} bg-black text-white antialiased`}>
        <div className="min-h-screen flex flex-col">
          <nav className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                Edisson<span className="text-sky-400">.dev</span>
              </Link>
              <div className="flex gap-6 text-sm">
                <Link className="hover:text-sky-300" href="/projects">Projects</Link>
                <Link className="hover:text-sky-300" href="/about">About</Link>
                <Link className="hover:text-sky-300" href="/contact">Contact</Link>
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
