import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import ColorTitle from "../components/ColorTitle";
import MainButtonShort from "../components/MainButtonShort";
import Backbutton from "../components/Backbutton";
import { useNavigation } from '@react-navigation/native';
function RegistScreen2(props) {

  const { target } = props.route.params;

  const navigation2 = useNavigation();

  const [perfect_weight, setperfect_weight] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backSpiralStack}>
        <ImageBackground
          source={require("../assets/images/spiral_1.png")}
          resizeMode="contain"
          style={styles.backSpiral}
          imageStyle={styles.backSpiral_imageStyle}
        >
         
        </ImageBackground>
        <ColorTitle
          text="Какой Ваш"
          text2="идеальный вес?"
          style={styles.colorTitle}
        ></ColorTitle>
        
        <Text style={styles.loremIpsum}>
          Вы всегда сможете изменить параметр{"\n"}в настройках профиля
        </Text>

        <View style={styles.input_field}>
            <View style={styles.rect3}>
              <TextInput
                placeholder="Введите вес"
                placeholderTextColor="rgba(0,0,0,0.6)"
                style={styles.text_input}
                onChangeText={setperfect_weight}
                keyboardType = {"number-pad"}
              ></TextInput>
            </View>
            <Text style={styles.text}>кг</Text>
          </View>
          <TouchableOpacity  onPress={() => {if(perfect_weight!='') {  navigation2.navigate("RegistScreen3", { target:target , perfect_weight:perfect_weight }) } }} >
        {perfect_weight=='' ? (
    <MainButtonShort style={styles.mainButtonShort}></MainButtonShort>
            ) : (
              <MainButtonShort style={styles.mainButtonShortact}></MainButtonShort>
            )}
        </TouchableOpacity>


      </View>
      <View style={styles.slider1}>
        <View style={styles.dot1}></View>
        <View style={styles.dot2}></View>
        <View style={styles.dot3}></View>
        <View style={styles.dot4}></View>
        <View style={styles.dot5}></View>
      </View>
      <View style={styles.header}>
        <View style={styles.rect}>
          <Backbutton style={styles.backbutton}></Backbutton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  backSpiral: {
    top: 4,
    position: "absolute",
    left: 0,
    right: 0,
    height: 456
  },
  backSpiral_imageStyle: {
    opacity: 0.00
  },
  input_field: {
    height: 56,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20
  },
  rect3: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1,
    marginRight: 9
  },
  text_input: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 17
  },
  mainButtonShortact: {
    height: 43,
    marginTop: 50,
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    opacity: 1
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginTop: 19
  },
  colorTitle: {
    position: "relative",
    height: 'auto',
    width: 'auto',
  },
  mainButtonShort: {
    height: 43,
    marginTop: 50,
    width: 175,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    opacity: 0.38
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    textAlign: "center",
    marginTop: 11,
    fontSize: 12
  },
  backSpiralStack: {
    height: 460,
    marginTop: 88
  },
  slider1: {
    width: 72,
    height: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 52,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    bottom: 30,
    left: Dimensions.get('window').width / 2 - 38
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#c8b5a6"
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  header: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  },
  rect: {
    height: 56,
    backgroundColor: "#c8b5a6"
  },
  backbutton: {
    height: 27,
    width: 26,
    marginTop: 15,
    marginLeft: 15
  }
});

export default RegistScreen2;
