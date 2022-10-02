import PageWithForm from '../PageWithForm/PageWithForm';
import React from 'react';
import './Register.css';

export default function Register(props) {
  return (
    <section className="register section_height">
      <PageWithForm
        title="Добро пожаловать!"
        btnText="Зарегистрироваться"
        name="register"
        inputId="current-password"
        linkTo="/signin"
        underBtnText="Уже зарегистрированы?"
        linkText="Войти"
        // onSubmit={onSignIn}
      ></PageWithForm>
    </section>
  );
}
