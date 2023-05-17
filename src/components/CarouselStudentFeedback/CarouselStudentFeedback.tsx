import React from "react";
import d from './CarouselStudentFeedback.module.css'

type ICarouselStudentFeedback = {
    id: number,
    firstName: string,
    LastName: string,
    img: string,
    review: string
}

const CarouselStudentFeedback:React.FC<ICarouselStudentFeedback> = ({img, firstName, LastName, review}) => {


    return (
        <div className={d.student}>
            <div className={d.avatar}>
                <img width="246px" height='163px' src={img} alt='student'/>
            </div>
            <div className={d.review}>
                <p>{firstName} {LastName}</p>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default CarouselStudentFeedback;