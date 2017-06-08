const startPlaceAction = (data, startPlace) => {
	let newData = getNewData(data);
	newData.startPlace = startPlace;
	return {
		type:'changeStartPlace',
		newData
	}
}


function getNewData (oldData){
	let newData = {}
	for(let key in oldData){
		newData[key] = oldData[key]
	}
	return newData;
}

export default {
	startPlaceAction
}