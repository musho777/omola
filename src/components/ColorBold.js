import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ColorBold(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>{props.loremIpsum || "Lorem Ipsum"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 16
  }
});

export default ColorBold;
