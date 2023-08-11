
import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Linking,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from '../style';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Main from "../src/screens/Main";
import MainFirst from "../src/screens/MainFirst";
import Weight from "../src/screens/Weight";
import Profile from "../src/screens/Profile";
import WeightChange from "../src/screens/WeightChange";
import Diary from "../src/screens/Diary";
import ProductLast from "../src/screens/ProductLast";
import ProductList from "../src/screens/ProductList";

    
  const Tab = createBottomTabNavigator();

const TabNavigator =  ({ route, navigation }) => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconColor;
            let size2;
            let mtop;
        
            if (route.name === 'Главная') {
              iconName = focused ? 'home' : 'home';
              iconColor = focused ? '#ffffff' : '#7c6f66';
              size2 = 29;
              mtop = 0;
            } else if (route.name === 'Дневник') {
              iconName = focused ? 'notebook-outline' : 'notebook-outline';
              iconColor = focused ? '#ffffff' : '#7c6f66';
              size2 = 29;
              mtop = 0;
            } else if (route.name === 'Вес') {
              iconName = focused ? 'message-bulleted' : 'message-bulleted';
              iconColor = focused ? '#ffffff' : '#7c6f66';
              size2 = 29;
              mtop = 0;
            }else if (route.name === 'Профиль') {
              iconName = focused ? 'account-settings' : 'account-settings';
              iconColor = focused ? '#ffffff' : '#7c6f66';
              size2 = 29;
              mtop = 0;
            }else if (route.name === 'Добавить') {
              iconName = focused ? 'plus' : 'plus';
              iconColor = focused ? '#ffffff' : '#7c6f66';
              size2 = 60;
              mtop = -15;
            }
            if (route.name === 'Добавить') {
            return (
              <MaterialCommunityIconsIcon name={iconName} size={size2} style={{color: iconColor, paddingBottom:2,marginTop:mtop,backgroundColor:'#c8b5a6',borderRadius:50}} />
            );
            } else{
              return (
                <MaterialCommunityIconsIcon name={iconName} size={size2} style={{color: iconColor, paddingBottom:2,marginTop:mtop,backgroundColor:'#c8b5a6',borderRadius:50}} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#rgba(0, 0, 0, 0.6)',
          activeBackgroundColor:'#c8b5a6',
          inactiveBackgroundColor:'#c8b5a6'
        }}>
        <Tab.Screen name="Главная" component={Main} />
        <Tab.Screen name="Дневник" component={Diary} />
        <Tab.Screen name="Добавить" component= {ProductList} />
        <Tab.Screen name="Вес" component={Weight} />
        <Tab.Screen name="Профиль" component={Profile} />
        </Tab.Navigator>
            )
  
  }
  
  export default TabNavigator;
  
