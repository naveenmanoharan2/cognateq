export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-white">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-6xl font-semibold tracking-tight text-gray-900">
          CØGNETEQ
        </h1>

        <p className="text-2xl mt-4 text-gray-600">
          Data. Intelligence. Impact.
        </p>

        <p className="text-lg mt-6 text-gray-500">
          We build scalable data platforms and modern AI solutions for enterprises in the UAE and India.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a className="px-6 py-3 bg-black text-white rounded-lg" href="/contact">
            Get Consultation
          </a>

          <a className="px-6 py-3 border border-gray-300 rounded-lg" href="/services">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
