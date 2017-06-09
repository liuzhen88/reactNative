const startPlaceAction = (data, startPlace) => {
	let newData = getNewData(data);
	newData.startPlace = startPlace;
	return {
		type:'changeStartPlace',
		newData
	}
}

const endPlaceAction = (data, endPlace) => {
	let newData = getNewData(data);
	newData.endPlace = endPlace;
	return {
		type:'changeEndPlace',
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
	startPlaceAction,
	endPlaceAction
}