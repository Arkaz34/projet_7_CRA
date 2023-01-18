import { useState } from "react";


export default function Carrousel({pictures}){

    const displayPicture = useState([]);

    return (     
            <div>
                {displayPicture.map((image, index) => {
                    return(
                <img key={index} src={image} alt='location'/>
                )
                })}
            </div>
        
    )
}
