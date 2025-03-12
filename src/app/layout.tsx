import Link from "next/link";
import Head from "next/head";
import "./globals.css"; // Ensure this file exists

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Agga Aung - Web Developer & IT Graduate</title>
        <meta name="description" content="Portfolio of Agga Aung, a web developer and IT graduate from the University of Huddersfield. View my projects and contact me." />
        <meta name="keywords" content="Agga Aung, Web Developer, IT Graduate, Leeds, Portfolio, Frontend Developer" />
        <meta name="author" content="Agga Aung" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Agga Aung - Web Developer Portfolio" />
        <meta property="og:description" content="Showcasing my projects and skills in web development and IT." />
        <meta property="og:url" content="https://agga-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://agga-portfolio.vercel.app/preview-image.png" />
      </Head>
      <body className="bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}


