const footerReducer = (state='', action) => {
	switch (action.type){
		case "changeTab":

			return action.data;
			break;
		default :

			return state;
			break;
	}
}

export default footerReducer;