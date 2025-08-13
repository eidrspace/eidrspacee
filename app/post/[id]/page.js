export default function PostPage({ params }) {
  const { id } = params;

  // In the future we'll fetch from DB using the id.
  const mock = {
    welcome: {
      title: "Welcome to Eidr",
      author: "Admin",
      content:
        "This is a mock post.\nSoon we'll connect a database so posts persist.\nBlack & white forever.",
    },
    "rag-notes": {
      title: "RAG notes for production",
      author: "Ada",
      content:
        "Chunk sizes, overlap, embeddings choice, rerankers, and eval harness basics.",
    },
  };

  const post = mock[id] || {
    title: "Post not found",
    author: "System",
    content: "The post you requested does not exist (yet).",
  };

  return (
    <article className="rounded-2xl border border-white/15 p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-white/70 mb-4">by {post.author}</p>
      <p className="whitespace-pre-wrap">{post.content}</p>
    </article>
  );
}
