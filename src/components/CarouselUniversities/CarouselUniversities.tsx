import React from "react";
import Carousel from 'better-react-carousel';
import MSU from '../../images/MSU.png';
import harvard from '../../images/harvard.png';
import oxford from '../../images/oxford.png';
import cambridge from '../../images/cambridge.png';
import princeton from '../../images/princeton.png';
import d from './CarouselUniversities.module.css';
import CarouselCard from "../CarouselCard/CarouselCard";


const universities = [{
    id: 1,
    img: MSU,
    country: 'Russia',
    name: 'Moscow State University'
},
{
    id: 2,
    img: oxford,
    country: 'USA',
    name: 'Oxford University'
},
{
    id: 3,
    img: harvard,
    country: 'London',
    name: 'Harvard University'
},
{
    id: 4,
    img: cambridge,
    country: 'London',
    name: 'University of Cambridge'
},
{
    id: 5,
    img: princeton,
    country: 'USA',
    name: 'Princeton University'
},
{
    id: 6,
    img: cambridge,
    country: 'London',
    name: 'University of Cambridge'
},
{
    id: 7,
    img: princeton,
    country: 'USA',
    name: 'Princeton University'
},
{
    id: 8,
    img: cambridge,
    country: 'London',
    name: 'University of Cambridge'
},
{
    id: 9,
    img: princeton,
    country: 'USA',
    name: 'Princeton University'
},
]

const CarouselUniversities:React.FC = () => {


    return (
        <div className={d.infoUniversities}>
            <h2>Universities</h2>
            <p>In our directory you will find more than 100 universities from more than 14 countries</p>
            <div className={d.containerCarousel}>
                <Carousel cols={5} rows={1} gap={20} loop >
                    {universities.map(el => 
                        <Carousel.Item key={el.id} >
                            <CarouselCard key={el.id} {...el}/>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselUniversities;