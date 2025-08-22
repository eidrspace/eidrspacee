"use client";
import Link from "next/link";
import SplineHero from "../components/SplineHero";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      <SplineHero />
      <div className="absolute inset-0 bg-black/30 -z-10" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-40 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Explore Eidrspacee in 3D
        </h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
          Learn, build &amp; share AI knowledge
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/80">
          Eidrspacee — a black &amp; white, distraction-free community for posts,
          comments, groups and learning together.
        </p>
        <div className="mt-10">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Start your journey →
          </Link>
        </div>
      </div>
    </section>
  );
}
