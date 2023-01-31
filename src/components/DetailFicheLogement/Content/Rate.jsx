import './rate.css'
import starOrange from '../../../assets/Star-orange.png'
import starGrey from '../../../assets/Star-grey.png'

export default function stars(score) {

    const stars = [1, 2, 3, 4, 5];
    console.log(stars);

    //affichage
    return (
        <div className="block-star">
            {stars.map((level) => score >= level? (
            <img key={level} className="star" src={starOrange} alt="rating star" />
            ):(  
            <img key={level} className="star" src={starGrey} alt="rating star" />			
            ))}
        </div>
    );
}