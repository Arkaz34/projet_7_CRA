import './dropdown.css';
import DropdownImg from "../../assets/Vector-bottom.png";
import { useState } from 'react';
import Fade from './Fade';

export default function Dropdown({ title, description }) {

    //state (état, données)
    const [closed, setOpen] = useState(true);//valeur inisiale et vrai

    //comportements
    const toggle = () => {
        setOpen(!closed);
    }//fonction toggle qui permet d'inverser la valeur de closed

    //affichage (render)
    return (
        <div className='container-drop'>
            <div onClick={toggle} className='block-title'>
                <h2 className='drop-title'>{title}</h2>
                <img
                    src={DropdownImg}
                    alt='Menu déroulant'
                    className={closed ? "drop-img rotated" : "drop-img"}
                />
            </div>
            <Fade hide={closed} text={description} />
        </div>
    )
}