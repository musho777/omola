import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import MiniTitle from "../components/MiniTitle";
import Button from "../components/Button";
import NumberWeight from "../components/NumberWeight";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NumberWeightMini from "../components/NumberWeightMini";
import WeightTable from "../components/WeightTable";
import Backbutton from "../components/Backbutton";
import {useNavigation , useFocusEffect} from '@react-navigation/native';
import {getToken, getUserID} from '../../api/token';
import {get, post} from '../../api/fetch';
import DateTimePicker from '@react-native-community/datetimepicker';
import Spinner from 'react-native-loading-spinner-overlay';

function Weight(props) {

  const [weights, setweights] = React.useState([]);
  const [weight, setweight] = React.useState({});
  const [spinner, setspinner] = React.useState(false);

  const  getWeights = async () => {
    setspinner(true);
    const token = await getToken();
    const usId = await getUserID();

    await post('/weights/weight', {
      user_id: usId,
      token: token,
    }).then( (res) => {
      setspinner(false);
      console.log(res);
      setweights(res.reverse());   }).catch( (res) => {  });
    };

    const  getWeight = async () => {
      const token = await getToken();
      const usId = await getUserID();
  
      await post('/weights/current-weight', {
        user_id: usId,
        token: token,
      }).then( (res) => {
        console.log(res);
        setweight(res);   }).catch( (res) => {  });
      };

    React.useEffect(() => {
    
      getWeights();
      getWeight();
    }, []);

    useFocusEffect(
      React.useCallback(() => {
        getWeights();
        getWeight();
      }, [])
        );


  const navigation2 = useNavigation();
  return (
    <View style={styles.container}>
         <Spinner
          visible={spinner}
          textContent={'Считаем данные...'}
          textStyle={styles.spinnerTextStyle}
        />
      <StatusBar hidden />
      <View style={styles.miniTitle1Row}>
        <MiniTitle
          loremIpsum="Текущий вес"
          style={styles.miniTitle1}
        ></MiniTitle>
<TouchableOpacity onPress={() => navigation2.navigate('WeightChange')}>
        <Button buttonText="ДОБАВИТЬ" style={styles.button1}></Button>
        </TouchableOpacity>
      </View>
      








      <View style={styles.newRect}>
        <View style={styles.group2}>
        <ImageBackground
            style={styles.rect12}
            imageStyle={styles.rect12_imageStyle}
            source={require("../assets/images/Gradient_VsjgDoC.png")}
          >
          <NumberWeightMini
            loremIpsum1={weight.start_weight}
            style={styles.numberWeight}
          ></NumberWeightMini>
          <Text style={styles.infoText}>Начальный вес</Text>
          </ImageBackground>
        </View>

        <View style={styles.group}>
       
        <ImageBackground
            style={styles.rect12}
            imageStyle={styles.rect12_imageStyle}
            source={require("../assets/images/Gradient_VsjgDoC.png")}
          >
             
              <View style={styles.image1Row}>
                
                <NumberWeight style={styles.numberWeght} weights={weight.current_weight}></NumberWeight>
                
              </View>
              <View style={styles.text1Column}>
                  <Text style={styles.text1}>Последнее взвешивание</Text>
                  <View style={styles.iconRow}>
                    {/* <Icon name="timer" style={styles.icon}></Icon> */}
                    <Text style={styles.text2}>{weight.date_difference} назад</Text>
                  </View>
                </View>
          </ImageBackground>
         
        </View>

        <Image
                  source={require("../assets/images/newWeightImg.png")}
                  resizeMode="contain"
                  style={styles.image1}
                ></Image>


        <View style={styles.group3}>
        <ImageBackground
            style={styles.rect12}
            imageStyle={styles.rect12_imageStyle}
            source={require("../assets/images/Gradient_VsjgDoC.png")}
          >
          <NumberWeightMini
            loremIpsum1={weight.perfect_weight}
            style={styles.numberWeightMini}
          ></NumberWeightMini>
          <Text style={styles.infoText1}>Желанный вес</Text>
          </ImageBackground>
        </View>

      </View>
      






      <MiniTitle loremIpsum="СТАТИСТИКА" style={styles.miniTitle2}></MiniTitle>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >

<FlatList
                    data={weights}
                    keyExtractor={({id}, index) => index.toString()}
                    renderItem={({item}) => (
                   
                      <View style={styles.group5}>
                       
                      <View style={styles.loremIpsumStackStack}>
                        <View style={styles.loremIpsumStack}>
                          <Text style={styles.loremIpsum}>{item.date}</Text>
                          <Text style={parseFloat(item.difference)<0?styles.text8:parseFloat(item.difference)>0?styles.text4:styles.text6}>{item.difference==""?"0.0 кг":parseFloat(item.difference)>0?"+"+item.difference:item.difference}</Text>
                        </View>
                        <WeightTable
                          weightTable={item.weight + ' кг'}
                          style={styles.weightTable}
                        ></WeightTable>
                      </View>
                      <View style={styles.rect4}></View>
                    </View>

                    
                    
                    )}
                  />    
        <View style={styles.WhiteBorderBottom}></View>
        </ScrollView>
      </View>
      <View style={styles.header}>
        <View style={styles.rect1}>
          <Backbutton style={styles.backbutton1}></Backbutton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  WhiteBorderBottom: {
    width: 100,
    height: 5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 12,
    width: Dimensions.get('window').width - 16
  },
  newRect: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 16,
    marginLeft: 8,
    marginRight: 8,
  },
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
    backgroundColor: "rgba(255,255,255,1)"
  },
  miniTitle1: {
    height: 17,
    flex: 1,
    marginRight: 109,
    marginTop: 7
  },
  button1: {
    height: 32,
  },
  miniTitle1Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16
  },
  rect: {
    height: 129,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16
  },
  rect13: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect12: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect12_imageStyle: {
    zIndex: -1,
  },
  group: {
    height: 120,
    marginTop: 29,
    marginLeft: 8,
    marginRight: 8,
    position:'relative',
    zIndex: 0
  },
  image1: {
    width: 56,
    height: 56,
    position: 'absolute',
    zIndex: 2,
    left: Dimensions.get('window').width / 2 - 35,
    top: 0,
  },
  numberWeght: {
    height: 37,
    width: 88,
    marginLeft: 9,
    marginTop: 7
  },
  text1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    fontSize: 11,
    textAlign: "center",
    height: 13,
    marginLeft: -28,
  },
  icon: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 10,
    marginTop: 1
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 11,
    textAlign: "center",
    height: 13,
    width: 100,
    marginTop: 2
  },
  iconRow: {
    height: 13,
    flexDirection: "row"
  },
  text1Column: {
    width: 130,
    marginLeft: 30,
    marginTop: 12,
    marginBottom: 10
  },
  image1Row: {
    height: 50,
    marginTop: 17,
    flexDirection: "row",
    justifyContent: 'center',
  },
  rect2: {
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 0.6,
    marginTop: 14,
    marginLeft: 8,
    marginRight: 8
  },
  group4: {
    height: 33,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
    marginLeft: 8,
    marginRight: 8
  },
  group2: {
    marginTop: 55,
    width: 88,
    height: 72
  },
  numberWeight: {
    height: 23,
    color: 'rgba(0,0,0,0.6)'
  },
  infoText: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 20
  },
  group3: {
    marginTop: 55,
    width: 88,
    height: 72
  },
  numberWeightMini: {
    height: 19,
  },
  infoText1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 25
  },
  miniTitle2: {
    height: 17,
    marginTop: 20,
    marginLeft: 16,
    marginRight: 190
  },
  scrollArea: {
    height: Dimensions.get('window').height - 300,
    marginTop: 21,
    marginLeft: 16,
    marginRight: 16
  },
  scrollArea_contentContainerStyle: {
    
  },
  group5: {
  
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text4: {
    top: 0,
    position: "absolute",
    height: 16,
    fontFamily: "roboto-regular",
    color: "#b00020",
    textAlign: "right",
    left: 0,
    right: 0
  },
  loremIpsumStack: {
    top: 0,
    left: 0,
    height: 17,
    position: "absolute",
    right: 0
  },
  weightTable: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  loremIpsumStackStack: {
    height: 17
  },
  rect3: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 24
  },
  group6: {
    height: 13,
    marginTop: 18
  },
  text5: {
    top: 0,
    height: 16,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text6: {
    top: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#7c6f66",
    textAlign: "right",
    left: 0,
    right: 0
  },
  text5Stack: {
    top: 0,
    left: 0,
    height: 17,
    position: "absolute",
    right: 0
  },
  weightTable2: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text5StackStack: {
    height: 17
  },
  rect4: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    borderRadius: 100,
    marginTop: 15,
    marginBottom:15
  },
  group7: {
    height: 13,
    marginTop: 19
  },
  text7: {
    top: 0,
    height: 16,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text8: {
    top: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#7c6f66",
    textAlign: "right",
    left: 0,
    right: 0
  },
  text7Stack: {
    top: 0,
    left: 0,
    height: 17,
    position: "absolute",
    right: 0
  },
  weightTable3: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text7StackStack: {
    height: 17
  },
  rect5: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 23
  },
  group8: {
    height: 13,
    marginTop: 19
  },
  text9: {
    top: 0,
    left: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text10: {
    top: 0,
    position: "absolute",
    height: 16,
    fontFamily: "roboto-regular",
    color: "rgba(183,226,246,1)",
    textAlign: "right",
    left: 0,
    right: 0,
    bottom: 4
  },
  text9Stack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  weightTable4: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text9StackStack: {
    flex: 1,
    marginBottom: -4
  },
  rect6: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 23
  },
  group9: {
    height: 13,
    marginTop: 17
  },
  text11: {
    top: 0,
    left: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text12: {
    top: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    left: 0,
    right: 0,
    bottom: 4
  },
  text11Stack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  weightTable5: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text11StackStack: {
    flex: 1,
    marginBottom: -4
  },
  rect7: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 25
  },
  group10: {
    height: 13,
    marginTop: 19
  },
  text13: {
    top: 0,
    height: 16,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text14: {
    top: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(183,226,246,1)",
    textAlign: "right",
    left: 0,
    right: 0,
    bottom: 4
  },
  text13Stack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  weightTable6: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text13StackStack: {
    flex: 1,
    marginBottom: -4
  },
  rect8: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 23
  },
  group11: {
    height: 13,
    marginTop: 19
  },
  text15: {
    top: 0,
    left: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text16: {
    top: 0,
    position: "absolute",
    height: 16,
    fontFamily: "roboto-regular",
    color: "rgba(183,226,246,1)",
    textAlign: "right",
    left: 0,
    right: 0,
    bottom: 4
  },
  text15Stack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  weightTable7: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text15StackStack: {
    flex: 1,
    marginBottom: -4
  },
  rect9: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 23
  },
  group12: {
    height: 13,
    marginTop: 19
  },
  text17: {
    top: 0,
    
    left: 0,
    height: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text18: {
    top: 0,
    position: "absolute",
    height: 16,
    fontFamily: "roboto-regular",
    color: "rgba(183,226,246,1)",
    textAlign: "right",
    left: 0,
    right: 0,
    bottom: 4
  },
  text17Stack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  weightTable8: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text17StackStack: {
    flex: 1,
    marginBottom: -4
  },
  rect10: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 23
  },
  group13: {
    height: 13,
    marginTop: 20
  },
  text19: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  text20: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    height: 16,
    color: "rgba(0,0,0,1)",
    textAlign: "right",
    left: 0,
    right: 0,
    bottom: 4
  },
  text19Stack: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  weightTable9: {
    position: "absolute",
    top: 0,
    left: 168,
    height: 17,
    width: 61
  },
  text19StackStack: {
    flex: 1,
    marginBottom: -4
  },
  rect11: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 23
  },
  header: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  },
  rect1: {
    height: 56,
    backgroundColor: "#c8b5a6"
  },
  backbutton1: {
    height: 27,
    width: 26,
    marginTop: 15,
    marginLeft: 15
  }
});

export default Weight;
