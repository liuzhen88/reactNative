import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let initStore = {
	test:'测试'
}

let store = createStore(
	rootReducer,
	initStore,
	applyMiddleware(thunk)
)

export default store;