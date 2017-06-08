import React from 'react';
import {
	View,
	Text,
	ListView,
	StyleSheet,
	RefreshControl
} from 'react-native';
import Title from './title';
import app from './config';

let page = 1;
let result = [];
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
		result = data;
		this.state = {
			dataSource:ds.cloneWithRows(data),
			refreshing:false
		}
	}
	componentWillMount() {
		this.handleRefresh();
	}
	handleRefresh(){
		let that = this;
		this.setState({refreshing:true});
		let ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2
		});
		let requestUrl = app.serverUrl + '/getOrderList';
		page = 1;
		app.getAjaxData(requestUrl,'get',{pageIndex:page},function(data){
			result = data;
			that.setState({
				refreshing:false,
				dataSource:ds.cloneWithRows(data)
			})
		})
	}
	_onEndReached(){
		let that = this;
		this.setState({refreshing:true});
		let ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2
		});
		let requestUrl = app.serverUrl + '/getOrderList';
		let nextPage = page + 1;
		app.getAjaxData(requestUrl,'get',{pageIndex:nextPage},function(data){
			that.setState({
				refreshing:false,
				dataSource:ds.cloneWithRows(result.concat(data))
			},function(){
				result = result.concat(data);
				page++;
			})
		})
	}
	render(){
		return (
			<View>
				<Title titleName='我的订单' navigator={this.props.navigator} isHideBack='true'/>
				<ListView
					dataSource = { this.state.dataSource }
					renderRow = { (rowData) => <ListOrder rowData={rowData}/> }
					onEndReachedThreshold={100}
					onEndReached = { this._onEndReached.bind(this) }
					enableEmptySections = {true}
					refreshControl = {
						<RefreshControl
							refreshing = {this.state.refreshing}
							onRefresh = { this.handleRefresh.bind(this) }
						/>
					}
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