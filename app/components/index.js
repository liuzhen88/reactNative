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
import rightIcon from '../images/right.png';

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
	handleNextStep(){
		console.log(this);
	}
	getLocation(){
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
			},
			(error) => {
				console.log(error);
			}
		);
	}
	render(){
		return (
			<View style={styles.container}>
				<Image source={IndexBanner} style={styles.indexBanner}/>
				<View style={styles.main}>
					 
					<View style={styles.startPlace}>
						<Text style={styles.startPlaceName}>出发地</Text>
						<TouchableNativeFeedback onPress={this.selectStartPlace.bind(this)}>
							<View>
								<TextInput value='盐城' 
									style={styles.startPlaceInput} 
									editable={false} 
									underlineColorAndroid = 'transparent'
								/>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback onPress={this.getLocation.bind(this)}>
							<View style={styles.location}>
								<Image source={locationIcon} style={styles.locationImage}/>
							</View>
						</TouchableNativeFeedback>
					</View>
					 
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
					<TouchableNativeFeedback>
						<View>
							<View style={styles.timeSelectContainer}>
								<View>
									<View>
										<Text style={styles.travelType}>出发</Text>
									</View>
									<View style={styles.startTime}>
										<Text style={styles.travelTime}>06月06日</Text>
										<Text style={styles.travelType}>周二</Text>
									</View>
								</View>
								<View style={styles.playDayCount}>
									<Text style={styles.padding}>共3天</Text>
								</View> 
								<View>
									<View>
										<Text style={styles.travelType}>返回</Text>
									</View>
									<View style={styles.startTime}>
										<Text style={styles.travelTime}>06月09日</Text>
										<Text style={styles.travelType}>周五</Text>
									</View>
								</View>
							</View>
						</View>
					</TouchableNativeFeedback>
					<TouchableNativeFeedback>
						<View style={styles.startPlace}>
							<Text style={styles.startPlaceName}>出行人数</Text>
							<TextInput value='请选择出行人数' 
								style={styles.startPlaceInput} 
								editable={false} 
								underlineColorAndroid = 'transparent'
							/>
							<View style={styles.next}>
								<Image source={rightIcon} style={styles.moreImage}/>
							</View>
						</View>
					</TouchableNativeFeedback>
					<View style={styles.btnContainer} onPress={this.handleNextStep.bind(this)}>
						<Text style={styles.nextText}>下一步</Text>
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
		marginTop:-44,
		backgroundColor:'rgba(255,255,255,0.96)',
		borderRadius:8
	},
	startPlace:{
		paddingLeft:20,
		paddingRight:20,
		flexDirection:'row',
		justifyContent:'space-between',
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
	next:{
		width:18,
		height:18
	},
	locationImage:{
		width:15,
		height:15
	},
	moreImage:{
		width:18,
		height:18
	},
	timeSelectContainer:{
		padding:15,
		flexDirection:'row',
		justifyContent:'space-between',
		borderBottomWidth:1,
		borderBottomColor:'#c2dae1'
	},
	startTime:{
		flexDirection:'row'
	},
	playDayCount:{
		marginTop:10,
		height:20,
		borderWidth:1,
		borderColor:'#e5e5e5',
		borderRadius:8
	},
	padding:{
		paddingLeft:10,
		paddingRight:10,
	},
	travelType:{
		fontSize:13,
		color:'#999',
		textAlignVertical:'bottom'
	},
	travelTime:{
		fontSize:16,
		color:'#333',
		textAlignVertical:'bottom'
	},
	change:{
		backgroundColor:'#fca233',
	},
	changeText:{
		color:'#fff',
		textAlign:'center',
		paddingTop:4,
		paddingBottom:4
	},
	btnContainer:{
		marginLeft:10,
		marginRight:10,
		backgroundColor:'#0596e7',
		marginTop:5,
		marginBottom:5,
		borderRadius:4
	},
	nextText:{
		textAlign:'center',
		color:'#fff',
		paddingTop:10,
		paddingBottom:10
	}
});

const mapStateToProps = (state) => {
	return {
		test:state.test
	}
}

IndexComponent = connect(mapStateToProps)(IndexComponent);

export default IndexComponent;