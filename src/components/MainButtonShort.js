import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MainButtonShort(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.rect1}>
          <View style={styles.buttonTitleRow}>
            <Text style={styles.buttonTitle}>
              {props.buttonText || "ПРОДОЛЖИТЬ"}
            </Text>
            <Icon name="chevron-down" style={styles.icon}></Icon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    height: 43,
    backgroundColor: "#f4f0ed",
    borderRadius: 6
  },
  rect1: {
    height: 35,
    backgroundColor: "#c8b5a6",
    borderRadius: 6,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 2,
    marginRight: 2
  },
  buttonTitle: {
    fontFamily: "Roboto-Bold",
    color: "white",
    fontWeight: 'bold',
    textAlign: "center",
    letterSpacing: 1.25,
    height: 17,
    marginTop: 3
  },
  icon: {
    color: "white",
    fontSize: 24,
    transform: [
      {
        rotate: "-90.00deg"
      }
    ],
    width: 24,
    height: 26,
    marginLeft: 6
  },
  buttonTitleRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 19,
    marginTop: 5
  }
});

export default MainButtonShort;
