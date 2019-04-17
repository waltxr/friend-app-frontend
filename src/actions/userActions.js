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
  }
}

const resetGrievanceForm = () => {
  return {
    type: types.RESET_FORM
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
      debugger
      dispatch(addGrievance(grievance))
      dispatch(resetGrievanceForm())
    })
    .catch(error => console.log(error))
  }
}
