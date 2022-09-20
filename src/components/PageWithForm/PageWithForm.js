import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './PageWithForm.css';

export default function PageWithForm(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  function handleSetUserName(e) {
    setUserName(e.target.value);
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      userName,
      password,
      email,
    });
    setUserName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <Link className="header__logo app__btn-opacity" to="/" />
        <h2 className="auth__title">{props.title}</h2>
        <form
          onSubmit={handleSubmit}
          className={`auth__form auth__${props.name}-form`}
          name={`${props.name}_form`}
          action="#"
        >
          <label
            for="userName"
            className={`auth__input-label ${
              props.name === 'register' ? '' : 'block__hide'
            }`}
          >
            Имя
          </label>
          <input
            className={`auth__field auth__field_underline ${
              props.name === 'register' ? '' : 'block__hide'
            }`}
            type="text"
            value={props.userName}
            onChange={handleSetUserName}
            name="userName"
            autoComplete="username"
            required
          ></input>
          <span className="user-name-input-error input-error_auth">
            Введите имя.
          </span>
          <label for="userEmail" className="auth__input-label">
            E-mail
          </label>
          <input
            className="auth__field auth__field_underline"
            type="email"
            value={email}
            onChange={handleSetEmail}
            name="userEmail"
            placeholder="Email"
            autoComplete="username"
            required
          ></input>
          <span className="user-email-input-error input-error_auth">
            Введите email.
          </span>
          <label for="userPassword" className="auth__input-label">
            Пароль
          </label>
          <input
            id={props.inputId}
            className="auth__field auth__field_underline"
            type="password"
            value={password}
            onChange={handleSetPassword}
            name="userPassword"
            placeholder="Пароль"
            autoComplete="current-password"
            required
          ></input>
          <span className="user-password-input-error input-error_auth">
            Введите пароль.
          </span>
          <button
            className="auth__btn-save auth__form-submit app__btn-opacity"
            type="submit"
          >
            {props.btnText}
          </button>
          <p className="auth__login-text">
            {props.underBtnText}
            <Link
              className="auth__login-link app__btn-opacity"
              to={props.linkTo}
            >
              {props.linkText}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
