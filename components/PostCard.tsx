"use client";

interface PostProps {
  content: string;
  imageUrl?: string;
  authorName: string;
  createdAt: string;
  likes: number;
}

export default function PostCard({
  content,
  imageUrl,
  authorName,
  createdAt,
  likes,
}: PostProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="font-medium">{authorName}</p>
      <p className="mt-2">{content}</p>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="post image"
          className="mt-2 rounded max-h-60 object-cover"
        />
      )}
      <div className="text-gray-500 text-sm mt-2 flex justify-between">
        <span>{new Date(createdAt).toLocaleString()}</span>
        <span>❤️ {likes}</span>
      </div>
    </div>
  );
}
