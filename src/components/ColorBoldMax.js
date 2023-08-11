import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ColorBoldMax(props) {
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
    fontSize: 24,
    textAlign: "center"
  }
});

export default ColorBoldMax;
