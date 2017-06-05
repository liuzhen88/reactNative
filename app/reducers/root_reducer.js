import { combineReducers } from 'redux';
import indexReducer from './index_reducer';

const testReducer = (state='', action) => {
	switch (action.type){
		case "TEST":
			return action.data;
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	test:testReducer,
	customPackage:indexReducer
});

export default rootReducer;