// app/layout.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calico Goods',
  description: 'Professional console refurbishment with a focus on sustainability.',
  icons: {
    icon: '/favicon.ico', // Ensure this matches your file in the public folder
  },
};

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
