import './banner.css'

export default function Banner({image}) {
    return(
        <div className='banner'>
            <img className="img-banner" src={image} alt="Bannière de kasa page à propos"/>
        </div>
    );
}