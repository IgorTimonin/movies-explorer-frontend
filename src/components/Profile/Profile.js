import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
import '../PageWithForm/PageWithForm.css';
import './Profile.css';

export default function Profile(props) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  // const nav = useNavigate();

  function handleSetUserName(e) {
    setUserName(e.target.value);
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleProfileEdit(e) {
    setOnEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      userName,
      email,
    });
    setUserName('');
    setEmail('');
    setOnEdit(false);
  }

  console.log(onEdit);

  return (
    <section className="profile">
      <div className="auth__container">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <form
          onSubmit={handleSubmit}
          className={`auth__form updateProfileForm`}
          name="updateProfileForm"
          action="#"
        >
          <div className="auth__form-string">
            <label for="userName" className="profile__input-label">
              Имя
            </label>
            <input
              className="profile__field"
              type="text"
              value={props.userName}
              onChange={handleSetUserName}
              name="userName"
              autoComplete="username"
              maxLength="60"
              required
              disabled={onEdit ? '' : true}
            ></input>
          </div>
          <hr className="input__underline"></hr>
          <div className="auth__form-string">
            <label for="userEmail" className="profile__input-label">
              E-mail
            </label>
            <input
              className="profile__field"
              type="email"
              value={email}
              onChange={handleSetEmail}
              name="userEmail"
              autoComplete="username"
              maxLength="60"
              required
              disabled={onEdit ? '' : true}
            ></input>
          </div>
          <div className="profile__btn-block">
            <button
              className={`auth__form-submit app__btn-opacity ${
                onEdit ? 'auth__btn-save auth__btn-save_profile' : 'profile__btn-edit'
              }`}
              onClick={onEdit ? 'submit' : handleProfileEdit}
              type={onEdit ? 'submit' : 'button'}
            >
              {onEdit ? 'Сохранить' : 'Редактировать'}
            </button>
            <button
              className={`auth__form-submit app__btn-opacity ${
                onEdit ? 'block__hide' : 'profile__btn-edit'
              }`}
              type="button"
              // onClick=
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
