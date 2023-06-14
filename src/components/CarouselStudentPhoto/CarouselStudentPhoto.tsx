import React from "react";
import d from './CarouselStudentPhoto.module.css';

type ICarouselStudentPhoto = {
    img: string
}

const CarouselStudentPhoto:React.FC<ICarouselStudentPhoto> = ({img}) => {

    return (
        <div className={d.photoStudent}>
            <img src={img} alt='student avatar'/>
        </div>
    )
}

export default CarouselStudentPhoto;