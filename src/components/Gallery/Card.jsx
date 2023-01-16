import './card.css'

export default function Card(){
    return(
            <section className='block-card'>
                <div className='container-card-1'>
                    <div className='card'>Card</div>
                    <div className='card'>Card 2</div>
                    <div className='card'>Card 3</div>
                </div>
                <div className='container-card-1'>
                    <div className='card'>Card 4</div>
                    <div className='card'>Card 5</div>
                    <div className='card'>Card 6</div>

                </div>
            </section>
    )
}