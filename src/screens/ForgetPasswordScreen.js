import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Text,
  Dimensions
} from "react-native";
import Backbutton from "../components/Backbutton";
import ColorTitle from "../components/ColorTitle";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MainButton from "../components/MainButton";
import TextColorButton from "../components/TextColorButton";

function ForgetPasswordScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backbuttonStackStack}>
        <View style={styles.backbuttonStack}>
          <Backbutton style={styles.backbutton}></Backbutton>
          <ImageBackground
            source={require("../assets/images/blg-post_5f9001496407a1.png")}
            resizeMode="contain"
            style={styles.image1}
            imageStyle={styles.image1_imageStyle}
          >
            <View
              style={[
                styles.dot3,
                {
                  backgroundColor: props.dot3_active || "#c8b5a6"
                }
              ]}
            >
              <View style={styles.dot4}></View>
            </View>
          </ImageBackground>
        </View>
        <ColorTitle style={styles.colorTitle}></ColorTitle>
        <View style={styles.inputPhone}>
          <View style={styles.rect1}>
            <View style={styles.icon1Row}>
              <MaterialCommunityIconsIcon
                name="phone"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
              <TextInput
                placeholder="Номер телефона"
                style={styles.номертелефона1}
              ></TextInput>
              <MaterialCommunityIconsIcon
                name="close-circle"
                style={styles.i_clean}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.inputPassword}>
        <View style={styles.rect2}>
          <View style={styles.icon3Row}>
            <MaterialCommunityIconsIcon
              name="lock"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon>
            <TextInput
              placeholder="Введите пароль"
              style={styles.textInput1}
            ></TextInput>
            <MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.i_clean1}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
      </View>
      <View style={styles.repeatPassword}>
        <View style={styles.rect3}>
          <View style={styles.icon5Row}>
            <MaterialCommunityIconsIcon
              name="lock"
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
            <TextInput
              placeholder="Подтвердите пароль"
              style={styles.textInput2}
            ></TextInput>
            <MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.i_clean2}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
      </View>
      <MainButton buttonText="ВОЙТИ" style={styles.mainButton1}></MainButton>
      <View style={styles.info2}>
        <View style={styles.greyText2Row}>
          <Text style={styles.greyText2}>У Вас нет учетной записи?</Text>
          <TextColorButton style={styles.textColorButton2}></TextColorButton>
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
  backbutton: {
    position: "absolute",
    top: 226,
    left: 246,
    height: 27,
    width: 26,
    zIndex: 5,
  },
  image1: {
    top: 0,
    left: 0,
    height: 453,
    position: "absolute",
    transform: [
      {
        rotate: "34.00deg"
      }
    ],
    zIndex: 0,
    width: 622
  },
  image1_imageStyle: {},
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginTop: 211,
    marginLeft: 279
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  backbuttonStack: {
    top: 0,
    left: 0,
    width: 622,
    height: 453,
    position: "absolute",
    zIndex: 5
  },
  colorTitle: {
    position: "absolute",
    top: 332,
    left: 231,
    height: 29,
    right: 31
  },
  inputPhone: {
    height: 56,
    position: "absolute",
    left: 247,
    top: 387,
    right: 47
  },
  rect1: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  icon1: {
    color: "#c8b5a6",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 15
  },
  номертелефона1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 56,
    width: 224,
    marginLeft: 12
  },
  i_clean: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    opacity: 0,
    height: 26,
    marginLeft: 16,
    marginTop: 15
  },
  icon1Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16
  },
  backbuttonStackStack: {
    height: 453,
    marginTop: -211,
    marginLeft: -231,
    marginRight: -31,
    zIndex: 5,
  },
  inputPassword: {
    height: 56,
    marginTop: 6,
    marginLeft: 16,
    marginRight: 16
  },
  rect2: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  icon3: {
    color: "#c8b5a6",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 15
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 224,
    marginLeft: 12
  },
  i_clean1: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    opacity: 0,
    height: 26,
    marginLeft: 16,
    marginTop: 15
  },
  icon3Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16
  },
  repeatPassword: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect3: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flexDirection: "row"
  },
  icon5: {
    color: "#c8b5a6",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 15
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 56,
    width: 224,
    marginLeft: 12
  },
  i_clean2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    opacity: 0,
    height: 26,
    marginLeft: 16,
    marginTop: 15
  },
  icon5Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16
  },
  mainButton1: {
    height: 43,
    opacity: 0.38,
    marginTop: 49,
    marginLeft: 16,
    marginRight: 16
  },
  info2: {
    height: 14,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: "row",
    bottom: 20,
    left: 0
  },
  greyText2: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    textAlign: "left",
    fontSize: 12
  },
  textColorButton2: {
    height: 13,
   
    alignSelf: "flex-end",
    marginLeft: 5
  },
  greyText2Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 14,
    marginLeft: 6
  }
});

export default ForgetPasswordScreen;
