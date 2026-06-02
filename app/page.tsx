import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Welcome to Catalyst Core AI 🚀
        </h1>

        <p className="text-gray-700 text-lg">
          If you can see the gradient background, rounded card, shadow, and blue
          heading, then Tailwind CSS is working correctly.
        </p>

        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Tailwind Test Button
        </button>
      </div>
    </main>
  );
}