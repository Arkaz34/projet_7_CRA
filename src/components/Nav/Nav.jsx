import { Link } from 'react-router-dom';
import './nav.css'

export default function Nav(){
    return(
       <nav className="nav-header">
        <Link to="/" className='nav-A'>Accueil</Link>
        <Link to="/About" className='nav-B'>A propos</Link>
        
        {/* <div className='nav-A'>Accueil</div>
        <div className='nav-B'>A propos</div> */}
       </nav> 
    );
}

