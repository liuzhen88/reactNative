import React from 'react';
import {
	Text,
	View,
	AppRegistry,
	Dimensions,
	TextInput,
	Image,
	Button,
	TouchableNativeFeedback
} from 'react-native';
import StyleSheet from 'StyleSheet';
import resolveAssetSource from 'resolveAssetSource';
import { connect } from 'react-redux';

import StartPlace from './start_place';
import EndPlace from './end_place';
import IndexBanner from '../images/index_banner.png';
import locationIcon from '../images/location.png';
import closeIcon from '../images/guanbi.png';

let source = resolveAssetSource(IndexBanner);
let indexBannerWidth = source.width;
let indexBannerHeight = source.height;
let windowWidth = Dimensions.get('window').width;
let h = (windowWidth*indexBannerHeight)/indexBannerWidth;


class IndexComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			text:'hello world'
		}
	}
	selectStartPlace(){
		const { navigator } = this.props;
		let scenes = {
			component:StartPlace,
			params:{
				userId:'3209812345'
			}
		}
		navigator.push(scenes);
	}
	selectEndPlace(){
		const { navigator } = this.props;
		let scenes = {
			component:EndPlace
		}
		navigator.push(scenes);
	}
	render(){
		return (
			<View style={styles.container}>
				<Image source={IndexBanner} style={styles.indexBanner}/>
				<View style={styles.main}>
					<TouchableNativeFeedback onPress={this.selectStartPlace.bind(this)}>
						<View style={styles.startPlace}>
							<Text style={styles.startPlaceName}>出发地</Text>
							<TextInput value='苏州' 
								style={styles.startPlaceInput} 
								editable={false} 
								underlineColorAndroid = 'transparent'
							/>
							<View style={styles.location}>
								<Image source={locationIcon} style={styles.locationImage}/>
							</View>
						</View>
					</TouchableNativeFeedback>
					<TouchableNativeFeedback onPress={this.selectEndPlace.bind(this)}>
						<View style={styles.startPlace}>
							<Text style={styles.startPlaceName}>目的地</Text>
							<TextInput value='盐城' 
								style={styles.startPlaceInput} 
								editable={false} 
								underlineColorAndroid = 'transparent'
							/>
							<View style={styles.location}>
								<Image source={closeIcon} style={styles.locationImage}/>
							</View>
						</View>
					</TouchableNativeFeedback>
				</View>
				<Text>{this.props.test}</Text> 
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
		marginTop:-44,
		backgroundColor:'rgba(255,255,255,0.96)',
		borderRadius:8
	},
	startPlace:{
		paddingLeft:20,
		paddingRight:20,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor:'#c2dae1'
	},
	startPlaceName:{
		fontSize:13,
		color:'#333'
	},
	startPlaceInput:{
		fontSize:16,
		color:'#333',
		width:'83%'
	},
	location:{
		width:15,
		height:15
	},
	locationImage:{
		width:15,
		height:15
	}
});

const mapStateToProps = (state) => {
	return {
		test:state.test
	}
}

IndexComponent = connect(mapStateToProps)(IndexComponent);

export default IndexComponent;