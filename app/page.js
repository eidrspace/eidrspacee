"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-white/15 p-4 bg-black/30">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-white/70 text-sm">by {post.author}</p>
      <p className="mt-3 whitespace-pre-wrap">
        {post.content.slice(0, 180)}
        {post.content.length > 180 ? "…" : ""}
      </p>
      <Link href={`/post/${post.id}`} className="text-sm underline mt-3 inline-block">
        Read more →
      </Link>
    </article>
  );
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("You");

  async function fetchPosts() {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  async function createPost() {
    if (!title.trim() || !content.trim()) return;
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author }),
    });
    if (res.ok) {
      setTitle("");
      setContent("");
      fetchPosts();
    } else {
      const err = await res.json().catch(() => ({}));
      alert(err.error || "Failed to create post");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* Composer */}
      <div className="rounded-2xl border border-white/15 p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Create a post</h2>
        <input
          className="w-full mb-2 bg-transparent border border-white/15 rounded p-2 placeholder-white/40"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={5}
          className="w-full bg-transparent border border-white/15 rounded p-2 placeholder-white/40"
          placeholder="Write your story…"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="mt-3 flex items-center justify-between">
          <input
            className="bg-transparent border border-white/15 rounded p-2 text-sm"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            onClick={createPost}
            className="rounded border border-white px-4 py-2 hover:bg-white hover:text-black"
          >
            Publish
          </button>
        </div>
      </div>

      {/* Feed */}
      {loading ? (
        <p className="text-white/70">Loading…</p>
      ) : posts.length === 0 ? (
        <p className="text-white/70">No posts yet. Write your first!</p>
      ) : (
        <div className="space-y-6">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      )}
    </>
  );
}
