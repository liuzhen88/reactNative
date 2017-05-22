import React from "react";
import { AppRegistry, Text, View } from 'react-native';
import Root from './app/root';


let FirstApp = React.createClass({
    render(){
        return (
 
        	<Root/>
 
        );
    }

});

export default FirstApp;

AppRegistry.registerComponent('FirstApp',()=>FirstApp);