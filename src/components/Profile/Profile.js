import React, { useState } from 'react';
import Header from '../Header/Header';
import PageWithForm from '../PageWithForm/PageWithForm';
// import { useNavigate } from 'react-router';
import '../PageWithForm/PageWithForm.css';
import './Profile.css';

export default function Profile(props) {
  const [userName, setUserName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
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

    // props.onSubmit({
    //   userName,
    //   email,
    // });
    setUserName('');
    setEmail('');
    setOnEdit(false);
  }

  return (
    <section className="userProfile">
      {/* <Header></Header> */}
      <div className="userProfile__wrapper">
        {/* <PageWithForm
          title="Привет "
          btnText="Редактировать"
          name="profile"
          inputId="current-password"
          linkTo="/sign-up"
          underBtnText=""
          linkText="Выйти из аккаунта"
          // onSubmit={onSignIn}
        ></PageWithForm> */}

        <div className="auth__container auth__container_profile">
          <h2 className="userProfile__title">Привет, {userName}!</h2>
          <form
            onSubmit={handleSubmit}
            className={`auth__form updateProfileForm`}
            name="updateProfileForm"
            action="#"
          >
            <div className="userProfile__input-block">
              <div className="auth__form-string">
                <label htmlFor="userName" className="userProfile__input-label">
                  Имя
                </label>
                <input
                  className="userProfile__field"
                  type="text"
                  value={userName}
                  onChange={handleSetUserName}
                  name="userName"
                  autoComplete="username"
                  maxLength="19"
                  required
                  disabled={onEdit ? '' : true}
                ></input>
              </div>
              <hr className="input__underline"></hr>
              <div className="auth__form-string">
                <label htmlFor="userEmail" className="userProfile__input-label">
                  E-mail
                </label>
                <input
                  className="userProfile__field"
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
            </div>
            <div className="userProfile__btn-block">
              <span
                className={`${
                  onEdit ? 'input-error_auth userProfile__error' : 'block__hide'
                }`}
              >
                При обновлении профиля произошла ошибка.
              </span>
              <button
                className={`auth__form-submit app__btn-opacity ${
                  onEdit
                    ? 'auth__btn-save auth__btn-save_userProfile'
                    : 'userProfile__btn-edit'
                }`}
                onClick={onEdit ? 'submit' : handleProfileEdit}
                type={onEdit ? 'submit' : 'button'}
              >
                {onEdit ? 'Сохранить' : 'Редактировать'}
              </button>
              <button
                className={`auth__form-submit app__btn-opacity ${
                  onEdit ? 'block__hide' : 'userProfile__btn-edit'
                }`}
                type="button"
                // onClick=
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
