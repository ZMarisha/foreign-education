import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldFormik from "../FieldFormik/FieldFormik";
import d from './FormApplication.module.css';
import yourName from '../../images/yourName.svg';
import iconBirthday from '../../images/iconBirthday.svg';
import iconContacts from '../../images/iconContacts.svg';
import iconEnglishLevel from '../../images/iconEnglishLevel.svg';
import iconPreferredProgram from '../../images/iconPreferredProgram.svg';
import iconCalendar from '../../images/iconCalendar.svg';
import ConnectWithUs from "../ConnectWithUs/ConnectWithUs";
import QuestionsRemain from "../QuestionsRemain/QuestionsRemain";
import BtnSend from "../BtnSend/BtnSend";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, 'forbidden symbol')
        .min(2, 'First name is too short')
        .max(16, 'No more 16 symbols')
        .required('required field'), //указываает на обязательное заполнение поля
    lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, 'forbidden symbol')
        .min(2, 'Last name is too short')
        .max(16, 'No more 16 symbols')
        .required('required field'), //указываает на обязательное заполнение поля
    birthDay: Yup.string()
        .matches(/^[0-9]+$/, 'forbidden symbol')
        .required('required field')
        .min(2, 'at least 2 symbols')
        .max(2, 'No more 2 symbols'),
    birthMonth: Yup.string()
        .matches(/^[0-9]+$/, 'forbidden symbol')
        .required('required field')
        .min(2, 'at least 2 symbols')
        .max(2, 'No more 2 symbols'),
    birthYear: Yup.string()
        .matches(/^[0-9]+$/, 'forbidden symbol')
        .required('required field')
        .min(4, 'at least 4 symbols')
        .max(4, 'No more 4 symbols'),
    city: Yup.string()
        .min(2, 'City is too short')
        .max(16, 'No more 16 symbols')
        .required('required field') //указываает на обязательное заполнение поля
        .matches(/^[A-Za-z]+$/, 'forbidden symbol'),
    phone: Yup.string()
        .required('required field')
        .matches(/^[0-9]+$/, 'Insert only numbers')
        .min(8, 'Phone is too short')
        .max(12, 'No more 12 symbols'),
    email: Yup.string()
        .required('required field')
        .email('Invalid email'),
    startDay: Yup.string()
        .matches(/^[0-9]+$/, 'forbidden symbol')
        .required('required field')
        .min(2, 'at least 2 symbols')
        .max(2, 'No more 2 symbols'),
    startMonth: Yup.string()
        .matches(/^[0-9]+$/, 'forbidden symbol')
        .required('required field')
        .min(2, 'at least 2 symbols')
        .max(2, 'No more 2 symbols'),
    startYear: Yup.string()
        .matches(/^[0-9]+$/, 'forbidden symbol')
        .required('required field')
        .min(4, 'at least 4 symbols')
        .max(4, 'No more 4 symbols'),
    comment: Yup.string()
})

