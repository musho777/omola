import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image, Dimensions } from "react-native";
import Title from "../components/Title";
import MainButton from "../components/MainButton";
import Button from "../components/Button";

function OpenSlider3(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Title
        loremIpsum="Журнал данных"
        loremIpsum2="об упражнениях и здоровье"
        style={styles.title}
      ></Title>
      <Text style={styles.text}>
        Отслеживайте физические упражнения и показатели здоровья.
      </Text>
      <View style={styles.slider}>
        <View style={styles.dot5Row}>
          <View
            style={[
              styles.dot5,
              {
                backgroundColor: props.dot1 || "rgba(255,255,255,1)"
              }
            ]}
          >
            <View
              style={[
                styles.dotActive1,
                {
                  backgroundColor: props.dot_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
          <View
            style={[
              styles.dot3,
              {
                backgroundColor: props.dot1 || "rgba(255,255,255,1)"
              }
            ]}
          >
            <View
              style={[
                styles.dot4,
                {
                  backgroundColor: props.dot1_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
          <View style={styles.dot1}></View>
        </View>
      </View>
      <MainButton style={styles.mainButton}></MainButton>
      <Button style={styles.button}></Button>
      <Image
        source={require("../assets/images/picSlider31.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  title: {
    height: 48,
    marginTop: 400,
    marginLeft: 37,
    marginRight: 37
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#121212",
    fontSize: 14,
    textAlign: "center",
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16
  },
  slider: {
    height: 8,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 40,
    width: Dimensions.get('window').width,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dotActive1: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 8
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "rgba(232,143,120,1)",
    marginLeft: 8
  },
  dot5Row: {
    height: 8,
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainButton: {
    height: 43,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16
  },
  button: {
    height: 35,
    marginTop: 9
  },
  image1: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').width - 10,
    height: '50%',
    position: 'absolute', 
    top: -10
  }
});

export default OpenSlider3;
