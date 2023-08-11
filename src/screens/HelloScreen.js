import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  Dimensions
} from "react-native";
import { color } from "react-native-reanimated";
import TextButton from "../components/TextButton";

function HelloScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backSpiralStack}>
        <TextButton style={styles.textButton}></TextButton>
        <ImageBackground
          source={require("../assets/images/spiral_1.png")}
          resizeMode="contain"
          style={styles.backSpiral}
          imageStyle={styles.backSpiral_imageStyle}
        >
          
        </ImageBackground>
        <Image
          source={require("../assets/images/logo2.png")}
          resizeMode="contain"
          style={styles.logo1}
        ></Image>
        <View style={styles.f_button}>
          <View style={styles.rect}>
            <Text style={styles.зарегистрироваться}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
          </View>
        </View>
        <View style={styles.s_button}>
          <View style={styles.rect2}>
            <Text style={styles.войти}>ВОЙТИ</Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/blg-post_5f9001496407a1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/blg-post_5f9001496407a2.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backSpiral: {
    top: 195,
    position: "absolute",
    left: Dimensions.get('window').width/2 + 35,
    width: Dimensions.get('window').width,
    height: 456,
    opacity: 0.5,
    zIndex: -10
  },
  backSpiral_imageStyle: {
    opacity: 0.15
  },
  textButton: {
    height: 14,
    marginTop: 559,
    opacity: 1,
    color: 'rgba(0,0,0,1)',
    zIndex: 2,
    position: 'relative'
  },
  logo1: {
    top: 211,
    position: "absolute",
    left: Dimensions.get('window').width/2 + 105,
    height: 200,
    width: 263
  },
  f_button: {
    top: 423,
    height: 43,
    position: "absolute",
    left: 274,
    right: 282
  },
  rect: {
    backgroundColor: "#c8b5a6",
    borderRadius: 6,
    flex: 1
  },
  зарегистрироваться: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 13
  },
  s_button: {
    top: 495,
    height: 43,
    position: "absolute",
    left: 274,
    right: 282,
    justifyContent: "center"
  },
  rect2: {
    height: 43,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#c8b5a6"
  },
  войти: {
    fontFamily: "roboto-regular",
    color: "#c8b5a6",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 11
  },
  image: {
    top: 0,
    left: 0,
    width: 622,
    height: 453,
    position: "absolute",
    transform: [
      {
        rotate: "-7.00deg"
      }
    ]
  },
  image2: {
    bottom: -170,
    left: 200,
    position: "absolute",
    transform: [
      {
        rotate: "185.00deg"
      }
    ],
    height: 453,
    width: 622
  },
  backSpiralStack: {
    height: 837,
    marginTop: -103,
    marginLeft: -234,
    marginRight: -242
  }
});

export default HelloScreen;
