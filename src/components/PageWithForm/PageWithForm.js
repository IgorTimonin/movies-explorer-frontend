import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageWithForm.css';

export default function PageWithForm({
  onSubmit,
  name,
  setUserName,
  ...props
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmitSignup(e) {
    e.preventDefault();
    onSubmit({
      name,
      password,
      email,
    });
    setUserName('');
    setEmail('');
    setPassword('');
  }

  function handleSubmitSignin(e) {
    e.preventDefault();
    onSubmit({
      password,
      email,
    });
    setEmail('');
    setPassword('');
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <Link
          className="header__logo header__logo_auth app__btn-opacity"
          to="/"
        />
        <h2 className="auth__title">{props.title}</h2>
        <form
          onSubmit={
            props.formName === 'register'
              ? handleSubmitSignup
              : handleSubmitSignin
          }
          // {handleSubmit}
          className={`auth__form auth__${props.formName}-form`}
          name={`${props.formName}_form`}
          action="#"
        >
          <div className="auth__formInputBlock auth__formBlock">
            {props.children}
            {/* <label
              htmlFor="name"
              className={`auth__input-label ${
                props.formName === 'register' ? '' : 'block__hide'
              }`}
            >
              Имя
            </label>
            <input
              className={`auth__field auth__field_underline ${
                props.formName === 'register' ? '' : 'block__hide'
              }`}
              type="text"
              value={name}
              onChange={handlesetUserName}
              name="name"
              autoComplete="name"
              required
            ></input>
            <span className="user-name-input-error input-error_auth">
              Введите имя.
            </span> */}
            <label htmlFor="userEmail" className="auth__input-label">
              E-mail
            </label>
            <input
              className="auth__field auth__field_underline"
              type="email"
              value={email}
              onChange={handleSetEmail}
              name="userEmail"
              placeholder="Email"
              autoComplete="name"
              required
            ></input>
            <span className="user-email-input-error input-error_auth">
              Введите email.
            </span>
            <label htmlFor="userPassword" className="auth__input-label">
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
              Что-то пошло не так...
            </span>
          </div>
          <div className="auth__formBottonBlock auth__formBlock">
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
          </div>
        </form>
      </div>
    </div>
  );
}
