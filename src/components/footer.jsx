import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/tonprofil" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/tonprofil" },
    { icon: <FaTwitter />, url: "https://twitter.com/tonprofil" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              className="text-2xl"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <p className="mb-4">© {new Date().getFullYear()} KITCHO Dieu-donné Konobialo. Tous droits réservés.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center mx-auto px-4 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
        >
          <FaArrowUp className="mr-2" /> Haut de page
        </button>
      </div>
    </footer>
  );
}
