import React, { useState, useEffect } from 'react';

// Composant Navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600">Portfolio</a>
        
        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">Accueil</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">À propos</a>
          <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition">Compétences</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">Projets</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
        </div>
        
        {/* Menu mobile */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <a href="#home" className="block py-2 text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Accueil</a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>À propos</a>
          <a href="#skills" className="block py-2 text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Compétences</a>
          <a href="#projects" className="block py-2 text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Projets</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

// Composant Hero
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Développeur Full Stack Passionné";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bonjour, je suis <span className="text-yellow-300">John Doe</span></h1>
          <div className="text-xl md:text-2xl mb-6 h-8">
            {displayText}<span className="animate-pulse">|</span>
          </div>
          <p className="text-lg mb-8">Je crée des expériences web exceptionnelles avec React.js et Tailwind CSS</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#projects" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition mb-4 shadow-lg">Voir mes projets</a>
            <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition mb-4">Me contacter</a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            <a href="#" className="text-white hover:text-yellow-300 transition"><i className="fab fa-github fa-2x"></i></a>
            <a href="#" className="text-white hover:text-yellow-300 transition"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="#" className="text-white hover:text-yellow-300 transition"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="#" className="text-white hover:text-yellow-300 transition"><i className="fab fa-dev fa-2x"></i></a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-20 -left-8 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant About
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg shadow-xl"></div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-600 mb-6">
              Je suis un développeur full stack passionné avec plus de 5 ans d'expérience dans la création
              d'applications web modernes et réactives. J'aime transformer des idées complexes en interfaces
              utilisateur élégantes et intuitives.
            </p>
            <p className="text-gray-600 mb-6">
              Spécialisé en React.js, Node.js et les bases de données modernes, je suis constamment à la
              recherche de nouveaux défis et technologies à apprendre.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Nom: <span className="font-normal text-gray-600">John Doe</span></p>
                <p className="font-semibold">Email: <span className="font-normal text-gray-600">john@example.com</span></p>
              </div>
              <div>
                <p className="font-semibold">Expérience: <span className="font-normal text-gray-600">5+ années</span></p>
                <p className="font-semibold">Localisation: <span className="font-normal text-gray-600">Paris, France</span></p>
              </div>
            </div>
            <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Skills
const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'MongoDB', level: 75, color: 'bg-green-700' },
    { name: 'UI/UX Design', level: 70, color: 'bg-purple-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mes compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Portfolio
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      description: "Plateforme e-commerce complète avec panier et paiement",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Dashboard Analytique",
      description: "Tableau de bord de données avec visualisations interactives",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "D3.js", "Firebase"]
    },
    {
      id: 3,
      title: "Application de Réservation",
      description: "Système de réservation en temps réel pour restaurants",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Express", "MySQL"]
    },
    {
      id: 4,
      title: "Plateforme d'Apprentissage",
      description: "Cours en ligne avec suivi de progression",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Vue.js", "Laravel", "PostgreSQL"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Contact
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-moi</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="name">Nom</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Envoyer</button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-indigo-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-gray-600">123 Rue Example, Paris, France</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <i className="fas fa-phone text-indigo-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-indigo-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Suivez-moi</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
                    <i className="fab fa-dev"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-github fa-lg"></i></a>
          <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-linkedin-in fa-lg"></i></a>
          <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-twitter fa-lg"></i></a>
          <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-dev fa-lg"></i></a>
        </div>
        <p>© {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

// Composant principal
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;