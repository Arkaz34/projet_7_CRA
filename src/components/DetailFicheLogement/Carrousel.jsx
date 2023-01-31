import './carrousel.css'
//import { useState } from 'react';
//import left from '../../assets/Vector-left.png'
//import right from '../../assets/Vector-right.png'


export default function Carrousel(props) {

    //state (état, données)

    //comportements

    //affichage (render)
    return (
        <div className="block-carrousel">
            {props.pictures.map((picture, index) =>
            <img src={picture} alt='logement' key={index} className='img-carrousel' />)}
            
        </div>
    )
};