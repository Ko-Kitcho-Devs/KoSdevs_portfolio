import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaGlobe, FaTelegram, FaWhatsapp, FaHeart } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
      { icon: <FaLinkedin className="text-xl" />, url: "https://www.linkedin.com/in/dieu-donn%C3%A9-kitcho-b5672b279/", color: "hover:text-blue-500" },
      { icon: <FaGithub className="text-xl" />, url: "https://github.com/Ko-Kitcho-Devs", color: "hover:text-gray-100" },
      { icon: <FaTelegram className="text-xl" />, url: "https://t.me/Kokitcho", color: "hover:text-blue-500" },
      { icon: <FaGlobe className="text-xl" />, url: "#", color: "hover:text-teal-400" },
      { icon: <FaWhatsapp className="text-xl" />, url: "https://wa.me/+22996321870", color: "hover:text-green-500"},
      { icon: <RiTwitterXLine />, url: "https://x.com/KoKitcho", name: "Twitter", color: "hover:text-gray-100" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="dark:bg-gray-900 bg-gradient-to-br light:from-gray-300 light:via-gray-50 light:to-gray-300 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-xl font-bold dark:text-gray-100 light:text-gray-800 mb-4">Ko'S<span className="dark:text-teal-300 light:text-blue-500">devs</span></h3>
            <p className="dark:text-gray-400 light:text-gray-600 font-bold mb-4">
              Développement web et mobile sur mesure. Transformons vos idées en solutions digitales innovantes.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center font-bold dark:text-teal-400 light:text-blue-500 dark:hover:text-teal-300 light:hover:text-blue-700 transition-colors"
            >
              <FaArrowUp className="mr-2" /> Retour en haut
            </button>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-xl font-bold dark:text-gray-100 light:text-gray-500 mb-4 space-x-3">Liens <span className="dark:text-teal-300 light:text-blue-600">rapides</span></h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '_')}`} 
                    className="dark:text-gray-400 light:text-gray-800 dark:hover:text-teal-400 light:hover:text-blue-600 font-bold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold dark:text-gray-100 light:text-gray-500 mb-4 space-x-3">Restons <span className="dark:text-teal-300 light:text-blue-600">en contact</span></h3>
            <p className="dark:text-gray-400 light:text-gray-800 font-bold mb-4">
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
                  className={`dark:bg-gray-700 light:bg-gray-400 dark:text-gray-400 light:text-gray-50 p-3 rounded-full transition-all duration-300 ${link.color}`}
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
          <p className="text-gray-500 font-bold text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KITCHO Dieu-donné Konobialo. Tous droits réservés.
          </p>
          <div className="flex items-center dark:text-gray-300 light:text-gray-800 font-bold text-sm">
            <span className="mx-2">Portfolio réalisé avec   </span>
            {/* <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1 text-red-500"
            >
              <FaHeart />
            </motion.span> */}
            <span className="dark:text-teal-300 light:text-blue-600 font-bold mx-2"> React  </span> &
            <span className="dark:text-teal-300 light:text-blue-600 font-bold mx-2"> Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}