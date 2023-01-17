import './card.css'

export default function Card(cover, title){
    return (
        <article className='block-card'>
            <img src={cover} alt='location'/>
            <div>
                <p>{title}</p>
            </div>
        </article>
    )
}
