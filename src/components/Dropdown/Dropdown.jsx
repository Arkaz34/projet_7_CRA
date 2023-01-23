import './dropdown.css';
import DropdownImg from "../../assets/Vector.png";
import { useState } from 'react';
import Fade from '../AnimationDrop/Fade';

export default function Dropdown({title, description}){

    const [closed, setOpen] = useState(false);//valeur inisiale et fausse

    const toggle =() => setOpen((o) => !o);//fonction toggle qui permet d'inverser la valeur de closed

    return (
        <div className='block-drop'>
            <div className='block-title'>
                <h2 className='drop-title'>{title}</h2>
                <img onClick={toggle} src={DropdownImg} alt='Menu déroulant' className='drop-img' />
            </div>
            <Fade visible={closed}>
            <div className='block-text'>
                <p className='drop-text'>{description}</p>
            </div>
            </Fade>
        </div>
    )
}