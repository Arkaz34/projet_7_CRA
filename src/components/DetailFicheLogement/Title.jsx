export default function ficheTitle(props){

    return(
        <div className="fiche-block-title">
            <h2>{props.titre}</h2>
            <h3>{props.location}</h3>
        </div>
    )
}