import { mainApiPath } from '../components/constants/constants';

export const resultHandler = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor(apiPath, headers) {
    this._apiPath = apiPath;
    this._headers = headers;
  }

  signInSignUp(endpoint, name, password, email) {
    return fetch(this._apiPath + `${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(name, password, email),
    }).then(resultHandler);
  }

  getUserData() {
    return fetch((this._apiPath + `/users/me`), {
      headers: this._headers,
    }).then(resultHandler);
  }

  setUserData(userData) {
    return fetch(this._apiPath + `/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    }).then(resultHandler);
  }

  setNewCard(cardData) {
    return fetch(this._apiPath, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.cardTitle,
        link: cardData.cardLink,
      }),
    }).then(resultHandler);
  }

  deleteCard(cardId) {
    return fetch(this._apiPath + `/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(resultHandler);
  }

  likeSwitcher(cardId, isLiked) {
    if (isLiked) {
      return fetch(this._apiPath + `/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(resultHandler);
    } else {
      return fetch(this._apiPath + `/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      }).then(resultHandler);
    }
  }
}

export const mainApi = new Api(mainApiPath, {
  'Content-Type': 'application/json',
});
