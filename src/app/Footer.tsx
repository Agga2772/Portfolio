export default function Footer() {
    return (
      <footer className="w-full text-center bg-gray-800 text-gray-300 py-6 mt-10">
        <div className="text-sm">
          © {new Date().getFullYear()} Agga Aung. All rights reserved. <br />
          📧 <a href="mailto:aggaaung@gmail.com" className="text-blue-400 hover:underline">aggaaung@gmail.com</a> &nbsp; | &nbsp;
          🔗 <a href="https://github.com/Agga2772" className="text-blue-400 hover:underline" target="_blank">GitHub</a> &nbsp; | &nbsp;
          🔗 <a href="https://www.linkedin.com/in/agga-aung/" className="text-blue-400 hover:underline" target="_blank">LinkedIn</a>
        </div>
      </footer>
    );
  }
  