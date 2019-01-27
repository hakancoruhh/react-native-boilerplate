import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import getRootReducer from "../reducers";
// import devTools from "remote-redux-devtools";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(): object {
  const enhancer = compose();

  const store = createStore(getRootReducer, enhancer);
  return store;
}
