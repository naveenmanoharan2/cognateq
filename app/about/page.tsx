export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src="/cogneteq-logo.png"
          alt="Cogneteq Logo"
          className="h-24 w-auto sm:h-32 object-contain"
        />
      </div>

      <h1 className="text-4xl font-semibold text-gray-900 text-center">
        About Cogneteq
      </h1>

      <p className="mt-6 text-gray-600 text-lg text-center">
        We are a data &amp; AI engineering company helping organizations
        modernize their platforms, automate workflows, and unlock intelligence
        at scale.
      </p>
    </div>
  );
}
