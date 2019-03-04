import { API_URL } from './apiUrl'
import * as types from './actionTypes'

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
