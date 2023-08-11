import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  Dimensions
} from "react-native";
import MiniTitle from "../components/MiniTitle";
import Button from "../components/Button";
import ColorBold from "../components/ColorBold";
import ColorBoldMax from "../components/ColorBoldMax";
import Parameters from "../components/Parameters";
import NutritionTitle from "../components/NutritionTitle";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Bold from "../components/Bold";

function MainFirst(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <View style={styles.rect4Column}>
        <View style={styles.rect4}>
          <View style={styles.miniTitleRow}>
            <MiniTitle loremIpsum="Сводка" style={styles.miniTitle}></MiniTitle>
            <Button buttonText="ПОДРОБНЕЕ" style={styles.button}></Button>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.info1Row}>
                <View style={styles.info1}>
                  <View style={styles.reportCard1}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect27}
                    >
                      <ImageBackground
                        style={styles.rect46}
                        imageStyle={styles.rect46_imageStyle}
                        source={require("../assets/images/Gradient_VsjgDoC.png")}
                      >
                        <View style={styles.kcal1Row}>
                          <View style={styles.kcal1}>
                            <ColorBold
                              loremIpsum="0"
                              style={styles.colorBold7}
                            ></ColorBold>
                            <Text style={styles.infoColor}>ккал</Text>
                            <Text style={styles.infoText2}>Съедено</Text>
                          </View>
                          <View style={styles.kcalMain}>
                            <ImageBackground
                              source={require("../assets/images/circle_1.png")}
                              resizeMode="contain"
                              style={styles.image6}
                              imageStyle={styles.image6_imageStyle}
                            >
                              <ColorBoldMax
                                loremIpsum="0"
                                style={styles.colorBoldMax1}
                              ></ColorBoldMax>
                              <Text style={styles.infoColor1}>ккал</Text>
                            </ImageBackground>
                            <Text style={styles.infoText}>Осталось</Text>
                          </View>
                          <View style={styles.kcal2}>
                            <ColorBold
                              loremIpsum="0"
                              style={styles.colorBold6}
                            ></ColorBold>
                            <Text style={styles.infoColor3}>ккал</Text>
                            <Text style={styles.infoText1}>Сожжено</Text>
                          </View>
                        </View>
                        <View style={styles.interestIndicator}>
                          <Parameters
                            loremIpsum2="41%"
                            loremIpsum1="Lorem Ipsum"
                            text="Углеводы"
                            interest="0%"
                            style={styles.parameters}
                          ></Parameters>
                          <Parameters
                            text="Белки"
                            interest="0%"
                            style={styles.parameters2}
                          ></Parameters>
                          <Parameters
                            interest="0%"
                            text="Жиры"
                            style={styles.parameters3}
                          ></Parameters>
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
                            backgroundColor: props.dot1 || "rgba(232,143,120,1)"
                          }
                        ]}
                      ></View>
                      <View
                        style={[
                          styles.dot3,
                          {
                            backgroundColor: props.dot1 || "rgba(255,255,255,1)"
                          }
                        ]}
                      ></View>
                      <View style={styles.dot1}></View>
                    </View>
                  </View>
                </View>
                <View style={styles.info2}>
                  <View style={styles.reportCard2}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect29}
                    >
                      <ImageBackground
                        style={styles.rect47}
                        imageStyle={styles.rect47_imageStyle}
                        source={require("../assets/images/Gradient_VsjgDoC.png")}
                      >
                        <View style={styles.rect8}>
                          <View style={styles.group4}>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Витамин А"
                              interest="0%"
                              style={styles.parameters1}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Витамин С"
                              interest="0%"
                              style={styles.parameters4}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="B2"
                              interest="0%"
                              style={styles.parameters5}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="B12"
                              interest="0%"
                              style={styles.parameters6}
                            ></Parameters>
                          </View>
                          <View style={styles.group5}>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Железо"
                              interest="0%"
                              style={styles.parameters7}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Кальций"
                              interest="0%"
                              style={styles.parameters8}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Магний"
                              interest="0%"
                              style={styles.parameters9}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Цинк"
                              interest="0%"
                              style={styles.parameters10}
                            ></Parameters>
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
                            backgroundColor: props.dot1 || "rgba(255,255,255,1)"
                          }
                        ]}
                      ></View>
                      <View
                        style={[
                          styles.rect12,
                          {
                            backgroundColor: props.dot1 || "rgba(232,143,120,1)"
                          }
                        ]}
                      ></View>
                      <View style={styles.rect10}></View>
                    </View>
                  </View>
                </View>
                <View style={styles.info3}>
                  <View style={styles.reportCard3}>
                    <View
                      gradientImage="Gradient_VsjgDoC.png"
                      style={styles.rect31}
                    >
                      <ImageBackground
                        style={styles.rect48}
                        imageStyle={styles.rect48_imageStyle}
                        source={require("../assets/images/Gradient_VsjgDoC.png")}
                      >
                        <View style={styles.rect17}>
                          <View style={styles.rect18}>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Нормы Аминокислот"
                              interest="0%"
                              style={styles.parameters11}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Гликемическая нагрузка"
                              interest="0%"
                              style={styles.parameters12}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="Инсулиновый индекс ЯЯ"
                              interest="0%"
                              style={styles.parameters13}
                            ></Parameters>
                            <Parameters
                              loremIpsum2="41%"
                              loremIpsum1="Lorem Ipsum"
                              text="pH (кислотность)"
                              interest="0%"
                              style={styles.parameters14}
                            ></Parameters>
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
                            backgroundColor: props.dot1 || "rgba(255,255,255,1)"
                          }
                        ]}
                      ></View>
                      <View
                        style={[
                          styles.rect23,
                          {
                            backgroundColor: props.dot1 || "rgba(255,255,255,1)"
                          }
                        ]}
                      ></View>
                      <View style={styles.rect21}></View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.miniTitle1Row}>
            <MiniTitle
              loremIpsum="Lorem Ipsum"
              loremIpsum="Измерения тела"
              style={styles.miniTitle1}
            ></MiniTitle>
            <Button buttonText="БОЛЬШЕ" style={styles.button1}></Button>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.card}>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect34}>
                <ImageBackground
                  style={styles.rect33}
                  imageStyle={styles.rect33_imageStyle}
                  source={require("../assets/images/Gradient_VsjgDoC.png")}
                >
                  <NutritionTitle
                    text="Завтрак"
                    style={styles.nutritionTitle}
                  ></NutritionTitle>
                  <View style={styles.rect49}>
                    <MaterialCommunityIconsIcon
                      name="plus"
                      style={styles.icon8}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.cardFiller}></View>
            <View style={styles.card2}>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect35}>
                <ImageBackground
                  style={styles.rect43}
                  imageStyle={styles.rect43_imageStyle}
                  source={require("../assets/images/Gradient_VsjgDoC.png")}
                >
                  <NutritionTitle
                    text="Обед"
                    style={styles.nutritionTitle2}
                  ></NutritionTitle>
                  <View style={styles.rect50}>
                    <MaterialCommunityIconsIcon
                      name="plus"
                      style={styles.icon9}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={styles.group2Row}>
            <View style={styles.group2}>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect37}>
                <ImageBackground
                  style={styles.rect44}
                  imageStyle={styles.rect44_imageStyle}
                  source={require("../assets/images/Gradient_VsjgDoC.png")}
                >
                  <NutritionTitle
                    text="Ужин"
                    style={styles.nutritionTitle3}
                  ></NutritionTitle>
                  <View style={styles.rect51}>
                    <MaterialCommunityIconsIcon
                      name="plus"
                      style={styles.icon10}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.group2Filler}></View>
            <View style={styles.group3}>
              <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect39}>
                <ImageBackground
                  style={styles.rect45}
                  imageStyle={styles.rect45_imageStyle}
                  source={require("../assets/images/Gradient_VsjgDoC.png")}
                >
                  <NutritionTitle
                    text="Перекус / другое"
                    style={styles.nutritionTitle4}
                  ></NutritionTitle>
                  <View style={styles.rect52}>
                    <MaterialCommunityIconsIcon
                      name="plus"
                      style={styles.icon11}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={styles.miniTitle2Row}>
            <MiniTitle
              loremIpsum="Измерения тела"
              style={styles.miniTitle2}
            ></MiniTitle>
            <Button buttonText="БОЛЬШЕ" style={styles.button2}></Button>
          </View>
          <View style={styles.weight}>
            <View gradientImage="Gradient_VsjgDoC.png" style={styles.rect41}>
              <ImageBackground
                style={styles.rect42}
                imageStyle={styles.rect42_imageStyle}
                source={require("../assets/images/Gradient_VsjgDoC.png")}
              >
                <View style={styles.image5Row}>
                  <Image
                    source={require("../assets/images/weight.png")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                  <Text style={styles.text}>Ваш идеальный вес: 75 кг</Text>
                </View>
                <View style={styles.image5RowFiller}></View>
                <ColorBoldMax
                  loremIpsum="78.8 кг"
                  style={styles.colorBoldMax}
                ></ColorBoldMax>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect4ColumnFiller}></View>
      <View style={styles.header}>
        <View style={styles.rect1}>
          <View style={styles.group6Row}>
            <View style={styles.group6}>
              <MaterialCommunityIconsIcon
                name="menu"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.data}>
              <View style={styles.boldRow}>
                <Bold style={styles.bold}></Bold>
                <MaterialCommunityIconsIcon
                  name="menu-down"
                  style={styles.icon4}
                ></MaterialCommunityIconsIcon>
              </View>
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
                  style={styles.icon}
                ></MaterialCommunityIconsIcon>
              </View>
            </View>
          </View>
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
  rect4: {
    height: 592,
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16
  },
  miniTitle: {
    height: 17,
    flex: 1,
    marginRight: 115,
    marginTop: 7
  },
  button: {
    height: 32
  },
  miniTitleRow: {
    height: 32,
    flexDirection: "row"
  },
  scrollArea: {
    height: 202,
    marginTop: 6,
    marginLeft: -16,
    marginRight: -16
  },
  scrollArea_contentContainerStyle: {
    width: 1052,
    height: 202,
    flexDirection: "row"
  },
  info1: {
    width: 328,
    height: 202
  },
  reportCard1: {
    width: 328,
    height: 176
  },
  rect27: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect46: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect46_imageStyle: {},
  kcal1: {
    height: 57,
    marginTop: 37
  },
  colorBold7: {
    height: 17
  },
  infoColor: {
    fontFamily: "roboto-regular",
    color: "rgba(232,143,120,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 6
  },
  infoText2: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 8
  },
  kcalMain: {
    width: 104,
    height: 94,
    marginLeft: 43
  },
  image6: {
    height: 80
  },
  image6_imageStyle: {},
  colorBoldMax1: {
    height: 30,
    marginTop: 29
  },
  infoColor1: {
    fontFamily: "roboto-regular",
    color: "rgba(232,143,120,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 1
  },
  infoText: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 1
  },
  kcal2: {
    width: 52,
    height: 57,
    marginLeft: 38,
    marginTop: 37
  },
  colorBold6: {
    height: 17
  },
  infoColor3: {
    fontFamily: "roboto-regular",
    color: "rgba(232,143,120,1)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 6
  },
  infoText1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 10,
    textAlign: "center",
    marginTop: 8
  },
  kcal1Row: {
    height: 94,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 28,
    marginRight: 22
  },
  interestIndicator: {
    height: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
    marginLeft: 16,
    marginRight: 16
  },
  parameters: {
    alignSelf: "stretch",
    width: 88
  },
  parameters2: {
    alignSelf: "stretch",
    width: 88
  },
  parameters3: {
    alignSelf: "stretch",
    width: 88
  },
  slider: {
    height: 8,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 144,
    marginRight: 144
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 8
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 8
  },
  dot5Row: {
    height: 8,
    flexDirection: "row",
    flex: 1
  },
  info2: {
    width: 328,
    height: 202,
    marginLeft: 17
  },
  reportCard2: {
    width: 328,
    height: 176,
    alignSelf: "center"
  },
  rect29: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect47: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect47_imageStyle: {},
  rect8: {
    height: 145,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  group4: {
    width: 140,
    justifyContent: "space-between",
    height: 145
  },
  parameters1: {
    alignSelf: "stretch",
    height: 23
  },
  parameters4: {
    alignSelf: "stretch",
    height: 23
  },
  parameters5: {
    alignSelf: "stretch",
    height: 23
  },
  parameters6: {
    alignSelf: "stretch",
    height: 23
  },
  group5: {
    width: 140,
    justifyContent: "space-between",
    height: 145
  },
  parameters7: {
    alignSelf: "stretch",
    height: 23
  },
  parameters8: {
    alignSelf: "stretch",
    height: 23
  },
  parameters9: {
    alignSelf: "stretch",
    height: 23
  },
  parameters10: {
    alignSelf: "stretch",
    height: 23
  },
  slider1: {
    height: 8,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 144,
    marginRight: 144
  },
  rect14: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  rect12: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginLeft: 8
  },
  rect10: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 8
  },
  rect14Row: {
    height: 8,
    flexDirection: "row",
    flex: 1
  },
  info3: {
    width: 328,
    height: 202,
    marginLeft: 15
  },
  reportCard3: {
    width: 328,
    height: 176,
    alignSelf: "center"
  },
  rect31: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect48: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect48_imageStyle: {},
  rect17: {
    height: 145,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  rect18: {
    justifyContent: "space-between",
    height: 145,
    flex: 1
  },
  parameters11: {
    alignSelf: "stretch",
    height: 23
  },
  parameters12: {
    alignSelf: "stretch",
    height: 23
  },
  parameters13: {
    alignSelf: "stretch",
    height: 23
  },
  parameters14: {
    alignSelf: "stretch",
    height: 23
  },
  slider2: {
    height: 8,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 144,
    marginRight: 144
  },
  rect25: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  rect23: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 8
  },
  rect21: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "rgba(232,143,120,1)",
    marginLeft: 8
  },
  rect25Row: {
    height: 8,
    flexDirection: "row",
    flex: 1
  },
  info1Row: {
    height: 202,
    flexDirection: "row",
    flex: 1,
    marginRight: -672,
    marginLeft: 16
  },
  miniTitle1: {
    height: 17,
    flex: 1,
    marginRight: 132,
    marginTop: 8
  },
  button1: {
    height: 32,
    width: 65
  },
  miniTitle1Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 15
  },
  card: {
    width: Dimensions.get('window').width / 2 - 25,
    height: 88
  },
  rect34: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect33: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect33_imageStyle: {},
  nutritionTitle: {
    height: 17,
    marginTop: 7
  },
  rect49: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(232,143,120,1)",
    marginTop: 11,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  icon8: {
    color: "rgba(232,143,120,1)",
    fontSize: 24,
    height: 26,
    width: 24,
    marginTop: 7,
    marginLeft: 8
  },
  cardFiller: {
    flex: 1,
    flexDirection: "row"
  },
  card2: {
    height: 88,
    width: Dimensions.get('window').width / 2 - 25
  },
  rect35: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect43: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect43_imageStyle: {},
  nutritionTitle2: {
    height: 17,
    marginTop: 7
  },
  rect50: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(232,143,120,1)",
    marginTop: 11,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  icon9: {
    color: "rgba(232,143,120,1)",
    fontSize: 24,
    height: 26,
    width: 24,
    marginTop: 7,
    alignSelf: "center"
  },
  cardRow: {
    height: 88,
    flexDirection: "row",
    marginTop: 8
  },
  group2: {
    width: Dimensions.get('window').width / 2 - 25,
    height: 88
  },
  rect37: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect44: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect44_imageStyle: {},
  nutritionTitle3: {
    height: 17,
    marginTop: 7
  },
  rect51: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(232,143,120,1)",
    marginTop: 11,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  icon10: {
    color: "rgba(232,143,120,1)",
    fontSize: 24,
    height: 26,
    width: 24,
    marginTop: 7,
    alignSelf: "center"
  },
  group2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  group3: {
    height: 88,
    width: Dimensions.get('window').width / 2 - 25
  },
  rect39: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  rect45: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flex: 1,
    overflow: "hidden"
  },
  rect45_imageStyle: {},
  nutritionTitle4: {
    height: 17,
    marginTop: 7
  },
  rect52: {
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    width: 40,
    borderColor: "rgba(232,143,120,1)",
    marginTop: 11,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  icon11: {
    color: "rgba(232,143,120,1)",
    fontSize: 24,
    height: 26,
    width: 24,
    marginTop: 7,
    alignSelf: "center"
  },
  group2Row: {
    height: 88,
    flexDirection: "row",
    marginTop: 8
  },
  miniTitle2: {
    height: 17,
    flex: 1,
    marginRight: 109,
    marginTop: 8
  },
  button2: {
    height: 32,
    width: 65
  },
  miniTitle2Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 16
  },
  weight: {
    height: 56,
    marginTop: 9
  },
  rect41: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 3,
    shadowOpacity: 0.12,
    shadowRadius: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    marginBottom: 1,
    marginTop: -1
  },
  rect42: {
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 9,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: "row",
    flex: 1,
    overflow: "hidden"
  },
  rect42_imageStyle: {},
  image5: {
    width: 48,
    height: 48
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 10,
    textAlign: "left",
    marginLeft: 20,
    marginTop: 18
  },
  image5Row: {
    height: 48,
    flexDirection: "row",
    marginLeft: 9,
    marginTop: 5
  },
  image5RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  colorBoldMax: {
    height: 29,
    width: 87,
    marginRight: 8,
    marginTop: 15
  },
  header: {
    position: 'absolute',
    height: 56,
    top: 0,
    left: 0,
    width: Dimensions.get('window').width

  },
  rect1: {
    height: 56,
    backgroundColor: "rgba(245,207,178,1)",
    flexDirection: "row"
  },
  group6: {
    width: 40,
    height: 60,
    marginLeft: 10,
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  icon2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 40,
    height: 43,
    alignSelf: "center"
  },
  data: {
    width: 128,
    height: 43,
    flexDirection: "row",
    marginLeft: 24
  },
  bold: {
    height: 24,
    marginTop: 7,
    opacity: 0.7
  },
  icon4: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 30,
    marginLeft: 0,
    marginTop: 6
  },
  boldRow: {
    height: 43,
    flexDirection: "row",
    flex: 1
  },
  group6Row: {
    height: 43,
    flexDirection: "row",
    marginLeft: 8,
    marginTop: 6
  },
  group6RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group: {
    width: 27,
    height: 28,
    flexDirection: "row",
    marginRight: 13,
    marginTop: 12
  },
  rect2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect2: {
    width: 27,
    height: 28,
    backgroundColor: "rgba(255,255,255,0)"
  },
  rect3: {
    width: 8,
    height: 8,
    position: "absolute",
    backgroundColor: "rgba(232,143,120,1)",
    top: 0,
    right: 0,
    borderRadius: 100
  },
  icon: {
    top: 2,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    right: 3,
    bottom: 0,
    height: 26,
    width: 24
  },
  rect3Stack: {
    flex: 1
  },
  rect4Column: {},
  rect4ColumnFiller: {
    flex: 1
  },
  footer: {
    backgroundColor: "rgba(245,207,178,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 4,
      width: 0
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    height: 56,
    width: Dimensions.get('window').width,
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center"
  },
  mainTab: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 3 - 10,
  },
  tabName: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    textAlign: "center",
    fontSize: 12,
    marginLeft: 0
  },
  icon5: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    marginTop: 8,
    marginLeft: 48
  },
  tabNameFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  diaryTab: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 3 - 10,
  },
  tabName1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,0.74)",
    textAlign: "center",
    fontSize: 12,
    marginLeft: 0
  },
  icon6: {
    color: "rgba(255,255,255,0.74)",
    fontSize: 24,
    marginTop: 8,
    marginLeft: 48
  },
  tabName1Filler: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  recomTab: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 3 - 10,
  },
  icon7: {
    color: "rgba(255,255,255,0.74)",
    fontSize: 24,
    marginLeft: 48,
    marginTop: 8
  },
  tabName2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,0.74)",
    textAlign: "center",
    fontSize: 12,
    marginLeft: 0
  },
  mainTabRow: {
    height: 56,
    flexDirection: "row",
    flex: 1
  }
});

export default MainFirst;
