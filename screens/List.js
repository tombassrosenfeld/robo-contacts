import React, { Component, } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight } from 'react-native';

import contactList from '../contact-list.json'

import axios from 'axios';


class List extends Component {

	static navigationOptions = {

	    title: 'Contacts',
	    
  	}

	constructor(props) {
		super(props)

		this.state={
			contacts: [],
			refreshing: false,
		}


		this.renderItem = this.renderItem.bind(this);
		this.keyExtractor = this.keyExtractor.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.renderSeparator = this.renderSeparator.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.refreshData = this.refreshData.bind(this);
		
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

  	componentDidMount() {
		this.getContent();
	}

	refreshData() {
		this.getContent()
	}

  	getContent() {
  		this.setState ({
  			refreshing: true,
  		})
  		axios.get('https://robocontacts.herokuapp.com/api/contacts?random').then(({ data }) => {
  			this.setState({
  				contacts: data,
  				refreshing: false,
  			})
  		})
  	}



	render(){
		const contacts = this.state.contacts;
		console.log(contacts)

		return(
			<FlatList 
				onRefresh={ this.refreshData }
				refreshing={ this.state.refreshing }
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