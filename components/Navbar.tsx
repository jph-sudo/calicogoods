// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // 'flex' and 'justify-between' create the standard top-bar layout
    <nav className="flex items-center justify-between px-8 py-4">
      <Link href="/">
        <img 
          src="/logo.png" 
          alt="Calico Goods Logo" 
          className="h-10 w-auto" // Adjust h-10 to scale to your preference
        />
      </Link>
      
      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
