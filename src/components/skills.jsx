import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGithub, FaMobileAlt } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: "Node.js", icon: <FaNode className="text-green-600 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-5xl" /> },
    { name: "Mobile (Flutter)", icon: <FaMobileAlt className="text-purple-500 text-5xl" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-16 px-6"
    >
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
      >
        Compétences
      </motion.h2>

      {/* Grille des skills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-medium text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
