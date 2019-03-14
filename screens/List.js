import React, { Component, } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight } from 'react-native';

import contactList from '../contact-list.json'


class List extends Component {

	static navigationOptions = {

	    title: 'Contacts',
	    
  	}

	constructor(props) {
		super(props)


		this.renderItem = this.renderItem.bind(this);
		this.keyExtractor = this.keyExtractor.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.renderSeparator = this.renderSeparator.bind(this);
		
	}

	clickHandler( item ) {
		this.props.navigation.navigate('Detail', { 
			contact: item,
		})

	}


	renderItem({ item }) {
		return (
			<TouchableHighlight
				style={ styles.listItem }
				underlayColor='#e4e4e4'
				onPress={ () => this.clickHandler( item ) }
				>
				<Text
					style={ styles.listText }
					>{ item.name }</Text>
			</TouchableHighlight>
		);
	}

	renderSeparator() {
    const style = { height: 1, backgroundColor: '#ddd' };
    return <View style={ style } />;
  }

	keyExtractor( name, index ) {
    	return `${index}`; 
  	}


	render(){
		const contacts = contactList;
		console.log(contacts)

		return(
			<FlatList 
				data={ contacts } 
				renderItem={ this.renderItem } 
				keyExtractor={ this.keyExtractor }
				ItemSeparatorComponent={this.renderSeparator}
			/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left',
    justifyContent: 'center',
  },

  listItem: {
  	height: 50,
  	justifyContent: 'center',

  },

  listText: {
  	fontSize: 18,
  	marginHorizontal: 10,
  }

  
});

export default List;