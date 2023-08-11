import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

function MaterialIconTextButtonsFooter(props) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}  onPress={() => navigation.navigate('Услуги')} >
        <MaterialCommunityIconsIcon
          name="apps"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Услуги</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper3}  onPress={() => navigation.navigate('Новости')}>
        <MaterialCommunityIconsIcon
          name="newspaper"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Text}>Новости</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}  onPress={() => navigation.navigate('Помощь')}>
        <MaterialCommunityIconsIcon
          name="phone"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Text}>Помощ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 8,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonWrapper3: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 8,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 29,
    opacity: 0.8
  },
  btn1Text: {
    fontSize: 12,
    color: "#747575",
    backgroundColor: "transparent",
    paddingTop: 2
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 29,
    opacity: 0.8
  },
  btn3Text: {
    fontSize: 12,
    color: "#747575",
    backgroundColor: "transparent",
    paddingTop: 2
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 2,
    paddingHorizontal: 8,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#3f51b5",
    fontSize: 24,
    opacity: 0.8
  },
  activeContent: {
    fontSize: 14,
    color: "#3f51b5",
    backgroundColor: "transparent",
    paddingTop: 2
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 8,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 29,
    opacity: 0.8
  },
  btn2Text: {
    fontSize: 12,
    color: "#747575",
    backgroundColor: "transparent",
    paddingTop: 2
  }
});

export default MaterialIconTextButtonsFooter;
