// app/page.js
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-72px)]">
      {/* Background image */}
      <Image
        src="/eidrbg.png" // put this file in /public/eidrbg.png
        alt="Eidr background"
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Eidr watermark logo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <Image
          src="/eidr.png" // /public/eidr.png
          alt="Eidr watermark"
          width={520}
          height={520}
          className="opacity-10 select-none"
          priority
        />
      </div>

      {/* Centered content */}
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Learn, build & share <span className="text-white/80">AI knowledge</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Eidrspacee — a black &amp; white, distraction-free community for posts, comments,
          groups and learning together.
        </p>

        <div className="mt-10">
          {/* CTA goes to login first */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Start your journey
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
