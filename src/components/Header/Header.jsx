import logo from '../../assets/LOGO-kasa.png';
import Nav from './Nav'
import './header.css'

export default function Header(){

    //afichage
    return(
        <header className='header'>
            <img className="logo" src={logo} alt="logo de l'agence Kasa"/>
            <Nav />
        </header>
    );
}