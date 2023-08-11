import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  Text,
  Dimensions,
  FlatList
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MiniTitle from "../components/MiniTitle";

function ProductLast({ route, navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header1}>
        <View style={styles.rect1}>
          <View style={styles.icon1Row}>
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.icon1}
            ></MaterialCommunityIconsIcon>
            <View style={styles.search}>
              <View style={styles.rect16}>
                <View style={styles.icon9Row}>
                  <MaterialCommunityIconsIcon
                    name="magnify"
                    style={styles.icon9}
                  ></MaterialCommunityIconsIcon>
                  <TextInput
                    placeholder="Введите продукт"
                    placeholderTextColor="rgba(0,0,0,0.6)"
                    style={styles.placeholder}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.icon1RowFiller}></View>
          <MaterialCommunityIconsIcon
            name="check"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
      <MiniTitle loremIpsum="Последние" style={styles.miniTitle1}></MiniTitle>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.group1Stack}>
            <View style={styles.group1}></View>
            <View style={styles.group10}>
              <View style={styles.textRow}>
                <Text style={styles.text}>Кофе с молоком</Text>
                <Text style={styles.gram1}>150 г</Text>
                <Text style={styles.kkal1}>28 ккал</Text>
                <MaterialCommunityIconsIcon
                  name="plus-circle-outline"
                  style={styles.icon3}
                ></MaterialCommunityIconsIcon>
              </View>
              <View style={styles.rect2}></View>
            </View>
          </View>
          <View style={styles.group11}>
            <View style={styles.text1Row}>
              <Text style={styles.text1}>Борщь с говядиной</Text>
              <Text style={styles.text18}>100 г</Text>
              <Text style={styles.text19}>50 ккал</Text>
              <MaterialCommunityIconsIcon
                name="plus-circle-outline"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.rect11}></View>
          </View>
          <View style={styles.group12}>
            <View style={styles.text2Row}>
              <Text style={styles.text2}>Ржаной хлеб</Text>
              <View style={styles.text20Stack}>
                <Text style={styles.text20}>1 кусочек</Text>
                <Text style={styles.text21}>83 ккал</Text>
              </View>
              <MaterialCommunityIconsIcon
                name="plus-circle-outline"
                style={styles.icon5}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.rect12}></View>
          </View>
          <View style={styles.group13}>
            <View style={styles.text3Row}>
              <Text style={styles.text3}>Помидор</Text>
              <Text style={styles.text22}>100 г</Text>
              <Text style={styles.text23}>20 ккал</Text>
              <MaterialCommunityIconsIcon
                name="plus-circle-outline"
                style={styles.icon6}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.rect13}></View>
          </View>
          <View style={styles.group14}>
            <View style={styles.text4Row}>
              <Text style={styles.text4}>Огурец</Text>
              <Text style={styles.text24}>1 шт.</Text>
              <Text style={styles.text25}>45 ккал</Text>
              <MaterialCommunityIconsIcon
                name="plus-circle-outline"
                style={styles.icon7}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.rect14}></View>
          </View>
          <View style={styles.group15}>
            <View style={styles.text5Row}>
              <Text style={styles.text5}>Сырники</Text>
              <Text style={styles.text26}>100 г</Text>
              <Text style={styles.text27}>64 ккал</Text>
              <MaterialCommunityIconsIcon
                name="plus-circle-outline"
                style={styles.icon8}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.rect15}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  header1: {
    height: 56
  },
  rect1: {
    height: 56,
    backgroundColor: "rgba(245,207,178,1)",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginTop: 5
  },
  search: {
    width: 240,
    height: 40,
    marginLeft: 7
  },
  rect16: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: -2,
    marginBottom: 2,
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
    width: 193,
    marginLeft: 4
  },
  icon9Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 10
  },
  icon1Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 10
  },
  icon1RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginRight: 16,
    marginTop: 15
  },
  miniTitle1: {
    height: 17,
    marginTop: 18,
    marginLeft: 16,
    marginRight: 190
  },
  scrollArea1: {
    height: Dimensions.get('window').height - 130,
    marginTop: 22,
    marginLeft: 16,
    marginRight: 16
  },
  scrollArea1_contentContainerStyle: {
  },
  group1: {
    top: 0,
    left: 0,
    height: 18,
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
  text: {
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
  textRow: {
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
  text1: {
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
  text1Row: {
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
  text2: {
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
  text2Row: {
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
  text4: {
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
  text4Row: {
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
  }
});

export default ProductLast;
