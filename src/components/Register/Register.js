import PageWithForm from '../PageWithForm/PageWithForm';
import { useState } from 'react';
import './Register.css';
import useFormWithValidation from '../../hoc/useFormWithValidation';

export default function Register({ onSubmit, message, ...props }) {
  const [userName, setUserName] = useState('');
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  // function handleSetUserName(e) {
  //   handleChange(e);
  // }

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
        userName={values.name}
        setUserName={setUserName}
        message={message}
        // nameIsValid={isValid}
      >
        {/* <label htmlFor="userName" className="auth__input-label">
          Имя
        </label>
        <input
          className="auth__field auth__field_underline"
          type="text"
          value={values.name || ''}
          onChange={handleSetUserName}
          name="name"
          autoComplete="name"
          minLength="2"
          maxLength="30"
          pattern="[а-яА-Яa-zA-ZёË0-9\- ]{1,}"
          required
        ></input>
        <span className="input-error_auth">{errors.name || ''}</span> */}
      </PageWithForm>
    </section>
  );
}
