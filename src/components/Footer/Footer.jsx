import logo from '../../assets/LOGO-kasa-w.png'
import './footer.css'

export default function footer(){
    return(
        <footer className='box-footer'>
            <img className='imgfooter' src={logo} alt='logo de Kasa'/>
            <p className="txtfooter">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}