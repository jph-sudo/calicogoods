// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // Set the navbar background to match the site and text to charcoal
    <nav className="flex items-center justify-between p-6 bg-[#F0EEE4] text-[#36454F]">
      <Link href="/">
        <img src="/logo.png" alt="Calico Goods Logo" className="h-12 w-auto" />
      </Link>
      <div className="space-x-8 font-sans text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
