import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

function Report(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect5}>
        <ImageBackground
          style={styles.rect6}
          imageStyle={styles.rect6_imageStyle}
          source={require("../assets/images/Gradient_VsjgDoC.png")}
        ></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect5: {
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
  rect6: {
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
  rect6_imageStyle: {
    opacity: 0.4
  }
});

export default Report;
