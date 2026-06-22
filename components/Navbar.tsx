// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // 'flex items-center justify-between' is the magic that creates the bar
    // 'w-full' ensures it spans the whole width of your page
    <nav className="flex w-full items-center justify-between px-8 py-6">
      <Link href="/">
        <img 
          src="/logo.png" 
          alt="Calico Goods Logo" 
          className="h-10 w-auto" 
        />
      </Link>
      
      {/* This holds your links in a nice row on the right */}
      <div className="flex gap-8 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
