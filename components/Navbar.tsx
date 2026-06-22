// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <Link href="/">
        <img 
          src="/logo.png" 
          alt="Calico Goods Logo" 
          className="h-10 w-auto" // Change h-10, h-12, or h-14 to find the best fit
        />
      </Link>
      <div className="space-x-8 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
