import Image from "next/image";

export default function BudgetBuddy() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">BudgetBuddy  Project Lifecycle</h1>

      <section className="max-w-2xl space-y-6">
        {/*Project Overview*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Project Overview & Problem</h2>
          <p className="text-gray-300 mt-2">
            Many individuals struggle to effectively manage their personal finances.  
            BudgetBuddy was developed as a user-friendly budgeting tool that allows users to  
            track expenses, set budgets, and visualize spending patterns.  
            The goal was to create an intuitive, visually appealing application that  
            simplifies financial management for users of all backgrounds.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Frontend: HTML, CSS, Bootstrap</li>
            <li>Backend: PHP, MySQL</li>
            <li>Authentication: Custom PHP-based login system</li>
            <li>Data Visualization: Chart.js</li>
          </ul>
        </div>

        {/* Wireframes & UI Design*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Design Process & Wireframes</h2>
          <p className="text-gray-300 mt-2">
            The design process began with hand-drawn wireframes, focusing on page layout  
            and positioning of key elements. These were refined over multiple iterations  
            using MarvelApp, allowing interactive mockups to simulate user flow.
          </p>
          <p className="text-gray-300 mt-2">
            Based on feedback from an early poster presentation, an additional feature  
            Store Locator was introduced. This feature helps users find affordable  
            stores nearby to help them save money.
          </p>
          <p className="text-gray-300 mt-2">
            The final high-fidelity wireframes ensured a polished UI, consistent branding,  
            and a smooth user experience before development began.
          </p>


          {/* Wireframe Images */}
          <div className="flex flex-col gap-4 mt-4">
            <Image 
              src="/wireframes/budgetbuddy1.png" 
              alt="BudgetBuddy Wireframe 1"
              width={300} 
              height={200}
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/budgetbuddy2.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/budgetbuddy3.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/budgetbuddy4.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/budgetbuddy5.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/budgetbuddy6.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
            <Image 
              src="/wireframes/budgetbuddy7.png" 
              alt="BudgetBuddy Wireframe 2"
              width={300} 
              height={200} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

   {/*Development Phases*/}
   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Development Phases</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Phase 1: Database setup in phpMyAdmin (`bb` database)</li>
            <li>Phase 2: Development of authentication system (Login & Signup)</li>
            <li>Phase 3: Dashboard implementation for financial data visualization</li>
            <li>Phase 4: Expense tracking & budget-setting functionality</li>
            <li>Phase 5: Store Locator integration using Leaflet.js</li>
          </ul>
        </div>

        {/*Challenges & Solutions*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
          <p className="text-gray-300 mt-2">
            <strong>Issue:</strong> Implementing secure authentication without third-party services.<br/>
            <strong>Solution:</strong> Developed a **custom PHP-based login system** with **hashed password storage**  
            and session management.
          </p>
          <p className="text-gray-300 mt-2">
            <strong>Issue:</strong> Ensuring an intuitive, consistent UI across all pages.<br/>
            <strong>Solution:</strong> Established a blue & white color scheme symbolizing trust and reliability 
            while maintaining a seamless user experience.
          </p>
        </div>

        {/*Final Version & Deployment*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Final Version & Deployment</h2>
          <p className="text-gray-300 mt-2">
            BudgetBuddy provides users with an easy-to-use platform for managing their finances.  
            The final version includes budget tracking, expense logging, data visualization,  
            and a store locator to help users make smarter financial decisions.
            <br />The project is available on GitHub.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/Agga2772/BudgetBuddy" className="text-blue-400 hover:underline">🔗 GitHub Repo</a>
          </div>
        </div>
      </section>
    </main>
  );
}



