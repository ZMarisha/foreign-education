import React from "react";
import d from './CarouselPhotos.module.css';
import Carousel from 'better-react-carousel';
import student from '../../images/student.png'
import CarouselStudentPhoto from "../CarouselStudentPhoto/CarouselStudentPhoto";


const studentPhotos = [
    {
        id: 1,
        avatar: student
    },
    {
        id: 2,
        avatar: student
    },
    {
        id: 3,
        avatar: student
    },
    {
        id: 4,
        avatar: student
    },
    {
        id: 5,
        avatar: student
    },
    {
        id: 6,
        avatar: student
    },
    {
        id: 7,
        avatar: student
    },
]


const CarouselPhotos:React.FC = () => {

    return (
        <div className={d.photos}>
            <h2>Photos of our students</h2>
            <div className={d.containerCarousel}>
                <Carousel cols={5} rows={1} gap={20} loop >
                    {studentPhotos.map(el => 
                        <Carousel.Item key={el.id} >
                            <CarouselStudentPhoto key={el.id} avatar={el.avatar}/>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselPhotos