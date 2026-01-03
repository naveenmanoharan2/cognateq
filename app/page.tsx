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
              className="h-28 w-auto sm:h-32"
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
<section id="clients" className="mb-28">
  <h2 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
    Our Clients
  </h2>

  <p className="text-center text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
    We partner with enterprises and fast-growing organisations across UAE and India,
    delivering cloud, data, and AI platforms that are built for scale and compliance.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                    border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        BFSI Enterprise – UAE
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        Google cloud migration, secure data platforms, and architectures aligned
        with Saudi data residency and regulatory requirements.
      </p>
    </div>

    <div className="p-6 bg-white dark:b-zinc-900 rounded-2xl shadow-md 
                    border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        IT Consulting  – Spain
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        Large-scale data engineering on GCP, real-time analytics, and AI-driven
        customer intelligence platforms.
      </p>
    </div>

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

            <a
              href="/contact"
              className="px-4 py-2 rounded-full bg-blue-600 text-white w-fit hover:bg-blue-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-48 min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900 px-6 py-20 flex justify-center">

        <div className="max-w-6xl w-full">

          {/* Hero Section */}
          <section className="text-center mb-28">

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight 
                           bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text 
                           text-transparent mb-4">
              Transforming Businesses with Cloud, Data & AI
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto">
              We help organisations modernize their cloud infrastructure, build 
              scalable data ecosystems, and deploy real-world AI solutions that 
              move the needle — not just generate hype.
            </p>

            <div className="flex justify-center mt-8">
              <a
                href="/contact"
                className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm 
                           font-medium hover:bg-blue-700 transition-all text-center"
              >
                Book a Consultation
              </a>
            </div>

          </section>

          {/* Cloud Provider Logos */}
          <section className="flex flex-wrap justify-center gap-8 mb-24 opacity-80">
            <img src="/azure.png" alt="Azure" className="h-16 dark:invert" />
            <img src="/gcp.png" alt="GCP" className="h-16 dark:invert" />
          </section>

          {/* Services Section */}
          <section className="mb-28">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Our Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Cloud Consulting</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Architecture design, cloud migration, DevOps, cost optimization and cloud-native engineering.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Data Platforms</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Data engineering, data lakes, real-time pipelines, warehousing and business intelligence.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">AI & GenAI Solutions</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  LLM apps, automation, cognitive search, predictive AI, and enterprise-grade GenAI adoption.
                </p>
              </div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="mb-28">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-10">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-black dark:text-white mb-2">Deep Technical Expertise</h4>
                <p className="text-zinc-700 dark:text-zinc-400">
                  A decade of experience across cloud engineering, large-scale data, and production-grade AI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-black dark:text-white mb-2">Built for Scale</h4>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Enterprise-grade architectures for BFSI, telecom, retail and large-scale digital platforms.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-black dark:text-white mb-2">Real-World Delivery</h4>
                <p className="text-zinc-700 dark:text-zinc-400">
                  No fluff. Only solutions that perform in real production environments.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-black dark:text-white mb-2">UAE & India Focused</h4>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Strong understanding of local compliance, data residency and enterprise requirements.
                </p>
              </div>
            </div>
          </section>
{/* Clients Section */}
<section id="clients" className="mb-28">
  <h2 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
    Our Clients
  </h2>

  <p className="text-center text-zinc-700 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
    We partner with enterprises and fast-growing organisations across UAE and India,
    delivering cloud, data, and AI platforms that are built for scale and compliance.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                    border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        Government Enterprise – Saudi
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        GCP cloud migration, secure data platforms, and architectures aligned
        with Saudi data residency and regulatory requirements.
      </p>
    </div>

    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                    border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        Telecom Major – India
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        Large-scale data engineering on GCP, real-time analytics, and AI-driven
        customer intelligence platforms.
      </p>
    </div>

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

        </div>
      </main>
    </>
  );
}
