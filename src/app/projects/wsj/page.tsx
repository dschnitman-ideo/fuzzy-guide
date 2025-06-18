import React from 'react';
import Link from 'next/link';

export default function WSJProject() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">The Wall Street Journal</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p>The Wall Street Journal is the definitive source of news and information through the lens of business, finance, economics and money. For this redesign, we set out to equip Wall Street Journal subscribers with an edge – in business and in life – through a digital experience that is as sophisticated and trustworthy as their journalism.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Role</h2>
        <p>I led a team of product designers to redesign the WSJ mobile app and design system. Our aim was to redesign existing functionality to be more coherent, reliable, elegant and intuitive.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Personas</h2>
        <ul>
          <li><b>Rise & Climber</b> – Early to mid-career professionals striving for higher status</li>
          <li><b>Current Core</b> – High achieving intellectuals, late career or retired</li>
          <li><b>Social Smartie</b> – Educated Millennials charting their own path</li>
          <li><b>Next Gen</b> – Generation Z students and recent entrants to the workplace</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">News Routines</h2>
        <ul>
          <li><b>The Wakeup</b> – Quick, focused bursts to get a snapshot of the day ahead, typically scanning headlines or email summaries.</li>
          <li><b>Comings & Goings</b> – Consuming news while multitasking, in transit or during activities. Often audio/video, but can be text too.</li>
          <li><b>The Steady Buzz</b> – Staying in the know throughout the day without diving too deep. Always on: notifications, social media feed.</li>
          <li><b>The Deep Dive</b> – Time spent in focused, undistracted reading or watching to gain a deeper understanding of a topic or story.</li>
          <li><b>The Wind Down</b> – Low effort, end-of-day moment when people unwind and relax while catching up on lighter or more leisurely content.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Major Changes</h2>
        <ul>
          <li><b>Navigation:</b> Revised main and secondary navigation, labeling, and taxonomy for improved usability and wayfinding.</li>
          <li><b>Homepage:</b> Cleaner, more cohesive layout with harmonized content card structure, unified typography, and new media carousels.</li>
          <li><b>Articles:</b> Optimized typography, enhanced layouts, and embedded media for a consistent, engaging reading experience.</li>
          <li><b>Media:</b> Comprehensive collection of audio and video cards, media carousels, and interactive prototypes for the Media page.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Design Philosophy</h2>
        <p><b>Strength in Subtlety</b> – We are minimalist—yet commanding. Our no-frills, disciplined design approach eliminates unnecessary complexities, exudes quiet confidence, and breeds trust through consistency and clarity.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Process</h2>
        <p>Our process began with a comprehensive audit and prioritization of the existing UX/UI, focusing on creating a more coherent, reliable, elegant, and intuitive experience. We conducted detailed UX audits and screen annotations, identifying opportunities for quick wins and component improvements. Throughout the project, we modernized the visual design language and user interface designs to create a more sophisticated and contemporary experience.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
          <div>Max Klein</div>
          <div>David Schnitman</div>
          <div>Zoey Zhu</div>
          <div>Tais Mauk</div>
          <div>Sara Carhart</div>
          <div>Yukie Park</div>
          <div>Komal Shakoor</div>
          <div>Grishma Rao</div>
          <div>Tiange Wang</div>
          <div>Emily Mo</div>
          <div>Sara McGuyer</div>
          <div>Gaby Ruiz-Funes</div>
          <div>Emily Sadeghian</div>
          <div>Leah Marcus</div>
          <div>Lindsey Turner</div>
          <div>Becky Bermont</div>
          <div>Shelli Reeves</div>
          <div>Zahin Ali</div>
          <div>Jeremy Chen</div>
          <div>Ashley Rosario</div>
        </div>
      </div>
    </main>
  );
} 