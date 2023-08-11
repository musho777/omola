import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function RegistScreenInput(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <View style={styles.rect}>
          <MaterialCommunityIconsIcon
            name="close"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.titleHeader}>Какова Ваша цель?</Text>
          <MaterialCommunityIconsIcon
            name="check"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <TextInput
        placeholder="Введите Вашу цель..."
        style={styles.введитеВашуЦель}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  header: {
    height: 56
  },
  rect: {
    height: 56,
    backgroundColor: "#c8b5a6",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginLeft: 15,
    marginTop: 15
  },
  titleHeader: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
    marginRight: 16,
    marginLeft: 17,
    marginTop: 16
  },
  icon2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginRight: 16,
    marginTop: 15
  },
  введитеВашуЦель: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    height: 53,
    fontSize: 24,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16
  }
});

export default RegistScreenInput;
