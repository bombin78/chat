import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { customerReducer } from './reducers/customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// Временно отключено так как в middleware подключили 'sagaMiddleware'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import countReducer from './reducers/countReducer';
import userReducer from './reducers/userReducer';
import rootWatcher from './sagas';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    countReducer,
    userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

sagaMiddleware.run(rootWatcher);

export default store;