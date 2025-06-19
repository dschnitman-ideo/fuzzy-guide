'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    // Always start with fade-in animation on page load/refresh
    console.log('Page loaded, starting fade-in animation');
    
    // Set a timeout to mark animation as complete after it finishes
    const timer = setTimeout(() => {
      setHasAnimated(true);
      console.log('Animation complete');
    }, 2300); // Longer sequence: 1.7s delay + 0.6s animation duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Trigger slide-in animation when returning to home after navigation
    if (pathname === '/' && hasNavigated) {
      console.log('Returning to home, triggering slide-in animation');
      setIsReturning(true);
      setTimeout(() => setIsReturning(false), 400);
    }
  }, [pathname, hasNavigated]);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('About clicked, setting navigation states');
    setIsNavigating(true);
    setHasNavigated(true); // Mark that we've navigated
    
    // Start the slide-out animation
    setTimeout(() => {
      router.push('/about');
    }, 200); // Half the animation duration for faster transition
  };

  // Determine if we should show fade-in animation
  const shouldShowFadeIn = !hasAnimated;
  
  console.log('State:', { hasAnimated, shouldShowFadeIn, isNavigating, isReturning, hasNavigated });

  return (
    <>
      {/* Fixed About link in top right corner */}
      <div className={`fixed top-8 right-8 z-50 ${shouldShowFadeIn ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
        <Link 
          href="/about" 
          onClick={handleAboutClick}
          className="text-blue-700 dark:text-blue-400 hover:underline text-lg"
        >
          About
        </Link>
      </div>

      {/* Container that slides out or in */}
      <div className={`w-full transition-transform duration-400 ease-in-out ${
        isNavigating ? 'animate-slide-out-left' : 
        isReturning ? 'animate-slide-in-left' : ''
      }`}>
        <main className="max-w-4xl mx-auto px-8 py-20">
          <section className={`mb-16 ${shouldShowFadeIn ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl font-bold mb-2">David Schnitman</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Senior Interaction Design Lead at IDEO
            </p>
          </section>

          <section className={`mb-16 ${shouldShowFadeIn ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
            <div className="space-y-16">
              <div className={shouldShowFadeIn ? 'animate-fade-in' : ''} style={{ animationDelay: '0.5s' }}>
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
              <div className={shouldShowFadeIn ? 'animate-fade-in' : ''} style={{ animationDelay: '0.8s' }}>
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
              <div className={shouldShowFadeIn ? 'animate-fade-in' : ''} style={{ animationDelay: '1.1s' }}>
                <Link href="/projects/last-mile-money" className="block">
                  <div className="w-full aspect-[16/9] mb-4 bg-orange-500 rounded-lg hover:opacity-90 transition-opacity overflow-hidden flex items-center justify-center p-8">
                    <img 
                      src="/images/last-mile/financial-futures-org.png" 
                      alt="Financial Futures - Last Mile Money" 
                      className="w-full h-full object-contain rounded-3xl shadow-lg"
                    />
                  </div>
                </Link>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/projects/last-mile-money" className="hover:underline text-blue-700 dark:text-blue-400">
                    Last Mile Money
                  </Link>
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">A collection of three financial futures for women, networks, and digital finance.</p>
              </div>
              <div className={shouldShowFadeIn ? 'animate-fade-in' : ''} style={{ animationDelay: '1.4s' }}>
                <Link href="/projects/generative-art" className="block">
                  <div className="w-full aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:opacity-90 transition-opacity overflow-hidden">
                    <img 
                      src="/images/generative-art/space-fling-01.jpg" 
                      alt="Space Fling - Generative Art" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <h3 className="text-xl font-medium mb-2">
                  <Link href="/projects/generative-art" className="hover:underline text-blue-700 dark:text-blue-400">
                    Generative Art
                  </Link>
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">Code sketching in Processing and p5.js.</p>
              </div>
            </div>
          </section>

          <section className={shouldShowFadeIn ? 'animate-fade-in' : ''} style={{ animationDelay: '1.7s' }}>
            <footer className="flex items-center justify-between mt-16 text-zinc-600 dark:text-zinc-400 text-base">
              <div>
                © {currentYear} / David Schnitman / Built with{' '}
                <a href="https://cursor.sh" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                  Cursor <span aria-hidden="true" className="ml-1">↗</span>
                </a>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/_cyber.ia/" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                  Instagram <span aria-hidden="true" className="ml-1">↗</span>
                </a>
                <a href="https://www.linkedin.com/in/david-schnitman-b28a5189/" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                  LinkedIn <span aria-hidden="true" className="ml-1">↗</span>
                </a>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}