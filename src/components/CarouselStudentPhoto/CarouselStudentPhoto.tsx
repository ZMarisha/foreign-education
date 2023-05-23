import React from "react";

type ICarouselStudentPhoto = {
    avatar: string
}

const CarouselStudentPhoto:React.FC<ICarouselStudentPhoto> = ({avatar}) => {

    return (
        <div>
            <img src={avatar} alt='student avatar'/>
        </div>
    )
}

export default CarouselStudentPhoto;