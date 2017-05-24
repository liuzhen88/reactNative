import React from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';
import StyleSheet from 'StyleSheet';
import BackIcon from '../images/back.png';

export default class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View style={styles.title}>
				<View>
					<Image source={BackIcon} style={styles.back}/>
				</View>
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
		alignItems:'center'
	},
	text:{
		textAlign:'center',
		lineHeight:30,
		color:'#fff',
		fontSize:14
	},
	back:{
		width:20,
		height:20,
		marginLeft:10
	}
});