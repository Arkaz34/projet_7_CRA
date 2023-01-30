import './host.css'

export default function Host(props){

    //affichage
    return(
        <div className='block-host'>
            <p className='host-name'>{props.name}</p>
            <img src={props.picture} alt='Identitée' className='host-img' />
        </div>
    )
}