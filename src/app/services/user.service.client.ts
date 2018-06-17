export class UserServiceClient {
  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('http://localhost:4000/api/logout', {
      method: 'POST',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
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
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {

    return fetch ('http://localhost:4000/api/user/' + user._id, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
