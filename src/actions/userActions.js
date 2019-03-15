import { API_URL } from './apiUrl'
import * as types from './actionTypes'

// come back to this and fix users: users
const setUsers = (users) => {
  return {
    type: types.REQUEST_USERS,
    users: users
  }
}

const addGrievance = (grievance) => {
  return {
    type: types.FILE_GRIEVANCE,
    grievance
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

export const fileGrievance = (grievance) => {
  debugger
  return (dispatch) => {
    return fetch(`${API_URL}/grievances`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({grievance: grievance})
    })
    .then(response => response.json())
    .then(grievance => {
      dispatch(addGrievance(grievance))
    })
    .catch(error => console.log(error))
  }
}
