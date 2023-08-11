import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function NutritionTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.text || "Lorem Ipsum"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,0.6)",
    textAlign: "center"
  }
});

export default NutritionTitle;
