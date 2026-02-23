"use client";

interface UserCardProps {
  username: string;
  pronouns?: string;
  sexuality?: string;
  gender?: string;
  flags?: string[];
  avatarUrl?: string;
}

export default function UserCard({
  username,
  pronouns,
  sexuality,
  gender,
  flags,
  avatarUrl,
}: UserCardProps) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <img
        src={avatarUrl || "/default-avatar.png"}
        alt={username}
        className="w-24 h-24 rounded-full object-cover mb-2"
      />
      <h3 className="text-xl font-semibold">{username}</h3>
      {pronouns && <p className="text-gray-500 text-sm">{pronouns}</p>}
      {sexuality && <p className="text-gray-500 text-sm">{sexuality}</p>}
      {gender && <p className="text-gray-500 text-sm">{gender}</p>}
      <div className="flex flex-wrap gap-1 mt-2">
        {flags?.map((flag) => (
          <span
            key={flag}
            className="px-2 py-1 bg-blue-200 text-blue-700 text-xs rounded"
          >
            {flag}
          </span>
        ))}
      </div>
    </div>
  );
}
