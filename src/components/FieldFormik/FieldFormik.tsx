import React from "react";
import { Field } from 'formik';
import d from './FieldFormik.module.css';


type IFieldFormik = {
    type: string,
    placeholder: string,
    name: string,
    error: any,
    touched: any,
    className: any,
    component: string
}

const FieldFormik:React.FC<IFieldFormik> = ({type, placeholder, name, error, touched, className, component}) => {


    return (
        <div className={`${d.signUpField} ${error && touched && d.borderRed}`}>
            <Field type={type} placeholder={placeholder} className={className} name={name} component={component}/>
            {error && touched ? <p className={d.error}>{error}</p> : null}
        </div>
    )
}

export default FieldFormik;