import Link from "next/link";
import "./globals.css";
import Footer from "./Footer";

export const metadata = {
  title: "Agga Aung - Web Developer & IT Graduate",
  description: "Portfolio of Agga Aung, a web developer and IT graduate from the University of Huddersfield. View my projects and contact me.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <nav className="p-4 bg-gray-800">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          </ul>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}




