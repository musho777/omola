import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TextButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text_button}>Забыли пароль?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text_button: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    textAlign: "center",
    fontSize: 12
  }
});

export default TextButton;
