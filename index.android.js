import React from "react";
import { AppRegistry, Text, View, Navigator } from 'react-native';
import Root from './app/root';


let FirstApp = React.createClass({
    render(){
        return (
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
        );
    }

});

export default FirstApp;

AppRegistry.registerComponent('FirstApp',()=>FirstApp);