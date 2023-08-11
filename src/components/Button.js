import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Button(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.buttonText}>{props.buttonText || "ВОЙТИ"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonText: {
    fontFamily: "Roboto-Bold",
    fontWeight: '500',
    color: "#c8b5a6",
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 16,
    height: 20,
    marginTop: 9,
    fontSize:14

  }
});

export default Button;
