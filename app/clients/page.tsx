"use client";

import { useState } from "react";

export default function ClientsPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/cogneteq-logo.png"
              alt="Cogneteq Logo"
              className="h-28 w-auto sm:h-32"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8 text-zinc-700 dark:text-zinc-300 font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden text-zinc-700 dark:text-zinc-300 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="sm:hidden flex flex-col px-6 pb-4 space-y-3 text-zinc-700 dark:text-zinc-300">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="#clients" className="hover:text-blue-600">Clients</a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-full bg-blue-600 text-white w-fit hover:bg-blue-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ================= MAIN ================= */}
      <main className="pt-48 min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900 px-6 py-20 flex justify-center">
        <div className="max-w-6xl w-full">

          {/* Hero */}
          <section className="text-center mb-28">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight 
                           bg-gradient-to-r from-blue-600 to-indigo-600 
                           bg-clip-text text-transparent mb-4">
              Transforming Businesses with Cloud, Data & AI
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto">
              We help organisations modernize cloud infrastructure, build scalable
              data platforms, and deploy real-world AI solutions.
            </p>

            <div className="flex justify-center mt-8">
              <a
                href="/contact"
                className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                Book a Consultation
              </a>
            </div>
          </section>

          {/* Cloud Providers */}
          <section className="flex flex-wrap justify-center gap-8 mb-24 opacity-80">
            <img src="/azure.png" alt="Azure" className="h-16 dark:invert" />
            <img src="/gcp.png" alt="GCP" className="h-16 dark:invert" />
          </section>

          {/* ================= CLIENTS ================= */}
          <section id="clients" className="mb-28">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
              Our Clients
            </h2>

            <p className="text-center text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
              We partner with enterprises and fast-growing organisations across UAE,
              India, and Europe, delivering secure and scalable platforms.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* BFSI UAE */}
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  BFSI Enterprise – UAE
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  Cloud migration, secure data platforms, and architectures aligned
                  with regional compliance requirements.
                </p>
              </div>

              {/* IDOM */}
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                              border border-zinc-200 dark:border-zinc-800
                              flex flex-col items-center text-center">
               <img
  src="/clients/idom.png"
  alt="IDOM Corporation Logo"
  className="h-20 sm:h-24 lg:h-28 w-auto mb-6 object-contain 
             bg-white/90 dark:bg-white 
             px-4 py-3 rounded-lg"
/>



                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                (Spain)
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  Independent global consulting, engineering, and architecture firm 
                  at the service of our clients. 
                </p>
              </div>

              
               {/* MWAN */}
        {/* ================= CLIENTS ================= */}
<section id="clients" className="mb-28">
  <h2 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
    Our Clients
  </h2>

  <p className="text-center text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
    We partner with enterprises and government organisations across UAE,
    Saudi Arabia, India, and Europe, delivering cloud, data, and AI platforms
    built for scale and compliance.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* MWAN Saudi */}
    <div
      className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                 border border-zinc-200 dark:border-zinc-800
                 flex flex-col items-center text-center"
    >
<img
  src="/clients/mwan.png"
  alt="MWAN Saudi Arabia Logo"
  className="max-w-[280px] w-full h-auto mb-6 
             bg-white dark:bg-white 
             px-4 py-3 rounded-lg block object-contain"
/>


      <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
        MWAN – Saudi Arabia
      </h3>

      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">
        Saudi Arabia Government Entity
      </p>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        National waste management authority focused on regulating and supervising
        waste management activities, encouraging investment, and advancing
        circular economy principles to support sustainable development goals.
      </p>
    </div>

    {/* IDOM */}
    <div
      className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                 border border-zinc-200 dark:border-zinc-800
                 flex flex-col items-center text-center"
    >
      <img
        src="/clients/idom.png"
        alt="IDOM Corporation Logo"
        style={{ height: "120px" }}
        className="w-auto mb-6 object-contain 
                   bg-white/90 dark:bg-white 
                   px-6 py-4 rounded-lg block"
      />

      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        IDOM (Spain)
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        Global consulting and engineering engagement involving cloud data
        platforms, analytics, and enterprise AI solutions.
      </p>
    </div>

    {/* Retail */}
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                    border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        Retail & E-commerce
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        Demand forecasting, recommendation systems, and cost-optimised
        cloud-native data platforms.
      </p>
    </div>

  </div>
</section>


            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to accelerate your cloud & AI journey?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Speak with our consultants today.
            </p>

            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-blue-700 font-medium hover:bg-zinc-200"
            >
              Contact Us
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
