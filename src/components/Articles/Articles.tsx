import React from "react";
import { Link } from "react-router-dom";
import d from './Articles.module.css';
import { lastNews } from '../../defaultDates/dafaultDates';





const Articles:React.FC = () => {


    return (
        <>
            {lastNews.map(item => <Link to={`/news/${item.id}`} className={d.linkNews} key={item.id}>
                <article className={d.article}>
                    <div className={d.imgNews}>
                        <img src={item.photoNews} alt='news'/>
                    </div>
                    <div className={d.textNews}>
                        <h2 className="selectedText">{item.title}</h2>
                        <h3 className="textSize18">{item.subtitle}</h3>
                    </div>
                </article>
            </Link>)}
        </>
    )
}

export default Articles;