import * as types from "./recipeActionType";
let initData = {
  isLoading: false,
  isError: false,
  data: [],
};

export const recipeReducer = (state = initData, action) => {
  let { type, payload } = action;
  switch (type) {
    case types.GET_RECIPE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: {},
      };
    case types.GET_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case types.GET_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    default:
      return state;
  }
};
