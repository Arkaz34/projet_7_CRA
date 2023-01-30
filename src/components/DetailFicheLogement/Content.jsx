import './content.css'

export default function Content(props) {


    return (
        <div>
            <ul className='block-tags' >{props.tags}</ul>
        </div>
    )

};