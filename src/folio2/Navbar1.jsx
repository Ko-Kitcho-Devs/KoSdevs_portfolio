import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Mode sombre par défaut

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full mx-auto fixed top-0 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg z-50 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-100 flex items-center"
        >
          <span className="bg-teal-400 text-gray-900 p-1 rounded mr-2">UnV</span>
          Ko'S<span className="text-teal-300">devs</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`#${item.toLowerCase().replace(' ', '_')}`} 
                className="text-gray-300 hover:text-teal-400 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 bg-gray-700 text-teal-400 rounded-full hover:bg-gray-600 transition-colors duration-300"
          >
            {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </motion.button>
        </div>

        {/* Bouton Burger pour mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </motion.button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-6 shadow-lg"
        >
          {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '_')}`} 
                className="text-gray-300 font-medium px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-teal-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}