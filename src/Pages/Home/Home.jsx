import Banner from '../../components/BannerHome/Banner/Banner'
import Card from '../../components/BannerHome/Cards/Card'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getData from '../../Data/getData'
import './home.css'

//stocker la data api (getData depuis le fichier Data.json en local) dans le state
export default function Home() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(getData);
    }, []);
    
    return (
        <div className='block-home'>
            <Banner />
            <div className='block-section-card'> 
                {data.map((appart, id) => {
                    return (
                        <Link key={id} className='link-block' to={"/logement/" + appart.id}>                                             
                                <Card cover={appart.cover} title={appart.title} />                          
                        </Link>                 
                    )
                })}
			</div>
        </div>  
    );
}
