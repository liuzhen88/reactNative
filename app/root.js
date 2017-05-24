import React from 'react';
import { View, Text, AppRegistry, Button, Image } from 'react-native';
 
import TabNavigator from 'react-native-tab-navigator';

import footIndex from './images/footer_index.png';
import IndexComponent from './components/index';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab:'index'
		}
	}
	handlePress(page){
		this.setState({
			selectedTab:page
		})
	}
	render(){
		return (	 		
			<TabNavigator>
				<TabNavigator.Item
					title='��ҳ'
					renderIcon = {
						() => <Image source={footIndex}/>
					}
					selected={this.state.selectedTab === 'index'}
					onPress={this.handlePress.bind(this,'index')} 
				>	
					<IndexComponent navigator={this.props.navigator} testProps='1212121'/>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='����'
					selected={this.state.selectedTab === 'order'}
					onPress={this.handlePress.bind(this,'order')}
				>	
					<View>
						<Text>1111111111111111</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='�ͷ�'
					selected={this.state.selectedTab === 'customService'}
					onPress={this.handlePress.bind(this,'customService')}
				>	
					<View>
						<Text>222222222222</Text>
					</View>
				</TabNavigator.Item>
				<TabNavigator.Item
					title='����'
					selected={this.state.selectedTab === 'personal'}
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


export default Root;

AppRegistry.registerComponent('Root',() => Root);