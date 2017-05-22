import React from 'react';
import { View, Text, AppRegistry, Button, Image } from 'react-native';
 
import TabNavigator from 'react-native-tab-navigator';

import footIndex from './images/footer_index.png';
import IndexComponent from './components/index';

let Root = React.createClass({
	getInitialState() {
		return {
			selectedTab:'index'
		}
	},
	handlePress(page){
		this.setState({
			selectedTab:page
		})
	},
	render(){
		return (	 		
			<TabNavigator>
				<TabNavigator.Item
					title='index'
					renderIcon = {
						() => <Image source={footIndex}/>
					}
					selected={this.state.selectedTab === 'index'}
					onPress={this.handlePress.bind(null,'index')} 
				>	
					<IndexComponent/>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='order'
					selected={this.state.selectedTab === 'order'}
					onPress={this.handlePress.bind(null,'order')}
				>	
					<View>
						<Text>1111111111111111</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='customService'
					selected={this.state.selectedTab === 'customService'}
					onPress={this.handlePress.bind(null,'customService')}
				>	
					<View>
						<Text>222222222222</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='personal'
					selected={this.state.selectedTab === 'personal'}
					onPress={this.handlePress.bind(null,'personal')}
				>	
					<View>
						<Text>3333333333</Text>
					</View>
				</TabNavigator.Item>
			</TabNavigator>
			 
		)
	}
});


export default Root;

AppRegistry.registerComponent('Root',() => Root);