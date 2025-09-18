import { motion } from "framer-motion";


export default function About(){
    return (
            <section
                        id="about"
                        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-50 py-16 px-6"
                    >
                        {/* titre */}
                        <motion.h2
                            initial={{ opacity:0, y: -30}}
                            animate={{ opacity:1, y:0}}
                            transition={{duration: 0.8}}
                            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
                        >
                            A propos de moi
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                                className="text-gray-600 max-w-3xl text-center mb-12"
                            >
                                Je suis un développeur web et mobile passionné, spécialisé dans la création
                                d’applications modernes, performantes et intuitives. Avec une solide base en
                                <span className="text-blue-600 font-semibold"> React, Laravel et Flutter</span>,
                                j’aime transformer des idées en projets concrets qui apportent de la valeur.
                        </motion.p>

                        {/* Timeline */}
                <div className="max-w-3xl w-full">
                    <ul className="relative border-l border-gray-300">
                    {/* Élément de timeline */}
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className="mb-10 ml-6"
                        >
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
                                <h3 className="font-semibold text-gray-800">2024 - Licence en Systèmes informatiques et logiciels</h3>
                                <p className="text-gray-600"> ESM-Bénin</p>
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="mb-10 ml-6"
                        >
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
                                <h3 className="font-semibold text-gray-800">2025 - Stage professionnels en Développement Web fullStack</h3>
                                <p className="text-gray-600">FIFACOM</p>
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="ml-6"
                        >
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
                                <h3 className="font-semibold text-gray-800">2025 - Développeur Freelance</h3>
                                <p className="text-gray-600">Projets pour divers clients</p>
                        </motion.li>
                    </ul>
                </div>

            </section>
    );
}