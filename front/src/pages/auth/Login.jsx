import React, { useCallback, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import "../../common/css/SignUp.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_request } from "../../reducers/userReducer";
import { MAIN_API } from "../../lib/axios";
import { AUTH_SIGNIN } from "../../common/path";
import Button from "../../common/Button";
import './login.css'

const Login = () => {
  const auth = useSelector((state) => {
    return state.user.me
  });

  console.log(auth)


  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [isloadding, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const Signin = useCallback(
    (data) => {
      dispatch(login_request(data));
    },
    [dispatch]
  );

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "이메일을 입력해주세요.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "이메일형식으로 입력해주세요 예) example@naver.com";
    }

    if (!data.password) {
      errors.password = "패스워드를 입력해주세요";
    }

    return errors;
  };

  const [isLoading, setIsLoding] = useState(false);
  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);
    form.restart();

    MAIN_API(
      setIsLoding,
      AUTH_SIGNIN,
      (res) => {
        if (res.data.status) {
          Signin(data);
        
            localStorage.setItem(`token`, res.data.token);
      
        }
      },
      data
    );
  };

  // useEffect(() => {
  //   if (user.isLogin === true) {
  //     navigate('/')
  //     alert('로그인 성공')
  //   }
  // }, [user.isLogin, navigate])

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Link to="/">
      <Button  className="p-button-text" autoFocus >메인으로</Button>
      </Link>
    </div>
  );
  const faildialogFooter = (
    <div className="flex justify-content-center">
      <Link to="/login">
 
      </Link>
    </div>
  );


  return (
    <div className="form-demo">
      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div id="loginalert"className="flex align-items-center flex-column pt-6 px-3">
          <i className="pi pi-check-circle" style={{ fontSize: '10rem', color: 'var(--green-500)' }}></i>
          <p style={{ lineHeight: 7, textIndent: '1rem', fontSize: 20 }}>
            환영합니다.
          </p>
        </div>
        </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">로그인</h5>
          <Form
            onSubmit={onSubmit}
            initialValues={{ email: "", password: "" }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="email"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Password
                          id="password"
                          {...input}
                          toggleMask
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="password"
                         
                        >
  
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
              <ul >
               <Button type="submit" className="loginsubmit" >로그인</Button>
              <Button className="hell" to="/signup" >회원가입</Button>
              
                </ul>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
