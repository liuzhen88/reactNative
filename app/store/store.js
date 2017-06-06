import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let initStore = {
	test:'测试',
	customPackage:{
		startPlace:{
			Id:[],
			Type:'',
			Name:'苏州'
		},
		endPlace:[],
		customTime:[],
		time:{
			count: 5,
			startMonth: '06',
			startDay: '06',
			endMonth: '06',
			endDay: '10',
			startWeek: '周二',
			endWeek: '周六',
		},
		previewTime:{
			count: '',
			startMonth: '',
			startDay: '',
			endMonth: '',
			endDay: '',
			startWeek: '',
			endWeek: '',
		},
		ticket:{
			adultNum:5,
			childrenNum:0
		},
		isChange:false,
	},
	selectedTab:'index'
}

let store = createStore(
	rootReducer,
	initStore,
	applyMiddleware(thunk)
)

export default store;