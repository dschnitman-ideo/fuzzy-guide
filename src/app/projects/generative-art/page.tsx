"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Marquee Component with true infinite loop
function Marquee({ children, direction = "left", speed = 40, pauseOnHover = true }: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const content = container.firstElementChild as HTMLElement;
      if (content) {
        setContainerWidth(container.offsetWidth);
        setContentWidth(content.scrollWidth);
        // Set initial position for right-moving columns
        if (direction === "right") {
          setPosition(-content.scrollWidth + container.offsetWidth);
        }
      }
    }
  }, [children, direction]);

  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();
    const isLeft = direction === "left";
    const pixelsPerSecond = speed * 10; // Convert speed to pixels per second

    const animate = (currentTime: number) => {
      if (!isHovered) {
        const deltaTime = currentTime - lastTime;
        const deltaPixels = (pixelsPerSecond * deltaTime) / 1000;
        
        setPosition((prevPosition: number) => {
          let newPosition = isLeft ? prevPosition - deltaPixels : prevPosition + deltaPixels;
          
          // Reset position when content has moved completely off-screen
          // For left direction: reset when content has moved completely off the left edge
          // For right direction: reset when content has moved completely off the right edge
          if (isLeft && newPosition <= -contentWidth) {
            newPosition = 0;
          } else if (!isLeft && newPosition >= 0) {
            newPosition = -contentWidth;
          }
          
          return newPosition;
        });
      }
      
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, speed, isHovered, contentWidth]);

  return (
    <div 
      ref={containerRef}
      className="flex overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex flex-nowrap"
        style={{
          transform: `translateX(${position}px)`,
          willChange: 'transform',
        }}
      >
        {/* Render children multiple times to ensure seamless looping */}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

export default function GenerativeArtProject() {
  const [parallaxImages, setParallaxImages] = React.useState<string[]>([]);
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Generative Art</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-8">
          I am a generative artist exploring form through code under the alias 
          <a 
            href="https://www.instagram.com/_cyber.ia/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            cyberia <span aria-hidden="true" className="ml-1">↗</span>
          </a>.
          For over two years, I committed to an iterative practice of daily code sketching in Processing and p5.js. All of this work was coded by hand, drawing on open source references, prior to the advent of AI coding tools.
        </p>
      </div>

      {/* Marquee Grid Section (full width) */}
      <MarqueeGrid setParallaxImages={setParallaxImages} />

      {/* Sticker Pack Project Details */}
      <div className="prose dark:prose-invert max-w-none mt-16">
        <h2 className="text-2xl font-semibold mb-4">Sticker Pack</h2>
      </div>

      {/* Column content below the grid */}
      <div className="prose dark:prose-invert max-w-none mt-8">
        <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-8">
          My digital artwork, <span className="font-semibold">Sticker Pack</span>, is a generative piece created with the p5.js JavaScript library. The work was featured on 85 billboards on NEO SHIBUYA TV in Tokyo, Japan. The animation runs 28 seconds in MP4 format at 1920 x 1080 resolution.
        </p>
        <div className="w-full flex justify-center mb-8">
          {/* Vertical video for Sticker Pack */}
          <div className="w-full max-w-2xl aspect-[1/1] bg-zinc-300 rounded-xl flex items-center justify-center overflow-hidden">
            <video src="/images/generative-art/shibuya.mov" controls className="w-full h-full object-cover rounded-xl" poster="/images/generative-art/0350.png">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 mb-8">
          <div className="w-full aspect-[16/9] bg-zinc-300 rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/images/generative-art/0350.png" alt="Generative artwork 0350" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-[16/9] bg-zinc-300 rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/images/generative-art/0414.png" alt="Generative artwork 0414" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-[16/9] bg-zinc-300 rounded-xl overflow-hidden flex items-center justify-center">
            <img src="/images/generative-art/0624.png" alt="Generative artwork 0624" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* EDAA Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Emerging Digital Artists Award</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-8">
            In 2022 I was selected to be Featured Artist for the Emerging Digital Artists Award in Canada.
          </p>
          <div className="flex flex-row gap-6 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full max-w-md aspect-[9/16] bg-zinc-300 rounded-xl flex items-center justify-center overflow-hidden shadow-lg"
                style={{ minWidth: '220px' }}
              >
                <img
                  src={`/images/generative-art/EDAA-process-${i}.png`}
                  alt={`EDAA Process IG Story ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center text-zinc-500 text-sm mt-2">Process breakdown for Space Fling artwork</div>
          <div className="prose dark:prose-invert max-w-none mt-6 mb-8">
            <p className="text-zinc-600 dark:text-zinc-200">Each step in the process was documented and shared as part of my daily code sketching practice. These stories highlight the evolution of Space Fling from initial concept to final artwork.</p>
            <p className="text-zinc-600 dark:text-zinc-200">Experimentation and iteration were key to developing the visual language and interactive elements of the piece.</p>
          </div>
        </div>

        {/* Space Fling Link */}
        <div className="prose dark:prose-invert max-w-none mb-8">
          <a
            href="https://cyberia.codes/space-fling.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            View Space Fling Interactive <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Final Space Fling Artwork - Full Width */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-2 sm:px-4 md:px-8 py-8">
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-center mb-2">
              <img
                src="/images/generative-art/space-fling-01.jpg"
                alt="Space Fling Artwork"
                className="w-full max-w-7xl aspect-[16/7] object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="text-zinc-500 text-sm mb-2 w-full text-left max-w-7xl mx-auto">Final Space Fling artwork</div>
          </div>
        </div>

        {/* Fermented Fruit Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Fermented Fruit</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-8">
            Fermented Fruit is a generative art series created for Art Blocks and rendered in real-time in the browser. The project explores cellular automata, grid subdivisions, and fruit-inspired color palettes to create unique, evolving compositions.
          </p>
          <div className="flex flex-row gap-6 justify-center mb-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/16] bg-zinc-300 rounded-xl flex items-center justify-center overflow-hidden shadow-lg"
                style={{ minWidth: '220px' }}
              >
                <img
                  src={`/images/generative-art/IG-fruit-${i}.jpg`}
                  alt={`Fermented Fruit IG Story ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center text-zinc-500 text-sm mb-6">Process breakdown for Fermented Fruit</div>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-8">
            The project features the simulated lifeforms of cellular automata that evolve and shapeshift down an asymmetrical grid. The final artwork juxtaposes a number of textured cellular automata patterns against one another within a singular composition. The title <span className="font-semibold">Fermented Fruit</span> emerges from the cellular patterns that are the primary subject of the series. The patterns produced by growing cellular automata of simulated microbes or mold evoke the process of fermentation.
          </p>
          <div className="flex flex-col gap-2 w-full max-w-2xl mx-auto mb-8">
            <a 
              href="https://www.artblocks.io/collections/presents/projects/0x7f6b468b54c6e2b3e3e2c2b2e2e2e2e2e2e2e2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              View on Art Blocks <span aria-hidden="true">↗</span>
            </a>
            <a 
              href="https://cyberia.codes/fruit.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              View Fermented Fruit Interactive <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex flex-row gap-6 justify-center mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full max-w-2xl aspect-[2/3] bg-zinc-300 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl"
                style={{ minWidth: '320px' }}
              >
                <img
                  src={`/images/generative-art/fruit-${i}.png`}
                  alt={`Fermented Fruit Poster ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Misc Artwork Grid Section */}
      <section className="mt-24 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Misc. Artworks</h2>
        <RandomMiscArtworkGrid usedImages={parallaxImages} />
      </section>
    </main>
  );
}

// Helper to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Custom hook to get number of columns based on screen size
function useResponsiveColumns() {
  const [columns, setColumns] = React.useState(1);
  useEffect(() => {
    function updateColumns() {
      if (window.innerWidth >= 1536) setColumns(6); // xl
      else if (window.innerWidth >= 1280) setColumns(5); // lg
      else if (window.innerWidth >= 768) setColumns(3); // md
      else if (window.innerWidth >= 640) setColumns(2); // sm
      else setColumns(1);
    }
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);
  return columns;
}

function MarqueeGrid({ setParallaxImages }: { setParallaxImages: (imgs: string[]) => void }) {
  const [shuffledArtworks, setShuffledArtworks] = React.useState<string[]>([]);
  
  // 26 artworks for the marquee
  const artworkImages = Array.from({ length: 26 }, (_, i) => `/images/generative-art/artwork-${i + 3}.png`);

  // Shuffle on mount
  useEffect(() => {
    setShuffledArtworks(shuffleArray(artworkImages));
    // eslint-disable-next-line
  }, []);

  // After calculating shuffledArtworks:
  useEffect(() => {
    setParallaxImages(shuffledArtworks);
  }, [shuffledArtworks, setParallaxImages]);

  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: '#000000', // Black background
      }}
    >
      {/* First Marquee Row */}
      <div className="mb-8">
        <Marquee direction="left" speed={8}>
          {shuffledArtworks.slice(0, 8).map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[260px] h-[260px] rounded-lg shadow-lg overflow-hidden mx-4 bg-zinc-700 flex-shrink-0"
            >
              <img
                src={src}
                alt="Artwork"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second Marquee Row */}
      <div className="mb-8">
        <Marquee direction="right" speed={6}>
          {shuffledArtworks.slice(8, 16).map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[260px] h-[260px] rounded-lg shadow-lg overflow-hidden mx-4 bg-zinc-700 flex-shrink-0"
            >
              <img
                src={src}
                alt="Artwork"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Third Marquee Row */}
      <div>
        <Marquee direction="left" speed={7}>
          {shuffledArtworks.slice(16, 24).map((src, i) => (
            <div
              key={`row3-${i}`}
              className="w-[260px] h-[260px] rounded-lg shadow-lg overflow-hidden mx-4 bg-zinc-700 flex-shrink-0"
            >
              <img
                src={src}
                alt="Artwork"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function getArtworkFilenames(start: number, end: number): string[] {
  return Array.from({ length: end - start + 1 }, (_, i) => `/images/generative-art/artwork-${i + start}.png`);
}

function getRandomUnusedImages(used: string[], count: number): string[] {
  const all = getArtworkFilenames(2, 39);
  const unused = all.filter(img => !used.includes(img));
  // Shuffle unused
  for (let i = unused.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unused[i], unused[j]] = [unused[j], unused[i]];
  }
  return unused.slice(0, count);
}

function RandomMiscArtworkGrid({ usedImages }: { usedImages: string[] }) {
  // 10 images: 6 for 3x2 grid, 4 for 2x2 grid
  const imagesRef = React.useRef<string[] | null>(null);
  if (!imagesRef.current) {
    imagesRef.current = getRandomUnusedImages(usedImages, 10);
  }
  const images = imagesRef.current;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* First two rows: 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        {images.slice(0, 3).map((src, i) => (
          <div key={src} className="aspect-square bg-zinc-300 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={src} alt={`Misc Artwork ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.slice(3, 6).map((src, i) => (
          <div key={src} className="aspect-square bg-zinc-300 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={src} alt={`Misc Artwork ${i + 4}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {/* Next two rows: 2 columns, square images */}
      <div className="grid grid-cols-2 gap-4">
        {images.slice(6, 8).map((src, i) => (
          <div key={src} className="aspect-square bg-zinc-300 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={src} alt={`Misc Artwork ${i + 7}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.slice(8, 10).map((src, i) => (
          <div key={src} className="aspect-square bg-zinc-300 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={src} alt={`Misc Artwork ${i + 9}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
} 