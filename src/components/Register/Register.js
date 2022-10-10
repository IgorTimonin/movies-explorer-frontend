import PageWithForm from '../PageWithForm/PageWithForm';
import React from 'react';
import './Register.css';

export default function Register({ onSubmit, ...props }) {
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
        onSubmit={onSubmit}
      >
        <>
          <label
            htmlFor="userName"
            className='auth__input-label'
          >
            Имя
          </label>
          <input
            className='auth__field auth__field_underline'
            type="text"
            value={props.userName}
            onChange={props.handleSetUserName}
            name="userName"
            autoComplete="username"
            required
          ></input>
          <span className="user-name-input-error input-error_auth">
            Введите имя.
          </span>
        </>
      </PageWithForm>
    </section>
  );
}
