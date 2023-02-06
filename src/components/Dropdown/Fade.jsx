import './fade.css'

export default function Fade({ hide, text }) {
    
    //affichage(render)
    return (
        <div className={hide ? "fade" : "out"}>
            <p className='drop-text'>{text}</p>
        </div>
    )
}