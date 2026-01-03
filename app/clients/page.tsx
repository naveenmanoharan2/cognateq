"use client";

export default function Clients() {
  return (
    <main className="pt-40 min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <section className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight 
                         bg-gradient-to-r from-blue-600 to-indigo-600 
                         bg-clip-text text-transparent mb-4">
            Our Clients
          </h1>

          <p className="text-lg text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto">
            We work with enterprises and high-growth organisations across UAE and India,
            delivering cloud, data, and AI solutions that actually scale.
          </p>
        </section>

        {/* Clients Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Client Card */}
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                          border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              BFSI Enterprise (UAE)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Cloud migration, OCI data platform, compliance-driven architecture
              aligned with UAE data residency norms.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                          border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Consulting Major (Spain)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Large-scale data pipelines, real-time analytics, and AI-driven
              customer insights on GCP.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
                          border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Retail & E-commerce
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Demand forecasting, recommendation engines, and cloud cost
              optimisation at scale.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="text-center mt-24 py-16 rounded-2xl 
                            bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Want to work with us?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Let’s discuss how we can deliver real outcomes for your business.
          </p>

          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-white text-blue-700 
                       font-medium hover:bg-zinc-200 transition-all"
          >
            Contact Us
          </a>
        </section>

      </div>
    </main>
  );
}
