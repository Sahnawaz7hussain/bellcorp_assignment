import * as types from "./recipeActionType";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_API;

// add new RECIPE;
const postRecipeActionFn = (recipe) => (dispatch) => {
  dispatch({ type: types.ADD_RECIPE_REQUEST });
  return axios
    .post(`${base_url}/recipe/add`, recipe, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
      },
    })
    .then((res) => {
      return dispatch({ type: types.ADD_RECIPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.ADD_RECIPE_FAILURE,
        payload: err.response.data,
      });
    });
};

// get list RECIPEs
const getRecipesActionFn = () => (dispatch) => {
  dispatch({ type: types.GET_RECIPE_REQUEST });
  return axios(`${base_url}/recipe/get`, {
    headers: {
      authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
    },
  })
    .then((res) => {
      return dispatch({
        type: types.GET_RECIPE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_RECIPE_FAILURE, payload: err });
    });
};

// delete RECIPE;
const deleteRecipeActionFn = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_RECIPE_REQUEST });
  return axios
    .delete(`${base_url}/recipe/delete/${id}`, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
      },
    })
    .then((res) => {
      return dispatch({
        type: types.DELETE_RECIPE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_RECIPE_FAILURE, payload: err });
    });
};
const updateRecipeActionFn = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_RECIPE_REQUEST });
  return axios
    .patch(`${base_url}/recipe/update/${id}`, data, {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("TOKEN")),
      },
    })
    .then((res) => {
      return dispatch({
        type: types.UPDATE_RECIPE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_RECIPE_FAILURE, payload: err });
    });
};

export {
  postRecipeActionFn,
  getRecipesActionFn,
  deleteRecipeActionFn,
  updateRecipeActionFn,
};
