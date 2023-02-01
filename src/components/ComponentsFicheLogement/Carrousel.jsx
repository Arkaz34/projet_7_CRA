import './carrousel.css'
import { useState } from 'react'
import left from '../../assets/Vector-left.png'
import right from '../../assets/Vector-right.png'

export default function Carrousel(props) {

    //state (état, données)
    let [indexPictures, setIndexPictures] = useState(0);
    let length = props.pictures.length;

    //comportements
    let nextPicture = () => {
        setIndexPictures(indexPictures === length - 1 ? 0 : indexPictures + 1);
    }
    let previousIndex = () => {
        setIndexPictures(indexPictures === 0 ? length - 1 : indexPictures - 1 );
    }
    //affichage (render)
    return (
        <div className='carrousel-container' >
            <img src={props.pictures[indexPictures]} alt='logement' className='img-carrousel' />
            <div  className='vector-block' >
                <img
                    onClick={previousIndex}
                    src={left}
                    alt="vector gauche"
                    className='vector-left' />  
                <img
                    onClick={nextPicture}
                    src={right}
                    alt="vector droite"
                    className='vector-right' />
            </div>
        </div>
    )
};