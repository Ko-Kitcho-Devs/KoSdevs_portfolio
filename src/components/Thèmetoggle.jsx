import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [whiteMode, setWhiteMode] = useState(false);

  // Charger le thème depuis le localStorage au démarrage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "white") {
      setWhiteMode(true);
      document.documentElement.classList.add("white");
    } else {
      document.documentElement.classList.remove("white");
    }
  }, []);

  const toggleTheme = () => {
    if (whiteMode) {
      document.documentElement.classList.remove("white");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("white");
      localStorage.setItem("theme", "white");
    }
    setWhiteMode(!whiteMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 white:bg-gray-100 text-gray-800 white:text-gray-7S00 shadow-lg hover:scale-110 transition-transform"
      title="Changer de thème"
    >
      {whiteMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
