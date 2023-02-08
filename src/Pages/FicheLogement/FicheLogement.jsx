import './ficheLogement.css'
import getpost from '../../Data/data.json'
import Carrousel from '../../components/ComponentsFicheLogement/Carrousel';
import Fichetitle from '../../components/ComponentsFicheLogement/FicheTitle'
import Host from '../../components/ComponentsFicheLogement/Host'
import Tag from '../../components/ComponentsFicheLogement/Tag'
import Rate from '../../components/ComponentsFicheLogement/Rate'
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
        <main className='container-fiche'>
            <Carrousel pictures={rental.pictures} />
            <div className='container-title-name'>
                <div className='fiche-block-logement'>
                    <Fichetitle titre={rental.title} location={rental.location} />
                    <Tag tags={rental.tags} />
                </div>
                <div className='fiche-block-content'>
                    <Host name={rental.host.name} picture={rental.host.picture} />
                    <Rate score={rental.rating} />
                </div>
            </div>
            <div className='fiche-block-drop' >
                <Dropdown title='Description' description={rental.description} />
                <Dropdown
                    title="Equipements"
                    description={rental.equipments.map((equipement, index) =>
                        <li key={index} className='equipements'>{equipement}</li>)}
                />
            </div>
        </main>
    )
};