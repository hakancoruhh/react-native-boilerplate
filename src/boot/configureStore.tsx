import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import getRootReducer from "../reducers";
// import devTools from "remote-redux-devtools";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState?: object): any {
  const enhancer = compose();

  return createStore(getRootReducer, initialState!, enhancer);
}

const store = configureStore();

export default store;
