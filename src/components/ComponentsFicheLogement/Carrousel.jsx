import './carrousel.css'
import { useState } from 'react'
import left from '../../assets/Vector-left.png'
import right from '../../assets/Vector-right.png'

export default function Carrousel(pictures) {

    //state (état, données)
    let [indexPictures, setIndexPictures] = useState(0);
    let length = pictures.pictures.length;

    //comportements
    let nextPicture = () => {
        setIndexPictures(indexPictures === length - 1 ? 0 : indexPictures + 1);
    }
    let previousIndex = () => {
        setIndexPictures(indexPictures === 0 ? length - 1 : indexPictures - 1);
    }
    //affichage (render)
    return (
        <section className='carrousel-container' >
            <img src={pictures.pictures[indexPictures]} alt='logement' className='img-carrousel' />            
            <div className={length > 1 ? 'vector-block' : 'count-none'}>
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
            <p className={length > 1 ? 'count' : 'count-none'}>{indexPictures + 1}/{length}</p>
        </section >
    )
};