export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-8">
        <p>&copy; {new Date().getFullYear()} Agga Aung • Leeds, UK</p>
  
        <p className="mt-2">
          <a href="mailto:aggaaung2002@gmail.com" className="text-blue-400 hover:underline">aggaaung2002@gmail.com</a>
        </p>
  
        <p className="mt-1">
          <a href="tel:+447479987255" className="text-blue-400 hover:underline">+44 7479 987255</a>
        </p>
  
        <p className="mt-1">
          <a href="https://www.linkedin.com/in/agga-aung-9932922a8" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a> |  
          <a href="https://github.com/Agga2772" target="_blank" className="ml-2 text-blue-400 hover:underline">GitHub</a>
        </p>
      </footer>
    );
  }
  
  
  