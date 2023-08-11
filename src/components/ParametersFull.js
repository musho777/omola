import React, { Component } from "react";
import { StyleSheet, View, Text,Dimensions } from "react-native";

function ParametersFull(props) {
  var proc = 0;
   proc = parseInt(props.interest)>100?100:parseInt(props.interest);
  var perc = (Dimensions.get('window').width-43)/100;
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textRow}>
        <Text style={styles.text}>{props.text || "Lorem Ipsum"}</Text>
        <View style={styles.textFiller}></View>
        <Text style={styles.interest}>{props.interest || "0%"}</Text>
      </View>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}></View>
        <View style={{    top: 0,
    left: 0,
    width: proc?proc*perc:0,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 200,
    height: 3}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "roboto-regular",
    color: "#54473f",
    fontSize: 11,
    textAlign: "left"
  },
  textFiller: {
    flex: 1,
    flexDirection: "row"
  },
  interest: {
    fontFamily: "roboto-regular",
    color: "white",
    fontSize: 11,
    textAlign: "right"
  },
  textRow: {
    height: 13,
    flexDirection: "row"
  },
  rect4: {
    top: 1,
    left: 0,
    width: 295,
    height: 0,
    position: "absolute",
    backgroundColor: "#7c6f66",
    borderRadius: 100
  },
  rect5: {

  },
  rect4Stack: {
    width: 295,
    height: 3,
    marginTop: 7
  }
});

export default ParametersFull;
