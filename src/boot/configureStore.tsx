import { createStore, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import getRootReducer from "./reducers";
import { fromJS } from 'immutable';

const sagaMiddleware = createSagaMiddleware()

export default function getStore(navReducer) {
    
    const store = createStore(
        getRootReducer(navReducer),
        {},
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)
    
    store.subscribe(()=>{
        
    });

    return store;
}




