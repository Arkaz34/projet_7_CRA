import Imgbanner from '../../../assets/IMG.png'
import React from 'react'
import './banner.css'

export default function Banner() {
    return(
        <div className='banner'>
            <img className="img-banner" src={Imgbanner} alt="Fond de montagne"/>
            <div className='banner-text'>Chez vous, partout et ailleurs</div>
        </div>
    );
}