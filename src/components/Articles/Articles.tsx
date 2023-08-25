import React from "react";
import { Link } from "react-router-dom";
import d from './Articles.module.css';
import { lastNews } from '../../defaultDates/dafaultDates';
import ItemShell from "../ItemShell/ItemShell";





const Articles:React.FC = () => {


    return (
        <>
            {lastNews.map(item => <Link to={`/news/${item.id}`} className={d.linkNews} key={item.id}>
                <ItemShell>
                    <div className={d.imgNews}>
                        <img src={item.photoNews} alt='news'/>
                    </div>
                    <div className={d.textNews}>
                        <h2 className="selectedText">{item.title}</h2>
                        <h3 className="textSize18">{item.subtitle}</h3>
                    </div>
                </ItemShell>
            </Link>)}
        </>
    )
}

export default Articles;