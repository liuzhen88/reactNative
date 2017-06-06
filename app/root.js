import React from 'react';
import { 
	View,
	Text, 
	AppRegistry, 
	Button, 
	Image 
} from 'react-native';
import { connect } from 'react-redux';
import StyleSheet from 'StyleSheet';
import actions from './actions/root_action';

import TabNavigator from 'react-native-tab-navigator';

import footIndex from './images/footer_index.png';
import footerPersonal from './images/footer_my.png';
import footerType from './images/footer_type.png';
import footerBusiness from './images/footer_business.png';
import IndexComponent from './components/index';
import PersonCenter from './components/personal';
import MyOrder from './components/my_order';

class Root extends React.Component {
	constructor(props) {
		super(props);
	}
	handlePress(page){
		this.props.dispatch(actions.footerAction(page));
	}
	render(){
		return (
			 	 		
			<TabNavigator>
				<TabNavigator.Item
					title='首页'
					renderIcon = {
						() => <Image source={footIndex} style={style.imageStyle}/>
					}
					selected={this.props.selectedTab === 'index'}
					onPress={this.handlePress.bind(this,'index')} 
				>	
					<IndexComponent navigator={this.props.navigator} testProps='1212121'/>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='订单'
					renderIcon = {
						() => <Image source={footerType} style={style.imageStyle} />
					}
					selected={this.props.selectedTab === 'order'}
					onPress={this.handlePress.bind(this,'order')}
				>	
					<MyOrder/>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='客服'
					renderIcon = {
						() => <Image source={footerBusiness} style={style.imageStyle} />
					}
					selected={this.props.selectedTab === 'customService'}
					onPress={this.handlePress.bind(this,'customService')}
				>	
					<View>
						<Text>222222222222</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='个人'
					renderIcon = {
						() => <Image source={footerPersonal} style={style.imageStyle} />
					}
					selected={this.props.selectedTab === 'personal'}
					onPress={this.handlePress.bind(this,'personal')}
				>	
					<PersonCenter/>
				</TabNavigator.Item>
			</TabNavigator>
			 
		)
	}
};


let style = StyleSheet.create({
	imageStyle:{
		width:20,
		height:20
	}
});

const mapStateToProps = (state) => {
	return {
		selectedTab:state.selectedTab
	}
}

Root = connect(mapStateToProps)(Root);

export default Root;

AppRegistry.registerComponent('Root',() => Root);