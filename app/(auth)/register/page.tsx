"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PRIDE_FLAGS = [
  "Gay",
  "Lesbian",
  "Bisexual",
  "Pansexual",
  "Trans",
  "Nonbinary",
  "Ace",
  "Intersex",
  "Polysexual",
  "Progress",
];

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [sexuality, setSexuality] = useState("");
  const [gender, setGender] = useState("");
  const [flags, setFlags] = useState<string[]>([]);
  const [isFemboy, setIsFemboy] = useState(false);

  const router = useRouter();

  const handleFlagToggle = (flag: string) => {
    setFlags((prev) =>
      prev.includes(flag) ? prev.filter((f) => f !== flag) : [...prev, flag]
    );
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        pronouns,
        sexuality,
        gender,
        flags,
        isFemboy,
      }),
    });

    const data = await res.json();
    if (data.ok) {
      alert("Account created successfully!");
      router.push("/(auth)/login");
    } else {
      alert(data.error || "Registration failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full border px-3 py-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Pronouns (e.g., he/him)"
          className="w-full border px-3 py-2 rounded"
          value={pronouns}
          onChange={(e) => setPronouns(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sexuality"
          className="w-full border px-3 py-2 rounded"
          value={sexuality}
          onChange={(e) => setSexuality(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender Identity"
          className="w-full border px-3 py-2 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {PRIDE_FLAGS.map((flag) => (
            <button
              type="button"
              key={flag}
              className={`px-3 py-1 rounded border ${
                flags.includes(flag)
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleFlagToggle(flag)}
            >
              {flag}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={isFemboy}
            onChange={(e) => setIsFemboy(e.target.checked)}
          />
          I am a Femboy
        </label>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
