import { combineReducers } from 'redux';
import indexReducer from './index_reducer';
import footerReducer from './footer_reducer';

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
	customPackage:indexReducer,
	selectedTab:footerReducer
});

export default rootReducer;