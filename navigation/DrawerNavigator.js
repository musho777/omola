
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


import styles from '../style';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


  import { useNavigation } from '@react-navigation/native';

  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props) {
    const navigation_all = useNavigation();
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.itemUserText}>
          <Text>Пользователь</Text>
        </View>
        <DrawerItemList {...props} />
        <TouchableOpacity
          onPress={() => navigation_all.navigate("Profile")}
          style={styles.text_button}
        >
          <View style={styles.rect1}>
            <Text style={styles.help_text}>Личный кабинет</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemPodmenuText}>
          <Text>подменю</Text>
        </View>
      </DrawerContentScrollView>
    );
  }

const DrawerNavigator =  ({ route, navigation }) => {
    return (
        <Drawer.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          drawerIcon: ({focused, color, size}) => {
            let imgName = '';
  
            if (route.name === 'Услуги') {
              imgName = '';
            } else if (route.name === 'Запись на сервис') {
              imgName = '';
            } else if (route.name === 'Покупка запчастей') {
              imgName = '';
            }
  
            return (
              <Image
                source={imgName}
                style={{resizeMode: 'stretch', width: 30, height: 30}}
              />
            );
          },
        })}
        drawerContent={props => <CustomDrawerContent {...props} />}>
      </Drawer.Navigator>
    )
  }
  
  export default DrawerNavigator;
  