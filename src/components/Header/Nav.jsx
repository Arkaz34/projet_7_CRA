import { Link } from 'react-router-dom';
import './nav.css'

export default function Nav(){

    //affichage
    return(
       <nav className="nav-header">
            <Link to="/" className='navbar'>Accueil</Link>
            <Link to="/About" className='navbar'>A propos</Link>
       </nav> 
    );
}