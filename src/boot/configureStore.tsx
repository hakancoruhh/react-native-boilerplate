import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import rootReducer from "../reducers";
// import devTools from "remote-redux-devtools";

export default function configureStore(): any {
  const enhancer = compose();

  return createStore(rootReducer, enhancer);
}
