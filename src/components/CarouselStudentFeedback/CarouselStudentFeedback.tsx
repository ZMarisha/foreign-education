import React from "react";
import d from './CarouselStudentFeedback.module.css'

type ICarouselStudentFeedback = {
    id: number,
    firstName: string,
    lastName: string,
    img: string,
    review: string
}

const CarouselStudentFeedback:React.FC<ICarouselStudentFeedback> = ({img, firstName, lastName, review}) => {


    return (
        <div className={d.student}>
            <div className={d.avatar}>
                <img src={img} alt='student'/>
            </div>
            <div className={d.review}>
                <p className="selectedText">{firstName} {lastName}</p>
                <p>{review}</p>
            </div>
        </div>
    )
}

export default CarouselStudentFeedback;