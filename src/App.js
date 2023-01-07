import './App.css';
import { Routes,Route,useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
    <Header />
   <Container>
      <AnimatePresence  mode='wait' >
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </AnimatePresence>
   </Container>
   </>
  );
}

export default App;
