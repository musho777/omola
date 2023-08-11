import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MainButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rect2Stack}>
          <View
            style={[
              styles.rect2,
              {
                backgroundColor: props.rect2 || "#c8b5a6"
              }
            ]}
          ></View>
          <Text style={styles.buttonText}>
            {props.buttonText || "ЗАРЕГИСТРИРОВАТЬСЯ"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    height: 43,
    backgroundColor: "#f4f0ed",
    borderRadius: 6,
    
  },
  rect2: {
    top: 0,
    left: 5,
    height: 35,
    position: "absolute",
    right: 4,
    borderRadius: 6
  },
  buttonText: {
    top: 8,
    position: "absolute",
    fontFamily: "Roboto-Bold",
    color: "white",
    textAlign: "center",
    left: 0,
    letterSpacing: 1.25,
    right: 0
  },
  rect2Stack: {
    height: 35,
    marginTop: 4
  }
});

export default MainButton;
