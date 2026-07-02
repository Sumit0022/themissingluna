import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';

import Home from './pages/Home';
import FocusAreas from './pages/FocusAreas';
import Roadmap from './pages/Roadmap';
import Join from './pages/Join';
import About from './pages/About';
import FocusAreaDetail from './pages/FocusAreaDetail';
import ScrollToTop from './components/utils/ScrollToTop';

// We will create the rest as simple placeholders for now
const Vision = () => <div style={{ height: '100vh', paddingTop: '150px' }} className="container"><h1 className="text-h1">The Vision</h1></div>;
const Philosophy = () => <div style={{ height: '100vh', paddingTop: '150px' }} className="container"><h1 className="text-h1">Philosophy</h1></div>;
const Contact = () => <div style={{ height: '100vh', paddingTop: '150px' }} className="container"><h1 className="text-h1">Contact</h1></div>;
const FAQ = () => <div style={{ height: '100vh', paddingTop: '150px' }} className="container"><h1 className="text-h1">FAQ</h1></div>;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/focus-areas/:id" element={<FocusAreaDetail />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}
