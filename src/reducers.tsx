import { combineReducers } from "redux";
// import { createForms } from 'react-redux-form';
import { navReducer } from "./navigations";

import homeContainerReducer from "./containers/HomeContainer/reducer";

const rootReducer = combineReducers({
  navReducer,
  homeContainerReducer
});

export default rootReducer;
