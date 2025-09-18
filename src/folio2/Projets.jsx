import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import digitalSoftinnovationImg from "/images/digitalSoftinnovation.png";
import GlobalfinnanceImg from "/images/Globalfinnance.png";
import kitch_locImg from "/images/kitch_loc.png";
import tetch_entrepriseImg from "/images/tetch_entreprise.png";

// Images de remplacement (à remplacer par vos propres images)
// const ProjectPlaceholder = ({ className, image, title }) => (
//   <div className={`bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center ${className}`}>
//     {/* <span className="text-white font-bold text-lg">Image du projet</span> */}
//     <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-60 object-cover object-top transition-transform duration-300 transform hover:scale-105"
//               />
//   </div>

// );

const ProjectPlaceholder = ({ className, image, title, imgClass }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img
      src={image}
      alt={title}
      className={`w-full h-auto max-w-full ${imgClass}`} // Modification importante ici
    />
  </div>
);

const projects = [
  {
    title: "DigitalSoftInnovation",
    description: "Site web professionnel pour une entreprise de communication digitale. Réalisé avec Laravel, HTML, CSS, Bootstrap et JavaScript. Design responsive et moderne avec administration complète.",
    longDescription: "Un site vitrine professionnel avec système de gestion de contenu, portfolio et formulaire de contact. L'administration permet de modifier facilement tous les contenus du site sans compétences techniques.",
    image: digitalSoftinnovationImg,
    link: "https://digitalsoftinnovation.com/",
    github: "#",
    technologies: ["Laravel", "HTML5", "CSS3", "Bootstrap", "JavaScript", "MySQL"],
    category: "Web Development"
  },
  {
    title: "Globale Finance",
    description: "Template moderne conçu à partir d'une maquette Figma, implémenté avec HTML et Tailwind CSS. Design épuré et professionnel pour une institution financière.",
    longDescription: "Interface utilisateur intuitive pour une plateforme financière avec mise en page responsive, composants interactifs et palette de couleurs professionnelle. Intégration parfaite de la maquette Figma en code fonctionnel.",
    image: GlobalfinnanceImg,
    link: "#",
    github: "#",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Figma"],
    category: "Web Design"
  },
  {
    title: "Ko'S teach",
    description: "Page d'accueil élégante avec formulaire de connexion, réalisée avec HTML et CSS. Design minimaliste et fonctionnel pour une plateforme éducative.",
    longDescription: "Interface d'accueil conviviale avec formulaire de connexion stylisé, animations subtiles et design responsive. Focus sur l'expérience utilisateur et l'accessibilité.",
    image: tetch_entrepriseImg,
    link: "#",
    github: "#",
    technologies: ["HTML5", "CSS3", "UI/UX Design"],
    category: "Web Design"
  },
  {
    title: "Kitch loc",
    description: "Template de plateforme de location de voitures, conçu avec HTML et CSS. Interface utilisateur intuitive pour la recherche et réservation de véhicules.",
    longDescription: "Plateforme complète de location de véhicules avec système de filtres, galerie de voitures, et processus de réservation simplifié. Design moderne axé sur la conversion.",
    image: kitch_locImg,
    link: "#",
    github: "#",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web Development"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4"
        >
          Mes <span className="text-teal-400">projets</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          Une sélection de mes réalisations récentes, allant du développement web au design d'interfaces.
        </motion.p>

        {/* Filtres */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-teal-500 text-gray-900"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <ProjectPlaceholder className="w-full h-full" imgClass="object-cover object-top" image={project.image} title={project.title} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                  <span className="text-xs bg-gray-700 text-teal-400 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2 bg-teal-600 text-gray-100 rounded-lg hover:bg-teal-500 transition font-medium text-sm"
                  >
                    Voir les détails
                  </button>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-teal-400 transition"
                      title="Code source"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-teal-400 transition"
                      title="Voir le projet"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de détail du projet */}
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-teal-400 text-xl transition"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            
            <div className="mb-6 w-[100%] h-[100%] ">
              <ProjectPlaceholder className="w-full h-full" image={selectedProject.image} title={selectedProject.title} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-100 mb-2">{selectedProject.title}</h3>
            <span className="inline-block bg-gray-700 text-teal-400 text-sm px-3 py-1 rounded-full mb-4">
              {selectedProject.category}
            </span>
            
            <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-100 mb-3">Technologies utilisées</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-teal-600 text-gray-100 rounded-lg hover:bg-teal-500 transition font-medium"
              >
                <FaExternalLinkAlt className="mr-2" /> Voir le projet
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition font-medium"
              >
                <FaGithub className="mr-2" /> Code source
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}