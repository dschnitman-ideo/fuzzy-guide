import React from 'react';
import Link from 'next/link';

export default function LastMileMoneyProject() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      <h1 className="text-4xl font-bold mb-6">Last Mile Money</h1>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p>Last Mile Money is a program from IDEO, in partnership with a global network of funders that serves to connect underserved, rural communities with the digital economy. I led a small IDEO team to launch the Last Mile Money Financial Futures report—a collection of three financial futures for women, networks, and digital finance. This bold report looks back at the current reality of the last mile today but also dreams it into three bold new futures.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Futures</h2>
        <p>
          Looking ahead, we envision a future where women are at the center of finance, the last mile will be no mile at all, and financial services will become invisible—seamlessly integrated into daily life. These three bold futures guided the direction of the Financial Futures report.
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic my-6 text-zinc-600 dark:text-zinc-200">
          IDEO Last Mile Money is transforming digital financial services globally through a design-driven lens, reaching the most underserved users and accelerating the businesses of tomorrow.
        </blockquote>
        <h2 className="text-xl font-semibold mt-8 mb-2">Project Management & Process</h2>
        <p>
          We adopted a blended approach, inviting many voices and calibrating stakeholder energy for productive input throughout the project. Early on, I conducted 1:1s with senior decision-makers to understand their visions and priorities, setting the team up for success. Project management tools such as Modes of Critique were used to guide the process and ensure productive collaboration.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Readymag vs Squarespace</h2>
        <p>
          We navigated digital and technical challenges, from selecting the right platform (Readymag vs Squarespace) to building the site architecture and optimizing for SEO. At key inflection points, I emphasized collaborative and transparent leadership to keep the project moving forward smoothly.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Visual Design</h2>
        <p>LMM's visual style is vibrant, inclusive, and people-focused. It combines real photos of diverse individuals with playful, abstract shapes and textures in bright colors, creating an energetic and human-centered design. We experimented with monotone and duotone photography and visual textures before turning towards a more colorful collage aesthetic.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Launch</h2>
        <p>By understanding what clients may be asking and feeling, we tailored touchpoints to more deeply engage with them. The final presentation rendered how a prospective viewer might discover the website on LinkedIn and then experience the website for the first time.</p>
        {/* In the Media Section */}
        <div className="mt-8">
          <div className="flex flex-col items-center">
            {/* LinkedIn Post Embed */}
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7218663163540516865"
              height="1050"
              width="400"
              frameBorder="0"
              allowFullScreen
              title="LinkedIn Post: IDEO Last Mile Money x 5 Years"
              className="rounded-lg shadow-lg bg-white dark:bg-zinc-900"
            ></iframe>
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-8 mb-2">Team</h2>
        <ul>
          <li>John Won</li>
          <li>Colleen Rose</li>
          <li>Stuart Getty</li>
          <li>Anukriti Kedia</li>
          <li>Becca Carroll</li>
        </ul>
      </div>
    </main>
  );
} 