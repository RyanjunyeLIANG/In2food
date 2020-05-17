import axios from 'axios'

export const register = newUser => {
  return axios
  .post('register', newUser, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  })
  .then(res => {
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}

export const login = user => {
  return axios
  .post('login', {
    email: user.email,
    password: user.password
  }, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  })
  .then(res => {
    localStorage.setItem('usertoken', res.data.access_token);
    //console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
    return 'Error!'
  });
}

export const userAuth = () => {
  const usertoken = localStorage.getItem('usertoken');
  return axios
  .get('user', {
    headers: {
      'Accept': 'application/json', 'Authorization': `Bearer ${usertoken}`
    }
  })
  .then(res => {
    console.log(res);
    return res;
  })
  .catch(err => {
    console.log(err);
  })
}