import PageWithForm from '../PageWithForm/PageWithForm';
import { useState } from 'react';
import './Register.css';

export default function Register({ onSubmit, ...props }) {
  const [userName, setUserName] = useState('');
  function handleSetUserName(e) {
    setUserName(e.target.value);
  }
  return (
    <section className="register section_height">
      <PageWithForm
        title="Добро пожаловать!"
        btnText="Зарегистрироваться"
        formName="register"
        inputId="current-password"
        linkTo="/signin"
        underBtnText="Уже зарегистрированы?"
        linkText="Войти"
        onSubmit={onSubmit}
        name={userName}
        setUserName={setUserName}
      >
        <label htmlFor="userName" className="auth__input-label">
          Имя
        </label>
        <input
          className="auth__field auth__field_underline"
          type="text"
          value={userName}
          onChange={handleSetUserName}
          name="userName"
          autoComplete="username"
          required
        ></input>
        <span className="user-name-input-error input-error_auth">
          Введите имя.
        </span>
      </PageWithForm>
    </section>
  );
}
