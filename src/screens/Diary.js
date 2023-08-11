import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MiniTitle from '../components/MiniTitle';
import Button from '../components/Button';
import ColorBold from '../components/ColorBold';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bold from '../components/Bold';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {getToken, getUserID, getDate, setDate} from '../../api/token';
import { get, post } from '../../api/fetch';
import DateTimePicker from '@react-native-community/datetimepicker';
import Spinner from 'react-native-loading-spinner-overlay';

function Diary(props) {

  const [isLoading, SetLoading] = React.useState(false);

  const [breakfast, setbreakfast] = React.useState([]);
  const [breakfastbzu, setbreakfastbzu] = React.useState({});
  const [dinner, setdinner] = React.useState([]);
  const [dinnerbzu, setdinnerbzu] = React.useState({});
  const [lunch, setlunch] = React.useState([]);
  const [lunchbzu, setlunchbzu] = React.useState({});
  const [snack, setsnack] = React.useState([]);
  const [snackbzu, setsnackbzu] = React.useState({});

  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [datet, setDatet] = React.useState('');
  const [date, setDate2] = React.useState(new Date());

  const [datefilter, setdatefilter] = React.useState('');


  const [spinner, setspinner] = React.useState(false);

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate2(currentDate);
    var today = selectedDate;
    var dd = today.getDate();
    dd = dd < 10 ? '0' + dd : dd;
    var mm = today.getMonth() + 1;
    mm = mm < 10 ? '0' + mm : mm;
    var yyyy = today.getFullYear();
    var rezDate2 = dd + '.' + mm + '.' + yyyy;
    await  setDate(rezDate2)
    await setdatefilter(rezDate2);
    await getnames();
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const getnames = async () => {
    setspinner(true);
    rezDate2 =  await getDate();
    setdatefilter(rezDate2);
    const token = await getToken();
    const usId = await getUserID();
    console.log(rezDate2);
    await post('/foods/list-block-food', {
      date: rezDate2,
      user_id: usId,
      token: token,
    })
      .then((res) => {
        console.log(res);

        setbreakfast(res.breakfast);
        setbreakfastbzu(res.breakfast_bzhu);

        setdinner(res.dinner);
        setdinnerbzu(res.dinner_bzhu);
        setlunch(res.lunch);
        setlunchbzu(res.lunch_bzhu);
        setsnack(res.snack);
        setsnackbzu(res.snack_bzhu);
        setspinner(false);

      })
      .catch((res) => {
        setspinner(false);
      });
  };

  React.useEffect(() => {
    getnames();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getnames();
    }, [])
      );

      const Deletefood = async (fcid,meal, userprod,user_recipe) => {

    

        const token = await getToken();
        const usId = await getUserID();
        const  rezDate2 =  await getDate();;
    
        
        console.log(fcid+' - '+usId+' - '+userprod+' - '+meal+' - '+rezDate2+' - '+token);
        
    
        await post('/foods/delete-food', {
          dish_id:fcid,
          user_id:usId,
          user_prod:userprod,
          user_recipe:user_recipe,
          meal_time:meal,
          date:rezDate2,
          token: token,
         
        }).then(async res => {
          console.log(res);
          getnames();
        }).finally(() => {});
       
      }

  const navigation2 = useNavigation();
  return (
    <View style={styles.container}>
            <Spinner
          visible={spinner}
          textContent={'Считаем данные...'}
          textStyle={styles.spinnerTextStyle}
        />
      <StatusBar hidden />
      <View style={styles.scrollAreaColumn}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}>
            <View style={styles.group8}>
              <TouchableOpacity
                onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 1 })}>
                <View style={styles.image1Row}>
                  <Image
                    source={require('../assets/images/pic1.png')}
                    resizeMode="contain"
                    style={styles.image1}></Image>
                  <MiniTitle
                    loremIpsum="Завтрак"
                    style={styles.miniTitle}></MiniTitle>

                  <Button buttonText="ДОБАВИТЬ" style={styles.button}></Button>

                </View>
              </TouchableOpacity>
              <ImageBackground
                style={styles.rect5}
                imageStyle={styles.rect5_imageStyle}
                source={require('../assets/images/Gradient_VsjgDoC.png')}>
                <View style={styles.group3}>
                  <View style={styles.group4}>
                    <Text style={styles.infotext}>Калории</Text>
                    <ColorBold
                      loremIpsum={breakfastbzu.Energy ? breakfastbzu.Energy.amount + ' ' + breakfastbzu.Energy.unit_name : '0 ккал'}
                      style={styles.colorBold}></ColorBold>
                  </View>
                  <View style={styles.group5}>
                    <Text style={styles.infotext1}>Углеводы</Text>
                    <ColorBold
                      loremIpsum={breakfastbzu.Carbohydrate ? parseFloat(breakfastbzu.Carbohydrate.amount).toFixed(2) + ' ' + breakfastbzu.Carbohydrate.unit_name : '0 г'}
                      style={styles.colorBold2}></ColorBold>
                  </View>
                  <View style={styles.group6}>
                    <Text style={styles.infotext2}>Белки</Text>
                    <ColorBold
                      loremIpsum={breakfastbzu.Protein ? parseFloat(breakfastbzu.Protein.amount).toFixed(2) + ' ' + breakfastbzu.Protein.unit_name : '0 г'}
                      style={styles.colorBold3}></ColorBold>
                  </View>
                  <View style={styles.group7}>
                    <Text style={styles.infotext3}>Жиры</Text>
                    <ColorBold
                      loremIpsum={breakfastbzu.Fat ? parseFloat(breakfastbzu.Fat.amount).toFixed(2) + ' ' + breakfastbzu.Fat.unit_name : '0 г'}
                      style={styles.colorBold4}></ColorBold>
                  </View>
                </View>
              </ImageBackground>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect4}>
                <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect6}>
                  <FlatList
                    data={breakfast}
                    keyExtractor={({ id }, index) => index.toString()}
                    renderItem={({ item }) => (
                      <View style={styles.productNameRow}>
                        <Text style={styles.productName}>{item.dish_name}</Text>
                        <Text style={styles.gram}>{item.weight} {item.unit_name}</Text>
                        <Text style={styles.kkal}>{item.energy} ккал.</Text>
                        <TouchableOpacity onPress={() => {  Deletefood(item.dish_id, 1, item.user_prod,item.user_recipe);   }}><MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.icon23}
            ></MaterialCommunityIconsIcon></TouchableOpacity> 
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
            <View style={styles.group13}>
              <TouchableOpacity
                onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 2 })}>
                <View style={styles.image5Row}>
                  <Image
                    source={require('../assets/images/pic2.png')}
                    resizeMode="contain"
                    style={styles.image5}></Image>

                  <MiniTitle
                    loremIpsum="Обед"
                    style={styles.miniTitle2}></MiniTitle>

                  <Button buttonText="ДОБАВИТЬ" style={styles.button2}></Button>

                </View>
              </TouchableOpacity>
              <ImageBackground
                style={styles.rect17}
                imageStyle={styles.rect17_imageStyle}
                source={require('../assets/images/Gradient_VsjgDoC.png')}>
                <View style={styles.rect18}>
                  <View style={styles.rect19}>
                    <Text style={styles.калории2}>Калории</Text>
                    <ColorBold
                      loremIpsum={lunchbzu.Energy ? lunchbzu.Energy.amount + ' ' + lunchbzu.Energy.unit_name : '0 ккал'}
                      style={styles.colorBold9}></ColorBold>
                  </View>
                  <View style={styles.rect20}>
                    <Text style={styles.углеводы2}>Углеводы</Text>
                    <ColorBold
                      loremIpsum={lunchbzu.Carbohydrate ? parseFloat(lunchbzu.Carbohydrate.amount).toFixed(2) + ' ' + lunchbzu.Carbohydrate.unit_name : '0 г'}
                      style={styles.colorBold10}></ColorBold>
                  </View>
                  <View style={styles.rect21}>
                    <Text style={styles.белки2}>Белки</Text>
                    <ColorBold
                      loremIpsum={lunchbzu.Protein ? parseFloat(lunchbzu.Protein.amount).toFixed(2) + ' ' + lunchbzu.Protein.unit_name : '0 г'}
                      style={styles.colorBold11}></ColorBold>
                  </View>
                  <View style={styles.rect22}>
                    <Text style={styles.жиры2}>Жиры</Text>
                    <ColorBold
                      loremIpsum={lunchbzu.Fat ? parseFloat(lunchbzu.Fat.amount).toFixed(2) + ' ' + lunchbzu.Fat.unit_name : '0 г'}
                      style={styles.colorBold12}></ColorBold>
                  </View>
                </View>
              </ImageBackground>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect15}>
                <View
                  gradientImage="Gradient_VsjgDoC.png"
                  style={styles.rect16}>
                  <FlatList
                    data={lunch}
                    keyExtractor={({ id }, index) => index.toString()}
                    renderItem={({ item }) => (
                      <View style={styles.productNameRow}>
                        <Text style={styles.productName}>{item.dish_name}</Text>
                        <Text style={styles.gram}>{item.weight} {item.unit_name}</Text>
                        <Text style={styles.kkal}>{item.energy} ккал.</Text>
                        <TouchableOpacity onPress={() => {  Deletefood(item.dish_id, 2, item.user_prod,item.user_recipe);   }}><MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.icon23}
            ></MaterialCommunityIconsIcon></TouchableOpacity> 
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
            <View style={styles.group12}>
            <TouchableOpacity
                onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 3 })}>
              <View style={styles.image6Row}>
                <Image
                  source={require('../assets/images/pic3.png')}
                  resizeMode="contain"
                  style={styles.image6}></Image>
                <MiniTitle
                  loremIpsum="Ужин"
                  style={styles.miniTitle3}></MiniTitle>
                <Button buttonText="ДОБАВИТЬ" style={styles.button3}></Button>
              </View>
              </TouchableOpacity>
              <ImageBackground
                style={styles.rect9}
                imageStyle={styles.rect9_imageStyle}
                source={require('../assets/images/Gradient_VsjgDoC.png')}>
                <View style={styles.rect10}>
                  <View style={styles.rect11}>
                    <Text style={styles.калории}>Калории</Text>
                    <ColorBold
                      loremIpsum={dinnerbzu.Energy ? dinnerbzu.Energy.amount + ' ' + dinnerbzu.Energy.unit_name : '0 ккал'}
                      style={styles.colorBold5}></ColorBold>
                  </View>
                  <View style={styles.rect12}>
                    <Text style={styles.углеводы}>Углеводы</Text>
                    <ColorBold
                      loremIpsum={dinnerbzu.Carbohydrate ? parseFloat(dinnerbzu.Carbohydrate.amount).toFixed(2) + ' ' + dinnerbzu.Carbohydrate.unit_name : '0 г'}
                      style={styles.colorBold6}></ColorBold>
                  </View>
                  <View style={styles.rect13}>
                    <Text style={styles.белки}>Белки</Text>
                    <ColorBold
                      loremIpsum={dinnerbzu.Protein ? parseFloat(dinnerbzu.Protein.amount).toFixed(2) + ' ' + dinnerbzu.Protein.unit_name : '0 г'}
                      style={styles.colorBold7}></ColorBold>
                  </View>
                  <View style={styles.rect14}>
                    <Text style={styles.жиры}>Жиры</Text>
                    <ColorBold
                      loremIpsum={dinnerbzu.Fat ? parseFloat(dinnerbzu.Fat.amount).toFixed(2) + ' ' + dinnerbzu.Fat.unit_name : '0 г'}
                      style={styles.colorBold8}></ColorBold>
                  </View>
                </View>
              </ImageBackground>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect4}>
                <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect6}>
                  <FlatList
                    data={dinner}
                    keyExtractor={({ id }, index) => index.toString()}
                    renderItem={({ item }) => (
                      <View style={styles.productNameRow}>
                        <Text style={styles.productName}>{item.dish_name}</Text>
                        <Text style={styles.gram}>{item.weight} {item.unit_name}</Text>
                        <Text style={styles.kkal}>{item.energy} ккал.</Text>
                        <TouchableOpacity onPress={() => {  Deletefood(item.dish_id, 3, item.user_prod,item.user_recipe);   }}><MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.icon23}
            ></MaterialCommunityIconsIcon></TouchableOpacity> 
                      </View>
                    )}
                  />
                </View>
              </View>
            
            </View>
            <View style={styles.group11}>
            <TouchableOpacity
                onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 4 })}>
              <View style={styles.image7Row}>
                <Image
                  source={require('../assets/images/pic4.png')}
                  resizeMode="contain"
                  style={styles.image7}></Image>
                <MiniTitle
                  loremIpsum="Перекус / другое"
                  style={styles.miniTitle4}></MiniTitle>
                <Button buttonText="ДОБАВИТЬ" style={styles.button4}></Button>
              </View>
              </TouchableOpacity>
                  <ImageBackground
                    style={styles.rect25}
                    imageStyle={styles.rect25_imageStyle}
                    source={require('../assets/images/Gradient_VsjgDoC.png')}>
                    <View style={styles.rect26}>
                      <View style={styles.rect27}>
                        <Text style={styles.калории3}>Калории</Text>
                        <ColorBold
                          loremIpsum={snackbzu.Energy ? snackbzu.Energy.amount + ' ' + snackbzu.Energy.unit_name : '0 ккал'}
                          style={styles.colorBold13}></ColorBold>
                      </View>
                      <View style={styles.rect28}>
                        <Text style={styles.углеводы3}>Углеводы</Text>
                        <ColorBold
                          loremIpsum={snackbzu.Carbohydrate ? parseFloat(snackbzu.Carbohydrate.amount).toFixed(2) + ' ' + snackbzu.Carbohydrate.unit_name : '0 г'}
                          style={styles.colorBold14}></ColorBold>
                      </View>
                      <View style={styles.rect29}>
                        <Text style={styles.белки3}>Белки</Text>
                        <ColorBold
                          loremIpsum={snackbzu.Protein ? parseFloat(snackbzu.Protein.amount).toFixed(2) + ' ' + snackbzu.Protein.unit_name : '0 г'}
                          style={styles.colorBold15}></ColorBold>
                      </View>
                      <View style={styles.rect30}>
                        <Text style={styles.жиры3}>Жиры</Text>
                        <ColorBold
                          loremIpsum={snackbzu.Fat ? parseFloat(snackbzu.Fat.amount).toFixed(2) + ' ' + snackbzu.Fat.unit_name : '0 г'}
                          style={styles.colorBold16}></ColorBold>
                      </View>
                    </View>
                  </ImageBackground>
                  <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect23}>
                <View
                  gradientImage="Gradient_VsjgDoC.png"
                  style={styles.rect24}>
                   <FlatList
                    data={snack}
                    keyExtractor={({id}, index) => index.toString()}
                    renderItem={({item}) => (
                      <View style={styles.productNameRow}>
                        <Text style={styles.productName}>{item.dish_name}</Text>
                        <Text style={styles.gram}>{item.weight} {item.unit_name}</Text>
                        <Text style={styles.kkal}>{item.energy} ккал.</Text>
                        <TouchableOpacity onPress={() => {  Deletefood(item.dish_id, 4, item.user_prod,item.user_recipe);   }}><MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.icon23}
            ></MaterialCommunityIconsIcon></TouchableOpacity> 
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.header1}>
          <View style={styles.rect1}>
            <View style={styles.group1Row}>
              <View style={styles.group1}>
                <TouchableOpacity onPress={() => navigation2.openDrawer()}>
                  <MaterialCommunityIconsIcon
                    name="menu"
                    style={styles.icon1}></MaterialCommunityIconsIcon>
                </TouchableOpacity>
              </View>
              <View style={styles.data1}>
                <TouchableOpacity onPress={() => showDatepicker()}>
                  <View style={styles.bold1Row}>
                    <Bold dates={datefilter} style={styles.bold1}></Bold>

                    <MaterialCommunityIconsIcon
                      name="menu-down"
                      style={styles.icon2}></MaterialCommunityIconsIcon>
                  </View>
                </TouchableOpacity>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
            <View style={styles.group1RowFiller}></View>
            <View style={styles.group2}>
              <View style={styles.rect2Filler}></View>
              <View style={styles.rect2}>
                <View style={styles.rect3Stack}>
                  <View style={styles.rect3}></View>
                  <MaterialCommunityIconsIcon
                    name="bell"
                    style={styles.icon3}></MaterialCommunityIconsIcon>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.scrollAreaColumnFiller}></View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollArea: {
    height: Dimensions.get('window').height - 100,
    marginTop: 70,
    marginLeft: 16,
  },
  scrollArea_contentContainerStyle: {},
  group8: {
    width: Dimensions.get('window').width - 30,

  },
  image1: {
    width: 31,
    height: 24,
    marginTop: 3,
  },
  miniTitle: {
    width: 94,
    height: 17,
    marginLeft: 17,
    marginTop: 7,
  },
  button: {
    width: 84,
    height: 32,
    position: 'absolute',
    right: 0,
  },
  image1Row: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 4
  },
  rect4: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
    marginTop: 5,
  },
  rect6: {
    borderRadius: 4,
    marginTop: -5,
    
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  productName: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: (Dimensions.get('window').width - 40) / 3,
    // backgroundColor: 'rgba(255,0,0,1)'
  },
  gram: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',

    fontSize: 12,
    textAlign: 'left',
    width: (Dimensions.get('window').width - 40) / 4,
    // backgroundColor: 'rgba(0,0,0,1)',
    // textAlign: 'left',
    paddingLeft: 30,
    marginTop: 2,
    // backgroundColor: 'rgba(255,255,0,1)'
  },
  kkal: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    // width: 73,
    height: 17,
    textAlign: 'left',
    width: (Dimensions.get('window').width - 40) / 4,
    // backgroundColor: 'rgba(0,0,0,1)',
    // textAlign: 'left',
    paddingLeft: 30,
    // backgroundColor: 'rgba(255,0,255,1)'
  },
  productNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 11,
  },
  icon23: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 18,
    marginLeft:3,
    marginRight:-3,
    paddingBottom:2
   

  },

                      
  rect5: {
    borderRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flex: 1,


  },
  rect5_imageStyle: {},
  group3: {
    width: Dimensions.get('window').width - 30,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  group4: {
    height: 32,
    flex: 1,
  },
  infotext: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold: {
    height: 17,
    marginTop: -32,
  },
  group5: {
    height: 32,
    flex: 1,
  },
  infotext1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold2: {
    height: 17,
    marginTop: -32,
  },
  group6: {
    height: 32,
    flex: 1,
  },
  infotext2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold3: {
    height: 17,
    marginTop: -32,
  },
  group7: {
    height: 32,
    flex: 1,
  },
  infotext3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold4: {
    height: 17,
    marginTop: -32,
  },
  group13: {
    width: Dimensions.get('window').width - 30,
  
    marginTop: 27,
  },
  image5: {
    width: 31,
    height: 24,
    marginTop: 3,
  },
  miniTitle2: {
    width: 94,
    height: 17,
    marginLeft: 17,
    marginTop: 7,
  },
  button2: {
    width: 84,
    height: 32,
    position: 'absolute',
    right: 0,
  },
  image5Row: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 5
  },
  rect7: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
    marginTop: 5,
  },
  rect8: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.12,
    shadowRadius: 3,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect9: {
    borderRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flex: 1,
 
  },
  rect9_imageStyle: {},
  rect10: {
    width: Dimensions.get('window').width - 30,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rect11: {
    height: 32,
    flex: 1,
  },
  калории: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold5: {
    height: 17,
    marginTop: -32,
  },
  rect12: {
    height: 32,
    flex: 1,
  },
  углеводы: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold6: {
    height: 17,
    marginTop: -32,
  },
  rect13: {
    height: 32,
    flex: 1,
  },
  белки: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold7: {
    height: 17,
    marginTop: -32,
  },
  rect14: {
    height: 32,
    flex: 1,
  },
  жиры: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold8: {
    height: 17,
    marginTop: -32,
  },
  group12: {
    width: Dimensions.get('window').width - 30,

    marginTop: 27,
  },
  image6: {
    width: 31,
    height: 24,
    marginTop: 3,
  },
  miniTitle3: {
    width: 94,
    height: 17,
    marginLeft: 17,
    marginTop: 7,
  },
  button3: {
    width: 84,
    height: 32,
    position: 'absolute',
    right: 0,
  },
  image6Row: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 5
  },
  rect15: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
    marginTop: 5,
  },
  rect16: {
    borderRadius: 4,
    // shadowColor: 'rgba(0,0,0,1)',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // elevation: 9,
    // marginTop: -5,
    // shadowOpacity: 0.12,
    // shadowRadius: 3,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  борщьСГовядиной: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 148,
    height: 17,
  },
  text7: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    width: 53,
    height: 17,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 28,
    marginTop: 2,
  },
  text6: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 73,
    height: 17,
    textAlign: 'right',
    marginLeft: 7,
  },
  борщьСГовядинойRow: {
    height: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 3,
  },
  rect31: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 7,
  },
  ржанойХлеб: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    height: 17,
  },
  text10: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    height: 17,
    fontSize: 12,
    marginLeft: 2,
    textAlign: 'left',
    marginTop: 2,
  },
  text11: {
    top: 0,

    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 73,
    height: 17,
    textAlign: 'right',
  },
  text10Stack: {
    width: 153,
    height: 20,
    marginLeft: 67,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ржанойХлебRow: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginRight: 3,
  },
  rect32: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 5,
  },
  помидор: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 109,
    height: 17,
  },
  text12: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    width: 53,
    height: 17,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 67,
    marginTop: 2,
  },
  text13: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 73,
    height: 17,
    textAlign: 'right',
    marginLeft: 7,
  },
  помидорRow: {
    height: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginRight: 3,
  },
  rect33: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 6,
  },
  огурец: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 109,
    height: 17,
  },
  text15: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    width: 53,
    height: 17,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 67,
    marginTop: 2,
  },
  text14: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 73,
    height: 17,
    textAlign: 'right',
    marginLeft: 7,
  },
  огурецRow: {
    height: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginRight: 3,
  },
  борщьСГовядинойRowColumn: {
    marginTop: 58,
    marginLeft: 8,
    marginRight: 8,
  },
  rect17: {
    borderRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flex: 1,

   
 
  },
  rect17_imageStyle: {},
  rect18: {
    width: Dimensions.get('window').width - 30,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rect19: {
    height: 32,
    flex: 1,
  },
  калории2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold9: {
    height: 17,
    marginTop: -32,
  },
  rect20: {
    height: 32,
    flex: 1,
  },
  углеводы2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold10: {
    height: 17,
    marginTop: -32,
  },
  rect21: {
    height: 32,
    flex: 1,
  },
  белки2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold11: {
    height: 17,
    marginTop: -32,
  },
  rect22: {
    height: 32,
    flex: 1,
  },
  жиры2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold12: {
    height: 17,
    marginTop: -32,
  },
  group11: {
    width: Dimensions.get('window').width - 30,
    marginTop: 27,
    marginBottom: 30,
  },
  image7: {
    width: 35,
    height: 28,
  },
  miniTitle4: {
    width: 160,
    height: 17,
    marginLeft: 13,
    marginTop: 7,
  },
  button4: {
    width: 84,
    height: 32,
    position: 'absolute',
    right: 0,
  },
  image7Row: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 5
  },
  rect23: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
    marginTop: 5,
  },
  rect24: {
    // borderRadius: 4,
    // shadowColor: 'rgba(0,0,0,1)',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // elevation: 9,
    // marginTop: -5,
    // shadowOpacity: 0.12,
    // shadowRadius: 3,
    // backgroundColor: 'rgba(255,255,255,1)',
    // flex: 1,
  },
  productName2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    height: 17,
  },
  text9: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    width: 53,
    height: 17,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 67,
    marginTop: 2,
  },
  text8: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    width: 73,
    height: 17,
    textAlign: 'right',
    marginLeft: 7,
  },
  productName2Row: {
    height: 19,
    flexDirection: 'row',
    marginTop: 61,
    marginLeft: 8,
    marginRight: 11,
  },
  rect25: {
    borderRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flex: 1,
 

  
  },
  rect25_imageStyle: {},
  rect26: {
    width: Dimensions.get('window').width - 30,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rect27: {
    height: 32,
    flex: 1,
  },
  калории3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold13: {
    height: 17,
    marginTop: -32,
  },
  rect28: {
    height: 32,
    flex: 1,
  },
  углеводы3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold14: {
    height: 17,
    marginTop: -32,
  },
  rect29: {
    height: 32,
    flex: 1,
  },
  белки3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold15: {
    height: 17,
    marginTop: -32,
  },
  rect30: {
    height: 32,
    flex: 1,
  },
  жиры3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 19,
  },
  colorBold16: {
    height: 17,
    marginTop: -32,
  },
  header1: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
  },
  rect1: {
    height: 56,
    backgroundColor: '#c8b5a6',
    flexDirection: 'row',
  },
  group1: {
    width: 40,
    height: 60,
    marginLeft: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon1: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 24,
    width: 40,
    height: 43,
    alignSelf: 'center',
  },
  data1: {
    width: 128,
    height: 43,
    flexDirection: 'row',
    marginLeft: 24,
  },
  bold1: {
    height: 24,
    opacity: 0.7,
    marginTop: 8,
  },
  icon2: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 30,
    marginLeft: 0,
    marginTop: 6,
  },
  bold1Row: {
    height: 43,
    flexDirection: 'row',
    flex: 1,
  },
  group1Row: {
    height: 43,
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 6,
  },
  group1RowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  group2: {
    width: 27,
    height: 28,
    flexDirection: 'row',
    marginRight: 13,
    marginTop: 12,
  },
  rect2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  rect2: {
    width: 27,
    height: 28,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  rect3: {
    width: 8,
    height: 8,
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    right: 0,
    borderRadius: 100,
  },
  icon3: {
    top: 2,
    left: 0,
    position: 'absolute',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 24,
    right: 3,
    bottom: 0,
    height: 26,
    width: 24,
  },
  rect3Stack: {
    flex: 1,
  },
  scrollAreaColumn: {},
  scrollAreaColumnFiller: {
    flex: 1,
  },
  footer1: {
    backgroundColor: '#c8b5a6',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 4,
      width: 0,
    },
    elevation: 30,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    height: 56,
    flexDirection: 'row',
    
    marginLeft: -7,
    marginRight: 7,
  },
  mainTab1: {
    flexDirection: 'row',
    height: 56,
    width: 120,
  },
  icon4: {
    color: 'rgba(255,255,255,0.74)',
    fontSize: 24,
    marginTop: 8,
    marginLeft: 48,
  },
  tabName1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,0.74)',
    textAlign: 'center',
    fontSize: 12,
    height: 14,
    width: 120,
    marginTop: 34,
    marginLeft: 0,
  },
  diaryTab1: {
    flexDirection: 'row',
    height: 56,
    width: 120,
  },
  icon5: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 24,
    marginTop: 8,
    marginLeft: 48,
  },
  tabName2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
    fontSize: 12,
    height: 14,
    width: 120,
    marginTop: 34,
    marginLeft: 0,
  },
  recomTab1: {
    flexDirection: 'row',
    height: 56,
    width: 120,
  },
  icon6: {
    color: 'rgba(255,255,255,0.74)',
    fontSize: 24,
    marginLeft: 48,
    marginTop: 8,
  },
  tabName3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,0.74)',
    textAlign: 'center',
    fontSize: 12,
    height: 14,
    width: 120,
    marginLeft: -72,
    marginTop: 34,
  },
  mainTab1Row: {
    height: 56,
    flexDirection: 'row',
    flex: 1,
  },
});

export default Diary;
