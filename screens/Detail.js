import React, { Component, } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

class Detail extends Component {

	constructor(props) {
		super(props)
	}

	static navigationOptions = ({ navigation }) => ({
	
	    title: navigation.getParam( 'contact' ).name, 
  	});

	capitalize(string) {
    		return string.charAt(0).toUpperCase() + string.slice(1);
		};

	render(){

		const { name, picture, gender, address, company, filmName } = this.props.navigation.getParam( 'contact' );
		
		return(
			<View>
				<View
				style={ [styles.imageContainer, ] }
					>
					<Image
						indicator={ ProgressBar } 
						style={ styles.image } 
						source={{ uri: picture }}
					/>
				</View>
				<View>
					<Text
						style={ styles.detailText }
						>{ name } is { this.capitalize( gender ) }.</Text>
					<Text
						style={ styles.detailText }
						>{ gender === 'male' ? 'He' : 'She' } lives at { address }.</Text>
					<Text
						style={ styles.detailText }
						>{ gender === 'male' ? 'He' : 'She' } works at { company }.</Text>
					<Text
						style={ styles.detailText }
						>{ gender === 'male' ? 'His' : 'Her' } favourite film is { filmName }.</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({

  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  image: {
  	marginBottom: 10,
  	height: 200,
  	width: 200,
  },

  detailText: {
  	paddingHorizontal: 20,
  	marginVertical: 5,
  	fontSize: 18,
  }

});

export default Detail;