import Image from "next/image";

export default function ConventionFinder() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4"> ConventionFinder  Project Lifecycle</h1>

      <section className="max-w-2xl space-y-6">
        {/* Project Idea */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Project Overview & Problem</h2>
          <p className="text-gray-300 mt-2">
            Convention enthusiasts often struggle to find accurate and up-to-date event information.  
            ConventionFinder was developed to address this issue by providing a centralized platform 
            for users to search, discover, and track upcoming conventions worldwide.  
            The app integrates interactive maps and a filterable event database, allowing users  
            to plan their visits efficiently.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Frontend: HTML, CSS, JavaScript (Bootstrap, Leaflet.js)</li>
            <li>Backend: JSON-based data storage</li>
            <li>Mapping API: Leaflet.js (for interactive maps)</li>
            <li>UI Design: Figma (for wireframes and design)</li>
          </ul>
        </div>

        {/* Wireframes Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Design Process & Wireframes</h2>
          <p className="text-gray-300 mt-2">
            The design process began with low-fidelity wireframes sketched on paper to establish  
            the layout and navigation flow. These were refined using MarvelApp, allowing for  
            interactive mockups that simulated user interactions.  
            <br />
            Based on feedback from early testing, a new feature  Store Locator was introduced.  
            This helps users find nearby affordable stores, enhancing the apps value.  
            The final high-fidelity wireframes closely resemble the finished application.
          </p>

          {/* Wireframe Images */}
          <div className="flex flex-col gap-4 mt-4">
            <Image 
              src="/wireframes/con1.png" 
              alt="BudgetBuddy Wireframe 1"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/con2.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/con3.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200}  
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/con4.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200}  
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

       {/*Development Phases */}
       <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Development Phases</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Phase 1: Setting up JSON data storage for conventions</li>
            <li>Phase 2: Developing UI with Bootstrap and JavaScript</li>
            <li>Phase 3: Integrating Leaflet.js for interactive maps</li>
            <li>Phase 4: Adding search filters for event listings</li>
            <li>Phase 5: User testing & final optimizations</li>
          </ul>
        </div>

        {/*Challenges & Solutions*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
          <p className="text-gray-300 mt-2">
            <strong>Issue:</strong> Handling real-time event data without a dedicated backend.<br/>
            <strong>Solution:</strong> Used structured JSON files to store and retrieve event data,  
            allowing the app to remain lightweight and efficient.
          </p>
          <p className="text-gray-300 mt-2">
            <strong>Issue:</strong> Ensuring an intuitive user experience for navigation.<br/>
            <strong>Solution:</strong> Incorporated consistent UI elements and color schemes  
            to enhance usability.
          </p>
        </div>

        {/*Final Version & Deployment */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Final Version & Deployment</h2>
          <p className="text-gray-300 mt-2">
            The final version of ConventionFinder is designed for seamless event discovery,  
            featuring an intuitive UI, map-based search, and event filtering.  
            <br />The project is available on GitHub.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/Agga2772/ConventionExplorer" className="text-blue-400 hover:underline">🔗 GitHub Repo</a>
          </div>
        </div>
      </section>
    </main>
  );
}


