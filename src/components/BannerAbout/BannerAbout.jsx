import './banner.css'
import ImgBannerAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'


export default function Banner() {

    //affichage
    return(
        <div className='banner'>
            <img className="img-banner" src={ImgBannerAbout} alt="Bannière de kasa page à propos"/>
        </div>
    );
}