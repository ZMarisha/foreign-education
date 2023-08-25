import React, { ReactNode } from "react";
import d from './ItemShell.module.css';

interface IItemShel {
    children: ReactNode;
}

const ItemShell:React.FC<IItemShel> = ({children}) => {

    return (
        <div className={d.itemShell}>
            {children}
        </div>
    )
}

export default ItemShell;