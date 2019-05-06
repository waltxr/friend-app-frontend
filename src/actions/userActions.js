import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// come back to this and fix users: users
const setUsers = (users) => {
  return {
    type: types.REQUEST_USERS,
    users: users
  }
}

export const getUsers = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/users`, {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
      },
    })
      .then(response => response.json())
      .then(users => {
        dispatch(setUsers(users))
      })
      .catch(error => console.log(error));
  };
}
