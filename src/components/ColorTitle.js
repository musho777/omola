import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ColorTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.text || "Авторизация"}{"\n"}{props.text2 || ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "roboto-regular",
    color: "#7c6f66",
    fontSize: 24,
    textAlign: "center",

  }
});

export default ColorTitle;
