import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function WeightTable(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.weightTable || "weightTable"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "roboto-700",
    fontWeight: 'bold',
    color: "rgba(0,0,0,1)",
    textAlign: "left"
  }
});

export default WeightTable;
