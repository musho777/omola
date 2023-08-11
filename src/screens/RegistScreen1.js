import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ColorTitle from "../components/ColorTitle";
import MainButtonShort from "../components/MainButtonShort";
import Backbutton from "../components/Backbutton";
import { useNavigation } from '@react-navigation/native';

function RegistScreen1(props) {
  const navigation2 = useNavigation();

  const [target, settarget] = React.useState('');

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
        </ImageBackground>
        
        <ColorTitle
          text="Авторизация"
          text="Какова Ваша цель?"
          style={styles.colorTitle}
        ></ColorTitle>
        <TouchableOpacity  onPress={() => settarget('Потеря веса')} >
        <View style={styles.reason}>
          <View style={styles.rect2}>
            <Text style={styles.textField}>Потеря веса</Text>
            <View style={styles.textFieldFiller}></View>
            {target=='Потеря веса' ? (
   <MaterialCommunityIconsIcon
   name="check-circle"
   style={styles.check}
 ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
         
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => settarget('Сохранение нынешнего веса')} >
        <View style={styles.reason1}>
          <View style={styles.rect3}>
            <Text style={styles.textField1}>Сохранение нынешнего веса</Text>
            <View style={styles.textField1Filler}></View>
            {target=='Сохранение нынешнего веса' ? (
   <MaterialCommunityIconsIcon
   name="check-circle"
   style={styles.check}
 ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => settarget('Увеличение веса')} >
        <View style={styles.reason2}>
          <View style={styles.rect4}>
            <Text style={styles.textField2}>Увеличение веса</Text>
            <View style={styles.textField2Filler}></View>
            {target=='Увеличение веса' ? (
   <MaterialCommunityIconsIcon
   name="check-circle"
   style={styles.check}
 ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => settarget('Другое')} >
        <View style={styles.reason3}>
            <View style={styles.rect5}>
              <Text style={styles.textField3}>Другое</Text>
              <View style={styles.textField3Filler}></View>
              {target=='Другое' ? (
   <MaterialCommunityIconsIcon
   name="check-circle"
   style={styles.check}
 ></MaterialCommunityIconsIcon>
            ) : (
<View></View>
            )}
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {if(target!='') {  navigation2.navigate("RegistScreen2", { target:target }) } }} >
        {target=='' ? (
            <MainButtonShort style={styles.mainButtonShort}></MainButtonShort>
            ) : (
              <MainButtonShort style={styles.mainButtonShortact}></MainButtonShort>
            )}
        </TouchableOpacity>
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
    backgroundColor: "rgba(255,255,255,1)"
  },
  backSpiral: {
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: Dimensions.get('window').height - 250
  },
  backSpiral_imageStyle: {
    opacity: 0.00
  },
  reason3: {
    height: 56,
    marginBottom:28,
    marginLeft: 16,
    marginRight: 16,
    width: Dimensions.get('window').width - 32
  },
  rect5: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  textField3: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 18,
    marginTop: 19
  },
  textField3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon3: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24,
    marginRight: 12,
    marginTop: 15
  },
  colorTitle: {
 
    top: 0,
    height: 29,
    left: 0,
    right: 0,
    marginBottom:40
  },
  mainButtonShort: {
    height: 43,
    marginTop: 50,
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    opacity: 0.38
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
  reason: {
    marginBottom:28,
    left: 16,
    height: 56,
    width: Dimensions.get('window').width - 32,
    right: 16
  },
  rect2: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  textField: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 18,
    marginTop: 19
  },
  textFieldFiller: {
    flex: 1,
    flexDirection: "row"
  },
  check: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24,
    marginRight: 12,
    marginTop: 15
  },
  reason1: {
   
    left: 16,
    height: 56,
   marginBottom:28,
    right: 16,
    width: Dimensions.get('window').width - 32
  },
  rect3: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  textField1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 18,
    marginTop: 19
  },
  textField1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24,
    marginRight: 12,
    marginTop: 15
  },
  reason2: {
   
    left: 16,
    height: 56,
    marginBottom:28,
    right: 16,
    width: Dimensions.get('window').width - 32
  },
  rect4: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  textField2: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 18,
    marginTop: 19
  },
  textField2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "#c8b5a6",
    fontSize: 24,
    height: 26,
    width: 24,
    marginRight: 12,
    marginTop: 15
  },
  backSpiralStack: {
    height: 460,
    marginTop: 88
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
    backgroundColor: "#c8b5a6"
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
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
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

export default RegistScreen1;
