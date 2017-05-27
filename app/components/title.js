import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableNativeFeedback
} from 'react-native';
import StyleSheet from 'StyleSheet';
import BackIcon from '../images/back.png';

export default class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	goBack(){
		const { navigator } = this.props;
		navigator.pop();
	}
	render(){
		return (
			<View style={styles.title}>
				<TouchableNativeFeedback onPress={this.goBack.bind(this)}>
					<View style={styles.left}>
						<Image source={BackIcon} style={styles.back}/>
					</View>
				</TouchableNativeFeedback>
				<Text style={styles.text}>{this.props.titleName ? this.props.titleName : ''}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title:{
		width:'100%',
		height:44,
		backgroundColor:'#0597e7',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		position:'relative'
	},
	text:{
		color:'#fff',
		fontSize:14
	},
	back:{
		width:20,
		height:20,
		marginLeft:10
	},
	left:{
		position:'absolute',
		left:0,
		top:10
	}
});