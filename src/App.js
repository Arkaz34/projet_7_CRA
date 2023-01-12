import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Card from './components/Gallery/Card';
import Error from './components/Error/Error'
import About from './components/About/About'


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/About" element={<About />} />
      </Routes>
      
    </div>
  );
}


