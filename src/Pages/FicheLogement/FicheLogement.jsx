import Carrousel from '../../components/DetailFicheLogement/Carrousel';
import getpost from '../../Data/data.json'
import Fichetitle from '../../components/DetailFicheLogement/Title'
//import { useState } from 'react';

export default function FicheLogement() {

    const rentalUrlId = window.location.pathname.split('/').slice(-1)[0];
    const data = getpost;
    const rental = data.find((item) => item.id === rentalUrlId);
    



    return (
        <div>
            <section>
            <Carrousel slides={rental.picture}/>
            <div className='block-logement'>
            <Fichetitle titre={rental.title} location={rental.location}/>
            </div>
            
            </section>
        </div>
    );
};