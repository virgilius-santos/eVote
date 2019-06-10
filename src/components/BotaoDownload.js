import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FileSystem, Constants, Notifications, Permissions } from 'expo';
import { storageRef } from '../config';

class BotaoDownload extends Component {
	constructor(props) {
		super(props);
	}
	handleStatusDownload = () => {
		const { loading, loaded } = this.props;
		if (!loading && !loaded)
			return 'Nenhum arquivo baixado ainda.';
		else if (loaded) {
			return 'Arquivo baixado com sucesso';
		}
		else if (loading)
			return 'Baixando...';
	}

	// checkPermission = async () => {
	// 	const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)

	// 	if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
	// 	return false;
	// }

	download = async () => {
		// const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		// ref = await storageRef.ref('sala/pdfs/ambiente-de-desenvolvimento-rn.pdf');
		// url = await ref.getDownloadURL();

		// //permission for camera_roll
		// if (status === "granted") {
		// 	//store the cached file
		// 	const file = await FileSystem.downloadAsync(
		// 		url,
		// 		FileSystem.documentDirectory + "filename.jpg"
		// 	);

		// 	//save the image in the galery using the link of the cached file
		// 	const assetLink = await MediaLibrary.createAssetAsync(file.uri);
		// 	console.log(file, assetLink);
		// }

		// this.getiOSNotificationPermission();

		// listenForNotifications = this.listenForNotifications.bind(this);
		// this.listenForNotifications();

		// FileSystem.makeDirectoryAsync(FileSystem.cacheDirectory+'/pdf', { intermediates: true });
		ref = await storageRef.ref('sala/pdfs/ambiente-de-desenvolvimento-rn.pdf');
		await ref.getDownloadURL();//.then((url) => callback(url));
		console.log(url);
		// console.log(FileSystem.cacheDirectory);
		// FileSystem.downloadAsync(
		// 	url,
		// 	FileSystem.documentDirectory + 'ambiente-de-desenvolvimento-rn.pdf'
		// ).then(({ uri }) => {
		// 	console.log('Finished downloading to ', uri);
		// 	const localnotification = {
		// 		title: 'Download has finished',
		// 		body: 'ambiente-de-desenvolvimento-rn.pdf' + " has been downloaded. Tap to open file.",
		// 		android: {
		// 			sound: true,
		// 		},
		// 		ios: {
		// 			sound: true,
		// 		},

		// 		data: {
		// 			fileUri: uri
		// 		},
		// 	};
		// 	localnotification.data.title = localnotification.title;
		// 	localnotification.data.body = localnotification.body;
		// 	let sendAfterFiveSeconds = Date.now();
		// 	sendAfterFiveSeconds += 3000;

		// 	const schedulingOptions = { time: sendAfterFiveSeconds };
		// 	Notifications.scheduleLocalNotificationAsync(
		// 		localnotification,
		// 		schedulingOptions
		// 	);
		// }).catch(error => {
		// 	console.error(error);
		// 	Alert.alert(error);
		// });
	}


	render() {
		const { texto, onPress, style, loading, loaded } = this.props;
		return (
			<View style={{ alignContent: 'center' }}>
				<View style={styles.container}>
					<TouchableOpacity
						style={[styles.buttonStyle, style]}
						onPress={onPress}
					>
						<View style={styles.sideBYside}>
							<Icon style={styles.icon}
								name="md-download"
								size={35}
								color="#C08AE9"
							/>
							<Text style={styles.textStyle}>
								{texto}
							</Text>
						</View>
					</TouchableOpacity>
					{loading && <ActivityIndicator
						style={styles.iconStatusLoading}
						animating={loading}
						size="large"
						color="#00DC7B"
					/>}
					{!loading && loaded &&
						<Icon
							style={styles.iconStatusLoaded}
							name="md-checkmark-circle"
							size={30} color="#00DC7B"
						/>
					}
				</View>
				<Text style={styles.status}>{this.handleStatusDownload()}</Text>
			</View>
		);
	}
}

BotaoDownload.propTypes = {
	//   texto: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	style: Text.propTypes.style,
	loading: PropTypes.bool
};

BotaoDownload.defaultProps = {
	loading: undefined,
	style: undefined
};

const styles = StyleSheet.create({
	buttonStyle: {
		alignSelf: 'center',
		backgroundColor: "#7500CF",
		borderRadius: 35,
		height: 60,
		marginLeft: 22,
		padding: 10,
		width: 210
	},
	container: {
		flexDirection: 'row',
		alignSelf: 'center',
		width: '70%',
	},
	icon: {
		marginTop: 3,
		paddingBottom: 0,
		paddingTop: 0
	},
	iconStatusLoaded: {
		justifyContent: 'flex-end',
		paddingLeft: 5,
		marginTop: 45
	},
	iconStatusLoading: {
		justifyContent: 'center',
		paddingLeft: 5,
		marginTop: 22
	},
	sideBYside: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	status: {
		alignSelf: 'center',
		marginLeft: -10,
		color: "#9B9B9B",
		fontSize: 12,
	},
	textStyle: {
		color: '#ffffff',
		fontWeight: '500',
		fontSize: 14,
		paddingTop: 10
	}
});


export default BotaoDownload;