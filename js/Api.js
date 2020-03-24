export class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        // Можно лучше
        //throw new Error('Ого, ошибка! o_O');
        throw new Error(" Ого, ошибка! o_O");
      });
  }
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        throw new Error(" Ого, ошибка! o_O");
      });
  }
  sendUserInfo(editName, editAbout) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: `${editName}`,
        about: `${editAbout}`
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        throw new Error(" Ого, ошибка! o_O");
      });
  }
}