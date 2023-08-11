import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import ColorTitle from "../components/ColorTitle";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MainButtonShort from "../components/MainButtonShort";
import Backbutton from "../components/Backbutton";
import { useNavigation } from '@react-navigation/native';
function RegistScreen3(props) {
  const navigation2 = useNavigation();

  const { target } = props.route.params;
  const { perfect_weight } = props.route.params;

  
  const [activity, setactivity] = React.useState('');


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backSpiralStack}>
        <ImageBackground
          source={require("../assets/images/spiral_1.png")}
          resizeMode="contain"
          style={styles.backSpiral}
          imageStyle={styles.backSpiral_imageStyle}
        >
          <ColorTitle
            text="Какой Ваш"
            text2="уровень активности?"
            style={styles.colorTitle1}
          ></ColorTitle>
        </ImageBackground>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
             <TouchableOpacity  onPress={() => setactivity(1)} >
            <View style={styles.reason}>
              <View style={styles.rect1}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>Сидячий</Text>
                  <View style={styles.titleFiller}></View>
                  {activity==1 ? (
       <MaterialCommunityIconsIcon
       name="check-circle"
       style={styles.check1}
     ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
                </View>
                <Text style={styles.text2}>
                  Виды повседневной деятельности, требующие минимальных усилий,
                  таких как отдых, сидение за рабочим столом или за рулем
                </Text>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactivity(2)} >
            <View style={styles.reason1}>
              <View style={styles.rect2}>
                <View style={styles.title1Row}>
                  <Text style={styles.title1}>Малоактивный</Text>
                  <View style={styles.title1Filler}></View>
                  {activity==2 ? (
       <MaterialCommunityIconsIcon
       name="check-circle"
       style={styles.check1}
     ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
                </View>
                <Text style={styles.text3}>
                  Виды повседневной деятельности, требующие некоторых усилий,
                  таких как временное пребывание в стоячем положении, работа по
                  дому или несложные упражнения.
                </Text>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactivity(3)} >
            <View style={styles.reason2}>
              <View style={styles.rect3}>
                <View style={styles.title2Row}>
                  <Text style={styles.title2}>Активный</Text>
                  <View style={styles.title2Filler}></View>
                  {activity==3 ? (
       <MaterialCommunityIconsIcon
       name="check-circle"
       style={styles.check1}
     ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
                </View>
                <Text style={styles.text4}>
                  Виды повседневной деятельности, требующие небольших усилий,
                  таких как стояние, физическая работа или регулярные умеренные
                  физические нагрузки.
                </Text>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setactivity(4)} >
            <View style={styles.reason3}>
              <View style={styles.rect4}>
                <View style={styles.title3Row}>
                  <Text style={styles.title3}>Очень активный</Text>
                  <View style={styles.title3Filler}></View>
                  {activity==4 ? (
       <MaterialCommunityIconsIcon
       name="check-circle"
       style={styles.check1}
     ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
                </View>
                <Text style={styles.text5}>
                  Виды повседневной деятельности, требующие интенсивных
                  физических усилий, таких как строительные работы или
                  регулярные энергичные упражнения.
                </Text>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {if(activity!='') {  navigation2.navigate("RegistScreen4", { target:target , perfect_weight:perfect_weight, activity:activity }) } }} >
        {activity=='' ? (
    <MainButtonShort style={styles.mainButtonShort}></MainButtonShort>
            ) : (
              <MainButtonShort style={styles.mainButtonShortact}></MainButtonShort>
            )}
        </TouchableOpacity>
            
          </ScrollView>
         
        </View>
        
      </View>

      <View style={styles.slider1}>
              <View style={styles.dot1}></View>
              <View style={styles.dot2}></View>
              <View style={styles.dot3}></View>
              <View style={styles.dot4}></View>
              <View style={styles.dot5}></View>
            </View>

      <View style={styles.header}>
        <View style={styles.rect}>
          <Backbutton style={styles.backbutton}></Backbutton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mainButtonShortact: {
    height: 43,
    marginTop: 50,
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    opacity: 1
  },
  backSpiral: {
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: 456
  },
  backSpiral_imageStyle: {
    opacity: 0.00
  },
  colorTitle1: {
    height: 59,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  scrollArea: {
    top: 72,
    left: 16,
    position: "absolute",
    right: 16,
    height: Dimensions.get('window').height - 225
  },
  scrollArea_contentContainerStyle: {
    paddingBottom: 50,
    paddingTop: 20
  },
  reason: {
    height: 96
  },
  rect1: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1
  },
  title: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    marginTop: 3
  },
  titleFiller: {
    flex: 1,
    flexDirection: "row"
  },
  check1: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24
  },
  titleRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 12,
    marginRight: 35
  },
  reason1: {
    height: 113,
    marginTop: 15
  },
  rect2: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1
  },
  title1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    marginTop: 3
  },
  title1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24
  },
  title1Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12
  },
  text3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 12,
    marginRight: 35
  },
  reason2: {
    height: 113,
    marginTop: 16
  },
  rect3: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1
  },
  title2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    marginTop: 3
  },
  title2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24
  },
  title2Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12
  },
  text4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 12,
    marginRight: 35
  },
  reason3: {
    height: 113,
    marginTop: 15
  },
  rect4: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1
  },
  title3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    textAlign: "left",
    marginTop: 3
  },
  title3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon3: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24
  },
  title3Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12
  },
  text5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 12,
    marginRight: 35
  },
  mainButtonShort: {
    height: 12,
    opacity: 0.38,
    width: 175,
    marginTop: 47,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  slider1: {
    width: 72,
    height: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 52,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    bottom: 30,
    left: Dimensions.get('window').width / 2 - 38
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#c8b5a6"
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  backSpiralStack: {
    height: 548,
    marginTop: 92
  },
  header: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  },
  rect: {
    height: 56,
    backgroundColor: "#c8b5a6"
  },
  backbutton: {
    height: 27,
    width: 26,
    marginTop: 15,
    marginLeft: 15
  }
});

export default RegistScreen3;
