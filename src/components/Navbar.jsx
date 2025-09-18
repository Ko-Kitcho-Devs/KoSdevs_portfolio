import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggle from "./Thèmetoggle";
// import { motion } from "framer-motion";

export default function Navbar( {onOpenQuote}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full mx-[auto] fixed top-0  bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">UniVerse32</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-500 font-bold">Accueil</a></li>
          <li><a href="#about" className="hover:text-blue-500 font-bold">À propos</a></li>
          <li><a href="#skills" className="hover:text-blue-500 font-bold">Compétences</a></li>
          <li><a href="#projects" className="hover:text-blue-500 font-bold">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-500 font-bold">Contact</a></li>
        </ul>
            <div className="flex items-center space-x-4">
                <button
                onClick={onOpenQuote}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition"
                >
                Demander un devis
                </button>
                <ThemeToggle />
                {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                {darkMode ? <FaSun /> : <FaMoon />}
                </button> */}
            </div>

        {/* Bouton Burger pour mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white flex flex-col items-center space-y-4 py-6 shadow-md">
          <li><a href="#home" className="font-bold" onClick={toggleMenu}>Accueil</a></li>
          <li><a href="#about" className="font-bold" onClick={toggleMenu}>À propos</a></li>
          <li><a href="#skills" className="font-bold" onClick={toggleMenu}>Compétences</a></li>
          <li><a href="#projects" className="font-bold" onClick={toggleMenu}>Projets</a></li>
          <li><a href="#contact" className="font-bold" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
