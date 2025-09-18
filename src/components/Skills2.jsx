import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaNodeJs } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", level: 75, icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Laravel", level: 90, icon: <FaLaravel className="text-red-500 text-4xl" /> },
  { name: "Node.js", level: 65, icon: <FaNodeJs className="text-green-600 text-4xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <motion.div
                  className="bg-blue-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
              <p className="text-gray-600 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
