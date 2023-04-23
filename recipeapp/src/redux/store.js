import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authReducer/authReducer";
import { itemReducer } from "./itemReducer/itemReducer";
import { recipeReducer } from "./recipeReducer/recipeReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  itemReducer,
  recipeReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
