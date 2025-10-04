import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 min-h-screen items-center px-6 md:px-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            The best <span className="text-purple-600">URL shortener</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            With <span className="font-semibold text-purple-500">Trimly</span>,
            you can create custom short links that are easy to remember, share,
            and track with analytics.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-lg shadow-lg font-semibold text-white">
                🚀 Try Now
              </button>
            </Link>
            <Link href="https://github.com/your-repo" target="_blank">
              <button className="border border-purple-400 hover:bg-purple-100 transition px-6 py-3 rounded-lg font-semibold text-purple-600">
                ⭐ GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center">
          <Image
            alt="Illustration"
            src="/vector.jpg"
            width={450}
            height={450}
            className="drop-shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔗 Shorten Links</h3>
            <p className="text-gray-600">
              Quickly shorten long URLs into clean, shareable links.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">✨ Custom Aliases</h3>
            <p className="text-gray-600">
              Create branded short links with custom names.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📊 Analytics</h3>
            <p className="text-gray-600">
              Track clicks, locations, and devices with detailed stats.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">👋 About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trimly was built with simplicity in mind. We believe that sharing links
          should be fast, simple, and smart. Our mission is to make online sharing
          more efficient, whether you're an individual, business, or startup.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">📩 Contact Us</h2>
        <p className="text-gray-600 mb-8">Have questions? Get in touch!</p>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border rounded-md focus:outline-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border rounded-md focus:outline-purple-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-4 border rounded-md focus:outline-purple-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-6 text-center mt-10">
        <p>© {new Date().getFullYear()} Trimly. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
