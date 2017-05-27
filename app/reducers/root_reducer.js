import { combineReducers } from 'redux';

const testReducer = (state='', action) => {
	switch (action.type){
		case "TEST":
			return action.data;
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	test:testReducer
});

export default rootReducer;