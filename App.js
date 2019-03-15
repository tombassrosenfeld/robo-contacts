import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import List from'./screens/List';
import Detail from'./screens/Detail';

StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({

  List: List,
  Detail: Detail,
  
  }, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#2a3daa'
    },
    headerTintColor: '#ffffff'
  }
});

export default createAppContainer( RootNavigator );