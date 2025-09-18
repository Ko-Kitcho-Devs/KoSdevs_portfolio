import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaNodeJs, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTailwindcss,SiBootstrap, SiFlutter, SiMysql, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-4xl" />, color: "bg-orange-500" },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-4xl" />, color: "bg-blue-500" },
  { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-teal-400 text-4xl" />, color: "bg-teal-400" },
  { name: "Bootstrap", level: 80, icon: <SiBootstrap className="text-purple-600 text-4xl" />, color: "bg-purple-600" },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400 text-4xl" />, color: "bg-yellow-400" },
  { name: "React", level: 75, icon: <FaReact className="text-cyan-400 text-4xl" />, color: "bg-cyan-400" },
  { name: "Laravel", level: 90, icon: <FaLaravel className="text-red-500 text-4xl" />, color: "bg-red-500" },
//   { name: "Node.js", level: 65, icon: <FaNodeJs className="text-green-600 text-4xl" />, color: "bg-green-600" },
  
//   { name: "Flutter", level: 70, icon: <SiFlutter className="text-blue-400 text-4xl" />, color: "bg-blue-400" },
  { name: "Git", level: 80, icon: <FaGitAlt className="text-orange-600 text-4xl" />, color: "bg-orange-600" },
//   { name: "Figma", level: 75, icon: <FaFigma className="text-purple-500 text-4xl" />, color: "bg-purple-500" },
  { name: "MySQL", level: 78, icon: <SiMysql className="text-blue-600 text-4xl" />, color: "bg-blue-600" },
//   { name: "MongoDB", level: 72, icon: <SiMongodb className="text-green-500 text-4xl" />, color: "bg-green-500" },
];

export default function Skills() {
  return (
    <section id="compétences" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4"
        >
          Mes <span className="text-teal-400">compétences</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Un panorama de mes technologies maîtrisées et de mon niveau d'expertise dans chacune d'elles.
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-gray-700 rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="w-full flex justify-between items-center mt-2">
                <span className="text-sm text-gray-400">Maîtrise</span>
                <span className="text-teal-400 font-bold">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section supplémentaire pour les catégories de compétences */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Frontend", desc: "Interfaces utilisateur réactives et accessibles", icon: <FaReact className="text-4xl text-cyan-400" /> },
            { title: "Backend", desc: "Développement serveur et API robustes", icon: <FaLaravel className="text-4xl text-red-500" /> },
            // { title: "Mobile", desc: "Applications cross-platform performantes", icon: <SiFlutter className="text-4xl text-blue-400" /> },
          ].map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center">
              <div className="inline-block p-4 bg-gray-700 rounded-full mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{category.title}</h3>
              <p className="text-gray-400">{category.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}