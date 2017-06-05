import React from 'react';
import {
	View,
	Text,
	TextInput
} from 'react-native';
import { connect } from 'react-redux';
import Title from './title';

class StartPlace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyWord:''
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
	render(){
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
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		test:state.test
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
	}
}

StartPlace = connect(mapStateToProps)(StartPlace);

export default StartPlace;