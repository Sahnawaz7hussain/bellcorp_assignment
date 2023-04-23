import * as types from "./itemActionType";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_API;

// add new ITEM;
const postItemActionFn = (item) => (dispatch) => {
  dispatch({ type: types.ADD_ITEM_REQUEST });
  return axios
    .post(`${base_url}/item/add`, item, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
      },
    })
    .then((res) => {
      return dispatch({ type: types.ADD_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.ADD_ITEM_FAILURE,
        payload: err.response.data,
      });
    });
};

// get list ITEMs
const getItemsActionFn = () => (dispatch) => {
  dispatch({ type: types.GET_ITEM_REQUEST });
  return axios(`${base_url}/item/get`, {
    headers: {
      authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
    },
  })
    .then((res) => {
      return dispatch({
        type: types.GET_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_ITEM_FAILURE, payload: err });
    });
};

// delete ITEM;
const deleteItemActionFn = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_ITEM_REQUEST });
  return axios
    .delete(`${base_url}/item/delete/${id}`, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
      },
    })
    .then((res) => {
      return dispatch({
        type: types.DELETE_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_ITEM_FAILURE, payload: err });
    });
};

const updateItemActionFn = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_ITEM_REQUEST });
  return axios
    .patch(`${base_url}/item/update/${id}`, data, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
      },
    })
    .then((res) => {
      return dispatch({
        type: types.UPDATE_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_ITEM_FAILURE, payload: err });
    });
};

export {
  getItemsActionFn,
  updateItemActionFn,
  postItemActionFn,
  deleteItemActionFn,
};
