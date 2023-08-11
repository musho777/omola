import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MiniTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>{props.loremIpsum || "Lorem Ipsum"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.87)",
    fontSize: 16,
    textAlign: "left",
    fontWeight: '400'
  }
});

export default MiniTitle;
