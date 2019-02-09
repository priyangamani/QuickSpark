import { View, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export const getNavigationOptions = (title, backgroundColor, color,header) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  header:header,
  headerTintColor: color,
  
});

export const getEmptyHeader = () => ({
  header:null
});

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerLeft,
  headerRight: (
    <TouchableWithoutFeedback> 
     <FontAwesome name="cog"
        style={{ paddingRight: 16, color: 'white',fontSize:25 }}
      />
    </TouchableWithoutFeedback>
  ),
});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: 'transparent',
  drawerLabel: title,
  drawerIcon,
});

export const getDrawerConfig = (drawerWidth, drawerPosition, initialRouteName) => ({
  contentOptions: {
    activeTintColor: "#fff",
    activeBackgroundColor: 'transparent',
    inactiveTintColor: '#ddd',
    inactiveBackgroundColor: 'transparent',
    labelStyle: {
      fontSize: 20,
      marginLeft: 30,
    },
  },
  drawerWidth,
  drawerPosition,
  initialRouteName,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerBackgroundColor: "#FA3258",
  
});
