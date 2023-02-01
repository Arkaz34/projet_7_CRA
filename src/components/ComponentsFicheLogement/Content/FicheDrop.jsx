import './fichedrop.css'

export default function FicheDrop(props) {

    return (
        <div className="block-fiche-drop" >
            <div>
                 <h2>Descrition</h2>
                 <p>{props.description}</p>
            </div>
            <div>
                 <h2>Equipement</h2>
                 <ul>
                    {props.equipements.map((equipment, index) => 
                    <li key={index} >{equipment}</li>)}
                </ul>
             </div>
        </div>
    )
}