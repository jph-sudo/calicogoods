import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F0] font-sans text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
