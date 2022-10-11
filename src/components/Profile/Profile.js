import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

import '../PageWithForm/PageWithForm.css';
import './Profile.css';

export default function Profile({onSubmit, onLogOut, ...props}) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  function handleSetName(e) {
    setUserName(e.target.value);
  }
  function handlesetUserEmail(e) {
    setUserEmail(e.target.value);
  }

  function handleProfileEdit(e) {
    setOnEdit(true);
  }

  function profileEdit() {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
    setOnEdit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEdit
      ? onSubmit({
          email: userEmail,
          name: userName,
        })
      : profileEdit();
    // onSubmit({
    //   userName,
    //   userEmail
    // })
    // setUserName(currentUser.name);
    // setUserEmail(currentUser.userEmail);
    // setOnEdit(false);
  }

    useEffect(() => {
      setUserName(currentUser.name);
      setUserEmail(currentUser.email);
    }, []);

  return (
    <section className="userProfile">
      <div className="userProfile__wrapper">
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
                <label htmlFor="name" className="userProfile__input-label">
                  Имя
                </label>
                <input
                  className="userProfile__field"
                  type="text"
                  defaultValue={userName}
                  onChange={handleSetName}
                  name="name"
                  autoComplete="name"
                  maxLength="19"
                  required
                  disabled={onEdit ? false : true}
                ></input>
              </div>
              <hr className="input__underline"></hr>
              <div className="auth__form-string">
                <label htmlFor="useruserEmail" className="userProfile__input-label">
                  E-mail
                </label>
                <input
                  className="userProfile__field"
                  type="userEmail"
                  defaultValue={userEmail}
                  onChange={handlesetUserEmail}
                  name="useruserEmail"
                  autoComplete="name"
                  maxLength="60"
                  required
                  disabled={onEdit ? false : true}
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
                onClick={onEdit ? handleSubmit : handleProfileEdit}
                type={onEdit ? 'submit' : 'button'}
              >
                {onEdit ? 'Сохранить' : 'Редактировать'}
              </button>
              <button
                className={`auth__form-submit app__btn-opacity ${
                  onEdit ? 'block__hide' : 'userProfile__btn-edit'
                }`}
                type="button"
                onClick={onLogOut}
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
