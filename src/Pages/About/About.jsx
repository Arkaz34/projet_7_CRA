import './about.css'
import About from '../../Data/dataAbout.json';
import Dropdown from '../../components/Dropdown/Dropdown'
import BannerAbout from '../../components/BannerAbout/BannerAbout';

export default function APropos() {

    //affichage
    return (
        <main className='about-block'>
            <BannerAbout />
            <section className='block-about-info'>
                    {About.map((info, index) => {
                        return (
                            <Dropdown key={index} title={info.title} description={info.description} />
                        )
                    })}
            </section>
        </main>
    )
}