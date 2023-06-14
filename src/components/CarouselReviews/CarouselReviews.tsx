import React from "react";
import Carousel from 'better-react-carousel';
import CarouselStudentFeedback from "../CarouselStudentFeedback/CarouselStudentFeedback";
import d from './CarouselReviews.module.css';
import { students } from "../../defaultDates/dafaultDates";



const CarouselReviews:React.FC = () => {

    return (
        <div className={d.carousel}>
            <h2 className="titleText">Feedback from our students</h2>
            <div className={d.container}>
                <Carousel cols={3} rows={1} gap={20} loop >
                    {students.map(el => <Carousel.Item key={el.id}>
                                            <CarouselStudentFeedback {...el} />
                                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    )
}


export default CarouselReviews;