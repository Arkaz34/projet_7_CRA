import './tag.css'

export default function Content(props) {

    //afichage
    return (
            <ul className='block-tags' >
                {props.tags.map((tag, index) => 
                <li key={index} className='content-tag' >{tag}</li>)}
            </ul>
    )
};