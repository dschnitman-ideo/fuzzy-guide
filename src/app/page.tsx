import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">David Schnitman</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          I am a San Francisco-based designer and front-end web developer working across data visualization, mapping and interaction design. I currently work at IDEO. Previously I was a designer on The Toronto Star's data visualization team, where I designed maps, interactive graphics and custom editorial experiences for The Star's digital platforms. In the past, I have collaborated on art projects at the Museum of Contemporary Art in Detroit, the Ryerson Image Centre, and at Xpace Cultural Centre. I received my Bachelors of Design from OCAD University in 2014.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/wsj" className="hover:underline text-blue-700 dark:text-blue-400">
                The Wall Street Journal
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/abbott" className="hover:underline text-blue-700 dark:text-blue-400">
                Abbott Diabetes Care
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/projects/generative-art" className="hover:underline text-blue-700 dark:text-blue-400">
                Generative Art
              </Link>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">Short description here.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-10">
          {/* IDEO */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-lg">IDEO</span>
            </div>
            <div className="ml-2 border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 space-y-2">
              <div>
                <div className="font-semibold">Senior Interaction Design Lead</div>
                <div className="text-sm text-zinc-500">2025 – Present</div>
              </div>
              <div>
                <div className="font-semibold">Design Lead</div>
                <div className="text-sm text-zinc-500">2023 – 2025</div>
              </div>
              <div>
                <div className="font-semibold">Senior Interaction Designer</div>
                <div className="text-sm text-zinc-500">2019 – 2023</div>
              </div>
            </div>
          </div>
          {/* Toronto Star */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-lg">Toronto Star</span>
            </div>
            <div className="ml-2 border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 space-y-2">
              <div>
                <div className="font-semibold">Digital Designer – Data Visualization</div>
                <div className="text-sm text-zinc-500">2017 – 2019</div>
                <div className="text-sm text-zinc-500">As a designer on the Toronto Star's data visualization team, I designed maps, interactive graphics and custom editorial experiences for the Star's digital platforms.</div>
              </div>
              <div>
                <div className="font-semibold">Designer</div>
                <div className="text-sm text-zinc-500">2015 – 2016</div>
                <div className="text-sm text-zinc-500">As a designer on Star Touch, the Toronto Star's tablet edition, I designed editorial illustrations, maps and information graphics for daily deadlines.</div>
              </div>
            </div>
          </div>
          {/* ALSO Collective */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-lg">ALSO Collective</span>
            </div>
            <div className="ml-2 border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 space-y-2">
              <div>
                <div className="font-semibold">Web Developer + Graphic Designer</div>
                <div className="text-sm text-zinc-500">2014 – 2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Connect</h2>
        <div className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a href="mailto:dnschnitman@gmail.com" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">
              dnschnitman@gmail.com
            </a>
          </p>
          <div className="social-links">
            <a href="https://instagram.com/dnschnitman" className="social-link" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/david-schnitman-b28a5189/" className="social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}