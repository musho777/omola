import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Slider(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.dotRow}>
        <View
          style={[
            styles.dot,
            {
              backgroundColor: props.dot1 || "rgba(255,255,255,1)"
            }
          ]}
        >
          <View
            style={[
              styles.dot_active,
              {
                backgroundColor: props.dot_active || "rgba(232,143,120,1)"
              }
            ]}
          ></View>
        </View>
        <View
          style={[
            styles.dot1,
            {
              backgroundColor: props.dot1 || "rgba(255,255,255,1)"
            }
          ]}
        >
          <View
            style={[
              styles.dot1_active,
              {
                backgroundColor: props.dot1_active || "rgba(232,143,120,0)"
              }
            ]}
          ></View>
        </View>
        <View style={styles.dot2}>
          <View
            style={[
              styles.dot2_active,
              {
                backgroundColor: props.dot2_active || "rgba(232,143,120,0)"
              }
            ]}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot_active: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 8
  },
  dot1_active: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 8
  },
  dot2_active: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dotRow: {
    height: 8,
    flexDirection: "row",
    flex: 1
  }
});

export default Slider;
