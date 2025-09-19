import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isDevisOpen, setIsDevisOpen] = useState(false);
  const [devisData, setDevisData] = useState({ name: "", email: "", projet: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDevisData({ ...devisData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setDevisData({ name: "", email: "", projet: "" });
      setTimeout(() => setIsDevisOpen(false), 2000);
    }, 1500);
  };

  return (
    <section
      id="accueil"
      className="min-h-screen w-full mt-20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Texte principal */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 leading-tight mb-6"
        >
          <div className="text-gray-300"> Bonjour, je suis <span className="text-teal-400 block">KITCHO Konobialo</span> </div>
          <span className="text-gray-300">Développeur Web FullStack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Je crée des applications modernes, performantes et adaptées à vos besoins, 
          avec une <span className="text-teal-400 font-medium">expérience utilisateur optimale</span>.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setIsDevisOpen(true); setStatus(""); }}
            className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-teal-700 text-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Demander un devis
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Kitcho_CV_2025.pdf"
            download
            className="px-8 py-3.5 bg-gray-800 text-teal-400 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 font-semibold flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger le CV
          </motion.a>
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: '4+', label: 'Projets réalisés' },
            { value: '1', label: 'Années expérience' },
            { value: '100%', label: 'Satisfaction client' },
            { value: '8+', label: 'Technologies maîtrisées' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700"
            >
              <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Devis */}
      {isDevisOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-gray-700"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-teal-400 text-2xl transition-colors duration-300"
              onClick={() => setIsDevisOpen(false)}
            >
              ✖
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-100">Demande de devis</h3>
              <p className="text-gray-400 mt-2">Remplissez le formulaire et je vous recontacte rapidement</p>
            </div>

            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-teal-900 bg-opacity-30 text-teal-400 rounded-lg font-semibold flex items-center border border-teal-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Votre demande a été envoyée avec succès !
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom complet"
                  value={devisData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3.5 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  value={devisData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3.5 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                />
              </div>
              
              <div>
                <textarea
                  name="projet"
                  placeholder="Décrivez votre projet en quelques mots..."
                  value={devisData.projet}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3.5 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
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
                ) : "Envoyer la demande"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}