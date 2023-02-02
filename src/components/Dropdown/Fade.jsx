import './fade.css'

export default function Fade({ hide, children }) {
    
    let className = 'fade';
    if (!hide) {
        className += ' out';
    }

    return (
    <div className={className}>{children}</div>
    )
}