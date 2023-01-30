import './dropdown.css';
import DropdownImg from "../../assets/Vector-bottom.png";
import { useState } from 'react';
import Fade from '../AnimationDrop/Fade';

export default function Dropdown({ title, description }) {

    const [closed, setOpen] = useState(true);//valeur inisiale et vrai
    const toggle = () => {
        setOpen(!closed);
    }//fonction toggle qui permet d'inverser la valeur de closed

    return (
        <div className='drop-block'>
            <div onClick={toggle} className='drop-block-title'>
                <h2 className='drop-title'>{title}</h2>
                <img
                    src={DropdownImg}
                    alt='Menu déroulant'
                    className={closed ? "drop-img rotated" : "drop-img"}
                />
            </div>
            <Fade hide={closed}>
                <div className='drop-block-text'>
                    <p className='drop-text'>{description}</p>
                </div>
            </Fade>
        </div>
    )
}