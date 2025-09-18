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

    // Ici tu peux brancher EmailJS ou ton backend Laravel
    console.log("Demande de devis :", devisData);

    // Simuler l'envoi
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setDevisData({ name: "", email: "", projet: "" });
      setTimeout(() => setIsDevisOpen(false), 2000); // ferme le modal après 2s
    }, 1500);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full mt-[74px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 via-white to-blue-50 px-4"
    >
      {/* Texte principal */}
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-700 leading-tight"
      >
        Bonjour, je suis <span className="text-blue-600">KITCHO Dieu-donné Konobialo</span>
        <br />
        Développeur Web & Mobile
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl"
      >
        Je crée des applications modernes, performantes et adaptées à vos besoins, avec une expérience utilisateur optimale.
      </motion.p>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="mt-8 flex flex-col md:flex-row gap-4"
      >
        <button
          onClick={() => { setIsDevisOpen(true); setStatus(""); }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
        >
          Demander un devis
        </button>

        <a
          href="/Kitcho_CV_2025.pdf"
          download
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-lg hover:bg-gray-300 transform hover:scale-105 transition duration-300"
        >
          Télécharger le CV
        </a>
      </motion.div>

      {/* Modal Devis */}
      {isDevisOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
              onClick={() => setIsDevisOpen(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">Demande de devis</h3>

            {status === "success" && (
              <p className="mb-4 text-green-600 font-semibold">
                ✅ Votre demande a été envoyée avec succès !
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={devisData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={devisData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="projet"
                placeholder="Décrivez votre projet..."
                value={devisData.projet}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white transition ${
                  loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
