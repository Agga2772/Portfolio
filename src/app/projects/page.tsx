import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">💰 BudgetBuddy – Personal Finance App</h2>
          <p className="text-gray-300 mt-2">
            A PHP & MySQL-based budgeting app to help users track expenses and set financial goals.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="/projects/budgetbuddy" className="text-blue-400 hover:underline">🔍 View Project Lifecycle</Link>
            <a href="https://github.com/Agga2772/BudgetBuddy" className="text-blue-400 hover:underline">🔗 GitHub Repo</a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">📍 Convention Explorer – Event Finder App</h2>
          <p className="text-gray-300 mt-2">
            A mobile app that helps users find and track conventions worldwide using mapping technology.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="/projects/conventionfinder" className="text-blue-400 hover:underline">🔍 View Project Lifecycle</Link>
            <a href="https://github.com/Agga2772/ConventionFinder" className="text-blue-400 hover:underline">🔗 GitHub Repo</a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">📈 Digital Marketing Strategy – Three Fiends Brewhouse</h2>
          <p className="text-gray-300 mt-2">
            Developed a **strategic marketing plan** for Three Fiends Brewhouse,  
            focusing on **SEO, email marketing, and social media growth**.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="/projects/marketing-strategy" className="text-blue-400 hover:underline">
              🔍 View Project Details
            </a>
            <a href="/files/marketing-report.pdf" download className="text-blue-400 hover:underline">
              📄 Download Report
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


