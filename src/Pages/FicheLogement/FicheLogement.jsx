import './ficheLogement.css'

import getpost from '../../Data/data.json'
//import Carrousel from '../../components/DetailFicheLogement/Carrousel';
import Fichetitle from '../../components/DetailFicheLogement/Title'
import Host from '../../components/DetailFicheLogement/Host'
import Content from '../../components/DetailFicheLogement/Content'
import Star from '../../components/DetailFicheLogement/Star'
//import { useState } from 'react';

export default function FicheLogement() {

    const rentalUrlId = window.location.pathname.split('/').slice(-1)[0];
    const data = getpost;
    const rental = data.find((item) => item.id === rentalUrlId);
    console.log(rental.rating);
    //state (état, données)

    //comportements

    //affichage (render)
    return (
        <div>
            <section>
                {/* <Carrousel pictures={rental.pictures[1]} /> */}
                <div className='fiche-block-logement'>
                    <Fichetitle titre={rental.title} location={rental.location} />
                    <Host name={rental.host.name} picture={rental.host.picture} />
                </div>
                <div className='block-content'>
                    <Content
                        tags={rental.tags.map((tag, index) => <li key={index}
                        className='content-tag' >{tag}</li>)} />
                    <Star score={rental.rating}/>
                </div>
            </section>
        </div>
    )
};