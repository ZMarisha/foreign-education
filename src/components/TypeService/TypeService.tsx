import React from "react";
import d from './TypeService.module.css';

type ITypeService = {
    itemPicture: string
    altText: string
    selectedText: string
    text: string
    begginningText: string
}

const TypeService:React.FC<ITypeService> = ({itemPicture, altText, selectedText, text, begginningText}) => {

    return (
        <div className={d.item}>
                <div className={d.itemImg}>
                    <img src={itemPicture} alt={altText}/>
                </div>
                <p className="textSize18">{begginningText}<span className="selectedText">{selectedText}</span>{text}</p>
        </div>
    )
}

export default TypeService;