import React from "react";
import { AppRegistry, Text, View, Navigator } from 'react-native';
import Root from './app/root';
import store from './app/store/store';
import { Provider } from 'react-redux'; 
let FirstApp = React.createClass({
    render(){
        return (
        	<Provider store={store}>
	 			<Navigator
					initialRoute = {
						{
							component:Root,
							name:'Root'
						}
					}
					configureScene = {
						(route, routeStack) => {
							return ({
								...Navigator.SceneConfigs.HorizontalSwipeJump,
								gestures:null
							})
						}
					}
					renderScene = {
						(route, navigator) => {
							let Component = route.component;
							return (
								<Component {...route.params} navigator={navigator} />
							)
						}
					}
				/>
			</Provider>
        );
    }

});

export default FirstApp;

AppRegistry.registerComponent('FirstApp',()=>FirstApp);