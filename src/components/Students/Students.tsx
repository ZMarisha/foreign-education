import React from "react";
import { students } from "../../defaultDates/dafaultDates";
import d from './Students.module.css';
import studentCap from '../../images/studentCap.svg';


const Students:React.FC = () => {

    return (
        <div>
            <h1 className="titleText margin">Students</h1>
            <div className={d.ourStudents}>
                {students.map(item => <div className={d.ourStudent}>
                    <div className={d.imgNews}>
                        <img src={item.img} alt='news'/>
                    </div>
                    <div>
                        <div className={d.topText}>
                            <p className="selectedText">{item.firstName} {item.lastName}</p>
                            <div className={d.topImg}>
                                <img src={studentCap} alt='student cap'/>
                                <p className="textSize12">{item.university}</p>
                            </div>
                        </div>
                        <p className="textSize18">{item.aboutMyself}</p>
                    </div>
               </div>)}
            </div>
        </div>
    )
}

export default Students;