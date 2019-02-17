import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers';

// sagas
import rootSaga from '../sagas';

export default function configureStore(callback: () => void): any {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = compose(applyMiddleware(sagaMiddleware));
    const store = createStore(rootReducer, enhancer);
    sagaMiddleware.run(rootSaga);
    persistStore(store, {}, callback);
    return store;
}
