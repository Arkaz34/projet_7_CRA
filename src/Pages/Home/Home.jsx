import Banner from '../../components/Banner/Banner'
//import Card from '../../components/Cards/Card'
import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import getData from '../../Data/getData'
import './home.css'

export default function Home() {
    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        setData(getData)
    }, []);
    
    return (
        <div>
            <Banner />
            <div >
            {data.map((appart, id) => {
                return (
                    <div key={id}>
                        <p>{appart.cover}</p>
                    {/* <Card /> */}
                    </div>
            )})}
			</div>
        </div>  
    );
}