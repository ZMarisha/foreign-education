import React from "react";
import { useMatch, Link } from "react-router-dom";

type ICustomLink = {
    children: string,
    to: string
}
 
const CustomLink:React.FC<ICustomLink> = ({children, to}) => {

    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link to={to} style={{color: match ? '#52BFFF' : '#7A7A7A', textDecorationLine: match ? 'underline' : 'none'}}>{children}</Link>
    )
};

export default CustomLink;