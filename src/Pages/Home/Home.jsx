import Banner from '../../components/Banner/BannerHome'
import Card from '../../components/Cards/Card'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getData from '../../Data/data.json'
import './home.css'

//stocker le fichier.json dans data (getData depuis le fichier Data.json en local) dans le state
export default function Home() {
    
    //state (état, données)
    const [data, setData] = useState([]);

    //comportement
    useEffect(() => {
        setData(getData);
    }, []);

    //affichage
    return (
        <main className='block-home'>
            <Banner />
            <section className='block-section-card'> 
                {data.map((appart, id) => {
                    return (
                        <Link key={id} className='link-block' to={"/logement/" + appart.id}>                                             
                                <Card cover={appart.cover} title={appart.title} />                          
                        </Link>                 
                    )
                })}
			</section>
        </main>  
    );
}