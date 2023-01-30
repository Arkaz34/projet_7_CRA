import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import FicheLogement from './Pages/FicheLogement/FicheLogement';
import Error from './Pages/404/Error'
import About from './Pages/About/About'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
      
    </div>
  );
}