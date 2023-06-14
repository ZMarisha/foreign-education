import React from "react";
import Articles from "../../components/Articles/Articles";
import ConnectWithUs from "../../components/ConnectWithUs/ConnectWithUs";
import QuestionsRemain from "../../components/QuestionsRemain/QuestionsRemain";
import d from './News.module.css';


const News:React.FC = () => {


    return (
        <div>
            <div className="container">
                <h1 className={`${"titleText"} ${"margin"}`}>News</h1>
                <div className={d.blockNews}>
                    <Articles />
                </div>
            </div>
            <ConnectWithUs />
            <QuestionsRemain />
        </div>
    )
}

export default News;