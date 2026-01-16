"use client";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
  src="/cogneteq-logo.png"
  alt="Cogneteq Logo"
  className="h-20 sm:h-24 md:h-28 w-auto"
/>

          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8 text-zinc-700 dark:text-zinc-300 font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden text-zinc-700 dark:text-zinc-300 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="sm:hidden flex flex-col px-6 pb-4 text-zinc-700 dark:text-zinc-300 font-medium space-y-3">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="#clients" className="hover:text-blue-600">Clients</a>
{/* Clients Section */}


            <a
              href="/contact"
              className="px-4 py-2 rounded-full bg-blue-600 text-white w-fit hover:bg-blue-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

<main className="pt-32 min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900">

  {/* HERO — FULL WIDTH */}
 {/* HERO — BACKGROUND IMAGE + GRADIENT OVERLAY */}
<section className="relative flex items-center justify-center text-center
                    min-h-[70vh] sm:min-h-[80vh] overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br
                  from-blue-700/90 via-indigo-700/85 to-blue-800/90" />

  {/* Content */}
  <div className="relative z-10 px-6 py-16 sm:py-20 max-w-4xl text-white">
    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
      Transforming Businesses with <br />
      <span className="text-white">Cloud, Data & AI</span>
    </h1>

    <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
      We help organisations across Continents modernize cloud platforms,
      build scalable data ecosystems, and deploy production-grade AI solutions.
    </p>

    <a
      href="/contact"
      className="inline-block px-8 py-3 rounded-full
                 bg-white text-blue-700 font-medium
                 hover:bg-zinc-200 transition-all"
    >
      Book a Consultation
    </a>
  </div>

</section>


  {/* REST OF PAGE — CONSTRAINED */}
  <div className="px-6 py-12 flex justify-center">
    <div className="max-w-6xl w-full">

     {/* Trusted Cloud Platforms */}
<section className="py-20 bg-zinc-100 dark:bg-zinc-900">
  <p className="text-center text-base sm:text-lg
                font-semibold uppercase tracking-widest
                text-zinc-700 dark:text-zinc-300 mb-12">
    Trusted Cloud Platforms
  </p>

  <div className="flex flex-wrap justify-center items-center gap-16 opacity-100">
    <img
      src="/azure.png"
      alt="Azure"
      className="h-14 sm:h-16 md:h-18 object-contain"
    />
    <img
      src="/gcp.png"
      alt="Google Cloud"
      className="h-14 sm:h-16 md:h-18 object-contain"
    />
    <img
      src="/aws.png"
      alt="AWS"
      className="h-14 sm:h-16 md:h-18 object-contain"
    />
    <img
      src="/oracle.png"
      alt="Oracle Cloud"
      className="h-14 sm:h-16 md:h-18 object-contain"
    />
  </div>
</section>

      {/* Our Expertise */}
      {/* (rest of your existing sections stay EXACTLY the same here) */}

    </div>
  </div>




          {/* Services Section */}
<section className="mb-28">
  <h2
    className="text-3xl font-bold mb-10
               bg-gradient-to-r from-blue-600 to-indigo-600
               bg-clip-text text-transparent"
  >
    Our Expertise
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Cloud Consulting */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-blue-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Soft glow */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                   opacity-0 hover:opacity-100 transition
                   pointer-events-none"
      />

      <div className="relative">
        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
          Cloud Consulting
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Architecture design, cloud migration, DevOps, cost optimization and
          cloud-native engineering.
        </p>
      </div>
    </div>

    {/* Data Platforms */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-indigo-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Soft glow */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-indigo-500/10 to-blue-500/10
                   opacity-0 hover:opacity-100 transition
                   pointer-events-none"
      />

      <div className="relative">
        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
          Data Platforms
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Data engineering, data lakes, real-time pipelines, warehousing and
          business intelligence.
        </p>
      </div>
    </div>

    {/* AI & GenAI Solutions */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-purple-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Soft glow */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-purple-500/10 to-indigo-500/10
                   opacity-0 hover:opacity-100 transition
                   pointer-events-none"
      />

      <div className="relative">
        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
          AI & GenAI Solutions
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          LLM apps, automation, cognitive search, predictive AI, and
          enterprise-grade GenAI adoption.
        </p>
      </div>
    </div>

  </div>
</section>

        {/* Why Choose Us */}
<section className="mb-28">
  <h2
    className="text-3xl font-bold mb-10
               bg-gradient-to-r from-blue-600 to-indigo-600
               bg-clip-text text-transparent"
  >
    Why Choose Us
  </h2>

  <div className="grid sm:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-blue-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative">
        <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
          Deep Technical Expertise
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">
          A decade of experience across cloud engineering, large-scale data,
          and production-grade AI.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-indigo-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative">
        <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
          Built for Scale
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">
          Enterprise-grade architectures for BFSI, telecom, retail,
          and large-scale digital platforms.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-blue-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative">
        <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
          Real-World Delivery
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">
          No fluff. Only solutions that perform in real production environments.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div
      className="relative p-8 rounded-2xl
                 bg-gradient-to-br from-white to-indigo-50
                 dark:from-zinc-900 dark:to-zinc-800
                 border border-zinc-200 dark:border-zinc-800
                 shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative">
        <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
          UAE & Global Focus
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">
          Strong understanding of local compliance, data residency,
          and enterprise requirements.
        </p>
      </div>
    </div>

  </div>
</section>

{/* Clients Section */}
<section id="clients" className="mb-28">
  <h2 className="text-3xl font-bold text-black dark:text-white mb-6 text-center">
    Our Clients
  </h2>

  <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
    Trusted by enterprises and institutions across all over the world.
  </p>

  <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-90">

    <img
      src="/clients/mwan.png"
      alt="MWAN Saudi Arabia"
      className="h-14 w-auto object-contain"
    />

    <img
      src="/clients/idom.png"
      alt="IDOM Spain"
      className="h-10 w-auto object-contain"
    />

    <img
      src="/clients/retail.png"
      alt="Retail & E-commerce"
      className="h-10 w-auto object-contain"
    />

  </div>
</section>


          {/* CTA Section */}
          <section className="text-center py-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to accelerate your cloud & AI journey?</h2>
            <p className="mb-8 text-lg opacity-90">Speak with our consultants today.</p>

            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-blue-700 font-medium hover:bg-zinc-200 transition-all"
            >
              Contact Us
            </a>
          </section>

        
      </main>
    </>
  );
}
