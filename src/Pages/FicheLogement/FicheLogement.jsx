import './ficheLogement.css'
import getpost from '../../Data/data.json'
import Carrousel from '../../components/ComponentsFicheLogement/Carrousel';
import Fichetitle from '../../components/ComponentsFicheLogement/FicheTitle'
import Host from '../../components/ComponentsFicheLogement/Host'
import Tag from '../../components/ComponentsFicheLogement/Content/Tag'
import Rate from '../../components/ComponentsFicheLogement/Content/Rate'
import Dropdown from '../../components/Dropdown/Dropdown';

export default function FicheLogement() {

    const rentalUrlId = window.location.pathname.split('/').slice(-1)[0];
    const data = getpost;
    const rental = data.find((item) => item.id === rentalUrlId);
    
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
                    <Dropdown title="description" description={rental.description} />
                    <Dropdown title="Equipements" description={rental.equipments} />
            </section>
        </div>
    )
};