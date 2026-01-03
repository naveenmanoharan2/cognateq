export default function ServicesSection() {
  const items = [
    {
      title: "AI Solutions",
      desc: "GenAI, RAG pipelines, LLM integration, automation.",
    },
    {
      title: "Data Engineering",
      desc: "Pipelines, lakehouse, ETL/ELT, governance.",
    },
    {
      title: "Cloud Architecture",
      desc: "DevOps, automation, security, scalability.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((i) => (
            <div key={i.title} className="border border-gray-200 rounded-xl p-8 hover:shadow-sm transition">
              <h3 className="text-xl font-semibold text-gray-900">{i.title}</h3>
              <p className="mt-3 text-gray-500">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
