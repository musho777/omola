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
import Backbutton from "../components/Backbutton";
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

function MainDetails(props) {


  const [isLoading, SetLoading] = React.useState(false);
  const [eaten_kkal, seteaten_kkal] = React.useState('');
  const [need_today, setneed_today] = React.useState('');
  const [norm_kkal, setnorm_kkal] = React.useState('');
  const [burned, setburned] = React.useState('');
  const [vitamino, setvitamino] = React.useState({});
  const [aminokislot, setaminokislot] = React.useState({});
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


  const [modalHistidine, setModalHistidine] = React.useState(false);
  const [vatHistidine, setvatHistidine] = React.useState([]);
  const [modalIsoleucine, setModalIsoleucine] = React.useState(false);
  const [vatIsoleucine, setvatIsoleucine] = React.useState([]);
  const [modalLeucine, setModalLeucine] = React.useState(false);
  const [vatLeucine, setvatLeucine] = React.useState([]);
  const [modalLysine, setModalLysine] = React.useState(false);
  const [vatLysine, setvatLysine] = React.useState([]);
  const [modalMethionine, setModalMethionine] = React.useState(false);
  const [vatMethionine, setvatMethionine] = React.useState([]);
  const [modalPhenylalanine, setModalPhenylalanine] = React.useState(false);
  const [vatPhenylalanine, setvatPhenylalanine] = React.useState([]);
  const [modalThreonine, setModalThreonine] = React.useState(false);
  const [vatThreonine, setvatThreonine] = React.useState([]);
  const [modalTryptophan, setModalTryptophan] = React.useState(false);
  const [vatTryptophan, setvatTryptophan] = React.useState([]);
  const [modalTyrosine, setModalTyrosine] = React.useState(false);
  const [vatTyrosine, setvatTyrosine] = React.useState([]);
  const [modalValine, setModalValine] = React.useState(false);
  const [vatValine, setvatValine] = React.useState([]);
  const [modalCysteine, setModalCysteine] = React.useState(false);
  const [vatCysteine, setvatCysteine] = React.useState([]);


  const [modalFolate, setModalFolate] = React.useState(false);
  const [vatFolate, setvatFolate] = React.useState([]);
  const [modalCopper, setModalCopper] = React.useState(false);
  const [vatCopper, setvatCopper] = React.useState([]);
  const [modalManganese, setModalManganese] = React.useState(false);
  const [vatManganese, setvatManganese] = React.useState([]);
  const [modalNiacin, setModalNiacin] = React.useState(false);
  const [vatNiacin, setvatNiacin] = React.useState([]);
  const [modalPantothenic, setModalPantothenic] = React.useState(false);
  const [vatPantothenic, setvatPantothenic] = React.useState([]);
  const [modalPhosphorus, setModalPhosphorus] = React.useState(false);
  const [vatPhosphorus, setvatPhosphorus] = React.useState([]);
  const [modalPotassium, setModalPotassium] = React.useState(false);
  const [vatPotassium, setvatPotassium] = React.useState([]);
  const [modalRiboflavin, setModalRiboflavin] = React.useState(false);
  const [vatRiboflavin, setvatRiboflavin] = React.useState([]);
  const [modalSelenium, setModalSelenium] = React.useState(false);
  const [vatSelenium, setvatSelenium] = React.useState([]);
  const [modalSodium, setModalSodium] = React.useState(false);
  const [vatSodium, setvatSodium] = React.useState([]);
  const [modalVitaminD, setModalVitaminD] = React.useState(false);
  const [vatVitaminD, setvatVitaminD] = React.useState([]);
  const [modalVitaminE, setModalVitaminE] = React.useState(false);
  const [vatVitaminE, setvatVitaminE] = React.useState([]);
  const [modalVitaminK, setModalVitaminK] = React.useState(false);
  const [vatVitaminK, setvatVitaminK] = React.useState([]);



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
      setaminokislot(res.aminokislotes_contains);
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

      setvatCopper(res.norma_vitamin.Copper.contains);
      setvatFolate(res.norma_vitamin.Folate.contains);
      setvatManganese(res.norma_vitamin.Manganese.contains);
      setvatNiacin(res.norma_vitamin.Niacin.contains);
      setvatPantothenic(res.norma_vitamin.Pantothenic.contains);
      setvatPhosphorus(res.norma_vitamin.Phosphorus.contains);
      setvatPotassium(res.norma_vitamin.Potassium.contains);
      setvatRiboflavin(res.norma_vitamin.Riboflavin.contains);
      setvatSelenium(res.norma_vitamin.Selenium.contains);
      setvatSodium(res.norma_vitamin.Sodium.contains);
      setvatVitaminD(res.norma_vitamin.VitaminD.contains);
      setvatVitaminE(res.norma_vitamin.VitaminE.contains);
      setvatVitaminK(res.norma_vitamin.VitaminK.contains);

      setvatCysteine(res.aminokislotes_contains.Cysteine.contains);
      setvatHistidine(res.aminokislotes_contains.Histidine.contains);
      setvatIsoleucine(res.aminokislotes_contains.Isoleucine.contains);
      setvatLeucine(res.aminokislotes_contains.Leucine.contains);
      setvatLysine(res.aminokislotes_contains.Lysine.contains);
      setvatMethionine(res.aminokislotes_contains.Methionine.contains);
      setvatPhenylalanine(res.aminokislotes_contains.Phenylalanine.contains);
      setvatThreonine(res.aminokislotes_contains.Threonine.contains);
      setvatTryptophan(res.aminokislotes_contains.Tryptophan.contains);
      setvatTyrosine(res.aminokislotes_contains.Tyrosine.contains);
      setvatValine(res.aminokislotes_contains.Valine.contains);

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
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollArea_contentContainerStyle}>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <View style={styles.miniTitleRow}>
              <MiniTitle loremIpsum="Сводка" style={styles.miniTitle}></MiniTitle>
            </View>
            <View >

              <View >
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

                </View>
                <Text style={styles.SubHeadBefor}>
                  Витамины и нутриенты
                </Text>  
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



                            <TouchableOpacity onPress={() => setModalCopper(true)} >
                              <Parameters
                                text="Медь"
                                interest={vitamino.Copper ? vitamino.Copper.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalCopper}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalCopper(!modalCopper);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalCopper(!modalCopper)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Медь"
                                    interest={vitamino.Copper ? vitamino.Copper.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatCopper}
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
                                        Медь используется для создания клеток иммунной системы, которые борются с инфекциями и помогают защитить организм от свободных радикалов. Он также используется для производства коллагена в коже, костях и хрящах. Медь необходима для производства гемоглобина, молекулы, которая транспортирует кислород в красных кровяных тельцах.
                                        {"\n"}
                                        Источники {"\n"}
                                        Печень, устрицы, капуста, грибы, картофель.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>



                            <TouchableOpacity onPress={() => setModalFolate(true)} >
                              <Parameters
                                text="В9"
                                interest={vitamino.Folate ? vitamino.Folate.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalFolate}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalFolate(!modalFolate);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalFolate(!modalFolate)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="В9"
                                    interest={vitamino.Folate ? vitamino.Folate.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatFolate}
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
                                        Фолат, иногда называемый витамином В9 или фолацином, необходим для образования ДНК в новых клетках. Это наиболее очевидно в вашем теле, где постоянно образуются новые клетки, такие как лейкоциты в вашей иммунной системе, используемые для борьбы с инфекциями. По этой причине во время роста и беременности требуется больше фолиевой кислоты. Фолиевая кислота используется для производства эритроцитов, которые доставляют кислород к вашим клеткам.
                                        {"\n"}
                                        Добавочная форма фолиевой кислоты, называемая фолиевой кислотой, усваивается легче, чем фолиевая кислота, содержащаяся в продуктах питания. Фолиевая кислота будет присутствовать только в добавках и обогащенных продуктах.
                                        {"\n"}Источники{"\n"}
                                        Зеленые овощи, такие как эдамаме, спаржа, брюссельская капуста, шпинат; фасоль, чечевица, печень.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalManganese(true)} >
                              <Parameters
                                text="Марганец"
                                interest={vitamino.Manganese ? vitamino.Manganese.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalManganese}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalManganese(!modalManganese);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalManganese(!modalManganese)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Марганец"
                                    interest={vitamino.Manganese ? vitamino.Manganese.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatManganese}
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
                                        Марганец помогает формировать ваши кости, а также соединительную ткань, такую ​​как хрящ. Марганец участвует в метаболизме макроэлементов, углеводов, жиров и белков. Марганец помогает вашему телу детоксифицировать свободные радикалы в организме.
                                        {"\n"}Источники{"\n"}
                                        Печень, кофе, хлопья, коричневый рис, семена чиа, лебеда, кабачки, перец.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalNiacin(true)} >
                              <Parameters
                                text="Ниацин"
                                interest={vitamino.Niacin ? vitamino.Niacin.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalNiacin}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalNiacin(!modalNiacin);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalNiacin(!modalNiacin)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Ниацин"
                                    interest={vitamino.Niacin ? vitamino.Niacin.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatNiacin}
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
                                        Ниацин помогает вашему организму расщеплять углеводы, жиры, белки и кетоны.
                                        {"\n"}
                                        Ниацин также используется при производстве жирных кислот. Ниацин также может быть получен из аминокислоты триптофана. Таким образом, некоторая часть триптофана в продуктах, которые вы едите, засчитывается в вашу цель по ниацину.
                                        {"\n"}Источники{"\n"}
                                        Мясо, такое как говядина, свинина, курица, тунец; дрожжи, грибы.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>



                            <TouchableOpacity onPress={() => setModalPantothenic(true)} >
                              <Parameters
                                text="B5"
                                interest={vitamino.Pantothenic ? vitamino.Pantothenic.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalPantothenic}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalPantothenic(!modalPantothenic);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalPantothenic(!modalPantothenic)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="B5"
                                    interest={vitamino.Pantothenic ? vitamino.Pantothenic.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatPantothenic}
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
                                        B5 необходим для получения энергии из углеводов, жиров, белков и кетонов. Он необходим для образования новых жиров и их расщепления. B5 используется для производства некоторых гормонов, таких как мелатонин, гормон, участвующий в вашем цикле сна и бодрствования.
                                        {"\n"}Источники{"\n"}
                                        Печень, грибы, яйца, авокадо, брокколи, молоко.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalPhosphorus(true)} >
                              <Parameters
                                text="Фосфор"
                                interest={vitamino.Phosphorus ? vitamino.Phosphorus.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalPhosphorus}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalPhosphorus(!modalPhosphorus);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalPhosphorus(!modalPhosphorus)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Фосфор"
                                    interest={vitamino.Phosphorus ? vitamino.Phosphorus.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatPhosphorus}
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
                                        Фосфор работает с кальцием, чтобы обеспечить структуру ваших костей и зубов. Это помогает поддерживать баланс жидкости, а также кислотно-щелочной баланс в организме. Фосфор содержится в ДНК, клеточных мембранах, поэтому он необходим для роста и замены клеток и тканей.
                                        {"\n"}Источники{"\n"}
                                        Молоко, мясо и рыба.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalPotassium(true)} >
                              <Parameters
                                text="Калий"
                                interest={vitamino.Potassium ? vitamino.Potassium.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalPotassium}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalPotassium(!modalPotassium);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalPotassium(!modalPotassium)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Калий"
                                    interest={vitamino.Potassium ? vitamino.Potassium.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatPotassium}
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
                                        Калий является электролитом, который помогает поддерживать баланс жидкости, мышечные сокращения и передачу сигналов по нервам. Калий используется для поддержания стабильного сердечного ритма.
                                        {"\n"}
                                        Натрий и калий тесно связаны в вашем организме. Когда у вас высокое содержание натрия, почки работают над его удалением; это удаляет калий в то же время. Если уровень калия низкий, ваше тело пытается удержать его, а значит, и натрий. Поэтому вы можете следить за балансом питательных веществ калия: натрия в своем дневнике.
                                        {"\n"}Источники{"\n"}
                                        Свежие продукты — овощи, фрукты, молоко, мясо, зерновые, бобовые, такие как лимская фасоль, соевые бобы, белая фасоль.
                                        {"\n"}
                                        листовые зеленые овощи, такие как зелень свеклы, китайская капуста, мангольд, картофель, грибы.
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


                            <TouchableOpacity onPress={() => setModalRiboflavin(true)} >
                              <Parameters
                                text="B2"
                                interest={vitamino.Riboflavin ? vitamino.Riboflavin.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalRiboflavin}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalRiboflavin(!modalRiboflavin);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalRiboflavin(!modalRiboflavin)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="B2"
                                    interest={vitamino.Riboflavin ? vitamino.Riboflavin.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatRiboflavin}
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
                                        Рибофлавин помогает вашему телу использовать энергию, которую вы получаете из углеводов, жиров и белков. Рибофлавин также играет роль в защите ваших клеток от свободных радикалов. Свободные радикалы образуются, когда ваши клетки используют кислород, и могут нанести ущерб, если их не остановить.
                                        {"\n"}Источники{"\n"}
                                        Мясо, особенно субпродукты, такие как печень. Яйца, молоко, грибы.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalSelenium(true)} >
                              <Parameters
                                text="Селен"
                                interest={vitamino.Selenium ? vitamino.Selenium.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalSelenium}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalSelenium(!modalSelenium);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalSelenium(!modalSelenium)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Селен"
                                    interest={vitamino.Selenium ? vitamino.Selenium.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatSelenium}
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
                                        {"\n"}
                                        Селен участвует в вашей системе антиоксидантной защиты, чтобы предотвратить повреждение ваших клеток. Он помогает вырабатывать гормоны щитовидной железы, которые помогают регулировать рост, развитие, температуру тела и скорость метаболизма. Селен входит в состав белков и обнаруживается, что он связан с белками в вашей пище.
                                        {"\n"}Источники{"\n"}
                                        Мясо, такое как свинина, говядина, баранина, индейка и рыба, орехи, яйца, грибы.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalSodium(true)} >
                              <Parameters
                                text="Натрий"
                                interest={vitamino.Sodium ? vitamino.Sodium.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalSodium}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalSodium(!modalSodium);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalSodium(!modalSodium)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Натрий"
                                    interest={vitamino.Sodium ? vitamino.Sodium.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatSodium}
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

                                        Натрий работает с калием для поддержания водного и электролитного баланса. Натрий помогает транспортировать другие питательные вещества в клетку, сокращать мышцы и посылать сигналы по нервам.
                                        {"\n"}
                                        Около 10% натрия в вашем рационе естественным образом содержится в продуктах, которые вы едите, около 15% добавляется за столом, а остальное (75%) поступает из обработанных пищевых продуктов.
                                        {"\n"}Источники{"\n"}
                                        Соль, вяленая рыба и мясо, супы, заправки для салатов и соусы, соленья.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalVitaminD(true)} >
                              <Parameters
                                text="D"
                                interest={vitamino.VitaminD ? vitamino.VitaminD.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVitaminD}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVitaminD(!modalVitaminD);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVitaminD(!modalVitaminD)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="D"
                                    interest={vitamino.VitaminD ? vitamino.VitaminD.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatVitaminD}
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
                                        Витамин D также называют эргокальциферолом или холекальциферолом. Он помогает формировать и поддерживать кости, а также помогает усваивать другие питательные вещества, необходимые для построения костей: кальций и фосфор. Активная форма витамина D — это гормон, то есть он перемещается в крови к определенным клеткам, подобно посланнику, сигнализируя об изменениях в работе клеток и тканей.
                                        {"\n"}
                                        Вы можете сделать витамин D, когда ваша кожа подвергается воздействию солнечного света. Он по-прежнему необходим в рационе при недостатке доступа к солнцу. Солнечные лучи недостаточно сильны осенью-весной для тех, кто находится выше 35 ° северной широты и ниже 35 ° южной широты, чтобы вырабатывать витамин D, что делает это население более зависимым от пищевых источников.
                                        {"\n"}Источники{"\n"}
                                        Жирная рыба, такая как лосось, скумбрия и сардины, яичные желтки, витаминизированное молоко.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalVitaminE(true)} >
                              <Parameters
                                text="Е"
                                interest={vitamino.VitaminE ? vitamino.VitaminE.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVitaminE}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVitaminE(!modalVitaminE);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVitaminE(!modalVitaminE)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Е"
                                    interest={vitamino.VitaminE ? vitamino.VitaminE.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatVitaminE}
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
                                        Витамин Е, также известный как альфа-токоферол, является наиболее важным жирорастворимым антиоксидантом, который помогает защитить клетки и ткани от повреждения свободными кислородными радикалами, которые образуются, когда ваши клетки метаболизируют кислород.
                                        Источники
                                        Масличные семена и растительные масла, такие как зародыши пшеницы, семена подсолнечника, соевое и рапсовое масло, миндаль, красный перец, шпинат.{"\n"}
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>


                            <TouchableOpacity onPress={() => setModalVitaminK(true)} >
                              <Parameters
                                text="К"
                                interest={vitamino.VitaminK ? vitamino.VitaminK.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalVitaminK}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVitaminK(!modalVitaminK);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalVitaminK(!modalVitaminK)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="К"
                                    interest={vitamino.VitaminK ? vitamino.VitaminK.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatVitaminK}
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


                                        Витамин К необходим для свертывания крови и построения костей. Витамин К может вырабатываться бактериями в вашем кишечнике и способствует удовлетворению некоторых ваших ежедневных потребностей. Источники данных Cronometer сообщают о филлохиноне, также известном как витамин К1.
                                        {"\n"}Источники{"\n"}
                                        Кале, шпинат и другая листовая зелень, сладкий картофель, авокадо.
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

                </View>
                <Text style={styles.SubHeadBefor}>
                  Аминокислоты
                </Text>                            
                <View style={styles.info22}>
                  <View style={styles.reportCard22}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect29}>
                      <ImageBackground
                        style={styles.rect47}
                        imageStyle={styles.rect47_imageStyle}
                        source={require('../assets/images/Gradient_VsjgDoC.png')}>
                        <View style={styles.rect8}>
                          <View style={styles.group44}>


                            <TouchableOpacity onPress={() => setModalCysteine(true)} >
                              <Parameters
                                text="Цистин"
                                interest={aminokislot.Cysteine ? aminokislot.Cysteine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalCysteine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalCysteine(!modalCysteine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalCysteine(!modalCysteine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Цистин"
                                    interest={aminokislot.Cysteine ? aminokislot.Cysteine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatCysteine}
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

                                        Цистин — это форма цистеина, содержащаяся в пищевых продуктах. Цистеин может быть получен из аминокислоты метионина, поэтому он не нужен в рационе, если только метионина недостаточно для его производства.
                                        {"\n"}Источники{"\n"}
                                        Яйца, говядина, курица, свинина, соя, чечевица, йогурт.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalHistidine(true)} >
                              <Parameters
                                text="Гистидин"
                                interest={aminokislot.Histidine ? aminokislot.Histidine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalHistidine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalHistidine(!modalHistidine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalHistidine(!modalHistidine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Гистидин"
                                    interest={aminokislot.Histidine ? aminokislot.Histidine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatHistidine}
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
                                        Гистидин является незаменимой аминокислотой в вашем рационе, потому что ваше тело не может его вырабатывать. Гистидин используется для производства гистамина, гормона, ответственного за зуд, вызванный иммунным ответом. Гистидин также помогает сбалансировать кислотно-щелочной баланс крови.
                                        {"\n"}Источники{"\n"}
                                        Свинина, говядина, курица, лимская фасоль, соевые бобы.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalIsoleucine(true)} >
                              <Parameters
                                text="Изолейцин"
                                interest={aminokislot.Isoleucine ? aminokislot.Isoleucine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalIsoleucine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalIsoleucine(!modalIsoleucine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalIsoleucine(!modalIsoleucine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Изолейцин"
                                    interest={aminokislot.Isoleucine ? aminokislot.Isoleucine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatIsoleucine}
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
                                        Изолейцин является незаменимой аминокислотой с разветвленной цепью (BCAA). BCAA используются для наращивания и поддержания мышц.
                                        {"\n"}Источники{"\n"}
                                        Яйца, мясо и рыба, соевый белок, бобовые, тофу, мангольд.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalLeucine(true)} >
                              <Parameters
                                text="Лейцин"
                                interest={aminokislot.Leucine ? aminokislot.Leucine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalLeucine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalLeucine(!modalLeucine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalLeucine(!modalLeucine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Лейцин"
                                    interest={aminokislot.Leucine ? aminokislot.Leucine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatLeucine}
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
                                        Лейцин является незаменимой аминокислотой с разветвленной цепью (BCAA). BCAA используются для наращивания и поддержания мышц.
                                        {"\n"}Источники{"\n"}
                                        Соевый белок, говядина, рыба и свинина, яйца, бобовые, листовая зелень.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalLysine(true)} >
                              <Parameters
                                text="Лизин"
                                interest={aminokislot.Lysine ? aminokislot.Lysine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalLysine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalLysine(!modalLysine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalLysine(!modalLysine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Лизин"
                                    interest={aminokislot.Lysine ? aminokislot.Lysine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatLysine}
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
                                        Лизин — это незаменимая аминокислота, используемая для создания белков, которые вы должны получать из своего рациона.
                                        {"\n"}Источники{"\n"}
                                        Мясо и рыба, бобовые, такие как соя, морская фасоль, горох, чечевица, тофу.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setModalMethionine(true)} >
                              <Parameters
                                text="Метионин"
                                interest={aminokislot.Methionine ? aminokislot.Methionine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalMethionine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalMethionine(!modalMethionine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalMethionine(!modalMethionine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Метионин"
                                    interest={aminokislot.Methionine ? aminokislot.Methionine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatMethionine}
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
                                        Метионин является незаменимой аминокислотой, которая используется для производства аминокислоты цистеина.
                                        {"\n"}Источники{"\n"}
                                        Говядина, яйца, рыба, семена кунжута, водоросли, фасоль.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>

                          </View>
                          <View style={styles.group55}>
                            <TouchableOpacity onPress={() => setModalPhenylalanine(true)} >
                              <Parameters
                                text="Фенилаланин"
                                interest={aminokislot.Phenylalanine ? aminokislot.Phenylalanine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalPhenylalanine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalPhenylalanine(!modalPhenylalanine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalPhenylalanine(!modalPhenylalanine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Фенилаланин"
                                    interest={aminokislot.Phenylalanine ? aminokislot.Phenylalanine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatPhenylalanine}
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
                                        Фенилаланин является незаменимой аминокислотой и используется для производства аминокислоты тирозина.
                                        {"\n"}Источники{"\n"}
                                        Говядина, свинина, оленина и другое мясо, яйца, фасоль, чечевица, тофу.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalThreonine(true)} >
                              <Parameters
                                text="Треонин"
                                interest={aminokislot.Threonine ? aminokislot.Threonine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalThreonine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalThreonine(!modalThreonine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalThreonine(!modalThreonine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Треонин"
                                    interest={aminokislot.Threonine ? aminokislot.Threonine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatThreonine}
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
                                        Треонин — это незаменимая аминокислота, используемая для создания белков, которые вы должны получать из своего рациона.
                                        {"\n"}Источники{"\n"}
                                        Говядина, курица, рыба и другое мясо, водоросли, кресс-салат, шпинат, фасоль.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalTryptophan(true)} >
                              <Parameters
                                text="Триптофан"
                                interest={aminokislot.Tryptophan ? aminokislot.Tryptophan.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalTryptophan}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalTryptophan(!modalTryptophan);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalTryptophan(!modalTryptophan)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Триптофан"
                                    interest={aminokislot.Tryptophan ? aminokislot.Tryptophan.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatTryptophan}
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

                                        Триптофан — незаменимая аминокислота, которую вы должны получать из своего рациона. Он используется для производства гормонов серотонина и мелатонина.
                                        {"\n"}Источники{"\n"}
                                        Мясо, рыба и морепродукты, яйца, соя, водоросли, шпинат, бобы, тофу.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalTyrosine(true)} >
                              <Parameters
                                text="Тирозин"
                                interest={aminokislot.Tyrosine ? aminokislot.Tyrosine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalTyrosine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalTyrosine(!modalTyrosine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalTyrosine(!modalTyrosine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Тирозин"
                                    interest={aminokislot.Tyrosine ? aminokislot.Tyrosine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatTyrosine}
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
                                        Тирозин может быть получен из фенилаланина, поэтому обычно он не является незаменимым. Однако, если в вашем рационе недостаточно фенилаланина, то вы не сможете производить достаточно тирозина для удовлетворения своих потребностей, и вам нужно будет получать тирозин из продуктов. Тирозин используется для выработки гормонов надпочечниками, таких как дофамин и адреналин, которые помогают регулировать концентрацию, движение, частоту сердечных сокращений и вашу эмоциональную реакцию.
                                        {"\n"}Источники{"\n"}
                                        Свинина, курица, рыба и другое мясо, соя, фасоль, шпинат.
                                      </Text>
                                    </View>
                                  </ScrollView>
                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity onPress={() => setModalValine(true)} >
                              <Parameters
                                text="Валин"
                                interest={aminokislot.Valine ? aminokislot.Valine.percents_today + "%" : '0%'}
                                style={styles.parameters6}></Parameters>
                            </TouchableOpacity>
                            <Modal
                              style={styles.modBackgr}
                              animationType="fade"
                              transparent={true}
                              visible={modalValine}
                              onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalValine(!modalValine);
                              }}
                            >
                              <View style={styles.modBackgr}>
                                <View style={styles.modalStyle}>
                                  <TouchableOpacity
                                    style={[styles.buttonCloseModal]}
                                    onPress={() => setModalValine(!modalValine)}
                                  >
                                    <MaterialCommunityIconsIcon
                                      name="close"
                                      style={styles.iconClosesModal}
                                    ></MaterialCommunityIconsIcon>
                                  </TouchableOpacity>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <Parameters
                                    text="Валин"
                                    interest={aminokislot.Valine ? aminokislot.Valine.percents_today + "%" : '0%'}
                                    style={styles.parameters6}></Parameters>
                                  <View style={styles.mrgn} >
                                  </View>
                                  <View style={styles.productsModal} >
                                    <FlatList
                                      data={vatValine}
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
                                        Валин — незаменимая аминокислота с разветвленной цепью (BCAA). BCAA используются для наращивания и поддержания мышц.
                                        {"\n"}Источники{"\n"}
                                        Говядина, рыба, индейка и другое мясо, яйца, водоросли, фасоль, грибы, соя.
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

                </View>

                <Text style={styles.SubHeadBefor}>
                  Дополнительные параметры
                </Text>  
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

                </View>
              </View>

            </View>


          </View>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <View style={styles.rect1}>
          <Backbutton style={styles.backbutton1}></Backbutton>
          <Bold dates={datefilter} style={styles.bold}></Bold>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SubHeadBefor:{
    paddingLeft:15,
    fontSize:14,
    color:'black'
  },  
  backbutton1: {
    height: 27,
    width: 26,
    marginTop: 15,
    marginLeft: 15
  },

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
    height: Dimensions.get('window').height + 50,
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

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rect4: {
    top: 0,




  },
  miniTitle: {


    textAlign: 'center',
    marginBottom: 20
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
    justifyContent: 'center',

  },
  scrollArea: {

    marginTop: 6,

  },
  scrollArea_contentContainerStyle: {



  },
  info1: {
    width: Dimensions.get('window').width,
    height:206,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    margin: 0,
    padding: 0

  },
  reportCard1: {
    width: Dimensions.get('window').width - 30,
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
    height: 390,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    margin: 0,
    padding: 0

  },
  info22: {
    width: Dimensions.get('window').width,
    height: 280,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    margin: 0,
    padding: 0

  },
  reportCard2: {
    width: Dimensions.get('window').width - 30,
    height: 360,

  },
  reportCard22: {
    width: Dimensions.get('window').width - 30,
    height: 250,

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
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  group4: {
    width: 140,
    justifyContent: 'space-between',
    height: 330,
  },
  group44: {
    width: 140,
    justifyContent: 'space-between',
    height: 225,
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
    height: 330,
  },
  group55: {
    width: 140,
    justifyContent: 'space-between',
    height: 225,
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
    height: 206,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    margin: 0,
    padding: 0


  },
  reportCard3: {
    width: Dimensions.get('window').width - 30,
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
    justifyContent: 'space-between'
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
    marginTop: 14,
    opacity: 0.7,
    width: Dimensions.get('window').width - 60,

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

export default MainDetails;
