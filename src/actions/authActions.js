import { normalize } from 'normalizr'
import {userSchema} from './schema'
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
  return dispatch => {
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
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
      })
      .then(res => {
        if (!res.ok) {throw res}
        return res.json()
      })
      .then((response) => {
        const token = response.auth_token
        localStorage.setItem('token', token)
        return getUser(credentials)
      })
      .then((user) => {
        dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
        return errors.json()
        .then((res) => {
          dispatch(authFailure(res))
          localStorage.clear()
        })
      })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`${API_URL}/users/user`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    })
  })
  return fetch(request)
    .then(response => {
      return response.json()
    })
    .then(userJson => {
      console.log("original Data");
      console.log(userJson);
      console.log("normalized Data");
      console.log(normalize(userJson, userSchema));
      return userJson
    })
    .catch(error => {
      return error
    })
}
