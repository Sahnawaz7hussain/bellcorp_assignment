import * as types from "./authActionType";
import axios from "axios";
const base_api = import.meta.env.VITE_BASE_API;

const userLoginActionFn = (creds) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post(`${base_api}/user/login`, creds)
    .then((res) => {
      return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.LOGIN_FAILURE,
        payload: err.response.data.message,
      });
    });
};

const userLogoutActionFn = () => (dispatch) => {
  return dispatch({ type: types.LOGOUT_REQUEST });
};

export { userLoginActionFn, userLogoutActionFn };
