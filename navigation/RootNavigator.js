import React, { useEffect, useState } from 'react';
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
import { NavigationContainer, StackActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import styles from '../style';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import ForgetPasswordScreen from "../src/screens/ForgetPasswordScreen";
import HelloScreen from "../src/screens/HelloScreen";
import LoginScreen from "../src/screens/LoginScreen";

import OpenScreen1 from "../src/screens/OpenScreen1";
import OpenSlider1 from "../src/screens/OpenSlider1";
import OpenSlider2 from "../src/screens/OpenSlider2";
import OpenSlider3 from "../src/screens/OpenSlider3";
import RegistScreen from "../src/screens/RegistScreen";
import RegistScreen1 from "../src/screens/RegistScreen1";
import RegistScreen2 from "../src/screens/RegistScreen2";
import RegistScreen3 from "../src/screens/RegistScreen3";
import RegistScreen4 from "../src/screens/RegistScreen4";
import RegistScreen5 from "../src/screens/RegistScreen5";
import ProductList from "../src/screens/ProductList";
import ProductLast from "../src/screens/ProductLast";
import MyProduct from "../src/screens/MyProduct";
import MyRecept from "../src/screens/MyRecept";
import AddProduct from "../src/screens/AddProduct";
import AddRecept from "../src/screens/AddRecept";
import MainDetails from "../src/screens/MainDetails";
import WeightChange from "../src/screens/WeightChange";
import Weight from "../src/screens/Weight";
import Profile from "../src/screens/Profile";
import RegistScreenInput from "../src/screens/RegistScreenInput";

import { useNavigation } from '@react-navigation/native';

import {getToken, getUserID, setToken, setUserID} from '../api/token';
import {get} from '../api/fetch';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();



function Autorized({ route, navigation }) {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 330,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerIcon: ({ focused, color, size }) => {
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
            source={require('../src/assets/images/nophoto.jpg')}
              style={{ resizeMode: 'stretch', width: 30, height: 30 }}
            />
          );
        },
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="roots" options={{headerShown: false}} component={RootNavigator2} />
    </Drawer.Navigator>
  );
}

function RootNavigator2({ route, navigation }) {

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator headerMode="none"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Драйвер" options={{headerShown: false}} component={TabNavigator} />
      <Stack.Screen name="Услуги" options={{headerShown: false}} component={TabNavigator} />
      <Stack.Screen name="Weight" options={{headerShown: false}} component={Weight} />
      <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
      <Stack.Screen name="WeightChange" options={{headerShown: false}} component={WeightChange} />
      <Stack.Screen name="help" options={{headerShown: false}} component={Weight} />
      <Stack.Screen name="settings" options={{headerShown: false}} component={Weight} />
      <Stack.Screen name="ProductLast" options={{headerShown: false}} component={ProductLast} />
      <Stack.Screen name="ProductList" options={{headerShown: false}} component={ProductList} />
      <Stack.Screen name="MyProduct"  options={{headerShown: false}} component={MyProduct} />
      <Stack.Screen name="MyRecept" options={{headerShown: false}} component={MyRecept} />
      <Stack.Screen name="AddProduct"  options={{headerShown: false}} component={AddProduct} />
      <Stack.Screen name="AddRecept"  options={{headerShown: false}} component={AddRecept} />

      <Stack.Screen name="MainDetails" options={{headerShown: false}} component={MainDetails} />

    </Stack.Navigator>
  );
}

