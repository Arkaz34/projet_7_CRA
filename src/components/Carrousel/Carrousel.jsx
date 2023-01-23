import left from '../../assets/Vector-left.png'
import right from '../../assets/Vector-right.png'

export default function Carrousel() {

    return (
        <div className='block'>
            <img src={left} alt="gauche" className='block-left'/>
            <img src={right} alt="droite" />
        </div>
    )
};