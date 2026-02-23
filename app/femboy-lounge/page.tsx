"use client";

import { useEffect, useState } from "react";

interface Femboy {
  id: string;
  username: string;
  pronouns?: string;
  sexuality?: string;
  gender?: string;
  flags?: string[];
  avatarUrl?: string;
}

export default function FemboyLoungePage() {
  const [femboys, setFemboys] = useState<Femboy[]>([]);

  useEffect(() => {
    fetch("/api/femboys")
      .then((res) => res.json())
      .then((data) => setFemboys(data.femboys || []));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Femboy Lounge 💖</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {femboys.length === 0 && <p>No femboys found.</p>}
        {femboys.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
          >
            <img
              src={user.avatarUrl || "/default-avatar.png"}
              alt={user.username}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{user.username}</h3>
            <p className="text-gray-500 text-sm">{user.pronouns}</p>
            <p className="text-gray-500 text-sm">{user.sexuality}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {user.flags?.map((flag) => (
                <span
                  key={flag}
                  className="px-2 py-1 bg-pink-200 text-pink-700 text-xs rounded"
                >
                  {flag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
