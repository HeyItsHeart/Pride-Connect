"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-pink-500">
        PrideConnect+
      </Link>
      <div className="flex gap-4">
        <Link href="/explore" className="text-gray-700 hover:text-pink-500">
          Explore
        </Link>
        <Link href="/femboy-lounge" className="text-gray-700 hover:text-pink-500">
          Femboy Lounge
        </Link>
        <Link href="/(auth)/login" className="text-gray-700 hover:text-pink-500">
          Login
        </Link>
        <Link href="/(auth)/register" className="text-gray-700 hover:text-pink-500">
          Register
        </Link>
      </div>
    </nav>
  );
}
