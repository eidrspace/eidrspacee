"use client";
import { useState } from "react";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-white/15 p-4 bg-black/30">
      <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
      <p className="text-white/70 text-sm mb-3">by {post.author}</p>
      <p className="whitespace-pre-wrap mb-3">{post.excerpt}</p>
      <Link
        href={`/post/${post.id}`}
        className="text-sm underline hover:no-underline"
      >
        Read more →
      </Link>
    </article>
  );
}

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: "welcome",
      title: "Welcome to Eidr",
      author: "Admin",
      excerpt:
        "Share AI tips, code snippets, and learn together. This is mock data — we'll add a database later.",
    },
    {
      id: "rag-notes",
      title: "RAG notes for production",
      author: "Ada",
      excerpt:
        "Chunking, embeddings, reranking — quick notes and pitfalls to avoid in prod.",
    },
  ]);

  return (
    <>
      {/* Composer (mock) */}
      <div className="rounded-2xl border border-white/15 p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Create a post (mock)</h2>
        <div className="grid gap-2">
          <input
            className="w-full bg-transparent border border-white/15 rounded p-2 placeholder-white/40"
            placeholder="Post title"
          />
          <textarea
            rows={4}
            className="w-full bg-transparent border border-white/15 rounded p-2 placeholder-white/40"
            placeholder="Write your story…"
          />
          <button className="justify-self-end rounded border border-white px-4 py-2 hover:bg-white hover:text-black text-sm">
            Publish (disabled in mock)
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </>
  );
}
