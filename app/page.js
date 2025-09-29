// import Image from "next/image";
// import Link from "next/link";
// export default function Home() {
//   return (
//  <main>
//  <section className="grid grid-cols-2 h-[50vh]"> 
//   <div className=" flex flex-col gap-4 items-center justify-center ">
//     <p className="text-4xl font-bold">
// The best URL shortener
//     </p>
//     <p className="text-center">
//       With Trimly, you can easily create custom short links that are easy to remember and share.
//     </p>
//      <div className="justify-start flex gap-3">
//   <Link href="/shorten"><button className='bg-purple-400 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>Try Now</button></Link>
//   </div>
//   </div>
//   <div className=" flex justify-start relative">
// <Image alt="aan iamge" src={"/vector.jpg"} fill={true}/>
//   </div>
 
//  </section>
//  </main>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

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
     {/* Features Section */}
<section id="features" className="py-20 bg-gray-50 px-6 md:px-16 text-center">
  <h2 className="text-4xl font-bold text-gray-900 mb-12">✨ Features</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">🔗 Instant URL Shortening</h3>
      <p className="text-gray-600">
        Just paste your long URL and get a clean, short link instantly.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">✨ Custom Aliases</h3>
      <p className="text-gray-600">
        Optionally add a custom short name for your links — easy to remember!
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">📌 Copy & Share Instantly</h3>
      <p className="text-gray-600">
        Copy your short link with one click and share it anywhere — no logins required.
      </p>
    </div>
  </div>
</section>


     {/* Contact Section */}
<section id="contact" className="py-20 bg-gray-50 px-6 md:px-16 text-center">
  <h2 className="text-4xl font-bold text-gray-900 mb-6">📩 Contact Us</h2>
  <p className="text-gray-600 mb-8">
    Have questions or feedback? Reach out to us:
  </p>
  <p className="text-lg font-semibold text-gray-800 mb-4">m.prav1759@gmail.com</p>
  <button
    onClick={() => {
      navigator.clipboard.writeText("m.prav1759@gmail.com");
      alert("Email copied to clipboard ✅");
    }}
    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition"
  >
    📋 Copy Email
  </button>

  <div className="mt-6">
    <a
      href="https://github.com/pravallikaa4/Trimly"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-purple-400 hover:bg-purple-100 text-purple-600 px-6 py-3 rounded-lg shadow-md font-semibold transition"
    >
      ⭐ GitHub
    </a>
  </div>
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
