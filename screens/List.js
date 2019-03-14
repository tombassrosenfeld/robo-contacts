import React, { Component, } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableHighlight, Image } from 'react-native';


import contactList from '../contact-list.json';

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

	renderItem({ item }) {
	return (
		<TouchableHighlight
			
			underlayColor='#e4e4e4'
			onPress={ () => this.clickHandler( item ) }
			style={[]}
			>
			<View style={[styles.listItem]}>
				<Image
					source={{ uri: item.picture }}
					style={ styles.avatar }
				/>
				<View>
					<Text
						style={[styles.listText]}
						>{ item.name }</Text>
					<Text
						style={[ styles.listSub]}
						>{ item.company }</Text>
				</View>
				
			</View>
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
		const contacts = this.state.contacts;
		console.log(contacts)

		return(
			<View
				style={[ ]}
				>	
				<FlatList 
					onRefresh={ this.refreshData }
					refreshing={ this.state.refreshing }
					data={ contacts } 
					renderItem={ this.renderItem } 
					keyExtractor={ this.keyExtractor }
					ItemSeparatorComponent={this.renderSeparator}


				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

  listItem: {
  	height: 50,
  	
  	flexDirection: 'row',
  	alignItems: 'center',
  },

  listText: {
  	fontSize: 18,
  	marginHorizontal: 20,
  	justifyContent: 'center',
  },

	listSub: {
	  fontSize: 18,
	  marginHorizontal: 20,
	  color: 'grey',
	  justifyContent: 'center',
	},

	avatar: {
		height: 50,
		width: 50,
		borderRadius: 25,
		alignItems: 'flex-start',
	},

	

  
});

export default List;