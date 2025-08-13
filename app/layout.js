import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="flex items-center p-4 border-b border-gray-700">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/eidr.png"
              alt="Eidr Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold">Eidr</span>
          </Link>

          {/* Navigation Links */}
          <nav className="ml-10 flex space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/groups" className="hover:underline">
              Groups
            </Link>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
