import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calico Goods',
  description: 'Professional console refurbishment with a focus on sustainability.',
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
