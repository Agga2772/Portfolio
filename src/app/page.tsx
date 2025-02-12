import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I am Agga Aung</h1>
      <p className="text-lg text-gray-300 mb-6">B.Sc. (Hons) Information Technology Graduate of the University of Huddersfield </p>
      <div className="flex gap-4">
        <Link href="/projects" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500">
          My Projects
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500">
          Contact Me
        </Link>
      </div>
    </main>
  );
}

