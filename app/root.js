import React from 'react';
import { 
	View,
	Text, 
	AppRegistry, 
	Button, 
	Image 
} from 'react-native';
import { connect } from 'react-redux';
import actions from './actions/root_action';

import TabNavigator from 'react-native-tab-navigator';

import footIndex from './images/footer_index.png';
import IndexComponent from './components/index';

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
						() => <Image source={footIndex}/>
					}
					selected={this.props.selectedTab === 'index'}
					onPress={this.handlePress.bind(this,'index')} 
				>	
					<IndexComponent navigator={this.props.navigator} testProps='1212121'/>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='订单'
					selected={this.props.selectedTab === 'order'}
					onPress={this.handlePress.bind(this,'order')}
				>	
					<View>
						<Text>1111111111111111</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='客服'
					selected={this.props.selectedTab === 'customService'}
					onPress={this.handlePress.bind(this,'customService')}
				>	
					<View>
						<Text>222222222222</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='个人'
					selected={this.props.selectedTab === 'personal'}
					onPress={this.handlePress.bind(this,'personal')}
				>	
					<View>
						<Text>3333333333</Text>
					</View>
				</TabNavigator.Item>
			</TabNavigator>
			 
		)
	}
};

const mapStateToProps = (state) => {
	return {
		selectedTab:state.selectedTab
	}
}

Root = connect(mapStateToProps)(Root);

export default Root;

AppRegistry.registerComponent('Root',() => Root);