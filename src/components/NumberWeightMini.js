import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function NumberWeightMini(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.text3Stack}>
        <View style={styles.circle}></View>
        <Text style={styles.loremIpsum1}>{props.loremIpsum1 || "78.8"}</Text>
        <Text style={styles.text3}>кг</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  circle: {
    width: 24,
    height: 24,
    backgroundColor: '#aa998c',
    borderRadius: 12,
    position: 'absolute',
    left: 15,
    top: -5
  },
  text3: {
    position: "relative",
    fontFamily: "roboto-700",
    fontWeight: 'bold',
    color: "white",
    fontSize: 14,
    marginTop: 6,
    textAlign: "right"
  },
  loremIpsum1: {
    position: "relative",
    fontFamily: "roboto-700",
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginRight: 5
  },
  text3Stack: {
    height: 23,
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'row',
    marginRight: 1,
    marginTop: 16
  }
});

export default NumberWeightMini;
