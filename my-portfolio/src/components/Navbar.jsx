import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isStartOpen, setIsStartOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-[#245EDC] to-[#0078D7] flex items-center px-1 shadow-lg">
      {/* Bouton Start */}
      <div className="relative">
        <button
          onClick={() => setIsStartOpen(!isStartOpen)}
          className={`h-10 px-4 py-2 flex items-center gap-2 font-bold text-white 
            ${isStartOpen ? 'bg-[#1D4AAD]' : 'bg-gradient-to-r from-[#378EE5] to-[#378EE5] hover:from-[#3687D9] hover:to-[#3687D9]'}
            rounded shadow-md`}
        >
          <img 
            src="/windows-logo.png" 
            alt="Start"
            className="w-6 h-6"
          />
          Start
        </button>

        {/* Menu Start */}
        {isStartOpen && (
          <div className="absolute bottom-12 left-0 w-64 bg-white border-2 border-[#0078D7] rounded-t-lg shadow-xl">
            <div className="bg-gradient-to-b from-[#378EE5] to-[#1D4AAD] h-16 p-4">
              <span className="text-white font-bold">Arthur Genestier</span>
            </div>
            <div className="p-2">
              <Link to="/" className="flex items-center gap-2 p-2 hover:bg-[#E5F3FF]">
                <span>🏠</span> Accueil
              </Link>
              <Link to="/projects" className="flex items-center gap-2 p-2 hover:bg-[#E5F3FF]">
                <span>📁</span> Projets
              </Link>
              <Link to="/skills" className="flex items-center gap-2 p-2 hover:bg-[#E5F3FF]">
                <span>⚙️</span> Profil
              </Link>
              <Link to="/contact" className="flex items-center gap-2 p-2 hover:bg-[#E5F3FF]">
                <span>✉️</span> Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Quick Launch */}
      <div className="flex items-center gap-2 ml-4 border-l border-[#1D4AAD] pl-4">
        <Link to="/" className="p-2 hover:bg-[#3687D9] rounded">🏠</Link>
        <Link to="/projects" className="p-2 hover:bg-[#3687D9] rounded">📁</Link>
        <Link to="/skills" className="p-2 hover:bg-[#3687D9] rounded">⚙️</Link>
      </div>

      {/* Clock */}
      <div className="ml-auto bg-[#1D4AAD] px-4 py-2 text-white">
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </nav>
  );
}