const FormApplication:React.FC = () => {

    return (
        <div>
            <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                birthDay: '',
                birthMonth: '',
                birthYear: '',
                city: '',
                phone: '',
                email: '',
                beginningLevel: false,
                middleLevel: false,
                advancedLevel: false,
                bachelor: false,
                foundation: false,
                master: false,
                startDay: '',
                startMonth: '',
                startYear: '',
                comment: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => console.log(values)}>

                {({errors, touched}) => (
                    <Form className={d.formBlock}>
                        <div>
                            <div className={d.labelText}>
                                <img src={yourName} alt='full name'/>
                                <span className="text">Full name</span>
                            </div>
                            <div className={`${d.labelBlock} ${d.fullName}`}>
                                <FieldFormik type={'text'} placeholder={'First name'} name={'firstName'} error={errors.firstName} touched={touched.firstName} className={null} component={'input'}/>
                                <FieldFormik type={'text'} placeholder={'Last name'} name={'lastName'} error={errors.lastName} touched={touched.lastName} className={null} component={'input'}/>
                            </div>
                        </div>
                        <div>
                            <div className={d.labelText}>
                                <img src={iconBirthday} alt='full name'/>
                                <span className="text">Your birthday</span>
                            </div>
                            <div className={`${d.labelBlock} ${d.birthday}`}>
                                <FieldFormik type={'text'} placeholder={'Day'} name={'birthDay'} error={errors.birthDay} touched={touched.birthDay} className={null} component={'input'}/>
                                <FieldFormik type={'text'} placeholder={'Month'} name={'birthMonth'} error={errors.birthMonth} touched={touched.birthMonth} className={null} component={'input'}/>
                                <FieldFormik type={'text'} placeholder={'Year'} name={'birthYear'} error={errors.birthYear} touched={touched.birthYear} className={null} component={'input'}/>
                            </div>
                        </div>
                        <div>
                            <div className={d.labelText}>
                                <img src={iconContacts} alt='full name'/>
                                <span className="text">Contacts</span>
                            </div>
                            <div className={`${d.labelBlock} ${d.contacts}`}>
                                <FieldFormik type={'text'} placeholder={'City'} name={'city'} error={errors.city} touched={touched.city} className={null} component={'input'}/>
                               <div className={d.contactItems}>
                                    <FieldFormik type={'text'} placeholder={'Phone'} name={'phone'} error={errors.phone} touched={touched.phone} className={null} component={'input'}/>
                                    <FieldFormik type={'text'} placeholder={'Email'} name={'email'} error={errors.email} touched={touched.email} className={null} component={'input'}/>
                               </div>
                            </div>
                        </div>
                        <div>
                            <div className={d.labelText}>
                                <img src={iconEnglishLevel} alt='full name'/>
                                <span className="text">English level</span>
                            </div>
                            <div className={`${d.labelBlock} ${d.englishLevel}`}>
                                <label className="labelText">
                                <FieldFormik type={'checkbox'} placeholder={''} name={'beginningLevel'} error={null} touched={null} className={null} component={'input'}/>
                                <span>Beginning level (A1-A2)</span>
                                </label>
                            </div>
                            <div className={`${d.labelBlock} ${d.englishLevel}`}>
                                <label className="labelText">
                                <FieldFormik type={'checkbox'} placeholder={''} name={'middleLevel'} error={null} touched={null} className={null} component={'input'}/>
                                <span>Middle level (B1-B2)</span>
                                </label>
                            </div>
                            <div className={`${d.labelBlock} ${d.englishLevel}`}>
                                <label className="labelText">
                                <FieldFormik type={'checkbox'} placeholder={''} name={'advancedLevel'} error={null} touched={null} className={null} component={'input'}/>
                                <span>Advanced level (C1-C2)</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className={d.labelText}>
                                <img src={iconPreferredProgram} alt='full name'/>
                                <span className="text">Preferred program</span>
                            </div>
                            <div className={`${d.labelBlock} ${d.englishLevel}`}>
                                <label className="labelText">
                                <FieldFormik type={'checkbox'} placeholder={''} name={'bachelor'} error={null} touched={null} className={null} component={'input'}/>
                                <span>Bachelor</span>
                                </label>
                            </div>
                            <div className={`${d.labelBlock} ${d.englishLevel}`}>
                                <label className="labelText">
                                <FieldFormik type={'checkbox'} placeholder={''} name={'foundation'} error={null} touched={null} className={null} component={'input'}/>
                                <span>Foundation</span>
                                </label>
                            </div>
                            <div className={`${d.labelBlock} ${d.englishLevel}`}>
                                <label className="labelText">
                                <FieldFormik type={'checkbox'} placeholder={''} name={'master'} error={null} touched={null} className={null} component={'input'}/>
                                <span>Master</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className={d.labelText}>
                                <img src={iconCalendar} alt='full name'/>
                                <span className="text">Preferred start date</span>
                            </div>
                            <div className={`${d.labelBlock} ${d.birthday}`}>
                                <FieldFormik type={'text'} placeholder={'Day'} name={'startDay'} error={errors.startDay} touched={touched.startDay} className={null} component={'input'}/>
                                <FieldFormik type={'text'} placeholder={'Month'} name={'startMonth'} error={errors.startMonth} touched={touched.startMonth} className={null} component={'input'}/>
                                <FieldFormik type={'text'} placeholder={'Year'} name={'startYear'} error={errors.startYear} touched={touched.startYear} className={null} component={'input'}/>
                            </div>
                            <div className={`${d.labelBlock} ${d.comment}`}>
                                <FieldFormik type={'text'} placeholder={"Additional comments"} name={'comment'} error={errors.comment} touched={touched.comment} className={d.iconMessage} component="textarea"/>
                            </div>
                        </div>
                        <div className={d.btnSend}>
                            <BtnSend />
                        </div>
                    </Form>
                )}

            </Formik>
            <ConnectWithUs />
            <QuestionsRemain />
        </div>
    )
}

export default FormApplication;