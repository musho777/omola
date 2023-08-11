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
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import styles from '../style';


const TopPanel =  (page) => {
    return (
        <View style={styles.topPanel}>
          <View>
          {page.tyback==1 ? (
           <MaterialCommunityIconsIcon
           name="arrow-left"
           onPress={() => page.driver.goBack()}
           size={30}
           style={styles.topPanelBar}
         ></MaterialCommunityIconsIcon>
        ) : (
          <MaterialCommunityIconsIcon
          name="menu"
          onPress={() => page.driver.openDrawer()}
              size={30}
              style={styles.topPanelBar}
        ></MaterialCommunityIconsIcon>
             
        )}
            
           
          </View>
          <View>
            <Text style={styles.topPanelText}>{page.text}</Text>
          </View>
        </View>
      );
}

export default TopPanel;
