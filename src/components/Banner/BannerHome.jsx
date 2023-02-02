import Imgbanner from '../../assets/IMG.png'
import './bannerHome.css'

export default function Banner() {
    return(
        <div className='banner'>
            <img className="img-banner" src={Imgbanner} alt="Fond de montagne"/>
            <h2 className='banner-text'>Chez vous, partout et ailleurs</h2>
        </div>
    );
}