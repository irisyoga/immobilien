
"use client"

import Link from "next/link";
import Image from "next/image";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Фото */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-md">
            {/* <Image src="/avatar.jpg" alt="" fill className="object-cover" /> */}
          </div>
        </div>

        {/* Текст */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold">Iryna Haber</h1>
          <p className="text-gray-500">Frontend Developer</p>

          <p className="mt-4 text-gray-600">
            I'm a beginner frontend developer learning Next.js and Tailwind CSS.
            I love creating beautiful and user-friendly interfaces.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="mailto:gaber.ira@gmail.com"
              className="px-4 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-300 transition"
            >
              Email
            </a>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-sm text-gray-500 hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
