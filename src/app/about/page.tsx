export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      <section className="max-w-2xl space-y-6">
        {/* Education */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Education & Achievements</h2>
          <p className="text-gray-300 mt-2">
            I graduated with a BSc (Hons) in Information Technology (2:1)  
            from the University of Huddersfield, where I developed expertise  
            in Web Development, Data Science, Cyber Security, and Digital Marketing.  
          </p>
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <p className="text-gray-300 mt-2">
            My technical expertise includes Front-End and Back-End Development,  
            Data Analytics, and Cyber Security. I have experience working with:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Web Development: HTML, CSS, JavaScript, React, Bootstrap</li>
            <li>Data Science: Python, R, SQL, MySQL</li>
            <li>Cyber Security: Security best practices, encryption, authentication</li>
            <li>APIs & Backend: PHP, Node.js, jQuery, JSON</li>
            <li>Digital Marketing: SEO, Social Media Strategies</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Notable Projects</h2>
          <p className="text-gray-300 mt-2">
            During my studies, I worked on several projects, including:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>
              <strong>BudgetBuddy Final Year Project</strong>   
               - A financial tracking app with budgeting, expense tracking, and a store locator.
            </li>
            <li>
              <strong>COVID-19 Impact Analysis</strong>  
               - A data-driven project analyzing market trends using R.
            </li>
            <li>
              <strong>Digital Marketing Strategy for Three Fiends Brewhouse</strong>   
               - Developed SEO & social media campaigns to improve brand visibility.
            </li>
            <li>
              <strong>Team Project</strong>   
               - Built a full-stack web application using modern web technologies.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}


