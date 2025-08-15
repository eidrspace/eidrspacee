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
    <html lang="en">
      <body suppressHydrationWarning className="bg-black text-white antialiased">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/eidr.png"
                alt="Eidrspacee logo"
                width={32}
                height={32}
                priority
                className="h-8 w-8 object-contain"
              />
              {/* ✨ Added sparkle here for test */}
              <span className="font-semibold tracking-wide">Eidrspacee </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/groups" className="hover:underline">Groups</Link>
              <Link href="/courses" className="hover:underline">Courses</Link>
              <Link href="/profile" className="hover:underline">Profile</Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 text-white/60 text-sm py-6 text-center">
          Eidrspacee — Black &amp; White. Built for AI knowledge sharing.
        </footer>
      </body>
    </html>
  );
}
