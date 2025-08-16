"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PostPage() {
  const { id } = useParams(); // ✅ works in client components
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [myComment, setMyComment] = useState("");

  async function loadPost() {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPost(Array.isArray(data) ? data.find((p) => p.id === id) : null);
  }

  async function loadComments() {
    const res = await fetch(`/api/comments/${id}`);
    const data = await res.json();
    setComments(Array.isArray(data) ? data : []);
  }

  async function addComment() {
    if (!myComment.trim()) return;
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id: id, author: "You", body: myComment }),
    });
    if (res.ok) {
      setMyComment("");
      loadComments();
    } else {
      const err = await res.json().catch(() => ({}));
      alert(err.error || "Failed to add comment");
    }
  }

  useEffect(() => {
    if (id) {
      loadPost();
      loadComments();
    }
  }, [id]);

  if (!post) return <p className="text-white/70">Loading post…</p>;

  return (
    <article className="rounded-2xl border border-white/15 p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-white/70 mb-4">by {post.author}</p>
      <p className="whitespace-pre-wrap">{post.content}</p>

      <h3 className="mt-6 font-semibold">Comments</h3>
      <div className="mt-2 space-y-2">
        {comments.length === 0 && (
          <p className="text-white/60 text-sm">No comments yet.</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="text-sm">
            <span className="font-medium">{c.author}</span>: {c.body}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 bg-transparent border border-white/20 rounded p-2 text-sm"
          placeholder="Write a comment…"
          value={myComment}
          onChange={(e) => setMyComment(e.target.value)}
        />
        <button
          onClick={addComment}
          className="rounded border border-white px-3 py-2 text-sm hover:bg-white hover:text-black"
        >
          Comment
        </button>
      </div>
    </article>
  );
}
