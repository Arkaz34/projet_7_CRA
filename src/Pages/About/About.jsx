import './about.css'
import BannerAbout from '../../components/BannerAbout/BannerAbout'
import About from '../../Data/dataAbout.json';
import Dropdown from '../../components/Dropdown/Dropdown'

export default function APropos(){

    //affichage
    return(
        <div>
            <BannerAbout />
            <section className='block-about-info'>
                <div className='block-info'>
                    {About.map((info, index) => {
                        return (
                            <Dropdown key={index} title={info.title} description={info.description} />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}