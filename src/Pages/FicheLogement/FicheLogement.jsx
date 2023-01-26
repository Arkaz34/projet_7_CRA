import Carrousel from '../../components/Carrousel/Carrousel';
import getpost from '../../Data/data.json'
import Title from '../../components/DetailFicheLogement/Title'

export default function FicheLogement() {

    const rentalUrlId = window.location.pathname.split('/').slice(-1)[0];
    const data = getpost;
    const rental = data.find((item) => item.id === rentalUrlId);
    console.log(rental);
    return (
        <div>
            <section>
            <Carrousel />
            <div className='block-logement'><Title /></div>
            
            </section>
        </div>
    );
};