"use client";
import React from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function GenerativeArtProject() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Generative Art</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          This project explores generative art through a dynamic, animated grid of images. Each image is randomly sourced and displayed in a responsive, animated layout. The grid demonstrates how code and randomness can create visually engaging compositions. Scroll down to see the grid animate into view, and experience how each image is uniquely generated.
        </p>
        <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 mb-8">
          {/* Placeholder for project image */}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          [Project details coming soon]
        </p>
      </div>

      {/* Animated Grid Section (full width) */}
      <ParallaxGrid />

      {/* Column content below the grid */}
      <div className="prose dark:prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-semibold mb-4">More About This Project</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Here you can add more detailed descriptions, process notes, or additional images related to the generative art project. This area is in the main column, so it matches the top of the page and is easy to expand with more content.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-zinc-400 rounded-lg shadow-lg flex items-center justify-center text-zinc-700 font-semibold text-lg"
            >
              Placeholder
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// ParallaxGrid component
function ParallaxGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // Listen for first scroll or touch interaction
  useEffect(() => {
    if (hasInteracted) return;
    const handleFirstInteraction = () => setHasInteracted(true);
    window.addEventListener('scroll', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 24 boxes for a perfect 6x4 grid on xl screens
  const boxes = Array.from({ length: 24 }, (_, i) => ({ key: i + 1 }));

  return (
    <section
      ref={gridRef}
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-2 sm:px-4 md:px-8 py-16 md:py-24 lg:py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 min-h-[1200px] justify-items-center overflow-x-hidden"
      style={{
        backgroundColor: '#e5e7eb', // Tailwind zinc-200
        backgroundImage:
          'repeating-linear-gradient(135deg, #e5e7eb 0px, #e5e7eb 24px, #f1f5f9 24px, #f1f5f9 48px)',
      }}
    >
      {boxes.map((box, i) => {
        const delay = (visible && hasInteracted) ? i * 60 : 0;
        return (
          <div
            key={box.key}
            className="w-[200px] h-[200px] rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] bg-zinc-700"
            style={{
              transform: `scale(${visible && hasInteracted ? 1 : 0.7})`,
              opacity: visible ? 1 : 0,
              transitionDelay: `${delay}ms`,
            }}
          >
            <img
              src={`https://picsum.photos/seed/${i}/200/200`}
              alt={`Random generative art ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </section>
  );
} 