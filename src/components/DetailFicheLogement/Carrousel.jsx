//import { useState } from 'react';
//import left from '../../assets/Vector-left.png'
//import right from '../../assets/Vector-right.png'

export default function Carrousel(slides) {

    console.log(slides);
    

    return(
        <div>
            <div>
                <img src={slides} alt='carrousel' />
            </div>
        </div>
    )
};