import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
function Backbutton(props) {
  const navigation2 = useNavigation();
  return (
    <TouchableOpacity   onPress={() => {
      navigation2.goBack();
      // alert('doesnt work!');
    }}> 
    <View style={[styles.container, props.style]}>
      <View
        style={styles.button}
      >
        <Icon name="chevron-down" style={styles.icon3}></Icon>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 26,
    height: 27,
    backgroundColor: "rgba(255,255,255,0)"
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    width: 24,
    height: 26,
    marginTop: 1,
    marginLeft: 1
  }
});

export default Backbutton;
