import React from "react";
import { lastNews } from "../../defaultDates/dafaultDates";
import { useParams } from "react-router-dom";
import d from './Article.module.css';
import BtnBack from "../BtnBack/BtnBack";


const Article:React.FC = () => {

    let { id } = useParams();
  

    let data = lastNews.find(item => item.id === Number(id))


    return (
        <>
            {data && <article key={data.id} className={`${d.article} ${'container'}`}>
                <div className={`${d.fnBack} ${'margin'}`}>
                    <BtnBack />
                    <h1 className="titleText">{data.title}</h1>
                </div>
                <h3 className="selectedText">{data.subtitle}</h3>
                <div className={d.articleImg}>
                    <img src={data.photoNews} alt='article'/>
                </div>
                <p className="textSize18">{data.text}</p>
            </article>}
        </>
    )
}

export default Article;