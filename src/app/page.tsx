import React from 'react';
import Link from 'next/link';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <nav className="mb-16">
        <Link href="/about" className="text-blue-700 dark:text-blue-400 hover:underline">
          About
        </Link>
      </nav>

      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-2">David Schnitman</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Senior Interaction Design Lead at IDEO
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
        <div className="space-y-16">
          <div>
            <Link href="/projects/wsj" className="block">
              <div className="w-full aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:opacity-90 transition-opacity"></div>
            </Link>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/wsj" className="hover:underline text-blue-700 dark:text-blue-400">
                The Wall Street Journal
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
          <div>
            <Link href="/projects/abbott" className="block">
              <div className="w-full aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:opacity-90 transition-opacity"></div>
            </Link>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/abbott" className="hover:underline text-blue-700 dark:text-blue-400">
                Abbott Diabetes Care
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
          <div>
            <Link href="/projects/last-mile-money" className="block">
              <div className="w-full aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:opacity-90 transition-opacity"></div>
            </Link>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/last-mile-money" className="hover:underline text-blue-700 dark:text-blue-400">
                Last Mile Money
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
          <div>
            <Link href="/projects/generative-art" className="block">
              <div className="w-full aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:opacity-90 transition-opacity"></div>
            </Link>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/generative-art" className="hover:underline text-blue-700 dark:text-blue-400">
                Generative Art
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
        </div>
      </section>

      <section>
        <footer className="flex items-center justify-between mt-16 text-zinc-600 dark:text-zinc-400 text-base">
          <div>
            © {currentYear} / David Schnitman / Built with{' '}
            <a href="https://cursor.sh" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Cursor
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/_cyber.ia/" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/david-schnitman-b28a5189/" className="hover:underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}