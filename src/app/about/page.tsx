import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>

      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          I am a San Francisco-based designer and front-end web developer working across data visualization, mapping and interaction design. I currently work at IDEO, where I lead interdisciplinary teams to deliver complex design work rooted in user research and creative problem-solving. In 2022 I was selected as a Featured Artist for the Emerging Digital Artists Award in Canada. In the past, I have collaborated on art projects at the Museum of Contemporary Art in Detroit and at the Art Museum at the University of Toronto. I received my Bachelors of Design from OCAD University in 2014.
        </p>
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
                <div className="text-sm text-zinc-500">Leads interdisciplinary teams to deliver complex design work rooted in user research and creative problem-solving, shaping key moments of experience and mentoring the next generation of designers.</div>
              </div>
              <div>
                <div className="font-semibold">Design Lead</div>
                <div className="text-sm text-zinc-500">2023 – 2025</div>
                <div className="text-sm text-zinc-500">Led cross-functional teams through all phases of design, turning insights into impactful experiences rooted in research, craft, and creative exploration.</div>
              </div>
              <div>
                <div className="font-semibold">Senior Interaction Designer</div>
                <div className="text-sm text-zinc-500">2021 – 2023</div>
                <div className="text-sm text-zinc-500">Designed across diverse challenges—shaping key moments of user experience and helping teams move from insight to expression, staying grounded in research and imagination.</div>
              </div>
              <div>
                <div className="font-semibold">Interaction Designer</div>
                <div className="text-sm text-zinc-500">2019 – 2021</div>
                <div className="text-sm text-zinc-500">Contributed to interdisciplinary teams by prototyping and designing digital experiences rooted in user research and creative problem-solving.</div>
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
    </main>
  );
} 