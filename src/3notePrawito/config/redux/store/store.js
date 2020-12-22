import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk));
// export const store = createStore(reducer);
