import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function NumberWeight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>{props.weights}</Text>
        <Text style={styles.text}>кг</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    fontWeight: 'bold',
    color: "white",
    fontSize: 38,
    marginRight: 3
  },
  text: {
    fontFamily: "roboto-700",
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 6,
    marginTop: 21
  },
  loremIpsumRow: {
    height: 45,
    flexDirection: "row",
    justifyContent: 'center',
    flex: 1,
    marginRight: -1
  }
});

export default NumberWeight;