function CustomDrawerContent({ navigation }) {

  const [username, setUsername] = useState('');
  const [createdat, setcreatedat] = useState('');
  const [bonusBallance, setBonus] = useState('');
  const [morephoto, setPhoto] = React.useState('');

  const navigation2 = useNavigation();
  useEffect(() => {
    const getnames = async () => {
      const token = await getToken();
      const usId = await getUserID();
      console.log(usId);
      console.log(token);
      await get('/users/' + usId + '?token=' + token).then(async (res) => { console.log(res); setUsername(res.fio); setcreatedat(res.created_at); setBonus(res.bonus_bill ? res.bonus_bill : 0); setPhoto(res.photo); });
      console.log(username);
    }

    getnames();

    const unsubscribe = navigation.addListener('focus', () => {

      getnames();

    });

  }, [navigation]);

 const logOut = async () => {
    await setToken('');
    await setUserID('');

  };




  return (
    <DrawerContentScrollView style={styles.CustomNavLeft}>

      <View style={styles.group3}>
        <View style={styles.usernamedsColumnRow}>

          <View style={styles.rect18}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('roots', {
                  screen: 'Profile',
                })
              }
              style={styles.text_button}>
              {morephoto == "" ? (
                <Image
                source={require('../src/assets/images/nophoto.jpg')}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
              ) : (
                  <Image
                  source={require('../src/assets/images/nophoto.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
              onPress={() =>
                navigation.navigate('roots', {
                  screen: 'Profile',
                })
              }
              style={styles.text_button}>
          <View style={styles.usernamedsColumn}>
            <Text style={styles.usernameds}>
            {username.split(' ')[2]} {username.split(' ')[0]}
            </Text>
          </View>
          </TouchableOpacity>

          <View style={styles.usernameDays}>
            <Text style={styles.userNameDays_text}>Период дней: {parseInt((Math.floor(Date.now() / 1000)-createdat)/60/60/24)} </Text>
          </View>


        </View>
      </View>



      <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          onPress={() => navigation.navigate('Главная')}>
        
          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='home' size={16} style={{color: 'gray'}} />    Главная</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          onPress={() => navigation.navigate('Дневник')}>
           
          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='book-open' size={16} style={{color: 'gray'}} />    Дневник</Text>
        </TouchableOpacity>
      </View>
   
      <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          onPress={() => navigation.navigate('Weight')}>
         
          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='message-bulleted' size={16} style={{color: 'gray'}} />    Вес</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          onPress={() => navigation.navigate('Profile')}>
         
          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='account-settings' size={16} style={{color: 'gray'}} />    Редактировать профиль</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          // onPress={() => navigation.navigate('Weight')}
          >
         
          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='message-bulleted' size={16} style={{color: 'gray'}} />    Рекомендации по питанию</Text>
        </TouchableOpacity>
      </View>

      
        <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
           onPress={() => navigation.navigate('Weight')}
          >
         
          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='help-circle' size={16} style={{color: 'gray'}} />    Помощь специалистов</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.WhiteEmptyBox}>

      </View>



      <View style={styles.RootNavLineTextLast}>
        <TouchableOpacity
          style={styles.RootNavLineRowLast}
          onPress={() => {
            logOut();
           navigation2.dispatch(StackActions.popToTop());
                   }}>
           
          <Text style={styles.RootNavLineTextLastRed}>Выйти</Text>
        </TouchableOpacity>
      </View>

 

   


    </DrawerContentScrollView>
  );
}

const RootNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator headerMode="none"  screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="OpenScreen1" options={{headerShown: false}} component={OpenScreen1} />
      <Stack.Screen name="HelloScreen" options={{headerShown: false}} component={HelloScreen} />
      <Stack.Screen name="ForgetPasswordScreen" options={{headerShown: false}} component={ForgetPasswordScreen} />
      <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="OpenSlider1" options={{headerShown: false}} component={OpenSlider1} />
      <Stack.Screen name="OpenSlider2" options={{headerShown: false}} component={OpenSlider2} />
      <Stack.Screen name="OpenSlider3" options={{headerShown: false}} component={OpenSlider3} />
      <Stack.Screen name="RegistScreen" options={{headerShown: false}} component={RegistScreen} />
      <Stack.Screen name="RegistScreen1" options={{headerShown: false}} component={RegistScreen1} />
      <Stack.Screen name="RegistScreen2" options={{headerShown: false}} component={RegistScreen2} />
      <Stack.Screen name="RegistScreen3" options={{headerShown: false}} component={RegistScreen3} />
      <Stack.Screen name="RegistScreen4" options={{headerShown: false}}  component={RegistScreen4} />
      <Stack.Screen name="RegistScreen5" options={{headerShown: false}}  component={RegistScreen5} />
      <Stack.Screen name="RegistScreenInput" options={{headerShown: false}} component={RegistScreenInput} />
      <Stack.Screen name="Autorized" options={{headerShown: false}} component={Autorized} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
