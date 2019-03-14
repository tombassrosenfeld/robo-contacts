import React, { Component, } from 'react';
import { StyleSheet, View, Image, Text,  } from 'react-native';




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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  image: {
  	marginBottom: 10,
  	height: 200,
  	width: 200,
  	alignItems: 'center',
  },

  detailText: {
  	paddingHorizontal: 20,
  	marginVertical: 5,
  	fontSize: 18,
  }

});

export default Detail;