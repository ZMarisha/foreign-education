import React from "react";
import d from './Universities.module.css';

const Universities:React.FC = () => {


    return (
        <div>
            <div className="container">
                <h1 className={`${"titleText"} ${"margin"}`}>Universities</h1>
                <div className={d.line}></div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Universities;