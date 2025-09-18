import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // success, error ou ""
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'envoi (à remplacer par EmailJS)
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsOpen(false), 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4"
        >
          Contactez-<span className="text-teal-400">moi</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Discutons de votre projet et voyons comment je peux vous aider à le concrétiser
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Mes coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-100 font-semibold">Localisation</h4>
                  <p className="text-gray-400">Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-100 font-semibold">Téléphone</h4>
                  <p className="text-gray-400">+229 01 96 32 18 70</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-100 font-semibold">Email</h4>
                  <p className="text-gray-400">kono1872002@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-100 font-semibold">WhatsApp</h4>
                  <p className="text-gray-400">+229 01 96 32 18 70</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-6">
              <h4 className="text-gray-100 font-semibold mb-4">Suivez-moi sur</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FaLinkedin className="text-xl" />, url: "#", color: "hover:text-blue-400" },
                  { icon: <FaGithub className="text-xl" />, url: "#", color: "hover:text-gray-300" },
                  { icon: <FaTelegram className="text-xl" />, url: "#", color: "hover:text-blue-500" },
                  { icon: <FaGlobe className="text-xl" />, url: "#", color: "hover:text-teal-400" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700 text-gray-400 p-3 rounded-full transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Envoyez un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Décrivez votre projet ou demande..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full py-3.5 rounded-lg text-gray-100 font-semibold transition-all duration-300 ${
                  loading ? "bg-teal-800 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-500"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : "Envoyer le message"}
              </motion.button>
            </form>

            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-teal-900 bg-opacity-30 text-teal-400 rounded-lg font-semibold flex items-center border border-teal-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message envoyé avec succès ! Je vous répondrai rapidement.
              </motion.div>
            )}
            
            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-900 bg-opacity-30 text-red-400 rounded-lg font-semibold flex items-center border border-red-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Une erreur s'est produite. Veuillez réessayer.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}