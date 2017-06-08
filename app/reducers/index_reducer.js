const indexReducer = (state='',action) => {
	switch(action.type){
		case "locationStartPlace":
			return action.data;
			break;
		case "changeStartPlace":
			return action.newData;
			break;
		default:
			return state;
			break;
	}
}

export default indexReducer;