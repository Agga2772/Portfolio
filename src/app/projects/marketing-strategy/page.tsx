export default function MarketingStrategy() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Digital Marketing Strategy  Three Fiends Brewhouse</h1>

      <section className="max-w-3xl space-y-6">
        {/*Project Overview*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p className="text-gray-300 mt-2">
            This project presents a comprehensive digital marketing strategy for Three Fiends Brewhouse,  
            a craft beer brand. The focus was on developing a strong online presence,  
            increasing customer engagement, and boosting sales through SEO, social media, and email marketing.
          </p>
        </div>

        {/*Key Focus Areas*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Key Focus Areas</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Email Marketing  Increased newsletter subscriptions by 30%.</li>
            <li>Website SEO Optimization Boosted website traffic by 20%.</li>
            <li>Social Media Growth  Reached 2.5K Instagram followers within a year.</li>
            <li>E-Commerce Expansion  Improved user experience & sales by 15%.</li>
          </ul>
        </div>

        {/* Marketing Campaigns */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Marketing Campaigns</h2>
          <p className="text-gray-300 mt-2">Here are some promotional materials I designed for Three Fiends:</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <img src="/files/Picture1.png" alt="Jingle & Sip Campaign" className="w-1/2 rounded-lg shadow-md"/>
            <img src="/files/Picture2.png" alt="Fiend Juice Campaign" className="w-1/2 rounded-lg shadow-md"/>
          </div>
        </div>

        {/*  Promotional Videos */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Promotional Videos</h2>
          <div className="flex flex-col space-y-4 mt-4">
            <video controls className="rounded-lg shadow-md">
              <source src="/files/Reels%20Three%20Feinds.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <video controls className="rounded-lg shadow-md">
              <source src="/files/Reels%20Three%20Fiends%20Halloween.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/*Report*/}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Download Full Report</h2>
          <p className="text-gray-300 mt-2">
            The full report details marketing strategies, campaign designs, and  
            data-driven recommendations to enhance Three Fiends brand visibility.
          </p>
          <div className="mt-4">
            <a 
              href="/files/marketing-report.pdf" 
              download 
              className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-500 transition"
            >
              Download Report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}





