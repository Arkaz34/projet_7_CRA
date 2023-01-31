import './ficheLogement.css'

import getpost from '../../Data/data.json'
import Carrousel from '../../components/DetailFicheLogement/Carrousel';
import Fichetitle from '../../components/DetailFicheLogement/Title'
import Host from '../../components/DetailFicheLogement/Host'
import Tag from '../../components/DetailFicheLogement/Content/Tag'
import Rate from '../../components/DetailFicheLogement/Content/Rate'
import Fichedrop from '../../components/DetailFicheLogement/Content/FicheDrop'
//import { useState } from 'react';

export default function FicheLogement() {

    const rentalUrlId = window.location.pathname.split('/').slice(-1)[0];
    const data = getpost;
    const rental = data.find((item) => item.id === rentalUrlId);
    
    //state (état, données)

    //comportements

    //affichage (render)
    return (
        <div>
            <section>
                <Carrousel pictures={rental.pictures} />
                <div className='fiche-block-logement'>
                    <Fichetitle titre={rental.title} location={rental.location} />
                    <Host name={rental.host.name} picture={rental.host.picture} />
                </div>
                <div className='fiche-block-content'>
                    <Tag tags={rental.tags} />
                    <Rate score={rental.rating} />
                </div>
                <Fichedrop description={rental.description} equipements={rental.equipments} />
            </section>
        </div>
    )
};