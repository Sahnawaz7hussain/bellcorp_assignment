import * as types from "./itemActionType";
let initData = {
  isLoading: false,
  isError: false,
  data: [],
};

export const itemReducer = (state = initData, action) => {
  let { type, payload } = action;
  switch (type) {
    case types.GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
      };
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case types.GET_ITEM_FAILURE:
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
