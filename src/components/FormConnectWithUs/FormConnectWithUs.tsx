import React, { useState } from "react";
import d from './FormConnectWithUs.module.css';
import BtnConnect from "../BtnConnect/BtnConnect";
import arrow from '../../images/arrow.svg';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FieldFormik from "../FieldFormik/FieldFormik";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(16, 'No more 16 symbols')
        .required('required field') //указываает на обязательное заполнение поля
        .matches(/^[A-Za-z]+$/, 'forbidden symbol'),
    phone: Yup.string()
        .required('required field')
        .matches(/^[0-9]+$/, 'Insert only numbers')
        .min(8, 'Phone is too short')
        .max(12, 'No more 12 symbols'),
    comment: Yup.string()
});



const FormConnectWithUs:React.FC = () => {

    const [block, setBlock] = useState('none');
    

    return (
        <div className={d.block}>
            <div className={d.line}>
                <h3>Connect with us</h3>
                <p className="text">Leave your details and our specialist will contact you within a day</p>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        comment: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, {resetForm}) => {
                        console.log(values);
                        resetForm({});
                        setBlock('block')
                        setTimeout(() => {
                            setBlock('none')
                        }, 5000)

                    }}
                    >
                
                    {({errors, touched}) => (
                        <Form className={d.connectForm}>
                            <FieldFormik type={'text'} placeholder={"Your name"} name={'name'} error={errors.name} touched={touched.name} className={d.iconPerson} component="input"/>
                            <FieldFormik type={'text'} placeholder={"998998786399"} name={'phone'} error={errors.phone} touched={touched.phone} className={d.iconTel} component="input"/>
                            <FieldFormik type={'text'} placeholder={"Additional comments"} name={'comment'} error={errors.comment} touched={touched.comment} className={d.iconMessage} component="textarea"/>
                            <BtnConnect icon={arrow} text='Send' fn={null}/>
                        </Form>
                    )}

                </Formik>
                <div className={d.alert} style={{display: block}}>
                    <Alert severity="success" >
                        <AlertTitle><strong>Your application has been sent</strong></AlertTitle>
                    </Alert>
                </div>
            </div>
        </div>
    )
}

export default FormConnectWithUs;