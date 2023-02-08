import { NavLink } from 'react-router-dom';
import './nav.css'

export default function Nav(){

    //affichage
    return(
       <nav>
            <NavLink to="/" className={({isActive}) => ( isActive ? 'navbar' : 'navbar link1')}  >Accueil</NavLink>
            <NavLink to="/About" className={({isActive}) => ( isActive ? 'navbar' : 'navbar link1')} >A propos</NavLink>
       </nav> 
    );
}