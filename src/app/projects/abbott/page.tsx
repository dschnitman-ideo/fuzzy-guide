import React from 'react';
import Link from 'next/link';

export default function AbbottProject() {
  return (
    <main className="max-w-2xl mx-auto px-8 py-20">
      <Link href="/" className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Abbott Diabetes Care</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            Diabetes is a growing global health challenge. Today, hundreds of millions of adults are living with the disease—and the number continues to rise rapidly. In the U.S., it has become the most widespread chronic condition, touching nearly half of all Americans either through diabetes or prediabetes. This isn't just a statistic—it's a reflection of how deeply this condition impacts individuals, families, and communities.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            Abbott's FreeStyle Libre is a sensor-based glucose monitoring system that continuously measures your glucose and helps you understand how food, medication, and exercise can affect your glucose. So, you can manage your diabetes with more confidence.
          </p>
        </section>

        {/* Project Context Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Context</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            IDEO partnered with Abbott Diabetes Care (ADC) to create a unified design system addressing the growing complexities of diabetes care. IDEO also set out to improve collaboration, processes, and ways of working in and beyond the ADC product and design teams.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            Through research, co-creation, and strategic design, IDEO helped Abbott become more patient-centered in their approach to designing new products & services, helping to position ADC to better compete in the diabetes care space.
          </p>
        </section>

        {/* Information Architecture Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Information Architecture</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            [Figma link here]
          </p>
          
          <h3 className="text-xl font-semibold mb-3">User Journey Mapping</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            We started laying out the user journeys for the three products by asking about:
          </p>
          <ul className="list-disc list-inside text-lg text-zinc-600 dark:text-zinc-200 mb-6 space-y-2">
            <li>User Needs & Goals</li>
            <li>User Sentiment</li>
            <li>User Actions</li>
            <li>Challenges & Opportunities</li>
            <li>Key Screens</li>
          </ul>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            Creating multiple journey maps allowed us to identify and strategize for key moments in the product experience or service we are designing.
          </p>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            By the end of this process we had a combined user journey that amalgamates three distinct user journeys (FSL, O&B, DG) into a unified view. One of our goals was to map out an overall user journey with a shared core loop inspired by Nir Eyal's HOOK canvas.
          </p>

          <h3 className="text-xl font-semibold mb-3">Core Loop</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            Trigger → Monitor → Action → Reward → Investment → Adjustments
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Combined User Journey</h3>
          <ul className="list-disc list-inside text-lg text-zinc-600 dark:text-zinc-200 mb-6 space-y-2">
            <li>Discovery - finding out about FSL and its features</li>
            <li>Onboarding - account and feature setup, notifications</li>
            <li>In-App (core loop) - HOOK model</li>
            <li>Continuous Improvement</li>
            <li>Sensor - expected lapse, unexpected lapse and ordering</li>
            <li>Delivering value through the sensor lapse</li>
          </ul>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            Steps: Discovery, Setting Up, Onboarding, Monitoring (readability), Reflection (mental model), Action / Reaction, Update Habits (Long term), Sensor Lapse (until new sensor), Continuous Engagement with App, Future States
          </p>
        </section>

        {/* Design System Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Design System</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-6">
            I joined the ADC workstream at the end of the design phase and helped ensure consistency and accuracy as we moved into implementation with a contractor design team.
          </p>

          <h3 className="text-xl font-semibold mb-3">Inventory + Audit</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            The design team began by taking a comprehensive inventory of UI components used across all products. Each variant was categorized and examined in context to understand how and where it was being used. This laid the groundwork for identifying inconsistencies and redundancies across the ecosystem.
          </p>
          <ul className="list-disc list-inside text-lg text-zinc-600 dark:text-zinc-200 mb-6 space-y-2">
            <li>Cross-product UI Inventory</li>
            <li>UI categorization</li>
            <li>Use case definition</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Consolidation</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            Next, the team consolidated components into "product-agnostic" elements to form the foundation of the new design system. These were evaluated for regulatory compliance, technical feasibility, and design requirements, ensuring a unified starting point for all teams.
          </p>
          <ul className="list-disc list-inside text-lg text-zinc-600 dark:text-zinc-200 mb-6 space-y-2">
            <li>Use case alignment</li>
            <li>UX recommendations</li>
            <li>UI systemization</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Design</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            Designers aligned on scalable system standards, refining components and auditing designs across products. Documentation and Figma components were created as a "kit of parts" to support consistency and ease of use across teams.
          </p>
          <ul className="list-disc list-inside text-lg text-zinc-600 dark:text-zinc-200 mb-6 space-y-2">
            <li>Design team audit</li>
            <li>Design refinement</li>
            <li>Figma Component Design</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Implementation</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-200 mb-4">
            With consistent components and guidelines in place, developers began implementing the system across products. The focus was on scaling UI for broader use while reintegrating it into flagship experiences and onboarding additional apps.
          </p>
          <ul className="list-disc list-inside text-lg text-zinc-600 dark:text-zinc-200 mb-6 space-y-2">
            <li>Callstack Development</li>
            <li>LLU implementation</li>
            <li>North Star re-integration</li>
            <li>O&B + Muse implementation</li>
          </ul>
        </section>

        {/* Footnote */}
        <section className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <p className="text-sm text-zinc-500 dark:text-zinc-200">
            [1] Source: Diabetes statistics and impact data
          </p>
        </section>
      </div>
    </main>
  );
} 