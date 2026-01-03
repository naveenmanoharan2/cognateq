export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-semibold text-gray-900">Contact Us</h1>

      <p className="mt-6 text-gray-600 text-lg">
        Send us a message and we’ll get back within 24 hours.
      </p>

      <form className="mt-10 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="w-full border px-4 py-3 rounded-lg h-32"
        />
        <button className="px-8 py-4 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
