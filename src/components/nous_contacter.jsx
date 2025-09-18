import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

    // ⚡️ Remplacer par vos propres identifiants EmailJS
    emailjs
      .send(
        "service_xxxxxx", // ton Service ID
        "template_xxxxxx", // ton Template ID
        formData,
        "publicKey_xxxxxx" // ton Public Key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsOpen(false), 2000); // ferme le modal après 2s
        },
        (error) => {
          console.error("Erreur EmailJS :", error);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
      <p className="text-gray-600 mb-6">
        Vous avez un projet ou une opportunité ? N’hésitez pas à me contacter.
      </p>

      <button
        onClick={() => { setIsOpen(true); setStatus(""); }}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Ouvrir le formulaire
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4">Envoyez-moi un message</h3>

            {status === "success" && (
              <p className="mb-4 text-green-600 font-semibold">
                ✅ Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="mb-4 text-red-600 font-semibold">
                ❌ Oups, une erreur est survenue. Réessayez.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
