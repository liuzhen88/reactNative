import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux';
import actions from '../actions/root_action';

class EndPlace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyWord:'',
			hotCity:[
				{
					name:'苏州',
					id:1
				},
				{
					name:'上海',
					id:2
				},
				{
					name:'北京',
					id:3
				},
				{
					name:'深圳',
					id:4
				},
				{
					name:'盐城',
					id:5
				},
				{
					name:'南京',
					id:6
				}
			]
		}
	}
	handleChange(e){
		let value = e.target.value;
		this.setState({
			keyWord:value
		});
	}
	handleCancle(){
		const { navigator } = this.props;
		navigator.pop();
	}
	checkIsSelect(id){
		let endPlace = this.props.customPackage.endPlace;
		let flag = false;
		endPlace.map(function(item){
			if(item.Id == id){
				flag = true;
			}
		});
		return flag;
	}
	selectEndPlace(id,name){
		let newEndPlace = [];
		let endPlace = this.props.customPackage.endPlace;
		let isSelected = false;
		//检测有没有被选过
		endPlace.forEach(function(value, index){
			if(value.Id == id){
				isSelected = true;
			}
			newEndPlace.push(value);
		});
		if(isSelected == false){
			newEndPlace.push({
				Id:id,
				Name:name,
				Type:1
			});
		}
		this.props.dispatch(actions.indexAction.endPlaceAction(this.props.customPackage,newEndPlace));
		const { navigator } = this.props;
		navigator.pop();
	}
	render(){
		let that = this;
		return (
			<View>
				<View style={style.headerContainer}>
					<TextInput 
						style={style.searchInput} 
						value={this.state.keyWord} 
						underlineColorAndroid = 'transparent'
						onChange={this.handleChange.bind(this)}
						placeholder='请输入城市名称'
					/>
					<View style={style.cancle}>
						<Text style={style.cancleText} onPress={this.handleCancle.bind(this)}>取消</Text>
					</View>
				</View>
				<View>
					<Text style={style.cityTitle}>热门城市</Text>
					<View style={style.cityContainer}>
						{
							this.state.hotCity.map(function(item){
								return 	<TouchableNativeFeedback onPress={that.selectEndPlace.bind(that,item.id,item.name)} key={item.id}>
											<View style={ that.checkIsSelect(item.id) == true ? [style.hotCityList, style.citySelect] : style.hotCityList }> 
												<Text style={style.hotCityListText}>{item.name}</Text> 
											</View>
										</TouchableNativeFeedback>
							})
						}
					</View>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		customPackage:state.customPackage
	}
}

let style = {
	headerContainer:{
		backgroundColor:'#0596e7',
		height:40,
		flexDirection:'row'
	},
	searchInput:{
		width:'85%',
		backgroundColor:'#fff',
		height:30,
		marginTop:5,
		marginLeft:10,
		marginRight:10,
		borderRadius:4,
		lineHeight:30,
		fontSize:14
	},
	cancle:{
		width:40,
		justifyContent:'center'
	},
	cancleText:{
		color:'#fff'
	},
	cityTitle:{
		paddingLeft:15,
		paddingTop:10,
		paddingBottom:10
	},
	cityContainer:{
		flexDirection:'row',
		paddingLeft:15,
		paddingRight:15,
		flexWrap:'wrap',
		justifyContent:'space-between'
	},
	hotCityList:{
		width:'32%',
		height:40,
		borderWidth:1,
		borderColor:'#e2e2e2',
		borderRadius:8,
		justifyContent:'center',
		marginBottom:10
	},
	hotCityListText:{
		textAlign:'center',
		color:'#666'
	},
	citySelect:{
		borderColor:'#fc9b16'
	}
}

EndPlace = connect(mapStateToProps)(EndPlace);

export default EndPlace;