import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const DEFAULT_STATE = {
    error:{message:null}
};

export const store = createStore(
    rootReducer,
    DEFAULT_STATE,
    compose(//turn all the middleware into one object so just one parameter can be used as all
        applyMiddleware(thunk),
        window.___REDUX_DEVTOOLS_EXTENSION__ && window.___REDUX_DEVTOOLS_EXTENSION__()
    )
);