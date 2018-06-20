export class UserServiceClient {
  HEROKU_URL = 'https://stern-webdev-angular.herokuapp.com/api/';
  findUserById(userId) {
    return fetch(this.HEROKU_URL + '/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(this.HEROKU_URL + 'login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(this.HEROKU_URL + 'logout', {
      method: 'POST',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(this.HEROKU_URL + 'profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then((response) => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.HEROKU_URL + 'user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    return fetch (this.HEROKU_URL + 'user/' + user._id, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  checkUser() {
    if (fetch (this.HEROKU_URL + 'login/profile', {
        credentials: 'include', // include, same-origin, *omit
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })) {
      return true;
    } else {
      return false;
    }
  }
}
