import React from "react";
import d from './OurServices.module.css';

type IOurServices = {
    children: any
}

const OurServices:React.FC<IOurServices> = ({children}) => {
    return (
        <div className={d.items}>
            {children}
        </div>
    )
}

export default OurServices;