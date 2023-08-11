import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Title(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>{props.loremIpsum || "Lorem Ipsum"}{"\n"}{props.loremIpsum2 || ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  loremIpsum: {
    fontFamily: "Roboto-Bold",
    fontWeight: 'bold',
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    textAlign: "center",
    flex: 1
  }
});

export default Title;
