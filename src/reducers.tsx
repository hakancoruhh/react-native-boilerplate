import { combineReducers } from "redux";
//import { createForms } from 'react-redux-form';
import { navReducer } from "./navigations";

//import globalReducer from './src/containers/Global/reducer';


export default combineReducers({
    nav: navReducer
    //global: globalReducer,
  });

