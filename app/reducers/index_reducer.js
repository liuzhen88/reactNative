const indexReducer = (state='',action) => {
	switch(action.type){
		case "locationStartPlace":
			return action.data;
			break;
		default:
			return state;
			break;
	}
}

export default indexReducer;