import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThemeToggle() {

//   const [lightMode, setLightMode] = useState(false);

  const [theme, setTheme] = useState("dark");
  
  useEffect(() => {
        const savedTheme = localStorage.getItem(theme);

        if (savedTheme) {
            setTheme(savedTheme);

            document.documentElement.classList.add(savedTheme);
            
        } else {
        document.documentElement.classList.add("dark");
        }
        // setLightMode(!lightMode);
    }, []);

    useEffect(() => {
            const root = document.documentElement;
            root.classList.remove("light", "dark");
            root.classList.add(theme);
            localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light"? "dark" : "light"));
    };

  return (
    <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 dark:bg-gray-700 light:bg-gray-50 rounded-full light:hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-300"
          >
            {theme === "light" ? <FaMoon className="text-lg text-gray-800" /> : <FaSun className="text-lg text-yellow-200" />}
    </motion.button>
    
  );
}
