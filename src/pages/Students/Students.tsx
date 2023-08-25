import React, { useState } from "react";
import { students } from "../../defaultDates/dafaultDates";
import d from './Students.module.css';
import studentCap from '../../images/studentCap.svg';
import BtnMore from "../../components/BtnMore/BtnMore";
import ItemShell from "../../components/ItemShell/ItemShell";


const Students:React.FC = () => {

    const [itemCount, setItemCount] = useState(5);
    const handleLoadMore = () => {
        setItemCount(itemCount + 2)
    };

    const visibleStudents = students.slice(0, itemCount);
    let btnDisabled = itemCount < students.length ? false : true
    console.log(btnDisabled)

    return (
        <div>
            <h1 className="titleText margin">Students</h1>
            <div className={d.students}>
                {visibleStudents.map(item => <ItemShell key={item.id}>
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
               </ItemShell>)}
               <BtnMore onClick={handleLoadMore} disabled={btnDisabled}/>
            </div>
        </div>
    )
}

export default Students;