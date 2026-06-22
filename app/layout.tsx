import Navbar from '../components/Navbar';
import './globals.css';

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Set the background to your new F0EEE4 color */}
      <body className="bg-[#F0EEE4] font-sans text-[#36454F]"> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}
}
