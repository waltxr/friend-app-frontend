import { API_URL } from './apiUrl'
import * as types from './actionTypes'

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}

export const signup = (new_user) => {
  console.log(new_user)
  return dispatch => {
    console.log(dispatch);
    return fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(new_user)
    })
      .then(response => response.json())
      .then(response => {
        const token = response.auth_token;
        localStorage.setItem('token', token);
        const user = response.user
        localStorage.setItem('user', user)
        dispatch(authSuccess(user, token))
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  }
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
      })
      .then(res => res.json())
      .then((response) => {
        console.log(response)
        const token = response.jwt
        localStorage.setItem('token', token)
        console.log(localStorage.token)
        return getUser(credentials)
      })
      .then((user) => {
        debugger
        dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
        console.log(errors);
        dispatch(authFailure(errors))
        localStorage.clear()
      })
  }
}

// .then((res) => {
//   console.log(res.ok)
// })

export const getUser = (credentials) => {
  debugger
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: credentials})
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})
    .catch(error => {
      return error
    })
}
