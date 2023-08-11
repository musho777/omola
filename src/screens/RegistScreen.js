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
import MainButtonShort from "../components/MainButtonShort";
import ColorTitle from "../components/ColorTitle";
import Backbutton from "../components/Backbutton";
import { useNavigation } from '@react-navigation/native';



function RegistScreen(props) {
  const navigation2 = useNavigation();
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
          <TouchableOpacity   onPress={() => navigation2.navigate('RegistScreen1')}>
          <MainButtonShort style={styles.mainButtonShort}></MainButtonShort></TouchableOpacity>
        </ImageBackground>
        <ColorTitle
          text="Добро пожаловать"
          style={styles.colorTitle}
        ></ColorTitle>
        <Text style={styles.text}>
          Ответьте на несколько коротких вопросов, {"\n"}
          чтобы мы смогли рассчитать рекомендуемые  {"\n"}
          Вам ежедневные калории и помочь Вам достичь Ваших целей
        </Text>
      </View>
      
      <View style={styles.slider}>
        <View style={styles.dot2}></View>
        <View style={styles.dot4}></View>
        <View style={styles.dot6}></View>
        <View style={styles.dot8}></View>
        <View style={styles.dot9}></View>
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
  mainButtonShort: {
    height: 43,
    marginTop: 180,
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold'
  },
  colorTitle: {
    position: "absolute",
    top: 0,
    height: 29,
    left: 0,
    right: 0
  },
  text: {
    top: 52,
    position: "relative",
    fontFamily: "Roboto-Regular",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  backSpiralStack: {
    height: 456,
    marginTop: 92
  },
  slider: {
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
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#c8b5a6"
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot6: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot8: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot9: {
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

export default RegistScreen;
