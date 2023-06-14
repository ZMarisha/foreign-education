import React from "react";
import d from './CarouselPhotos.module.css';
import Carousel from 'better-react-carousel';
import student from '../../images/student.png'
import CarouselStudentPhoto from "../CarouselStudentPhoto/CarouselStudentPhoto";
import { students } from "../../defaultDates/dafaultDates";




const CarouselPhotos:React.FC = () => {

    return (
        <div className={d.photos}>
            <h2 className="titleText">Photos of our students</h2>
            <div className={d.containerCarousel}>
                <Carousel cols={5} rows={1} gap={20} loop >
                    {students.map(el => 
                        <Carousel.Item key={el.id} >
                            <CarouselStudentPhoto key={el.id} img={el.img}/>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselPhotos