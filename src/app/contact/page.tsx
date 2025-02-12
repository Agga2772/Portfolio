export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">📞 Contact Me</h1>

      <section className="max-w-xl space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-300 mt-2">
            I am always open to new opportunities in Web Development, Data Analytics,  
            Cyber Security, and Digital Marketing. If you would like to connect, feel free to  
            reach out!
          </p>
        </div>

        {/* Email */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">📧 Email</h2>
          <p className="text-gray-300">aggaaung2002@gmail.com</p>
        </div>

        {/* 🔗 Social Links */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">🔗 Connect with Me</h2>
          <p className="text-gray-300">
            Feel free to check out my GitHub and LinkedIn for more about my projects and work.
          </p>
          <div className="mt-4 flex gap-4 justify-center">
            <a href="https://github.com/Agga2772" target="_blank" className="text-blue-400 hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/agga-aung-9932922a8" target="_blank" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


