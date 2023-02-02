import './error.css'
import ErrorImg from '../../assets/404.png'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='block-error'>
            <img className='error-img' src={ErrorImg} alt='Page error' />
            <h1 className='error-text'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to='/' className='error-nav'>Retourner sur la page d’accueil</Link>
        </div>
    )
}