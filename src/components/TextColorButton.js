import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TextColorButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.зарегистрироваться}>
        {props.зарегистрироваться || "ЗАРЕГИСТРИРОВАТЬСЯ"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  зарегистрироваться: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    color: "#c8b5a6",
    fontSize: 10,
    letterSpacing: 1,
    textAlign: "left"
  }
});

export default TextColorButton;
