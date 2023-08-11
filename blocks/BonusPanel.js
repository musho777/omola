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
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import styles from '../style';

const BonusPanel = page => {
  return (
    <View style={styles.topPanelEdit}>
      <View style={{
          display:'flex',
          width:  Dimensions.get('window').width - 150,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
      }}>
        <MaterialCommunityIconsIcon
          name="arrow-left"
          onPress={() => page.driver.goBack()}
          size={30}
          style={styles.topPanelBar}
        />
        <Text style={styles.topPanelText}>{page.text}</Text>
      </View>
      <View>
        <MaterialCommunityIconsIcon
          name="information"
          onPress={() => page.driver.navigate("Profile4")}
          size={30}
          style={styles.topPanelBar}
        />
      </View>
    </View>
  );
};

export default BonusPanel;
