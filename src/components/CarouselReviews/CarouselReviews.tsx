import React from "react";
import Carousel from 'better-react-carousel';
import student1 from '../../images/student1.png';
import student2 from '../../images/student2.png';
import CarouselStudentFeedback from "../CarouselStudentFeedback/CarouselStudentFeedback";
import d from './CarouselReviews.module.css';



const students = [
    {
        id: 1,
        firstName: 'Alex',
        LastName: 'Merfit',
        img: student1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
    },
    {
        id: 2,
        firstName: 'Alex',
        LastName: 'Merfit',
        img: student2 ,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
    },
    {
        id: 3,
        firstName: 'Alex',
        LastName: 'Merfit',
        img: student1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
    },
    {
        id: 4,
        firstName: 'Alex',
        LastName: 'Merfit',
        img: student2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
    },
    {
        id: 5,
        firstName: 'Alex',
        LastName: 'Merfit',
        img: student1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
    },
]

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