import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="à_propos"
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6"
        >
            <div className="max-w-6xl mx-auto">
                {/* titre */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-12"
                >
                    À propos de <span className="text-teal-400">moi</span>
                </motion.h2>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-2xl p-8 mb-16 border border-gray-700 shadow-xl"
                >
                    <p className="text-gray-300 text-lg md:text-xl text-center leading-relaxed">
                        Je suis un développeur web FullStack passionné, spécialisé dans la création
                        d'applications modernes, performantes et intuitives. Avec une solide base en
                        <span className="text-teal-400 font-semibold"> React & Laravel</span>,
                        j'aime transformer des idées en projets concrets qui apportent de la valeur.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl w-full mx-auto">
                    <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Mon <span className="text-teal-400">parcours</span></h3>
                    
                    <div className="relative">
                        {/* Ligne de timeline */}
                        <div className="absolute left-4 h-full w-1 bg-teal-500 opacity-30 -translate-x-1/2"></div>
                        
                        {/* Élément de timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className="mb-12 pl-12 relative"
                        >
                            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 top-2 border-4 border-gray-900 z-10"></div>
                            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <span className="text-teal-400 font-semibold">2024</span>
                                <h3 className="text-xl font-bold text-gray-100 mt-1">Licence en Systèmes informatiques et logiciels</h3>
                                <p className="text-gray-400 mt-2">ESM-Bénin</p>
                                <p className="text-teal-500 mt-3 font-bold">Acquisition des fondamentaux en développement logiciel, algorithmique et architecture des systèmes.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-12 pl-12 relative"
                        >
                            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 top-2 border-4 border-gray-900 z-10"></div>
                            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <span className="text-teal-400 font-semibold">2025</span>
                                <h3 className="text-xl font-bold text-gray-100 mt-1">Stage professionnel en Développement Web FullStack</h3>
                                <p className="text-gray-400 mt-2">FIFACOM</p>
                                <p className="text-teal-500 mt-3 font-bold">Développement d'applications web complètes avec React.js et Laravel. Intégration d'API et optimisation des performances.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="pl-12 relative"
                        >
                            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 top-2 border-4 border-gray-900 z-10"></div>
                            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <span className="text-teal-400 font-semibold">2025 - Présent</span>
                                <h3 className="text-xl font-bold text-gray-100 mt-1">Développeur Freelance</h3>
                                <p className="text-gray-400 mt-2">Projets pour divers clients</p>
                                <p className="text-teal-500 mt-3 font-bold">Création d'applications sur mesure, sites vitrines et e-commerce. Collaboration avec des clients internationaux pour des solutions digitales innovantes.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}