import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image, Dimensions } from "react-native";
import Title from "../components/Title";
import MainButton from "../components/MainButton";
import Button from "../components/Button";

function OpenSlider2(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Title
        loremIpsum="Следите за своим рационом"
        style={styles.title}
      ></Title>
      <Text style={styles.text}>
        Легко отслеживайте свое питание и калории из нашей полной и точной базы
        данных
      </Text>
      <View style={styles.slider}>
        <View style={styles.dot5Row}>
          <View
            style={[
              styles.dot2,
              {
                backgroundColor: props.dot1_active || "rgba(232,143,120,0)"
              }
            ]}
          ></View>
          <View
            style={[
              styles.dot4,
              {
                backgroundColor: props.dot1 || "rgba(232,143,120,1)"
              }
            ]}
          >

          </View>
          <View style={styles.dot2}>
            <View
              style={[
                styles.dot1,
                {
                  backgroundColor: props.dot2_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
        </View>
      </View>
      <MainButton
        rect2="rgba(245,207,178,1)"
        style={styles.mainButton}
      ></MainButton>
      <Button style={styles.button}></Button>
      <Image
        source={require("../assets/images/picSlider21.png")}
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
    fontWeight: 'bold',
    marginTop: 400,
    marginLeft: 90,
    marginRight: 90
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "rgba(0,0,0,1)",
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
    borderRadius: 100
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 4,
    marginRight: 4
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 4,
    marginRight: 4,
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100
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

export default OpenSlider2;
