import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';



const Button = ({ onPress, text, }) => (

	<TouchableHighlight
		style={[ styles.activeButton, ]}
    onPress={ onPress }
    underlayColor='#1B5E20'
	>
		<Text
			style={ styles.text }
		>{ text }</Text>
	</TouchableHighlight>
);


const styles = StyleSheet.create({
  activeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#388E3C',
  },

  text: {
  	color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;











