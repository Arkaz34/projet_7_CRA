
export default function Fade({ visible, children }) {
    let className = 'fade';
    if (!visible) {
        className += ' out';
    }
    return (
    <div className={className}>{children}</div>
    )
}