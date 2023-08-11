import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native';
import MiniTitle from '../components/MiniTitle';
import Button from '../components/Button';
import ColorBold from '../components/ColorBold';
import ColorBoldMax from '../components/ColorBoldMax';
import Parameters from '../components/Parameters';
import ParametersRemind from '../components/ParametersRemind';
import ParametersFull from '../components/ParametersFull';
import NutritionTitle from '../components/NutritionTitle';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bold from '../components/Bold';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getToken, getUserID, getDate, setDate } from '../../api/token';
import { get, post } from '../../api/fetch';
import Spinner from 'react-native-loading-spinner-overlay';
import DateTimePicker from '@react-native-community/datetimepicker';

function Main(props) {


  const [isLoading, SetLoading] = React.useState(false);
  const [eaten_kkal, seteaten_kkal] = React.useState('');
  const [need_today, setneed_today] = React.useState('');
  const [norm_kkal, setnorm_kkal] = React.useState('');
  const [burned, setburned] = React.useState('');
  const [vitamino, setvitamino] = React.useState({});
  const [carbohydrate, setcarbohydrate] = React.useState('');
  const [norma_aminokislot, setnorma_aminokislot] = React.useState('');
  const [glycemic_load, setglycemic_load] = React.useState('');
  const [fat, setfat] = React.useState('');
  const [protein, setprotein] = React.useState('');
  const [eatbreak, seteatbreak] = React.useState('');
  const [eatbreakn, seteatbreakn] = React.useState('');
  const [eatdinner, seteatdinner] = React.useState('');
  const [eatdinnern, seteatdinnern] = React.useState('');
  const [eatlaunch, seteatlaunch] = React.useState('');
  const [eatlaunchn, seteatlaunchn] = React.useState('');
  const [eatsnack, seteatsnack] = React.useState('');
  const [eatsnackn, seteatsnackn] = React.useState('');
  const [weightnow, setweightnow] = React.useState('');
  const [weightperf, setweightperf] = React.useState('');
  const [phk, setphk] = React.useState('');

  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [datet, setDatet] = React.useState('');
  const [date, setDate2] = React.useState(new Date());

  const [modalVisibleEated, setModalVisibleEated] = React.useState(false);
  const [modalVisibleRemaind, setModalVisibleRemaind] = React.useState(false);
  const [modalVisibleBurned, setModalVisibleBurned] = React.useState(false);
  const [modalVisibleA, setModalVisibleA] = React.useState(false);
  const [vatAcontains, setvatAcontains] = React.useState([]);
  const [modalVisibleC, setModalVisibleC] = React.useState(false);
  const [vatCcontains, setvatCcontains] = React.useState([]);
  const [modalVisibleB6, setModalVisibleB6] = React.useState(false);
  const [vatB6contains, setvatB6contains] = React.useState([]);
  const [modalVisibleB12, setModalVisibleB12] = React.useState(false);
  const [vatB12contains, setvatB12contains] = React.useState([]);
  const [modalVisibleIron, setModalVisibleIron] = React.useState(false);
  const [vatIroncontains, setvatIroncontains] = React.useState([]);
  const [modalVisibleCalcium, setModalVisibleCalcium] = React.useState(false);
  const [vatCalciumcontains, setvatCalciumcontains] = React.useState([]);
  const [modalVisibleMagnesium, setModalVisibleMagnesium] = React.useState(false);
  const [vatMagnesiumcontains, setvatMagnesiumcontains] = React.useState([]);
  const [modalVisibleZinc, setModalVisibleZinc] = React.useState(false);
  const [vatZinccontains, setvatZinccontains] = React.useState([]);

  const [modalVisibleAmino, setModalVisibleAmino] = React.useState(false);

  const [modalVisibleGlyk, setModalVisibleGlyk] = React.useState(false);
  const [vatGlykcontains, setvatGlykcontains] = React.useState([]);

  const [modalVisibleCarbon, setModalVisibleCarbon] = React.useState(false);
  const [vatCarboncontains, setvatCarboncontains] = React.useState([]);

  const [modalVisibleBelki, setModalVisibleBelki] = React.useState(false);
  const [vatBelkicontains, setvatBelkicontains] = React.useState([]);

  const [modalVisibleFat, setModalVisibleFat] = React.useState(false);
  const [vatFatcontains, setvatFatcontains] = React.useState([]);

  const [modalVisibleph, setModalVisibleph] = React.useState(false);


  const [spinner, setspinner] = React.useState(false);






  const [datefilter, setdatefilter] = React.useState('');

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate2(currentDate);
    var today = selectedDate;
    var dd = today.getDate();
    dd = dd < 10 ? '0' + dd : dd;
    var mm = today.getMonth() + 1;
    mm = mm < 10 ? '0' + mm : mm;
    var yyyy = today.getFullYear();
    var rezDate2 = dd + '.' + mm + '.' + yyyy;
    await setDate(rezDate2)
    await setdatefilter(rezDate2);
    await getnames();
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  const getnames = async () => {
    setspinner(true);

    rezDate2 = await getDate();
    setdatefilter(rezDate2);
    const token = await getToken();
    const usId = await getUserID();
    console.log(rezDate2);
    await post('/foods/daily-summary', {
      date: rezDate2,
      user_id: usId,
      token: token,
    }).then((res) => {
      console.log(res);
      setweightnow(res.current_weight.current_weight.toString());
      setweightperf(res.current_weight.perfect_weight.toString());
      seteatsnack(res.food.snack_total.toString());
      seteatsnackn(res.food.snack_need.toString());
      seteatlaunch(res.food.lunch_total.toString());
      seteatlaunchn(res.food.lunch_need.toString());
      seteatdinner(res.food.dinner_total.toString());
      seteatdinnern(res.food.dinner_need.toString());
      seteatbreak(res.food.breakfast_total.toString());
      seteatbreakn(res.food.breakfast_need.toString());
      setnorm_kkal(res.kkal_stat.norm_kkal.toString());
      setneed_today(res.kkal_stat.need_today.toString());
      seteaten_kkal(res.kkal_stat.eaten_kkal.toString());
      setburned(res.kkal_stat.burned.toString());
      setprotein(res.norma_bzhu.carbohydrate.toString());
      setfat(res.norma_bzhu.fat.toString());
      setcarbohydrate(res.norma_bzhu.protein.toString());
      setglycemic_load(res.glycemic_load.toString());
      setnorma_aminokislot(res.norma_aminokislot.toString());
      setvitamino(res.norma_vitamin);
      setvatAcontains(res.norma_vitamin.VitaminA.contains);
      setvatCcontains(res.norma_vitamin.VitaminC.contains);
      setvatB6contains(res.norma_vitamin.VitaminB6.contains);
      setvatB12contains(res.norma_vitamin.VitaminB12.contains);
      setvatIroncontains(res.norma_vitamin.Iron.contains);
      setvatCalciumcontains(res.norma_vitamin.Calcium.contains);
      setvatMagnesiumcontains(res.norma_vitamin.Magnesium.contains);
      setvatZinccontains(res.norma_vitamin.Zinc.contains);
      setvatGlykcontains(res.glycemic_load_contains);
      setvatCarboncontains(res.norma_bzhu.contains.carbohydrate);
      setvatBelkicontains(res.norma_bzhu.contains.protein);
      setvatFatcontains(res.norma_bzhu.contains.fat);
      setphk(res.ph);
      setspinner(false);
    }).catch((res) => {
      setweightnow('');
      setweightperf('');
      seteatsnack('');
      seteatsnackn('');
      seteatlaunch('');
      seteatlaunchn('');
      seteatdinner('');
      seteatdinnern('');
      seteatbreak('');
      seteatbreakn('');
      setnorm_kkal('');
      setneed_today('');
      seteaten_kkal('');
      setburned('');
      setprotein('');
      setfat('');
      setcarbohydrate('');
      setvitamino({});
      setvatAcontains([]);
      setvatCcontains([]);
      setvatB6contains([]);
      setvatB12contains([]);
      setvatIroncontains([]);
      setvatCalciumcontains([]);
      setvatMagnesiumcontains([]);
      setvatZinccontains([]);
      setvatGlykcontains([]);
      setvatCarboncontains([]);
      setvatBelkicontains([]);
      setvatFatcontains([]);
      setphk('');
      setglycemic_load('');
      setnorma_aminokislot('');
      setspinner(false);
    });
  };



  React.useEffect(() => {

    getnames();

  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getnames();
    }, [])
  );
  const navigation2 = useNavigation();
  return (
    <View style={styles.container}>
      <Spinner
        visible={spinner}
        textContent={'Считаем данные...'}
        textStyle={styles.spinnerTextStyle}
      />
      <StatusBar hidden />
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}>
          <View style={styles.miniTitleRow}>
            <MiniTitle loremIpsum="Сводка" style={styles.miniTitle}></MiniTitle>
            <TouchableOpacity onPress={() => navigation2.navigate('MainDetails')}>
            <Button buttonText="ПОДРОБНЕЕ" style={styles.button}></Button>
            </TouchableOpacity>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}>
              <View style={styles.info1Row}>
                <View style={styles.info1}>
                  <View style={styles.reportCard1}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect27}>
                      <ImageBackground
                        style={styles.rect46}
                        imageStyle={styles.rect46_imageStyle}
                        source={require('../assets/images/Gradient_VsjgDoC.png')}>
                        <View style={styles.kcal1Row}>
                          <TouchableOpacity onPress={() => setModalVisibleEated(true)} style={styles.kcal1}>
                            <ColorBold
                              loremIpsum={eaten_kkal == "" ? '0' : eaten_kkal}
                              style={styles.colorBold7}></ColorBold>
                            <Text style={styles.infoColor}>ккал</Text>
                            <Text style={styles.infoText2}>Съедено</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => setModalVisibleRemaind(true)} style={styles.kcalMain}>
                            <ImageBackground
                              source={require('../assets/images/circle_1.png')}
                              resizeMode="contain"
                              style={styles.image6}
                              imageStyle={styles.image6_imageStyle}>
                              <ColorBoldMax
                                loremIpsum={need_today == "" ? '0' : need_today}
                                style={styles.colorBoldMax1}></ColorBoldMax>
                              <Text style={styles.infoColor1}>ккал</Text>
                            </ImageBackground>
                            <Text style={styles.infoText}>Осталось</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => setModalVisibleBurned(true)} style={styles.kcal2}>
                            <ColorBold
                              loremIpsum={burned == "" ? '0' : burned}
                              style={styles.colorBold6}></ColorBold>
                            <Text style={styles.infoColor3}>ккал</Text>
                            <Text style={styles.infoText1}>Сожжено</Text>
                          </TouchableOpacity>
                        </View>
                        <Modal
                          style={styles.modBackgr}
                          animationType="fade"
                          transparent={true}
                          visible={modalVisibleEated}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisibleEated(!modalVisibleEated);
                          }}
                        >
                          <View style={styles.modBackgr}>
                            <View style={styles.modalStyle}>
                              <TouchableOpacity
                                style={[styles.buttonCloseModal]}
                                onPress={() => setModalVisibleEated(!modalVisibleEated)}
                              >
                                <MaterialCommunityIconsIcon
                                  name="close"
                                  style={styles.iconClosesModal}
                                ></MaterialCommunityIconsIcon>
                              </TouchableOpacity>

                              <View style={styles.kcal1}>
                                <ColorBold
                                  loremIpsum={eaten_kkal == "" ? '0' : eaten_kkal}
                                  style={styles.colorBold7}></ColorBold>
                                <Text style={styles.infoColor}>ккал</Text>
                                <Text style={styles.infoText2}>Съедено</Text>
                              </View>

                              <View style={styles.interestIndicator}>
                                <Parameters
                                  text="Углеводы"
                                  interest={protein}
                                  style={styles.parameters}></Parameters>
                                <Parameters
                                  text="Белки"
                                  interest={carbohydrate}
                                  style={styles.parameters2}></Parameters>
                                <Parameters
                                  interest={fat}
                                  text="Жиры"
                                  style={styles.parameters3}></Parameters>
                              </View>

                            </View>
                          </View>
                        </Modal>

                        <Modal
                          style={styles.modBackgr}
                          animationType="fade"
                          transparent={true}
                          visible={modalVisibleRemaind}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisibleRemaind(!modalVisibleRemaind);
                          }}
                        >
                          <View style={styles.modBackgr}>
                            <View style={styles.modalStyle}>
                              <TouchableOpacity
                                style={[styles.buttonCloseModal]}
                                onPress={() => setModalVisibleRemaind(!modalVisibleRemaind)}
                              >
                                <MaterialCommunityIconsIcon
                                  name="close"
                                  style={styles.iconClosesModal}
                                ></MaterialCommunityIconsIcon>
                              </TouchableOpacity>



                              <ColorBoldMax
                                loremIpsum={need_today == "" ? '0' : need_today}
                                style={styles.colorBoldMax1}></ColorBoldMax>
                              <Text style={styles.infoColor1}>ккал</Text>

                              <Text style={styles.infoText}>Осталось</Text>


                              <View style={styles.interestIndicator}>
                                <ParametersRemind
                                  text="Углеводы"
                                  interest={protein}
                                  style={styles.parameters}></ParametersRemind>
                                <ParametersRemind
                                  text="Белки"
                                  interest={carbohydrate}
                                  style={styles.parameters2}></ParametersRemind>
                                <ParametersRemind
                                  interest={fat}
                                  text="Жиры"
                                  style={styles.parameters3}></ParametersRemind>
                              </View>

                            </View>
                          </View>
                        </Modal>


                        <Modal
                          style={styles.modBackgr}
                          animationType="fade"
                          transparent={true}
                          visible={modalVisibleBurned}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisibleBurned(!modalVisibleBurned);
                          }}
                        >
                          <View style={styles.modBackgr}>
                            <View style={styles.modalStyle}>
                              <TouchableOpacity
                                style={[styles.buttonCloseModal]}
                                onPress={() => setModalVisibleBurned(!modalVisibleBurned)}
                              >
                                <MaterialCommunityIconsIcon
                                  name="close"
                                  style={styles.iconClosesModal}
                                ></MaterialCommunityIconsIcon>
                              </TouchableOpacity>

                              <ColorBold
                                loremIpsum={burned == "" ? '0' : burned}
                                style={styles.colorBold6}></ColorBold>
                              <Text style={styles.infoColor3}>ккал</Text>
                              <Text style={styles.infoText1}>Сожжено</Text>




                            </View>
                          </View>
                        </Modal>

                        <View style={styles.interestIndicator}>
                          <TouchableOpacity onPress={() => setModalVisibleCarbon(true)} >
                            <Parameters
                              text="Углеводы"
                              interest={protein}
                              style={styles.parameters}></Parameters>
                          </TouchableOpacity>


                          <Modal
                            style={styles.modBackgr}
                            animationType="fade"
                            transparent={true}
                            visible={modalVisibleCarbon}
                            onRequestClose={() => {
                              Alert.alert("Modal has been closed.");
                              setModalVisibleCarbon(!modalVisibleCarbon);
                            }}
                          >
                            <View style={styles.modBackgr}>
                              <View style={styles.modalStyle}>
                                <TouchableOpacity
                                  style={[styles.buttonCloseModal]}
                                  onPress={() => setModalVisibleCarbon(!modalVisibleCarbon)}
                                >
                                  <MaterialCommunityIconsIcon
                                    name="close"
                                    style={styles.iconClosesModal}
                                  ></MaterialCommunityIconsIcon>
                                </TouchableOpacity>
                                <View style={styles.mrgn} >

                                </View>
                                <ScrollView style={styles.scrollviewModal}>
                                  <ParametersFull

                                    text="Углеводы"
                                    interest={protein}
                                    style={styles.parameters}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatCarboncontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>

                                  <View style={styles.descmodal} >
                                    <Text style={styles.headerdescmodal}>
                                      Углеводы — это сахара, крахмалы и клетчатка, содержащиеся в пищевых продуктах. Крахмалы и сахара обеспечивают энергию, а клетчатка проходит через пищеварительную систему в непереваренном виде.
                                    </Text>
                                  </View>
                                </ScrollView>




                              </View>
                            </View>
                          </Modal>


                          <TouchableOpacity onPress={() => setModalVisibleBelki(true)} >
                            <Parameters
                              text="Белки"
                              interest={carbohydrate}
                              style={styles.parameters2}></Parameters>
                          </TouchableOpacity>

                          <Modal
                            style={styles.modBackgr}
                            animationType="fade"
                            transparent={true}
                            visible={modalVisibleBelki}
                            onRequestClose={() => {
                              Alert.alert("Modal has been closed.");
                              setModalVisibleBelki(!modalVisibleBelki);
                            }}
                          >
                            <View style={styles.modBackgr}>
                              <View style={styles.modalStyle}>
                                <TouchableOpacity
                                  style={[styles.buttonCloseModal]}
                                  onPress={() => setModalVisibleBelki(!modalVisibleBelki)}
                                >
                                  <MaterialCommunityIconsIcon
                                    name="close"
                                    style={styles.iconClosesModal}
                                  ></MaterialCommunityIconsIcon>
                                </TouchableOpacity>
                                <View style={styles.mrgn} >

                                </View>
                                <ScrollView style={styles.scrollviewModal}>
                                  <ParametersFull text="Белки"
                                    interest={carbohydrate}
                                    style={styles.parameters2}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatBelkicontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>

                                  <View style={styles.descmodal} >
                                    <Text style={styles.headerdescmodal}>
                                      Белки состоят из аминокислот, связанных друг с другом в цепи. Вам нужно достаточное количество общего белка, чтобы заменить белки, которые расщепляются каждый день, и вам также нужно получать незаменимые аминокислоты в балансе в течение дня, чтобы создавать эти белки.
                                      {"\n"}
                                      Белки обеспечивают структуру вашего тела в виде кожи, мышц и коллагена. Все ферменты являются белками; ферменты необходимы для переваривания пищи и метаболических реакций в клетках. Белки — это гормоны, которые посылают сигналы от одного органа к другому, как инсулин. Белки формируют вашу иммунную систему; ваши антитела являются белками. Вы также можете метаболизировать белки для получения энергии.
                                      {"\n"}
                                      Источники животного происхождения включают мясо, рыбу, яйца. Растительные источники включают сою, бобы, тофу, арахис.
                                    </Text>
                                  </View>
                                </ScrollView>




                              </View>
                            </View>
                          </Modal>
                          <TouchableOpacity onPress={() => setModalVisibleFat(true)} >
                            <Parameters
                              interest={fat}
                              text="Жиры"
                              style={styles.parameters3}></Parameters>
                          </TouchableOpacity>
                          <Modal
                            style={styles.modBackgr}
                            animationType="fade"
                            transparent={true}
                            visible={modalVisibleFat}
                            onRequestClose={() => {
                              Alert.alert("Modal has been closed.");
                              setModalVisibleFat(!modalVisibleFat);
                            }}
                          >
                            <View style={styles.modBackgr}>
                              <View style={styles.modalStyle}>
                                <TouchableOpacity
                                  style={[styles.buttonCloseModal]}
                                  onPress={() => setModalVisibleFat(!modalVisibleFat)}
                                >
                                  <MaterialCommunityIconsIcon
                                    name="close"
                                    style={styles.iconClosesModal}
                                  ></MaterialCommunityIconsIcon>
                                </TouchableOpacity>
                                <View style={styles.mrgn} >

                                </View>
                                <ScrollView style={styles.scrollviewModal}>
                                  <ParametersFull interest={fat}
                                    text="Жиры"
                                    style={styles.parameters3}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatFatcontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>

                                  <View style={styles.descmodal} >
                                    <Text style={styles.headerdescmodal}>

                                      Жиры, также называемые липидами, представляют собой семейство соединений, состоящих из длинных цепей водорода и углерода, которые не растворяются в воде. Они являются плотным источником энергии (9 ккал/г). У вас есть неограниченная способность хранить энергию в виде жира. Он защищает ваши органы, действуя как подушка, и изолирует ваше тело от экстремальных температур. Жир смазывает кожу, глаза и легкие. Они также используются для изготовления клеточных мембран, для передачи сигналов между клетками и для производства гормонов. Вам также нужны жиры в вашем рационе, чтобы усваивать жирорастворимые витамины – A, D, E и K.
                                      {"\n"}
                                      Источники
                                      Растительные масла, такие как соевое, оливковое, кокосовое, масла из виноградных косточек и животные источники, такие как сливочное масло, сало и жир в мясе, например, говяжий фарш.
                                    </Text>
                                  </View>
                                </ScrollView>




                              </View>
                            </View>
                          </Modal>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={styles.slider}>
                    <View style={styles.dot5Row}>
                      <View
                        style={[
                          styles.dot5,
                          {
                            backgroundColor:
                              props.dot1 || '#c8b5a6',
                          },
                        ]}></View>
                      <View
                        style={[
                          styles.dot3,
                          {
                            backgroundColor:
                              props.dot1 || 'rgba(255,255,255,1)',
                          },
                        ]}></View>
                      <View style={styles.dot1}></View>
                    </View>
                  </View>
                </View>
                <View style={styles.info2}>
                  <View style={styles.reportCard2}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect29}>
                      <ImageBackground
                        style={styles.rect47}
                        imageStyle={styles.rect47_imageStyle}
                        source={require('../assets/images/Gradient_VsjgDoC.png')}>
                        <View style={styles.rect8}>
                          <View style={styles.group4}>
                            <TouchableOpacity onPress={() => setModalVisibleA(true)} >
                              <Parameters

                                text="Витамин А"
                                interest={vitamino.VitaminA ? vitamino.VitaminA.percents_today + "%" : '0%'}
                                style={styles.parameters1}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleA}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleA(!modalVisibleA);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleA(!modalVisibleA)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <ParametersFull

                                      text="Витамин А"
                                      interest={vitamino.VitaminA ? vitamino.VitaminA.percents_today + "%" : '0%'}
                                      style={styles.parameters1}></ParametersFull>
                                    <View style={styles.mrgn} >

                                    </View>
                                    <View style={styles.productsModal} >

                                      <FlatList
                                        data={vatAcontains}
                                        keyExtractor={({ id }, index) => index.toString()}
                                        renderItem={({ item }) => (
                                          <View style={styles.v_line_group}>
                                            <View style={styles.v_name}>
                                              <Text style={styles.v_text_name}>{item.dish}</Text>
                                            </View>
                                            <View style={styles.v_name}>
                                              <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                            </View>
                                          </View>
                                        )}
                                      />
                                    </View>

                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                        Витамин А (ретинол) нужен, чтобы видеть ночью. Витамин А помогает в вашей иммунной защите, создавая иммунные клетки и поддерживая физический барьер для патогенов, пополняя клетки кожи и кишечника. Витамин А является жирорастворимым питательным веществом, которое является антиоксидантом, а это означает, что он защищает ваши клетки от повреждения свободными радикалами кислорода, которые образуются, когда ваши клетки метаболизируют кислород.
                                        {"\n"}
                                        Витамин А играет роль в определении типа ткани каждой из ваших клеток, поэтому он особенно важен во время эмбрионального развития.
                                        {"\n"}
                                        Витамин А содержится в различных формах из растительных и животных источников. Витамин А из животных источников готов к использованию вашим организмом. Витамин А из растительных источников (например, бета-каротин) метаболизируется в активный витамин А только тогда, когда он нужен вашему организму. Чтобы включить все источники, витамин А часто указывается в RAE (эквивалентах активности ретинола).
                                        Источники
                                        Печень, темно-зеленые листовые овощи, такие как капуста и шпинат; желтые и оранжевые овощи, такие как морковь и тыква.

                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalVisibleC(true)} >
                              <Parameters

                                text="Витамин С"
                                interest={vitamino.VitaminC ? vitamino.VitaminC.percents_today + "%" : '0%'}
                                style={styles.parameters4}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleC}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleC(!modalVisibleC);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleC(!modalVisibleC)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="Витамин С"
                                    interest={vitamino.VitaminC ? vitamino.VitaminC.percents_today + "%" : '0%'}
                                    style={styles.parameters4}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatCcontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                        Витамин С, также называемый аскорбиновой кислотой, является антиоксидантом, помогающим защитить ткани от окислительного стресса. Витамин С играет роль в создании коллагена, который придает структуру вашей коже, костям и хрящам.
                                        {"\n"}
                                        Витамин С защищает железо от окисления во время пищеварения, облегчая усвоение железа.
                                        {"\n"}
                                        Большинство животных могут вырабатывать витамин С из глюкозы, но люди не могут, так что это делает его незаменимым витамином, который вы должны получать из пищи.
                                        {"\n"}
                                        Источники
                                        Красный и желтый перец, ананас, дыня, персики, кабачки, брокколи, шпинат, клубника.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalVisibleB6(true)} >
                              <Parameters

                                text="B-6"
                                interest={vitamino.VitaminB6 ? vitamino.VitaminB6.percents_today + "%" : '0%'}
                                style={styles.parameters5}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleB6}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleB6(!modalVisibleB6);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleB6(!modalVisibleB6)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="B-6"
                                    interest={vitamino.VitaminB6 ? vitamino.VitaminB6.percents_today + "%" : '0%'}
                                    style={styles.parameters5}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatB6contains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                        Витамин B6, также называемый пиридоксин, пиридоксамин или пиридоксаль, используется для производства аминокислот и их расщепления. Он необходим для получения ниацина (витамина В3) из аминокислоты триптофана. B6 помогает высвобождать глюкозу из запасов, когда она нужна вам для получения энергии. B6 играет важную роль в здоровье мозга, защищая нервные клетки и вырабатывая нейротрансмиттеры, такие как серотонин.
                                        {"\n"}
                                        Источники
                                        B6 содержится в самых разных продуктах, включая мясо, бананы, картофель, лен, зеленый перец.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalVisibleB12(true)} >
                              <Parameters

                                text="B12"
                                interest={vitamino.VitaminB12 ? vitamino.VitaminB12.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleB12}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleB12(!modalVisibleB12);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleB12(!modalVisibleB12)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <Parameters

                                    text="B12"
                                    interest={vitamino.VitaminB12 ? vitamino.VitaminB12.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatB12contains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>

                                        B12, также называемый кобаламином, помогает защитить нервные волокна. Это необходимо для активации фолиевой кислоты в пригодной для использования форме. B12 содержится только в продуктах животного происхождения, поэтому веганы должны дополнять свой рацион витамином B12.
                                        {"\n"}
                                        Источники
                                        Баранина, говядина и другое мясо, морепродукты, молоко.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>

                          </View>
                          <View style={styles.group5}>
                            <TouchableOpacity onPress={() => setModalVisibleIron(true)} >
                              <Parameters

                                text="Железо"
                                interest={vitamino.Iron ? vitamino.Iron.percents_today + "%" : '0%'}
                                style={styles.parameters7}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleIron}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleIron(!modalVisibleIron);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleIron(!modalVisibleIron)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="Железо"
                                    interest={vitamino.Iron ? vitamino.Iron.percents_today + "%" : '0%'}
                                    style={styles.parameters7}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatIroncontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>

                                        Железо используется для производства энергии. Он также используется для производства аминокислот, коллагена, гормонов и нейротрансмиттеров. Железо необходимо для производства гемоглобина и миоглобина, которые используются для удержания кислорода в эритроцитах и ​​мышцах соответственно.
                                        {"\n"}
                                        Железо животного происхождения усваивается легче, чем железо растительного происхождения. Около 10% железа усваивается при веганской диете по сравнению с 20% при смешанной диете. Железные мишени в Cronometer предполагают смешанную диету.
                                        {"\n"}
                                        Источники
                                        Печень, грибы, моллюски, лимская фасоль, шпинат
                                        {"\n"}
                                        Количество железа, поглощаемого из пищи, можно увеличить, если одновременно употреблять источник витамина С или другие кислоты.
                                        {"\n"}
                                        Например, употребление клубники увеличит усвоение железа из шпината в той же еде.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalVisibleCalcium(true)} >
                              <Parameters

                                text="Кальций"
                                interest={vitamino.Calcium ? vitamino.Calcium.percents_today + "%" : '0%'}
                                style={styles.parameters8}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleCalcium}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleCalcium(!modalVisibleCalcium);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleCalcium(!modalVisibleCalcium)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="Кальций"
                                    interest={vitamino.Calcium ? vitamino.Calcium.percents_today + "%" : '0%'}
                                    style={styles.parameters8}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatCalciumcontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>

                                        Кальций является наиболее распространенным минералом в вашем организме. Кальций помогает вырастить здоровые кости в раннем возрасте и свести к минимуму потерю костной массы в более позднем возрасте. Кальций используется при сокращении мышц, при свертывании крови и для отправки сигналов от мозга к тканям тела.
                                        {"\n"}
                                        Чрезмерное потребление магния может ограничить усвоение кальция. Проверьте баланс кальция и магния в своем дневнике, чтобы увидеть, сбалансировано ли вы потребляете эти питательные вещества.
                                        {"\n"}
                                        Источники
                                        Молоко, сыр, йогурт, лосось с костями, тофу, шпинат, бамия.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalVisibleMagnesium(true)} >
                              <Parameters

                                text="Магний"
                                interest={vitamino.Magnesium ? vitamino.Magnesium.percents_today + "%" : '0%'}
                                style={styles.parameters9}></Parameters>
                            </TouchableOpacity>


                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleMagnesium}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleMagnesium(!modalVisibleMagnesium);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleMagnesium(!modalVisibleMagnesium)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="Магний"
                                    interest={vitamino.Magnesium ? vitamino.Magnesium.percents_today + "%" : '0%'}
                                    style={styles.parameters9}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatMagnesiumcontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>

                                        Магний выполняет множество функций, включая высвобождение энергии из жиров и углеводов, сокращение мышц, передачу информации в мозг и из него посредством нервных импульсов, здоровье костей и свертывание крови. Более половины магния в вашем организме содержится в костях.
                                        {"\n"}
                                        Чрезмерное потребление кальция или фосфора может ограничивать всасывание магния. Проверьте баланс питательных веществ кальция: магния в своем дневнике, чтобы увидеть, получаете ли вы эти питательные вещества в балансе.
                                        {"\n"}
                                        Источники
                                        Кофе, чай, бобовые, такие как лимская фасоль, соевые бобы, листовая зелень, такая как шпинат, зелень свеклы и капуста.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalVisibleZinc(true)} >
                              <Parameters

                                text="Цинк"
                                interest={vitamino.Zinc ? vitamino.Zinc.percents_today + "%" : '0%'}
                                style={styles.parameters10}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleZinc}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleZinc(!modalVisibleZinc);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleZinc(!modalVisibleZinc)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="Цинк"
                                    interest={vitamino.Zinc ? vitamino.Zinc.percents_today + "%" : '0%'}
                                    style={styles.parameters10}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >

                                    <FlatList
                                      data={vatZinccontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                        Цинк используется более чем в 200 белках, которые выполняют множество различных функций, таких как иммунитет, заживление ран, восприятие вкуса, выработка активной формы витамина А и защита от свободных радикалов.
                                        {"\n"}
                                        Потребление цинка выше UL может препятствовать усвоению меди (поскольку эти питательные вещества конкурируют за одно и то же место всасывания), что может привести к дефициту меди. Проверьте баланс питательных веществ цинка и меди, чтобы убедиться, что вы получаете эти питательные вещества в балансе.
                                        {"\n"}
                                        Источники
                                        Устрицы, говядина, индейка.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={styles.slider1}>
                    <View style={styles.rect14Row}>
                      <View
                        style={[
                          styles.rect14,
                          {
                            backgroundColor:
                              props.dot1 || 'rgba(255,255,255,1)',
                          },
                        ]}></View>
                      <View
                        style={[
                          styles.rect12,
                          {
                            backgroundColor:
                              props.dot1 || '#c8b5a6',
                          },
                        ]}></View>
                      <View style={styles.rect10}></View>
                    </View>
                  </View>
                </View>
                <View style={styles.info3}>
                  <View style={styles.reportCard3}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect31}>
                      <ImageBackground
                        style={styles.rect48}
                        imageStyle={styles.rect48_imageStyle}
                        source={require('../assets/images/Gradient_VsjgDoC.png')}>
                        <View style={styles.rect17}>
                          <View style={styles.rect18}>

                            <TouchableOpacity onPress={() => setModalVisibleAmino(true)} >
                              <Parameters

                                text="Нормы Аминокислот"
                                interest={norma_aminokislot ? norma_aminokislot : '0%'}
                                style={styles.parameters11}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleAmino}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleAmino(!modalVisibleAmino);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleAmino(!modalVisibleAmino)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull

                                    text="Нормы Аминокислот"
                                    interest={norma_aminokislot ? norma_aminokislot : '0%'}
                                    style={styles.parameters11}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >


                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                        Аминокислоты это органические соединения, молекулы которых одновременно содержат аминные и карбоксильные группы.
                                        {"\n"}
                                        Множество комбинаций аминокислот создают молекулы белков с большим разнообразием свойств.
                                        {"\n"}
                                        В желудочно-кишечном тракте под воздействием ферментов белки расщепляются до аминокислот, которые всасываются в кровь. Организм синтезирует из этих аминокислот белки для построения собственных тканей, ферменты, гормоны, иммунные белки.
                                        {"\n"}
                                        Всего протеиногенных (или иначе стандартных) аминокислот 20. Человек нуждается в них всех, но 12 из этих необходимых для жизни аминокислот человеческий организм способен синтезировать самостоятельно. Восемь из двадцати протеиногенных аминокислот (триптофан, валин, фенилаланин, метионин, лизин, треонин, изолейцин, лейцин) являются незаменимыми для взрослого человека и обязательно должны поступать в него с белковыми продуктами. Аргинин - условно-незаменимая аминокислота: у взрослого и здорового человека аргинин вырабатывается организмом в достаточном количестве, у детей и подростков, у пожилых и больных людей уровень синтеза аргинина часто недостаточен.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalVisibleGlyk(true)} >
                              <Parameters

                                text="Гликемическая нагрузка"
                                interest={glycemic_load ? glycemic_load : '0%'}
                                style={styles.parameters12}></Parameters>
                            </TouchableOpacity>

                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleGlyk}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleGlyk(!modalVisibleGlyk);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleGlyk(!modalVisibleGlyk)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull text="Гликемическая нагрузка"
                                    interest={glycemic_load ? glycemic_load : '0%'}
                                    style={styles.parameters12}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatGlykcontains}
                                      keyExtractor={({ id }, index) => index.toString()}
                                      renderItem={({ item }) => (
                                        <View style={styles.v_line_group}>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.dish}</Text>
                                          </View>
                                          <View style={styles.v_name}>
                                            <Text style={styles.v_text_name}>{item.amount} {item.unit_name}</Text>

                                          </View>
                                        </View>
                                      )}
                                    />

                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                        Гликемическая нагрузка (ГН) — это мера, которая учитывает количество усваиваемых углеводов в порции продукта.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalVisibleph(true)} >
                            <Parameters

                              text="pH (кислотность)"
                              interest={phk ? phk : '0%'}
                              style={styles.parameters14}></Parameters>
                              </TouchableOpacity>
                              <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVisibleph}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisibleph(!modalVisibleph);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVisibleph(!modalVisibleph)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <ParametersFull text="pH (кислотность)"
                                    interest={phk ? phk : '0%'}
                                    style={styles.parameters12}></ParametersFull>
                                  <View style={styles.mrgn} >

                                  </View>
                                  <View style={styles.productsModal} >
                                  </View>
                                  <ScrollView style={styles.scrollviewModal}>
                                    <View style={styles.descmodal} >
                                      <Text style={styles.headerdescmodal}>
                                      Кислотность продуктов влияет на ph крови, которая в свою очередь влияет на наш организм. Оказывается, продукты с повышенным уровнем кислотности способствуют воспалительным процессам в организме, а в большом количестве вполне способны создать подобный очаг самостоятельно.
                                      {"\n"}
                                      В нашей системе выбран срединный показатель - 4.6, как нейтрально кислотный. Если у вас показатель выше 4.6 значит в вашем рационе превалируют низкокислотные продукты, в ином случае - высококислотные продукты.
                                      </Text>
                                    </View>
                                  </ScrollView>




                                </View>
                              </View>
                            </Modal>

                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Инсулиновый индекс ЯЯ"
                              interest="41%"
                              style={styles.parameters13}></Parameters>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={styles.slider2}>
                    <View style={styles.rect25Row}>
                      <View
                        style={[
                          styles.rect25,
                          {
                            backgroundColor:
                              props.dot1 || 'rgba(255,255,255,1)',
                          },
                        ]}></View>
                      <View
                        style={[
                          styles.rect23,
                          {
                            backgroundColor:
                              props.dot1 || 'rgba(255,255,255,1)',
                          },
                        ]}></View>
                      <View style={styles.rect21}></View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapscrollarea}>
            <ScrollView>
              <View style={styles.areainn} >
                <View style={styles.miniTitle1Row}>
                  <MiniTitle

                    loremIpsum="Питание"
                    style={styles.miniTitle1}></MiniTitle>
                  <TouchableOpacity onPress={() => navigation2.navigate('Дневник')}>
                    <Button buttonText="ПОДРОБНЕЕ" style={styles.button1}></Button>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardRow}>
                  <View style={styles.card}>
                    <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect34}>
                      {parseInt(eatbreak) > 0 ? (
                        <ImageBackground
                          style={styles.rect33}
                          imageStyle={styles.rect33_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 1 })}>
                            <NutritionTitle
                              text="Завтрак"
                              style={styles.nutritionTitle}></NutritionTitle>
                            <View style={styles.imageRow}>
                              <Image
                                source={require('../assets/images/pic1.png')}
                                resizeMode="contain"
                                style={styles.image}></Image>
                              <View style={styles.imageFiller}></View>
                              <View style={styles.colorBoldColumn}>
                                <ColorBold
                                  loremIpsum={eatbreak}
                                  style={styles.colorBold}></ColorBold>
                                <Text style={styles.textKkal}>из {eatbreakn}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      ) : (
                        <ImageBackground
                          style={styles.rect33}
                          imageStyle={styles.rect33_imageStyle}
                          source={require("../assets/images/Gradient_VsjgDoC.png")}
                        >
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 1 })}>
                            <NutritionTitle
                              text="Завтрак"
                              style={styles.nutritionTitle}
                            ></NutritionTitle>
                            <View style={styles.rect52}>
                              <MaterialCommunityIconsIcon
                                name="plus"
                                style={styles.icon11}
                              ></MaterialCommunityIconsIcon>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>

                      )}
                    </View>
                  </View>
                  <View style={styles.cardFiller}></View>
                  <View style={styles.card2}>
                    <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect35}>
                      {parseInt(eatlaunch) > 0 ? (
                        <ImageBackground
                          style={styles.rect43}
                          imageStyle={styles.rect43_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 2 })}>
                            <NutritionTitle
                              text="Обед"
                              style={styles.nutritionTitle2}></NutritionTitle>
                            <View style={styles.image2Row}>
                              <Image
                                source={require('../assets/images/pic2.png')}
                                resizeMode="contain"
                                style={styles.image2}></Image>
                              <View style={styles.image2Filler}></View>
                              <View style={styles.colorBold2Column}>
                                <ColorBold
                                  loremIpsum={eatlaunch}
                                  style={styles.colorBold2}></ColorBold>
                                <Text style={styles.textKkal1}>из {eatlaunchn}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      ) : (
                        <ImageBackground
                          style={styles.rect43}
                          imageStyle={styles.rect43_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 2 })}>
                            <NutritionTitle
                              text="Обед"
                              style={styles.nutritionTitle2}></NutritionTitle>
                            <View style={styles.rect52}>
                              <MaterialCommunityIconsIcon
                                name="plus"
                                style={styles.icon11}></MaterialCommunityIconsIcon>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.group2Row}>
                  <View style={styles.group2}>
                    <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect37}>
                      {parseInt(eatdinner) > 0 ? (
                        <ImageBackground
                          style={styles.rect44}
                          imageStyle={styles.rect44_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 3 })}>
                            <NutritionTitle
                              text="Ужин"
                              style={styles.nutritionTitle3}></NutritionTitle>
                            <View style={styles.image3Row}>

                              <Image
                                source={require('../assets/images/pic3.png')}
                                resizeMode="contain"
                                style={styles.image3}></Image>
                              <View style={styles.image2Filler}></View>
                              <View style={styles.colorBold3Column}>
                                <ColorBold
                                  loremIpsum={eatdinner}
                                  style={styles.colorBold3}></ColorBold>
                                <Text style={styles.textKkal2}>из {eatdinnern}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      ) : (
                        <ImageBackground
                          style={styles.rect44}
                          imageStyle={styles.rect44_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 3 })}>
                            <NutritionTitle
                              text="Ужин"
                              style={styles.nutritionTitle3}></NutritionTitle>
                            <View style={styles.rect52}>
                              <MaterialCommunityIconsIcon
                                name="plus"
                                style={styles.icon11}></MaterialCommunityIconsIcon>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      )}
                    </View>
                  </View>
                  <View style={styles.group2Filler}></View>
                  {parseInt(eatsnack) > 0 ? (
                    <View style={styles.group3}>
                      <View
                        gradientImage="Gradient_VsjgDoC.png"
                        style={styles.rect39}>
                        <ImageBackground
                          style={styles.rect45}
                          imageStyle={styles.rect45_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 4 })}>
                            <NutritionTitle
                              text="Перекус / другое"
                              style={styles.nutritionTitle4}></NutritionTitle>
                            <View style={styles.image4Row}>
                              <Image
                                source={require('../assets/images/pic4.png')}
                                resizeMode="contain"
                                style={styles.image4}></Image>
                              <View style={styles.image4Filler}></View>
                              <View style={styles.colorBold4Column}>
                                <ColorBold
                                  loremIpsum={eatsnack + ''}
                                  style={styles.colorBold4}></ColorBold>
                                <Text style={styles.textKkal3}>из {eatsnackn} </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.group3}>
                      <View
                        gradientImage="Gradient_VsjgDoC.png"
                        style={styles.rect39}>
                        <ImageBackground
                          style={styles.rect45}
                          imageStyle={styles.rect45_imageStyle}
                          source={require('../assets/images/Gradient_VsjgDoC.png')}>
                          <TouchableOpacity
                            onPress={() => navigation2.navigate('ProductList', { dateday: datefilter, meal: 4 })}>
                            <NutritionTitle
                              text="Перекус / другое"
                              style={styles.nutritionTitle4}></NutritionTitle>
                            <View style={styles.rect52}>
                              <MaterialCommunityIconsIcon
                                name="plus"
                                style={styles.icon11}></MaterialCommunityIconsIcon>
                            </View>
                          </TouchableOpacity>
                        </ImageBackground>
                      </View>
                    </View>
                  )}
                </View>
                <View style={styles.miniTitle2Row}>
                  <MiniTitle
                    loremIpsum="Измерения тела"
                    style={styles.miniTitle2}></MiniTitle>
                  <TouchableOpacity onPress={() => navigation2.navigate('Weight')}>
                    <Button buttonText="ПОДРОБНЕЕ" style={styles.button2}></Button>
                  </TouchableOpacity>
                </View>
                <View style={styles.weight}>
                  <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect41}>
                    <ImageBackground
                      style={styles.rect42}
                      imageStyle={styles.rect42_imageStyle}
                      source={require('../assets/images/Gradient_VsjgDoC.png')}>
                      <View style={styles.image5Row}>
                        <Image
                          source={require('../assets/images/weight.png')}
                          resizeMode="contain"
                          style={styles.image5}></Image>
                        <Text style={styles.text}>
                          Ваш идеальный вес: {weightperf} кг
                        </Text>
                      </View>
                      <View style={styles.image5RowFiller}></View>
                      <ColorBoldMax
                        loremIpsum={weightnow + ' кг'}
                        style={styles.colorBoldMax}></ColorBoldMax>
                    </ImageBackground>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.rect1}>
          <View style={styles.group6Row}>
            <View style={styles.group6}>
              <TouchableOpacity onPress={() => navigation2.openDrawer()}>
                <MaterialCommunityIconsIcon
                  name="menu"
                  style={styles.icon2}></MaterialCommunityIconsIcon>
              </TouchableOpacity>
            </View>
            <View style={styles.data}>
              <TouchableOpacity onPress={() => showDatepicker()} >
                <View style={styles.boldRow}>

                  <Bold dates={datefilter} style={styles.bold}></Bold>
                  <MaterialCommunityIconsIcon
                    name="menu-down"
                    style={styles.icon4}></MaterialCommunityIconsIcon>

                </View>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
          <View style={styles.group6RowFiller}></View>
          <View style={styles.group}>
            <View style={styles.rect2Filler}></View>
            <View style={styles.rect2}>
              <View style={styles.rect3Stack}>
                <View style={styles.rect3}></View>
                <MaterialCommunityIconsIcon
                  name="bell"
                  style={styles.icon}></MaterialCommunityIconsIcon>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  v_line_group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  v_text_name: {
    fontFamily: "roboto-regular",
    color: "#54473f",
    fontSize: 12,
  },
  headerdescmodal: {
    fontFamily: "roboto-regular",
    color: "#54473f",
    fontSize: 12,
  },
  v_name: {
    display: 'flex',
    flexDirection: 'row',
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
    padding: 10,
    position: 'absolute',


    width: Dimensions.get('window').width - 20,
    borderRadius: 5

  },

  wrapscrollarea: {
    marginLeft: -15,
    marginRight: -15,
    marginBottom: 90
  },

  areainn: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 200

  },

  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },

  scrollViewBody: {
    height: 5,
    backgroundColor: 'pink'
  },
  icon11: {
    color: '#333333',
    fontSize: 24,
    height: 26,
    width: 24,
    marginTop: 7,
    alignSelf: 'center',
  },
  rect52: {
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    width: 40,
    borderColor: '#333333',
    marginTop: 11,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rect4: {
    top: 0,
    left: 16,
    height: 592,
    position: 'absolute',
    right: 16,
  },
  miniTitle: {
    height: 17,
    flex: 1,
    marginRight: 115,
    marginTop: 7,
  },
  button: {
    height: 32,
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.87)",
    fontSize: 16,
    textAlign: "left"
  },
  miniTitleRow: {
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollArea: {
    height: 202,
    marginTop: 6,
    marginLeft: -16,
    marginRight: -16,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get('window').width * 3,
    height: 202,
    flexDirection: 'row',
  },
  info1: {
    width: Dimensions.get('window').width - 30,
    height: 207,
  },
  reportCard1: {
    height: 176,
  },
  rect27: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect46: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect46_imageStyle: {},
  kcal1: {
    height: 57,
    marginTop: 37,
  },
  colorBold7: {
    height: 17,
  },
  infoColor: {
    fontFamily: 'roboto-regular',
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 6,
  },
  infoText2: {
    fontFamily: 'roboto-regular',
    color: '#54473f',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
  },
  kcalMain: {
    width: 104,
    height: 94,
    marginLeft: 43,
  },
  kcalMain2: {
    width: 104,
    height: 94,

  },
  image6: {
    height: 80,
  },
  image6_imageStyle: {},
  colorBoldMax1: {
    height: 30,
    marginTop: 29,
  },
  infoColor1: {
    fontFamily: 'roboto-regular',
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 1,
  },
  infoText: {
    fontFamily: 'roboto-regular',
    color: '#54473f',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 1,
  },
  kcal2: {
    width: 52,
    height: 57,
    marginLeft: 38,
    marginTop: 37,
  },
  colorBold6: {
    height: 17,
  },
  infoColor3: {
    fontFamily: 'roboto-regular',
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 6,
  },
  infoText1: {
    fontFamily: 'roboto-regular',
    color: '#54473f',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
  },
  kcal1Row: {
    height: 94,
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 28,
    marginRight: 22,
    display: 'flex',
    justifyContent: 'space-between',
  },
  interestIndicator: {
    height: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
    marginLeft: 16,
    marginRight: 16,
  },
  parameters: {
    alignSelf: 'stretch',
    width: 88,
  },
  parameters2: {
    alignSelf: 'stretch',
    width: 88,
  },
  parameters3: {
    alignSelf: 'stretch',
    width: 88,
  },
  slider: {
    height: 8,
    flexDirection: 'row',
    marginTop: 13,

    display: 'flex',
    justifyContent: 'center',
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.38)',
    marginLeft: 8,
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.38)',
    backgroundColor: 'rgba(255,255,255,1)',
    marginLeft: 8,
  },
  dot5Row: {
    height: 8,
    flexDirection: 'row',
  },
  info2: {
    width: Dimensions.get('window').width,
    height: 202,
    marginLeft: 13,
  },
  reportCard2: {
    width: Dimensions.get('window').width - 35,
    height: 176,
    alignSelf: 'center',
  },
  rect29: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect47: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect47_imageStyle: {},
  rect8: {
    height: 145,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  group4: {
    width: 140,
    justifyContent: 'space-between',
    height: 145,
  },
  parameters1: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters4: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters5: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters6: {
    alignSelf: 'stretch',
    height: 23,
  },
  group5: {
    width: 140,
    justifyContent: 'space-between',
    height: 145,
  },
  parameters7: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters8: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters9: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters10: {
    alignSelf: 'stretch',
    height: 23,
  },
  slider1: {
    height: 8,
    flexDirection: 'row',
    marginTop: 13,
    display: 'flex',
    justifyContent: 'center',
  },
  rect14: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.38)',
  },
  rect12: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginLeft: 8,
  },
  rect10: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.38)',
    backgroundColor: 'rgba(255,255,255,1)',
    marginLeft: 8,
  },
  rect14Row: {
    height: 8,
    flexDirection: 'row',
  },
  info3: {
    width: Dimensions.get('window').width,
    height: 202,
    marginLeft: 0,
  },
  reportCard3: {
    width: Dimensions.get('window').width - 40,
    height: 176,
    alignSelf: 'center',
  },
  rect31: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect48: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect48_imageStyle: {},
  rect17: {
    height: 145,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  rect18: {
    justifyContent: 'space-between',
    height: 145,
    flex: 1,
  },
  parameters11: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters12: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters13: {
    alignSelf: 'stretch',
    height: 23,
  },
  parameters14: {
    alignSelf: 'stretch',
    height: 23,
  },
  slider2: {
    height: 8,
    flexDirection: 'row',
    marginTop: 13,
    display: 'flex',
    justifyContent: 'center',
  },
  rect25: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.38)',
  },
  rect23: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.38)',
    marginLeft: 8,
  },
  rect21: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#c8b5a6',
    marginLeft: 8,
  },
  rect25Row: {
    height: 8,
    flexDirection: 'row',
  },
  info1Row: {
    paddingTop: 4,

    flexDirection: 'row',
    flex: 1,
    paddingBottom: 4,
    marginLeft: 16,
  },
  miniTitle1: {
    height: 17,
    flex: 1,
    marginRight: 132,
    marginTop: 8,
  },
  button1: {
    height: 32,

  },
  miniTitle1Row: {
    height: 32,
    flexDirection: 'row',
    marginTop: 15,
  },
  card: {
    width: Dimensions.get('window').width / 2 - 25,
    height: 88,
  },
  rect34: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect33: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect33_imageStyle: {},
  nutritionTitle: {
    height: 17,
    marginTop: 7,
  },
  image: {
    width: 56,
    height: 44,
  },
  imageFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  colorBold: {
    height: 17,

  },
  textKkal: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
  },
  colorBoldColumn: {

    alignItems: 'flex-end',
    marginTop: 10,
  },
  imageRow: {
    height: 44,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 14,
  },
  cardFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  card2: {
    height: 88,
    width: Dimensions.get('window').width / 2 - 25,
  },
  rect35: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect43: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect43_imageStyle: {},
  nutritionTitle2: {
    height: 17,
    marginTop: 7,
  },
  image2: {
    width: 56,
    height: 44,
  },
  image2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  colorBold2: {
    height: 17,
  },
  textKkal1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
  },
  colorBold2Column: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  image2Row: {
    height: 44,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 14,
  },
  cardRow: {
    height: 88,
    flexDirection: 'row',
    marginTop: 8,
  },
  group2: {
    width: Dimensions.get('window').width / 2 - 25,
    height: 88,
  },
  rect37: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect44: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect44_imageStyle: {},
  nutritionTitle3: {
    height: 17,
    marginTop: 7,
  },
  image3: {
    width: 56,
    height: 44,
  },
  image3Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  colorBold3: {
    height: 17,
  },
  textKkal2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
  },
  colorBold3Column: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  image3Row: {
    height: 44,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 14,
  },
  group2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  group3: {
    height: 88,
    width: Dimensions.get('window').width / 2 - 25,
  },
  rect39: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
  },
  rect45: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: 'hidden',
  },
  rect45_imageStyle: {},
  nutritionTitle4: {
    height: 17,
    marginTop: 7,
  },
  image4: {
    width: 56,
    height: 44,
  },
  image4Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  colorBold4: {
    height: 17,
  },
  textKkal3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
  },
  colorBold4Column: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  image4Row: {
    height: 44,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 14,
  },
  group2Row: {
    height: 88,
    flexDirection: 'row',
    marginTop: 8,
  },
  miniTitle2: {
    height: 17,
    flex: 1,
    marginRight: 109,
    marginTop: 8,
  },
  button2: {
    height: 32,

  },
  miniTitle2Row: {
    height: 32,
    flexDirection: 'row',
    marginTop: 40,
  },
  weight: {
    height: 56,
    marginTop: 9,
  },
  rect41: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1,
    marginBottom: 1,
    marginTop: -1,
  },
  rect42: {
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    flex: 1,
    overflow: 'hidden',
  },
  rect42_imageStyle: {},
  image5: {
    width: 48,
    height: 48,
  },
  text: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 11,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 18,
  },
  image5Row: {
    height: 48,
    flexDirection: 'row',
    marginLeft: 9,
    marginTop: 5,
  },
  image5RowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  colorBoldMax: {
    height: 29,
    width: 87,
    marginRight: 8,
    marginTop: 15,
  },
  footer: {
    left: 0,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#c8b5a6',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 4,
      width: 0,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    height: 56,
    bottom: 0,
    right: 0,
    justifyContent: 'space-between',
  },
  mainTab: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 3 - 10,
  },
  icon5: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 24,
    marginTop: 8,
    marginLeft: 48,
  },
  tabName: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
    fontSize: 11,
    marginLeft: 0,
  },
  diaryTab: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 3 - 10,
  },
  icon6: {
    color: 'rgba(255,255,255,0.74)',
    fontSize: 24,
    marginTop: 8,
    marginLeft: 48,
  },
  tabName1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,0.74)',
    textAlign: 'center',
    fontSize: 11,
    marginLeft: 0,
  },
  recomTab: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 3 - 10,
  },
  icon7: {
    color: 'rgba(255,255,255,0.74)',
    fontSize: 24,
    marginLeft: 48,
    marginTop: 8,
  },
  tabName2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,0.74)',
    textAlign: 'center',
    fontSize: 11,
    marginLeft: 0,
  },
  rect4Stack: {
    marginTop: 64,
  },
  header: {
    position: 'absolute',
    height: 56,
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
  },
  rect1: {
    height: 56,
    backgroundColor: '#c8b5a6',
    flexDirection: 'row',
  },
  group6: {
    width: 40,
    height: 60,
    marginLeft: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon2: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 24,
    width: 40,
    height: 43,
    alignSelf: 'center',
  },
  data: {
    width: 128,
    height: 43,
    flexDirection: 'row',
    marginLeft: 24,
  },
  bold: {
    height: 24,
    marginTop: 7,
    opacity: 0.7,
  },
  icon4: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 30,
    marginLeft: 0,
    marginTop: 6,
  },
  boldRow: {
    height: 43,
    flexDirection: 'row',
    flex: 1,
  },
  group6Row: {
    height: 43,
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 6,
  },
  group6RowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  group: {
    width: 27,
    height: 28,
    flexDirection: 'row',
    marginRight: 13,
    marginTop: 12,
  },
  rect2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  rect2: {
    width: 27,
    height: 28,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  rect3: {
    width: 8,
    height: 8,
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    right: 0,
    borderRadius: 100,
  },
  icon: {
    top: 2,
    left: 0,
    position: 'absolute',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 24,
    right: 3,
    bottom: 0,
    height: 26,
    width: 24,
  },
  rect3Stack: {
    flex: 1,
  },
});

export default Main;
