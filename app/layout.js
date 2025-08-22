// app/layout.js
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Eidrspacee — AI Blog Social",
  description: "Share AI knowledge and learn together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-black text-white antialiased">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/eidr.png"
                alt="Eidrspacee logo"
                width={32}
                height={32}
                priority
                className="h-8 w-8 object-contain"
              />
              <span className="font-semibold tracking-wide group-hover:opacity-90 transition">
                Eidrspacee
              </span>
            </Link>

            <div className="flex items-center gap-5 text-sm">
              <Link className="hover:underline underline-offset-4" href="/">Home</Link>
              <Link className="hover:underline underline-offset-4" href="/groups">Groups</Link>
              <Link className="hover:underline underline-offset-4" href="/courses">Courses</Link>
              <Link className="hover:underline underline-offset-4" href="/profile">Profile</Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="border-t border-white/10 text-white/60 text-sm py-6 text-center">
          Eidrspacee — Black &amp; White. Built for AI knowledge sharing.
        </footer>
      </body>
    </html>
  );
}
