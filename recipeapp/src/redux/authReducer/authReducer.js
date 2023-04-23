import * as types from "./authActionType";
const userToken = JSON.parse(localStorage.getItem("TOKEN"));
const isAuth = userToken ? true : false;
const initAuthData = {
  isAuth: isAuth,
  isLoading: false,
  isError: false,
  error: {},
};

const authReducer = (oldState = initAuthData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        error: {},
        isAuth: false,
      };
    case types.LOGIN_SUCCESS:
      // localStorage.setItem("TOKEN", JSON.stringify(payload.token));
      // console.log("reduer: ", payload);
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        isAuth: true,
        error: {},
      };
    case types.LOGIN_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        error: payload,
        isAuth: false,
      };
    case types.LOGOUT_REQUEST:
      localStorage.removeItem("TOKEN");
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        isAuth: false,
      };
    default:
      return oldState;
  }
};
export { authReducer };
