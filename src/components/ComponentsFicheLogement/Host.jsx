import './host.css'

export default function Host(props){

    let splitName = props.name.split (' ');

    //affichage
    return(
        <div className='block-host'>
            <div className='block-host-name' >
                <p className='host-firstname' >{(splitName[0])}</p>
                <p className='host-name'>{(splitName[1])}</p>
            </div>
            <img src={props.picture} alt='Identitée' className='host-img' />
        </div>
    )
}