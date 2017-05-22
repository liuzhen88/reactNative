import React from 'react';
import {
	Text,
	View,
	AppRegistry,
	Dimensions,
	Image
} from 'react-native';
import StyleSheet from 'StyleSheet';
import resolveAssetSource from 'resolveAssetSource';

import IndexBanner from '../images/index_banner.png';

let source = resolveAssetSource(IndexBanner);
let indexBannerWidth = source.width;
let indexBannerHeight = source.height;
let windowWidth = Dimensions.get('window').width;
let h = (windowWidth*indexBannerHeight)/indexBannerWidth;

export default class IndexComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			text:'hello world'
		}
	}
	render(){
		return (
			<View style={styles.container}>
				<Image source={IndexBanner} style={styles.indexBanner}/>
				<View style={styles.main}>
					<View>
						<Text>出发地</Text>
					</View>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container:{
		flex:1,
		width:'100%',
		backgroundColor:'#C1DAE1'
	},
	indexBanner:{
		width:windowWidth,
		height:h
	},
	main:{
		marginLeft:20,
		marginRight:20,
		position:'relative',
		marginTop:-22,
		backgroundColor:'rgba(255,255,255,0.6)',
		height:300,
		borderRadius:4
	},
	startPlace:{
		paddingLeft:20,
		paddingRight:20
	}
});