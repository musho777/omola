import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Bold(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.сегодня}>{props.dates}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  сегодня: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    color: "white",
    fontSize: 20
  }
});

export default Bold;
