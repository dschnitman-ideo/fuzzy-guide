import React from 'react';
import Link from 'next/link';

export default function GenerativeArtProject() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Generative Art</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          [Project description coming soon]
        </p>
        
        <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 mb-8">
          {/* Placeholder for project image */}
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          [Project details coming soon]
        </p>
      </div>
    </main>
  );
} 