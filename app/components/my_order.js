import React from 'react';
import {
	View,
	Text,
	ListView,
	StyleSheet
} from 'react-native';
import Title from './title';

class ListOrder extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View style={ style.container }>
				<View>
					<View>
						<Text style={style.title}>{ this.props.rowData.title }</Text>
					</View>
					<View style={style.timeContainer}>
						<Text style={style.time}>{ this.props.rowData.time }</Text>
					</View>
					<View style={style.timeContainer}>
						<Text style={style.time}>{ this.props.rowData.person }</Text>
					</View>
				</View>
				<View style={style.status}>
					<Text style={style.statusText}>{this.props.rowData.status}</Text>
				</View>
			</View>
		)
	}
}


class MyOrder extends React.Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2
		});
		let data = [];
		for(let i=1;i<=10;i++){
			data.push({
				title:'苏州到盐城，3天2晚',
				time:'6月7日出发，6月9日返回',
				person:'5名成人',
				status:'设计中',
				id:i
			});
		}
		this.state = {
			dataSource:ds.cloneWithRows(data)
		}
	}
	render(){
		return (
			<View>
				<Title titleName='我的订单' navigator={this.props.navigator} isHideBack='true'/>
				<ListView
					dataSource = { this.state.dataSource }
					renderRow = { (rowData) => <ListOrder rowData={rowData}/> }
				>
				</ListView>
			</View>
		)
	}
}

let style = StyleSheet.create({
	container:{
		padding:15,
		borderBottomWidth:1,
		borderBottomColor:'#e2e2e2',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	title:{
		fontSize:16,
		color:'#333'
	},
	timeContainer:{
		marginTop:5
	},
	time:{
		fontSize:14,
		color:'#666'
	},
	status:{
		justifyContent:'center'
	},
	statusText:{
		color:'#fc9b16'
	}
});

export default MyOrder;