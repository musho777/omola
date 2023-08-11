import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Modal
} from "react-native";
import MiniTitle from "../components/MiniTitle";
import Button from "../components/Button";
import NumberWeight from "../components/NumberWeight";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NumberWeightMini from "../components/NumberWeightMini";
import WeightTable from "../components/WeightTable";
import Backbutton from "../components/Backbutton";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getToken, getUserID } from '../../api/token';
import { get, post } from '../../api/fetch';
import DateTimePicker from '@react-native-community/datetimepicker';
import Spinner from 'react-native-loading-spinner-overlay';
// import TextInputMask from 'react-native-text-input-mask';

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Profile(props) {

  const [isLoading, SetLoading] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [bday, setBday] = React.useState('');
  const [bdaynew, setbdaynew] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailnew, setEmailnew] = React.useState('');
  const [fullusname, setFullUseName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [secondname, setSecondName] = React.useState('');
  const [theerdname, setTheerdName] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [heightNew, setHeightNew] = React.useState('');
  const [normkkal, setnormkkal] = React.useState('');
  const [normkkalNew, setnormkkalNew] = React.useState('');
  const [perfWeight, setPerfectweight] = React.useState('');
  const [perfWeightNew, setPerfectweightNew] = React.useState('');
  const [targets, settargets] = React.useState('');
  const [activities, setactivities] = React.useState('');


  const [modalTarget, setmodalTarget] = React.useState(false);
  const [modalActivity, setmodalActivity] = React.useState(false);
  const [spinner, setspinner] = React.useState(false);

  React.useEffect(() => {
    const getnames = async () => {
      setspinner(true);
      const token = await getToken();
      const usId = await getUserID();
      console.log(usId);
      console.log(token);
      get('/users/' + usId + '?token=' + token).then(async res => {
        console.log(res);
        setUsername(res.fio);
        setFullUseName(res.fio.replace(new RegExp('  ', 'g'), ' ').split(' '));
        setBday(res.bday ? res.bday : '--.--.----');
        setTelephone(
          res.phone.replace(
            /([\d]{3})([\d]{3})([\d]{2})([\d]{2})/g,
            '+7($1) $2 $3 $4',
          ),
        );
        setEmail(res.email ? res.email : '-----@---.--');
        setHeight(res.height);
        setnormkkal(res.norm_kkal);
        setPerfectweight(res.perfect_weight);
        settargets(res.purpose);
        setactivities(res.activity);
        setspinner(false);
      });
      console.log(username);
     

    };

    getnames();
  }, []);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Действие выполнено!',
      'Данные успешно изменены!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation2.goBack();
          },
        },
      ],
      { cancelable: false },
    );

  const submit = navigation => {
    setspinner(true);
    const getorders = async () => {
      const token = await getToken();
      const usId = await getUserID();
      console.log(usId);
      console.log(token);
      var firstNameReal = firstName != '' ? firstName : fullusname[0];
      var TheerdNameReal = theerdname != '' ? theerdname : fullusname[1];
      var SecondNameReal = secondname != '' ? secondname : fullusname[2];
      await post('/users/edit', {
        user_id: usId,
        token: token,
        bday: bdaynew != '' ? bdaynew : bday != '--.--.----' ? bday : '',
        email: emailnew != '' ? emailnew : email != '-----@---.--' ? email : '',
        fio: firstNameReal + ' ' + TheerdNameReal + ' ' + SecondNameReal,
        height:heightNew!=''?heightNew:height,
        perfect_weight:perfWeightNew!=''?perfWeightNew:perfWeight,
        purpose:targets,
        activity:activities,

      })
        .then(async res => {
          console.log(res);
          setspinner(false);
          createTwoButtonAlert();
        })
        .catch(function (res) { setErrorMessage(res.error); setspinner(false) });
    };
    getorders();
  };



  const navigation2 = useNavigation();
  return (
    <View style={styles.container}>
      <Spinner
        visible={spinner}
        textContent={'Актуализируем данные...'}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.header1}>
        <View style={styles.rect1}>
          <View style={styles.icon1Row}>
            <TouchableOpacity onPress={() => navigation2.goBack()}>
              <MaterialCommunityIconsIcon
                name="close"
                style={styles.icon1}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
            <View style={styles.search}>

              <Text>Редактировать профиль</Text>

            </View>

          </View>
          <View style={styles.icon1RowFiller}></View>
          <TouchableOpacity onPress={() => submit()}>
            <MaterialCommunityIconsIcon
              name="check"
              style={styles.icon333}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden />

      <ScrollView style={styles.group2234}>
        <View style={styles.group2}>
          <View style={styles.rect4}>
            <Text style={styles.title}>Имя:</Text>
            <View style={styles.titleFiller} />
            <View style={styles.textRow}>
              <TextInput
                placeholder={fullusname[0]}
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.text}
                onChangeText={setFirstName}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon2}
              />
            </View>
          </View>
        </View>
        <View style={styles.group3}>
          <View style={styles.rect5}>
            <Text style={styles.title1}>Отчество:</Text>
            <View style={styles.title1Filler} />
            <View style={styles.textInputRow}>
              <TextInput
                placeholder={fullusname[1]}
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.textInput}
                onChangeText={setTheerdName}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon3}
              />
            </View>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.rect6}>
            <Text style={styles.title2}>Фамилия</Text>
            <View style={styles.title2Filler} />
            <View style={styles.textInput2Row}>
              <TextInput
                placeholder={fullusname[2]}
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.textInput2}
                onChangeText={setSecondName}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon4}
              />
            </View>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.rect6}>
            <Text style={styles.title2}>Дата рождения:</Text>
            <View style={styles.title2Filler} />
            <View style={styles.textInput2Row}>
              {/* <TextInputMask
                placeholder={bday}
                keyboardType={'number-pad'}
                selectionColor="rgba(0,0,0,1)"

                onChangeText={(formatted, extracted) => {
                  console.log(formatted); // +1 (123) 456-78-90
                  console.log(extracted); // 1234567890
                  setbdaynew(formatted);
                }}
                mask={'[00].[00].[0000]'}
                style={styles.textInput2}
                keyboardType={'number-pad'}
              /> */}
              <MaterialCommunityIconsIcon name="lead-pencil" style={styles.icon4} />
            </View>

          </View>
        </View>
        <View style={styles.group6}>
          <View style={styles.rect8}>
            <View style={styles.title4Stack}>
              <Text style={styles.title4}>Контактный номер:</Text>
              <View style={styles.title4StackFiller} />
              <TextInput
                placeholder={telephone}
                placeholderTextColor="rgba(0,0,0,1)"
                dataDetector="phoneNumber"
                style={styles.textInput4}
                editable={false}
              />
            </View>

          </View>
        </View>
        <View style={styles.group7}>
          <View style={styles.rect9}>
            <Text style={styles.title5}>E-mail:</Text>
            <View style={styles.title5Filler} />
            <View style={styles.textInput5Row}>
              <TextInput
                placeholder={email}
                placeholderTextColor="rgba(0,0,0,1)"
                dataDetector="none"
                style={styles.textInput5}
                onChangeText={setEmailnew}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon7}
              />
            </View>
          </View>
        </View>
        <View style={styles.group7}>
          <View style={styles.rect9}>
            <Text style={styles.title5}>Рост:</Text>
            <View style={styles.title5Filler} />
            <View style={styles.textInput5Row}>
              <TextInput
                placeholder={height}
                placeholderTextColor="rgba(0,0,0,1)"
                dataDetector="none"
                style={styles.textInput5}
                onChangeText={setHeightNew}
                keyboardType={'number-pad'}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon7}
              />
            </View>
          </View>
        </View>

        <View style={styles.group7}>
          <View style={styles.rect9}>
            <Text style={styles.title5}>Идеальный вес:</Text>
            <View style={styles.title5Filler} />
            <View style={styles.textInput5Row}>
              <TextInput
                placeholder={perfWeight}
                placeholderTextColor="rgba(0,0,0,1)"
                dataDetector="none"
                style={styles.textInput5}
                onChangeText={setPerfectweightNew}
                keyboardType={'number-pad'}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon7}
              />
            </View>
          </View>
        </View>
        <View style={styles.group7}>
          <View style={styles.rect9}>
            <Text style={styles.title5}>Цель:</Text>
            <View style={styles.title5Filler} />
            <TouchableOpacity onPress={() => setmodalTarget(true)} style={styles.textInput5Row}>
              <TextInput
                placeholder={targets}
                placeholderTextColor="rgba(0,0,0,1)"
                dataDetector="none"
                style={styles.textInput5}

                keyboardType={'number-pad'}
                editable={false}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon7}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.group7}>
          <View style={styles.rect9}>
            <Text style={styles.title5}>Уровень активности:</Text>
            <View style={styles.title5Filler} />
            <TouchableOpacity onPress={() => setmodalActivity(true)} style={styles.textInput5Row}>
              <TextInput
                placeholder={activities == 1 ? 'Сидячий' : activities == 2 ? 'Малоактивный' : activities == 3 ? 'Активный' : activities == 4 ? 'Очень активный' : ''}
                placeholderTextColor="rgba(0,0,0,1)"
                dataDetector="none"
                style={styles.textInput5}

                keyboardType={'number-pad'}
                editable={false}
              />
              <MaterialCommunityIconsIcon
                name="lead-pencil"
                style={styles.icon7}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        style={styles.modBackgr}
        animationType="fade"
        transparent={true}
        visible={modalTarget}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setmodalTarget(!modalTarget);
        }}
      >
        <View style={styles.modBackgr}>
          <View style={styles.modalStyle}>
            <TouchableOpacity
              style={[styles.buttonCloseModal]}
              onPress={() => setmodalTarget(!modalTarget)}
            >
              <MaterialCommunityIconsIcon
                name="close"
                style={styles.iconClosesModal}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
            <TouchableOpacity
             style={targets=="Потеря веса"?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { settargets("Потеря веса"); setmodalTarget(!modalTarget); }}
            >
              <Text>Потеря веса</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={targets=="Сохранение нынешнего веса"?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { settargets("Сохранение нынешнего веса"); setmodalTarget(!modalTarget); }}
            >
              <Text>Сохранение нынешнего веса</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={targets=="Увеличение веса"?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { settargets("Увеличение веса"); setmodalTarget(!modalTarget); }}
            >
             <Text>Увеличение веса</Text> 
            </TouchableOpacity>
 
          </View>
        </View>

      </Modal>

      <Modal
        style={styles.modBackgr}
        animationType="fade"
        transparent={true}
        visible={modalActivity}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setmodalActivity(!modalActivity);
        }}
      >
        <View style={styles.modBackgr}>
          <View style={styles.modalStyle}>
            <TouchableOpacity
              style={[styles.buttonCloseModal]}
              onPress={() => setmodalActivity(!modalActivity)}
            >
              <MaterialCommunityIconsIcon
                name="close"
                style={styles.iconClosesModal}
              ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
            <TouchableOpacity
             style={activities==1?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { setactivities(1); setmodalActivity(!modalActivity); }}
            >
              <Text>Сидячий</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={activities==2?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { setactivities(2); setmodalActivity(!modalActivity); }}
            >
              <Text>Малоактивный</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={activities==3?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { setactivities(3); setmodalActivity(!modalActivity); }}
            >
             <Text>Активный</Text> 
            </TouchableOpacity>
            <TouchableOpacity
               style={activities==4?styles.iconClosesModalActiv:styles.editChanges}
              onPress={() => { setactivities(4); setmodalActivity(!modalActivity); }}
            >
             <Text>Очень активный</Text> 
            </TouchableOpacity>
          </View>
        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  editChanges:{

    padding:5,
    display:'flex',
    borderWidth:1,
    marginBottom:5,
    backgroundColor:'white',
    borderRadius:5,
    color:'white'

  },
  iconClosesModalActiv:{
    padding:5,
    display:'flex',
    borderWidth:1,
    marginBottom:5,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius:5,
    color:'white'
  },
  mrgn: {
    marginBottom: 10
  },

  descmodal: {
    marginTop: 10
  },
  scrollviewModal: {
    maxHeight: Dimensions.get('window').height - 80,
    paddingRight: 13
  },

  modBackgr: {
    backgroundColor: 'rgba(0,0,0,.4)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height+50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconClosesModal: {
    fontSize: 16

  },
  buttonCloseModal: {
    position: 'absolute',
    top: 0,
    right: 0
  },

  modalStyle: {

    backgroundColor: '#c8b5a6',
    padding: 14,
    position: 'absolute',


    width: Dimensions.get('window').width - 20,
    borderRadius: 5

  },
  group2234: {
    marginBottom: 30
  },
  spinnerTextStyle: {
    color: '#FFF'
  },

  RootNavLineRow: {
    borderTopWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    backgroundColor: '#c8b5a6',
    height: 45,

  },
  RootNavLineRowLast: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
    height: 45,

  },
  RootNavLineText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  textInput: {
    lineHeight: 1,
    marginTop: -16
  },
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  header1: {
    height: 56
  },
  rect1: {
    height: 56,
    backgroundColor: "#c8b5a6",
    flexDirection: "row",
  },
  icon1: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 5
  },
  search: {
    width: Dimensions.get('window').width - 127,
    height: 32,
    marginLeft: 7,
    paddingLeft: 40,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rect16: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2,
    flex: 1
  },
  icon9: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 7
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: Dimensions.get('window').width - 190,
    marginLeft: 4
  },
  icon9Row: {
    height: 40,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2,
    flex: 1,
    marginRight: 9,
    marginLeft: 10
  },
  colorBold: {
    width: 23,
    marginLeft: 6,
    marginTop: 11
  },
  icon1Row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 1
  },
  icon1RowFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  icon333: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginRight: 16,
    marginTop: 15
  },
  icon23: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 18,
    marginTop: -3,
    marginRight: 5

  },
  scrollArea1: {

    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 50
  },
  scrollArea1_contentContainerStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  group1: {
    top: 0,
    left: 0,
    height: 21,
    position: "absolute",
    right: 0
  },
  group10: {
    top: 0,
    left: 0,
    width: Dimensions.get('window').width - 30,
    height: 40,
    position: "absolute"
  },


  v_line_group: {
    paddingTop: 6,
    position: 'relative',
    width: Dimensions.get('window').width - 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 2,
    borderBottomWidth: 1,
    paddingBottom: 12,
    alignContent: 'flex-start',
    marginBottom: 6,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  v_name: {
    width: Dimensions.get('window').width / 2 - 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
    // backgroundColor:'red',
  },
  v_text_name: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 14,
    lineHeight: 14,
    textAlign: "left"
  },
  v_count: {
    width: Dimensions.get('window').width / 4 - 30,
    paddingLeft: 13,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: -3

    // backgroundColor:'green',
  },
  v_text_count: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    fontSize: 12,


  },
  v_text_ccal: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 14,
    lineHeight: 14,
    textAlign: "right"
  },
  v_ccal: {
    width: Dimensions.get('window').width / 4 - 30,
    // backgroundColor:'blue',
  },
  v_but_icon2: {
    color: "#c8b5a6",
    fontSize: 20,

    marginLeft: 16,
    marginTop: -5
  },
  v_but_icon: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 18,
    marginLeft: 16,
    marginTop: -4
  },
  сырники7: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  gram1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  kkal1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon3: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырники7Row: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect2: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group1Stack: {
    height: 40
  },
  group11: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 14
  },
  сырникиДомашние: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text18: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text19: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon4: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиДомашниеRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect11: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group12: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  сырникиКлассические: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text20: {
    top: 1,
    left: -5,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 58,
    height: 17,
    fontSize: 12,
    textAlign: "left"
  },
  text21: {
    top: 0,
    left: 57,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right"
  },
  text20Stack: {
    width: 127,
    height: 18,
    marginLeft: 12
  },
  icon5: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиКлассическиеRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect12: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group13: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  text3: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text22: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text23: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon6: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  text3Row: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect13: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group14: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  сырникиЖареные: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text24: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text25: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon7: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиЖареныеRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect14: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group15: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  text5: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text26: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text27: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon8: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  text5Row: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect15: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group21: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 15
  },
  сырники5: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text38: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text39: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon15: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырники5Row: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect22: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group20: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 14
  },
  сырникиСИзюмом: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text36: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text37: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon14: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиСИзюмомRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect21: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group19: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  сырникиСоСметаной: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text34: {
    top: 1,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 58,
    height: 17,
    fontSize: 12,
    textAlign: "left"
  },
  text35: {
    top: 0,
    left: 57,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right"
  },
  text34Stack: {
    width: 127,
    height: 18,
    marginLeft: 12
  },
  icon13: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиСоСметанойRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect20: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group18: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  сырникиСоСгущенкой: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text32: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text33: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon12: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиСоСгущенкойRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect19: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group17: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  огурец: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text30: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text31: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon11: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  огурецRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect18: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  group16: {
    width: Dimensions.get('window').width - 30,
    height: 40,
    marginTop: 16
  },
  сырникиСБананом: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 157,
    height: 17
  },
  text28: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    width: 51,
    height: 17,
    fontSize: 12,
    textAlign: "left",
    marginLeft: 12,
    marginTop: 1
  },
  text29: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    width: 70,
    height: 17,
    textAlign: "right",
    marginLeft: 6
  },
  icon10: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
  },
  сырникиСБананомRow: {
    height: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 2
  },
  rect17: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
    borderRadius: 100,
    marginTop: 19
  },
  iconCaneraW: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 24,
    height: 24,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    bottom: 0,
    right: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 12,
    shadowOpacity: 0.24,
    shadowRadius: 4,
  },
  iconCanera: {
    color: '#bc2d3f',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,242,247,1)',
  },
  rect2: {
    backgroundColor: '#c8b5a6',
    height: 166,
  },
  bar1: {
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 12,
    shadowOpacity: 0.24,
    shadowRadius: 4,
    height: 56,
  },
  rect1: {
    backgroundColor: '#c8b5a6',
    flexDirection: 'row',
    flex: 1,
  },
  pageTitle: {
    fontFamily: 'Roboto-Regular',
    color: 'rgba(255,255,255,1)',
    textAlign: 'left',
    fontSize: 16,
    height: 19,
    width: 240,
    marginLeft: 60,
    marginTop: 19,
  },
  leftIconButton1: {
    padding: 11,
    position: 'absolute',
    top: 4,
    left: 5,
    right: 309,
    bottom: 4,
  },
  leftIcon2: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,

  },
  group: {
    padding: 11,
    position: 'absolute',
    top: 4,
    left: 309,
    right: 5,
    bottom: 4,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  pageTitleFiller: {
    flex: 1,
  },
  group1: {
    width: Dimensions.get('window').width,
    height: 120,
    marginTop: 24,
  },
  profileTitle: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
  },
  text1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    flex: 1,
    marginTop: 2,
  },
  profileTitleColumn: {
    width: 176,
    marginLeft: 140,
    marginTop: 20,
    marginBottom: 20,
  },
  rect3: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 100,
    position: 'relative',
  },
  image1: {
    width: 120,
    height: 120,
    borderRadius: 10000,
  },
  profileTitleColumnRow: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  group2: {
    height: 40,
    marginTop: 25,
    marginLeft: 18,
    marginRight: 22,
  },
  rect4: {
    borderWidth: 0,
    borderColor: 'rgba(155,155,155,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    marginTop: 12,
  },
  titleFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 39,

    textAlign: 'right',
    marginRight: -20,
    paddingRight: 30,
  },
  icon2: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 17,
    width: 15,
    marginTop: 11,
    right: -6
  },
  textRow: {
    height: 39,
    flexDirection: 'row',
    marginRight: 5,
    marginTop: 1,
  },
  group3: {
    height: 40,
    marginTop: 15,
    marginLeft: 18,
    marginRight: 18,
  },
  rect5: {
    borderWidth: 0,
    borderColor: 'rgba(155,155,155,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  title1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    marginTop: 12,
  },
  title1Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 39,

    textAlign: 'right',
    marginRight: 10,
  },
  icon3: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 17,
    width: 15,
    marginTop: 11,
  },
  textInputRow: {
    height: 39,
    flexDirection: 'row',
    marginRight: 5,
    marginTop: 1,
  },
  group4: {
    height: 40,
    marginTop: 16,
    marginLeft: 18,
    marginRight: 22,
  },
  rect6: {
    borderWidth: 0,
    borderColor: 'rgba(155,155,155,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  title2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    marginTop: 12,
  },
  title2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 39,
    right: 0,
    textAlign: 'right',
    marginRight: 10,
  },
  icon4: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 17,
    width: 15,
    marginTop: 11,
    right: -5
  },
  textInput2Row: {
    height: 39,
    flexDirection: 'row',
    marginRight: 5,
    marginTop: 1,
  },
  group5: {
    height: 40,
    marginTop: 16,
    marginLeft: 18,
    marginRight: 22,
  },
  rect7: {
    borderWidth: 0,
    borderColor: 'rgba(155,155,155,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  title3: {
    top: 11,
    left: 0,

    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
  },
  textInput3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 39,
    right: 0,
    textAlign: 'right',
    marginRight: 10,

  },
  title3Stack: {
    flex: 1,
    height: 39,
    marginTop: 1,
  },
  title3StackFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  icon5: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 17,
    width: 15,
    marginRight: 25,
    right: 25,
    marginTop: 12,
  },
  group6: {
    height: 40,
    marginTop: 16,
    marginLeft: 18,
    marginRight: 22,
  },
  rect8: {
    borderWidth: 0,
    borderColor: 'rgba(155,155,155,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  title4: {
    top: 11,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
  },
  textInput4: {
    top: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 39,

    textAlign: 'right',
    right: 0,
  },
  title4Stack: {

    height: 39,
    marginTop: 1,
    flex: 1,
  },
  title4StackFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  icon6: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 17,
    width: 15,
    marginRight: 5,
    marginTop: 12,
  },
  group7: {
    height: 40,
    marginTop: 16,
    marginLeft: 18,
    marginRight: 18,
  },
  rect9: {
    borderWidth: 0,
    borderColor: 'rgba(155,155,155,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
  title5: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    marginTop: 12,
  },
  title5Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 39,

    textAlign: 'right',
    marginRight: 10,
  },
  icon7: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 17,
    width: 15,
    marginTop: 11,
  },
  textInput5Row: {
    height: 39,
    flexDirection: 'row',
    marginRight: 5,
    marginTop: 1,
  }
});

export default Profile;
