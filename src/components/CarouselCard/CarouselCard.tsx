import React from "react";
import d from './CarouselCard.module.css';


type ICarouselCard = {
    img: string,
    name: string,
    country: string
}

const CarouselCard:React.FC<ICarouselCard> = ({img, name, country}) => {


    return (
        <div className={d.carousel}>
            <img width="246px" height='163px' src={img} alt='university'/>
                <div className={d.carouselItem}>
                    <p>{name}</p>
                    <p>{country}</p>
                </div>
        </div>
    )
}

export default CarouselCard;