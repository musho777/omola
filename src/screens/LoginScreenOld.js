import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from "react-native";
import Backbutton from "../components/Backbutton";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import TextButton from "../components/TextButton";
import MainButton from "../components/MainButton";
import TextColorButton from "../components/TextColorButton";
import { useNavigation } from '@react-navigation/native';
import { login } from '../../api/authentication';
import { setToken, setUserID, getUserID, getToken, getGoogleToken} from '../../api/token';

function LoginScreen(props) {
  const navigation2 = useNavigation();
  const [isLoading, SetLoading] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
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

  const submit = () => {
    SetLoading(true);
    console.log(username+password);
    login(username, password)
      .then(async (res) => {
        console.log(res);
        SetLoading(false);
        await setToken(res.token);
        await setUserID(res.id.toString());
        const token = await getToken();
        const usId = await getUserID();

        navigation2.navigate("Autorized");

        // const GoogleToken = await getGoogleToken();

        // await post('/users/edit', {
        //   user_id: usId,
        //   token: token,
        //   firebase_token: GoogleToken,
        // })
        //   .then(async res => {
        //     console.log('generator'+token+' '+usId+' '+GoogleToken);
        //     console.log(res);
        //     SetLoading(false);
        //     navigation.navigate("Autorized");
        //   })
        //   .catch(res => { SetLoading(false); createTwoButtonAlert(); });


 
      })
      .catch((res) => {   createTwoButtonAlert();  SetLoading(false); } );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backbuttonStackStack}>
        <View style={styles.backbuttonStack}>
          <Backbutton style={styles.backbutton}></Backbutton>
          <Image
            source={require("../assets/images/blg-post_5f9001496407a1.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.logo1Stack}>
          <Image
            source={require("../assets/images/logo2.png")}
            resizeMode="contain"
            style={styles.logo1}
          ></Image>
          <Text style={styles.title}>С возвращением!</Text>
        </View>
      </View>
      <View style={styles.inputPhone}>
        <View style={styles.rect}>
          <View style={styles.icon4Row}>
            <MaterialCommunityIconsIcon
              name="phone"
              style={styles.icon4}
            ></MaterialCommunityIconsIcon>
            <TextInput
              placeholder="Номер телефона"
              style={styles.номерТелефона}
              onChangeText={setUsername}
              keyboardType = {"number-pad"}
            ></TextInput>
            <MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.i_clean}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
      </View>
      <View style={styles.inputPassword}>
        <View style={styles.rect2}>
          <View style={styles.icon6Row}>
            <MaterialCommunityIconsIcon
              name="lock"
              style={styles.icon6}
            ></MaterialCommunityIconsIcon>
            <TextInput
              placeholder="Введите пароль"
              style={styles.textInput}
              onChangeText={setPassword}
            ></TextInput>
            <MaterialCommunityIconsIcon
              name="close-circle"
              style={styles.i_clean1}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation2.navigate("ForgetPasswordScreen")}><TextButton style={styles.textButton}></TextButton></TouchableOpacity>
      <TouchableOpacity   onPress={() => submit()} ><MainButton buttonText="ВОЙТИ" style={styles.mainButton}></MainButton></TouchableOpacity>
      <View style={styles.info}>
      <TouchableOpacity style={styles.greyTextRow} onPress={() => navigation2.navigate("RegistScreen")}>
  
          <Text style={styles.greyText}>У Вас нет учетной записи?</Text>
          <TextColorButton style={styles.textColorButton}></TextColorButton>
        
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backbutton: {
    position: "absolute",
    top: 226,
    left: 247,
    height: 27,
    width: 26
  },
  image1: {
    top: 0,
    left: 0,
    height: 453,
    position: "absolute",
    transform: [
      {
        rotate: "34.00deg"
      }
    ],
    width: 622
  },
  backbuttonStack: {
    top: 0,
    left: 0,
    width: 622,
    height: 453,
    position: "absolute"
  },
  logo1: {
    top: 0,
    position: "absolute",
    left: Dimensions.get('window').width/2 - 133,
    height: 200,
    width: 263
  },
  title: {
    top: 180,
    position: "absolute",
    fontFamily: "Roboto-Bold",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    left: 0,
    right: 0
  },
  logo1Stack: {
    top: 283,
    left: 232,
    height: 204,
    position: "absolute",
    right: 30
  },
  backbuttonStackStack: {
    height: 487,
    marginTop: -211,
    marginLeft: -232,
    marginRight: -30
  },
  inputPhone: {
    height: 56,
    marginTop: 28,
    marginLeft: 16,
    marginRight: 16
  },
  rect: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(183,226,246,1)",
    borderRadius: 4,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(232,143,120,1)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 15
  },
  номерТелефона: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 56,
    width: 224,
    marginLeft: 12
  },
  i_clean: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    opacity: 0,
    height: 26,
    marginLeft: 16,
    marginTop: 15
  },
  icon4Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16
  },
  inputPassword: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect2: {
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(183,226,246,1)",
    borderRadius: 4,
    flexDirection: "row"
  },
  icon6: {
    color: "rgba(232,143,120,1)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 15
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 56,
    width: 224,
    marginLeft: 12
  },
  i_clean1: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    opacity: 0,
    height: 26,
    marginLeft: 16,
    marginTop: 15
  },
  icon6Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 16
  },
  textButton: {
    height: 14,
    marginTop: 10
  },
  mainButton: {
    height: 43,
    opacity: 0.38,
    marginTop: 48,
    marginLeft: 16,
    marginRight: 16
  },
  info: {
    height: 14,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 20,
    left: 0
  },
  greyText: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    textAlign: "left",
    fontSize: 12
  },
  textColorButton: {
    height: 13,
   
    alignSelf: "flex-end",
    marginLeft: 5
  },
  greyTextRow: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 0,
    marginLeft: 0
  }
});

export default LoginScreen;
