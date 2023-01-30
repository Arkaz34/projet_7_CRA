import './title.css'
export default function ficheTitle(props){

    return(
        <div className="fiche-block-title">
            <h2 className='fiche-title' >{props.titre}</h2>
            <p className='fiche-location' >{props.location}</p>
        </div>
    )
}