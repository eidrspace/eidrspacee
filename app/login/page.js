// app/login/page.js
"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold">Log in</h1>
      <p className="mt-2 text-white/70">
        You need an account to continue. We’ll wire real auth next.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 space-y-4"
      >
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2 placeholder-white/40"
        />
        <button
          className="w-full rounded-md border border-white px-4 py-2 hover:bg-white hover:text-black transition"
          title="Coming soon"
        >
          Continue (coming soon)
        </button>
      </form>

      <div className="mt-6 text-sm text-white/60">
        <Link href="/" className="underline underline-offset-4">← Back to home</Link>
      </div>
    </div>
  );
}
