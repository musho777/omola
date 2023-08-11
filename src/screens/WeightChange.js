import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Dimensions, TextInput, TouchableOpacity,Alert} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from '@react-navigation/native';
import {getToken, getUserID} from '../../api/token';
import {get, post} from '../../api/fetch';


function WeightChange(props) {
  const [weight, setweight] = React.useState({});
  const [weightc, setWeightc] = React.useState();
  
  var today = new Date();
  var dd = today.getDate();
  dd = dd < 10 ? '0' + dd : dd;
  var mm = today.getMonth() + 1;
  mm = mm < 10 ? '0' + mm : mm;
  var yyyy = today.getFullYear();
  var rezDate = dd + '.' + mm + '.' + yyyy;
  const navigation2 = useNavigation();

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

  const  getWeight = async () => {
    const token = await getToken();
    const usId = await getUserID();

    await post('/weights/current-weight', {
      user_id: usId,
      token: token,
    }).then( (res) => {
      console.log(res);
      setweight(res);   }).catch( (res) => {    });
    };


    const  submit = async () => {
      const token = await getToken();
      const usId = await getUserID();
      if(weightc!="") {
      await post('/weights/addweight', {
        user_id: usId,
        token: token,
        weight: weightc,
        date: rezDate,
      }).then( (res) => {
        console.log(res);
        navigation2.goBack();
           }).catch( (res) => {   createTwoButtonAlert();  });
          } else { 
            createTwoButtonAlert(); 
          }
      };

  React.useEffect(() => {
    getWeight();
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header1}>
        <View style={styles.rect1}>
        <TouchableOpacity onPress={() => navigation2.goBack()}>
          <MaterialCommunityIconsIcon
            name="close"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <Text style={styles.введитеВес}>Введите вес</Text>
          <TouchableOpacity onPress={() => submit()}>
          <MaterialCommunityIconsIcon
            name="check"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rect2}></View>
      <View style={styles.textRow}>
        <Text style={styles.text}>Вес (кг)</Text>
        <View style={styles.textFiller}></View>
        <TextInput
              placeholder="0.0"
              style={styles.text1}
              onChangeText={setWeightc}
            
            ></TextInput>
      </View>
      <View style={styles.датаRow}>
        <Text style={styles.дата}>Дата</Text>
        <View style={styles.датаFiller}></View>
        <Text style={styles.text2}>{rezDate}</Text>
      </View>
      <View style={styles.rect3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header1: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  },
  rect1: {
    height: 56,
    backgroundColor: "#c8b5a6",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginLeft: 15,
    marginTop: 15
  },
  введитеВес: {
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
  rect2: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop:110,
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)"
  },
  textFiller: {
    flex: 1,
    flexDirection: "row"
  },
  text1: {
    marginTop:-8,
    color: "rgba(232,143,120,1)",
    textAlign: "right",
    width:50,
    height:40
  },
  textRow: {
    height: 17,
    flexDirection: "row",
    marginTop: -35,
    marginLeft: 16,
    marginRight: 26
  },
  дата: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 93,
    height: 17
  },
  датаFiller: {
    flex: 1,
    flexDirection: "row"
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#c8b5a6",
    textAlign: "right",
    width: 130,
    height: 17
  },
  датаRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 16,
    marginRight: 26
  },
  rect3: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 20
  }
});

export default WeightChange;
