
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import Button from '../../common/Button'
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import '../../common/css/SignUp.css'
import { useNavigate } from "react-router-dom"
import { MAIN_API } from '../../lib/axios';
import { AUTH_SIGNUP } from '../../common/path';
import { StyledButton } from '../../common/forms/buttons';



const SignUp = () => {
    const navigate = useNavigate()
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});


    const validate = (data) => {
        let errors = {};

        if (!data.username) {
            errors.username = '닉네임을 입력해주세요';
        }

        if (!data.email) {
            errors.email = '이메일을 입력해주세요.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = '이메일형식으로 입력해주세요 예) example@naver.com';
        }

        if (!data.password) {
            errors.password = '패스워드를 입력해주세요';
        }

        if (!data.accept) {
            errors.accept = '약관에 동의해주세요 ';
        }

        return errors;
    };
    const [isLoading, setIsLoding] = useState(false)
    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);
        form.restart();
        console.log(data)

        MAIN_API(setIsLoding, "http://3.39.197.229/api/auth/signup", (res) => {

        }, data)

    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button className="p-button-text" autoFocus onClick={() => navigate("/login")}>로그인</Button></div>;


    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div id="alertlogin" className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--pink-500)' }}></i>
                    <h5 style={{ fontSize: 25 }}>회원가입이 완료되었습니다</h5>
                    <p style={{ lineHeight: 1.5, fontSize: 15 }}>
                        당신의 닉네임은 <b>{formData.username}</b> 입니다 <p> 아이디는  <b>{formData.email}</b> 입니다!</p>
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">회원가입</h5>
                    <Form onSubmit={onSubmit} initialValues={{ username: '', email: '', password: '', date: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="username" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="username" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right" >
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}></label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label id="inputpassword" htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}></label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="accept" type="checkbox" render={({ input, meta }) => (
                                <div className="field-checkbox">
                                    <Checkbox inputId="accept" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>약관에 동의하시겠습니까 ? </label>
                                </div>
                            )} />


                            <Button type="submit">회원가입</Button>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}

export default SignUp
