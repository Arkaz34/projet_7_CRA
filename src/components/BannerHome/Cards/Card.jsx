import './card.css'

export default function Card({cover, title}){
    return (
        <div  className='block-card'>
            <img className='img-card' src={cover} alt='location'/>
            <div className='card-txt'>
                <p>{title}</p>
            </div>
        </div>
        
    )
}
