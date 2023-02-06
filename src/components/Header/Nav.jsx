import { Link } from 'react-router-dom';
import './nav.css'

export default function Nav(){

    //affichage
    return(
       <nav>
            <Link to="/" className='navbar link-home'>Accueil</Link>
            <Link to="/About" className='navbar link-about'>A propos</Link>
       </nav> 
    );
}