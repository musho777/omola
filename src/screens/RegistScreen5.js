import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from "react-native";
import LongSlider from "../components/LongSlider";
import MainButton from "../components/MainButton";
import TextColorButton from "../components/TextColorButton";
import ColorTitle from "../components/ColorTitle";
import Backbutton from "../components/Backbutton";
import { useNavigation } from '@react-navigation/native';
import { setToken, setUserID } from '../../api/token';

// import TextInputMask from 'react-native-text-input-mask';

import { post } from '../../api/fetch';

function RegistScreen5(props) {


  const { target } = props.route.params;
  const { perfect_weight } = props.route.params;
  const { activity } = props.route.params;
  const { sex } = props.route.params;
  const { bday } = props.route.params;
  const { height } = props.route.params;
  const { weight } = props.route.params;

  
  const navigation2 = useNavigation();
  const [isLoading, SetLoading] = React.useState(false);
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [middlename, setMiddlename] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const [errorMessage, setErrorMessage] = React.useState('');

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Вы ввели некорректные данные",
      "Вы ввели некорректные данные или возникла другая иная ошибка",
      [
        {
          text: "OK", onPress: () => {

          }
        }
      ],
      { cancelable: false }
    );

    const submit = (navigation) => {
      SetLoading(true);
      const getorders = async () => {
        await post('/users/register', {
          first_name: firstname,
          last_name: lastname,
          middle_name: middlename,
          phone: telephone,
          password: password,
          password2: password2,
          bday:bday,
          sex:sex,
          height:height,
          email:email,
          weight:weight,
          purpose:target,
          activity:activity,
          perfect_weight:perfect_weight
        })
          .then(async res => {
            console.log(res);
            await setToken(res.token);
            await setUserID(res.id.toString());
            await  navigation2.navigate('Autorized');
          })
          .catch(res => { console.log(res);  console.log(res.error);  SetLoading(false); setErrorMessage(res.error); createTwoButtonAlert(); });
  
      };
      getorders();
    };


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backSpiralStack}>
        <Image
          source={require("../assets/images/spiral_1.png")}
          resizeMode="contain"
          style={styles.backSpiral}
        ></Image>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.inputField}>
              <View style={styles.rect1}>
                <TextInput
                  placeholder="Фамилия"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.placeholder}
                  onChangeText={setLastname}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputField1}>
              <View style={styles.rect2}>
                <TextInput
                  placeholder="Имя"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput}
                  onChangeText={setFirstname}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputField2}>
              <View style={styles.rect3}>
                <TextInput
                  placeholder="Отчество"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput2}
                  onChangeText={setMiddlename}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputField3}>
              <View style={styles.rect4}>
{/* 
                           <TextInputMask
              style={styles.textInput3}
               keyboardType = {"number-pad"}
               placeholder="Номер телефона"
              onChangeText={(formatted, extracted) => {
                console.log(formatted) // +1 (123) 456-78-90
                setTelephone(extracted) // 1234567890
              }}
              mask={"+7 ([000]) [000] [00] [00]"}
            /> */}
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Электронный адрес"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={setemail}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputField5}>
              <View style={styles.rect6}>
                <TextInput
                  placeholder="Введите пароль"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput5}
                  onChangeText={setPassword}
                ></TextInput>
              </View>
            </View>
            <View style={styles.longSliderStack}>
              <LongSlider
                dot4_active="rgba(232,143,120,1)"
                dot3_active="rgba(232,143,120,1)"
                dot2_active="rgba(232,143,120,1)"
                dot_active="rgba(232,143,120,1)"
                dot1_active="rgba(232,143,120,1)"
                dot4_active="rgba(232,143,120,1)"
                dot3_active="rgba(232,143,120,0)"
                dot_active="rgba(232,143,120,0)"
                dot1_active="rgba(232,143,120,0)"
                dot2_active="rgba(232,143,120,0)"
                style={styles.longSlider}
              ></LongSlider>
              <View style={styles.inputField6}>
                <View style={styles.rect7}>
                  <TextInput
                    placeholder="Подтвердите пароль"
                    placeholderTextColor="rgba(0,0,0,0.6)"
                    style={styles.textInput6}
                    onChangeText={setPassword2}
                  ></TextInput>
                </View>
              </View>
            </View>
            <TouchableOpacity  onPress={() => submit() }>
            <MainButton style={styles.mainButton} buttonText={isLoading?"Регистрация...":"ЗАРЕГИСТРИРОВАТЬСЯ"}></MainButton>
            </TouchableOpacity>
            <View style={styles.politicsText}>
              <Text style={styles.loremIpsum1}>
                Регистрируясь, вы подтверждаете, {"\n"}что ознакомлены и
                согласны с
              </Text>
              <Text style={styles.text7}>политикой конфиденциальности</Text>
            </View>
            <View style={styles.info1}>
              <Text style={styles.greyText1}>У Вас есть учетная запись?</Text>
              <TextColorButton
                зарегистрироваться="ВОЙТИ"
                style={styles.textColorButton1}
              ></TextColorButton>
            </View>
          </ScrollView>
        </View>
        <ColorTitle text="Регистрация" style={styles.colorTitle1}></ColorTitle>
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
    backgroundColor: "#fff"
  },
  backSpiral: {
    top: 4,
    position: "absolute",
    opacity: 0.00,
    left: 0,
    right: 0,
    height: 456
  },
  scrollArea: {
    top: 56,
    left: 0,
    height: Dimensions.get('window').height - 150,
    position: "absolute",
    right: 0
  },
  scrollArea_contentContainerStyle: {
    paddingBottom: 30
  },
  inputField: {
    height: 56,
    marginLeft: 16,
    marginRight: 16
  },
  rect1: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  inputField1: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect2: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  inputField2: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect3: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  inputField3: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect4: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  inputField4: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect5: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  inputField5: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect6: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textInput5: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  longSlider: {
    position: "absolute",
    top: 24,
    height: 8,
    width: 72,
    left: 128
  },
  inputField6: {
    top: 0,
    left: 0,
    height: 56,
    position: "absolute",
    right: 0
  },
  rect7: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#c8b5a6",
    borderRadius: 4
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
  longSliderStack: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  mainButton: {
    height: 43,
    marginTop: 48,
    marginLeft: 16,
    marginRight: 16
  },
  politicsText: {
    height: 14,
    marginTop: 13
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    textAlign: "center",
    fontSize: 12
  },
  text7: {
    fontFamily: "roboto-regular",
    color: "#c8b5a6",
    textAlign: "center",
    fontSize: 12
  },
  info1: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 91,
    width: Dimensions.get('window').width
  },
  greyText1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    textAlign: "left",
    fontSize: 12,
    marginRight: 4
  },
  textColorButton1: {
    marginLeft: 4,
    marginTop: 2
  },
  colorTitle1: {
    position: "absolute",
    top: 0,
    height: 29,
    left: 0,
    right: 0
  },
  backSpiralStack: {
    height: 603,
    marginTop: 88
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

export default RegistScreen5;
