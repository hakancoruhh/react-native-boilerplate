import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'


//import globalSaga from './src/containers/Global/saga';



const rootSaga = function* rootSaga() {
 yield[
  //fork(globalSaga),
  
 ];
}

export default rootSaga;
