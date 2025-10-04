"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url) {
      alert("Please enter a valid URL");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await response.json();

      if (response.ok) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`);
        setUrl("");
        setShortUrl("");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error generating link");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    alert("Copied to clipboard ✅");
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-xl shadow-md flex flex-col gap-6">
      <h1 className="font-bold text-2xl text-gray-800">
        Trim your long URLs ✂️
      </h1>

      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={url}
          className="p-4 focus:outline-purple-400 border rounded-md"
          placeholder="🔗 Enter your long URL (e.g. https://example.com/article/...)"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shorturl}
          className="p-4 focus:outline-purple-400 border rounded-md"
          placeholder="✨ Custom short name (optional)"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          disabled={loading}
          className="bg-purple-500 hover:bg-purple-600 disabled:opacity-50 rounded-lg shadow-md p-3 text-white font-semibold transition"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {generated && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-6 text-center">
          <p className="text-gray-700 mb-2 font-medium">Your Trimmed URL 🎉</p>
          <Link
            href={generated}
            target="_blank"
            className="text-purple-600 font-semibold break-all"
          >
            {generated}
          </Link>
          <div className="mt-3 flex justify-center gap-3">
            <button
              onClick={copyToClipboard}
              className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg shadow-sm transition"
            >
              Copy
            </button>
            {/* Optional: add QR code later */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;
