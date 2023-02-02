import './ficheLogement.css'
import getpost from '../../Data/data.json'
import Carrousel from '../../components/ComponentsFicheLogement/Carrousel';
import Fichetitle from '../../components/ComponentsFicheLogement/FicheTitle'
import Host from '../../components/ComponentsFicheLogement/Host'
import Tag from '../../components/ComponentsFicheLogement/Content/Tag'
import Rate from '../../components/ComponentsFicheLogement/Content/Rate'
import Dropdown from '../../components/Dropdown/Dropdown';
import Error from '../404/Error'

export default function FicheLogement() {

    //récupère l'id après "logement/"
    const rentalUrlId = window.location.pathname.split('/').slice('-1')[0];
    //find retourne le première élément trouvé dans le tableau 'getpost'
    const rental = getpost.find((item) => item.id === rentalUrlId);
    //contrôle la validité de l'id dans l'url
    if (!rental) {
        return <Error />;
    }

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
                <div className='fiche-block-drop' >
                    <Dropdown title="description" description={rental.description} />
                    <Dropdown title="Equipements" description={rental.equipments} />
                </div>
            </section>
        </div>
    )
};