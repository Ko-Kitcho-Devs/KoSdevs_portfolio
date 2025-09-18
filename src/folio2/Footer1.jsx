import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/tonprofil", name: "GitHub", color: "hover:text-gray-300" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/tonprofil", name: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, url: "https://twitter.com/tonprofil", name: "Twitter", color: "hover:text-blue-500" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Ko'S devs</h3>
            <p className="text-gray-400 mb-4">
              Développement web et mobile sur mesure. Transformons vos idées en solutions digitales innovantes.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
            >
              <FaArrowUp className="mr-2" /> Retour en haut
            </button>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Restons en contact</h3>
            <p className="text-gray-400 mb-4">
              Discutons de votre prochain projet ou collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`bg-gray-800 text-gray-400 p-3 rounded-full transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KITCHO Dieu-donné Konobialo. Tous droits réservés.
          </p>
          <div className="flex items-center text-gray-300 text-sm">
            <span className="mx-2">Portfolio réalisé avec   </span>
            {/* <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1 text-red-500"
            >
              <FaHeart />
            </motion.span> */}
            <span className="text-teal-300 font-bold mx-2"> React  </span> &
            <span className="text-teal-300 font-bold mx-2"> Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}