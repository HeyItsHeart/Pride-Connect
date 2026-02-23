"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PostCard from "@/components/PostCard";
import UserCard from "@/components/UserCard";

interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  likes: number;
}

interface User {
  id: string;
  username: string;
  pronouns?: string;
  sexuality?: string;
  gender?: string;
  flags?: string[];
  avatarUrl?: string;
}

export default function ProfilePage() {
  const params = useParams();
  const userId = params.id;
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data.user));

    fetch(`/api/users/${userId}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <UserCard
        username={user.username}
        pronouns={user.pronouns}
        sexuality={user.sexuality}
        gender={user.gender}
        flags={user.flags}
        avatarUrl={user.avatarUrl}
      />

      <h2 className="text-2xl font-bold mt-6 mb-4">Posts</h2>
      <div className="space-y-4">
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map((post) => (
          <PostCard
            key={post.id}
            content={post.content}
            imageUrl={post.imageUrl}
            authorName={user.username}
            createdAt={post.createdAt}
            likes={post.likes}
          />
        ))}
      </div>
    </div>
  );
}
