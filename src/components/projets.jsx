import { motion } from "framer-motion";
import { useState } from "react";
import digitalSoftinnovationImg from "/images/digitalSoftinnovation.png";
import GlobalfinnanceImg from "/images/Globalfinnance.png";
import kitch_locImg from "/images/kitch_loc.png";
import tetch_entrepriseImg from "/images/tetch_entreprise.png";

const projects = [
  {
    title: "DigitalSoftInnovation",
    description: "Un site pour une entreprise de communication digital réalisé avec Laravel, html, css, bootstrap et javascript",
    image: digitalSoftinnovationImg,
    link: "https://digitalsoftinnovation.com/",
  },
  {
    title: "Globale Finance",
    description: "Template d'une maquette Figma réalisée avec html & tailwindCss",
    image: GlobalfinnanceImg,
    link: "#",
  },
  {
    title: "Ko'S teach",
    description: "Une petite page d'accueil avec formulaire de connexion réalisée avec Html & Css",
    image: tetch_entrepriseImg,
    link: "#",
  },
  {
    title: "Kitch loc",
    description: "Un template de plateforme de location de voiture réalisée avec Html & Css",
    image: kitch_locImg,
    link: "#",
  }
];

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);
  return (
        <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover object-top transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Voir plus
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-blue-600 hover:underline"
                  >
                    🔗 Lien
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
        {/* Modal */}
            {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                        >
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                            onClick={() => setSelectedProject(null)}
                        >
                            ✖
                        </button>
                        <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <p className="text-gray-700">{selectedProject.description}</p>
                        </motion.div>
                    </div>
                    )}

    </section>
  );
}
