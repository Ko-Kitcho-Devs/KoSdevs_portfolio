import {Routes, Route} from 'react-router-dom';
// import Home from './pages/Home';

import Navbar from './folio2/Navbar1';
import Home from './folio2/Home1';
import About from './folio2/About1';
import Skills from './folio2/Skills1';
import Projects from './folio2/Projets';
import Contact from './folio2/contact';
import Footer from './folio2/Footer1';
import './App.css'


    export default function App() {
        return (

            // const [isQuoteOpen, setIsQuoteOpen] = useState(false);

                <div className="w-full  bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
                
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Projects />

                <Contact />
                <Footer />

                </div>
  );
}