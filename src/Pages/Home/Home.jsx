import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getData from '../../Data/getData'
import './home.css'

export default function Home() {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        setData(getData)
    }, []);
    
    return (
        <div>
            <Banner />
            <div className='block-section-card'>   
                {data.map((appart, id) => {
                    return ( 
                        <Link key={id} className='link-block' to={"/logement/" + appart.id}>                                             
                                <Card  cover={appart.cover} title={appart.title}/>                          
                        </Link>                 
                    )
                })}
			</div>
        </div>  
    );
}
