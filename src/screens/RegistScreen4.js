import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable
} from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';

import MainButtonShort from "../components/MainButtonShort";
import ColorTitle from "../components/ColorTitle";
import Backbutton from "../components/Backbutton";
import { useNavigation } from '@react-navigation/native';



function RegistScreen4(props) {

  const navigation2 = useNavigation();

  const { target } = props.route.params;
  const { perfect_weight } = props.route.params;
  const { activity } = props.route.params;


  const [sex, setsex] = React.useState('Пол');
  const [bday, setbday] = React.useState('Дата рождения');
  const [height, setheight] = React.useState('');
  const [weight, setweight] = React.useState('');

  const [modalVisible, setModalVisible] = React.useState(false);

  
  // state = {
  //   textValue: 'Укажите пол'
  // }  
  
  // changeTextValue = (text) => {
  //   textValue = text
  // }  
  
const [date, setDate] =  React.useState(new Date(1598051730000));
const [mode, setMode] =  React.useState('date');
const [show, setShow] =  React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log((currentDate.getDate()) + '/' + (currentDate.getMonth()+1) + '/' + (currentDate.getFullYear()));
    setbday(((currentDate.getDate()) + '/' + (currentDate.getMonth()+1) + '/' + (currentDate.getFullYear())));
    
  };
  
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  
  const showDatepicker = () => {
    showMode('date');
  };
  
  // const showTimepicker = () => {
  //   showMode('time');
  // };

  

  return (
    
    
    <View style={styles.container}>
      <Modal 
        animationType="fade"
        style={styles.myModal}
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBody}>
          <View style={styles.modalBodyFlex}>
            <View>
              <Pressable 
                style={styles.modalButton}
                onPress={() => {
                  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ЗДЕСЬ ДОРАБОТАТь !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  setsex('М');
                  // changeTextValue('М');
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.modalButtonText}>М</Text>
              </Pressable>
            </View>
            <View>
              <Pressable 
                style={styles.modalButton}
                onPress={() => {
                  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ЗДЕСЬ ДОРАБОТАТь !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  setsex('Ж');
                  // changeTextValue('Ж');
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.modalButtonText}>Ж</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

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
          text="Введите данные"
          text2="о своем теле"
          style={styles.colorTitle}
        ></ColorTitle>
        <View style={styles.inputField}>
          <View style={styles.rect1}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textfieldPop}>
              {/* {tstate.textValue} */}
              {sex}
            </Text>
          </Pressable>
            {/* <TextInput
                placeholder="Пол"
                placeholderTextColor="rgba(0,0,0,0.6)"
                style={styles.textfield}
                //onChangeText={setsex}
              ></TextInput> */}
          </View>
        </View>
        <View style={styles.inputField1}>
          <View style={styles.rect2}>
               {/* <TextInput
                placeholder="Дата рождения"
                placeholderTextColor="rgba(0,0,0,0.6)"
                style={styles.textfield}
                // onChangeText={setbday}
                keyboardType = {"number-pad"}
                onPress={showDatepicker}
              ></TextInput> */}



{/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ЗДЕСЬ ДОРАБОТАТь ОТПРАВКУ ДАТЫ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   */}
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={showDatepicker}
          >
            <Text style={styles.textfieldPop}>
              {/* {tstate.textValue} */}
              {bday}
            </Text>
          </Pressable>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  locale="ru-RU"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
          </View>
        </View>
        <View style={styles.inputField2}>
          <View style={styles.rect3}>
            <TextInput
              placeholder="Рост"
              placeholderTextColor="rgba(0,0,0,0.6)"
              style={styles.textInput3}
              keyboardType = {"number-pad"}
              onChangeText={setheight}
            ></TextInput>
          </View>
          <Text style={styles.text}>см</Text>
        </View>
        <View style={styles.inputField3}>
          <View style={styles.rect4}>
            <TextInput
              placeholder="Вес"
              placeholderTextColor="rgba(0,0,0,0.6)"
              style={styles.textInput4}
              keyboardType = {"number-pad"}
              onChangeText={setweight}
            ></TextInput>
          </View>
          <Text style={styles.text1}>кг</Text>
        </View>

        <TouchableOpacity  onPress={() => {if(sex!='' && weight!='' &&  height!='' &&  bday!='') {  navigation2.navigate("RegistScreen5", { target:target , perfect_weight:perfect_weight, activity:activity, sex:sex, bday:bday, height:height, weight:weight   }) } }} >
        {sex=='' || weight=='' ||  height=='' ||  bday=='' ? (
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

  modalBody: {
    margin: 20,
   marginTop:Dimensions.get('window').height/4,
    backgroundColor: "rgba(255,255,255,0.9)",
   justifyContent:'center',
    borderRadius: 20,
    
    height:Dimensions.get('window').height/2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBodyFlex: {
    display:'flex',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backSpiral: {
    top: 4,
    position: "absolute",
    left: 0,
    right: 0,
    height: 456
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
    width: 100,
    height: 50,
    backgroundColor: "#c8b5a6",
    marginLeft: 5,
    marginRight: 5
  },
  modalButtonText: {
    width: 100,
    height: 50,
    fontFamily: 'roboto',
    fontSize: 24,
    lineHeight: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
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
  backSpiral_imageStyle: {
    opacity: 0.00
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
  colorTitle: {
    position: "relative",
    top: 0,
    height: 59,
  
  },
  inputField: {
    marginTop: 35,
    paddingLeft: 16,
    width: Dimensions.get('window').width,
    height: 56,
    position: "relative",
    paddingRight: 16
  },
  rect1: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textfield: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    textAlign: "left",
    marginTop: 3,
    marginLeft: 16,
    marginRight: 16
  },
  textfieldPop: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    textAlign: "left",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  inputField1: {
    marginTop: 16,
    paddingLeft: 16,
    width: Dimensions.get('window').width,
    height: 56,
    position: "relative",
    paddingRight: 16
  },
  rect2: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textfield1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    textAlign: "left",
    marginTop: 19,
    marginLeft: 16,
    marginRight: 16
  },
  inputField2: {
    height: 56,
    marginTop: 16,
    position: "relative",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
  },
  rect3: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1,
    marginRight: 4
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginTop: 19
  },
  inputField3: {
    marginTop: 16,
    paddingLeft: 16,
    height: 56,
    position: "relative",
    paddingRight: 16,
    flexDirection: "row"
  },
  rect4: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4,
    flex: 1,
    marginRight: 9
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  text1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginTop: 19
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
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "#fff"
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#c8b5a6"
  },
  header: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  },
  rect: {
    backgroundColor: "#c8b5a6",
    flex: 1
  },
  backbutton: {
    height: 27,
    width: 26,
    marginTop: 15,
    marginLeft: 15
  }
});

export default RegistScreen4;
