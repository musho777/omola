import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image, Dimensions,  TouchableOpacity, ScrollView} from "react-native";
import Title from "../components/Title";
import MainButton from "../components/MainButton";
import Button from "../components/Button";

import { useNavigation } from '@react-navigation/native';

function OpenSlider1(props) {

  const navigation2 = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <ScrollView
  //horizontal={true}
  //contentContainerStyle={{ width: `${100}%` }}
  //showsHorizontalScrollIndicator={false}
  scrollEventThrottle={200}
  decelerationRate="fast"
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  horizontal={true}
  contentContainerStyle={styles.scrollArea_contentContainerStyle}
  >
    <View style={styles.OwlItem}>
      <Title loremIpsum='Ешь умнее,' loremIpsum2='живи лучше.' style={styles.title}></Title>
      <Text style={styles.text}>
        Узнайте о своем питании с помощью самых точных данных из проверенных
        источников
      </Text>
      <View style={styles.slider}>
        <View style={styles.dot5Row}>
          <View
            style={[
              styles.dot5,
              {
                backgroundColor: props.dot1 || "#c8b5a6"
              }
            ]}
          ></View>
          <View
            style={[
              styles.dot4,
              {
                backgroundColor: props.dot1 || "rgba(255,255,255,1)"
              }
            ]}
          >
            <View
              style={[
                styles.dot3,
                {
                  backgroundColor: props.dot1_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
          <View style={styles.dot2}>
            <View
              style={[
                styles.dot1,
                {
                  backgroundColor: props.dot2_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
        </View>
      </View>
      <TouchableOpacity  onPress={() => navigation2.navigate('RegistScreen')} >
      <MainButton  style={styles.mainButton}></MainButton></TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation2.navigate('LoginScreen')} >
        <Button style={styles.button}></Button>
        </TouchableOpacity>
      <Image
        source={require("../assets/images/picSlider16.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
    
    <View style={styles.OwlItem}>
    <Title
        loremIpsum="Следите за своим рационом"
        style={styles2.title}
      ></Title>
      <Text style={styles2.text}>
        Легко отслеживайте свое питание и калории из нашей полной и точной базы
        данных
      </Text>
      <View style={styles2.slider}>
        <View style={styles2.dot5Row}>
          <View
            style={[
              styles2.dot2,
              {
                backgroundColor: props.dot1_active || "rgba(232,143,120,0)"
              }
            ]}
          ></View>
          <View
            style={[
              styles2.dot4,
              {
                backgroundColor: props.dot1 || "#c8b5a6"
              }
            ]}
          >

          </View>
          <View style={styles2.dot2}>
            <View
              style={[
                styles2.dot1,
                {
                  backgroundColor: props.dot2_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
        </View>
      </View>
      <TouchableOpacity  onPress={() => navigation2.navigate('RegistScreen')} >
      <MainButton  style={styles.mainButton}></MainButton></TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation2.navigate('LoginScreen')} >
        <Button style={styles.button}></Button>
        </TouchableOpacity>
      <Image
        source={require("../assets/images/picSlider21.png")}
        resizeMode="contain"
        style={styles2.image1}
      ></Image>
    </View>
    
    
    <View style={styles.OwlItem}>
    <Title
        loremIpsum="Журнал данных"
        loremIpsum2="об упражнениях и здоровье"
        style={styles3.title}
      ></Title>
      <Text style={styles3.text}>
        Отслеживайте физические упражнения и показатели здоровья.
      </Text>
      <View style={styles3.slider}>
        <View style={styles3.dot5Row}>
          <View
            style={[
              styles3.dot5,
              {
                backgroundColor: props.dot1 || "rgba(255,255,255,1)"
              }
            ]}
          >
            <View
              style={[
                styles3.dotActive1,
                {
                  backgroundColor: props.dot_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
          <View
            style={[
              styles3.dot3,
              {
                backgroundColor: props.dot1 || "rgba(255,255,255,1)"
              }
            ]}
          >
            <View
              style={[
                styles3.dot4,
                {
                  backgroundColor: props.dot1_active || "rgba(232,143,120,0)"
                }
              ]}
            ></View>
          </View>
          <View style={styles3.dot1}></View>
        </View>
      </View>
      <TouchableOpacity  onPress={() => navigation2.navigate('RegistScreen')} >
      <MainButton  style={styles.mainButton}></MainButton></TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation2.navigate('LoginScreen')} >
        <Button style={styles.button}></Button>
        </TouchableOpacity>
      <Image
        source={require("../assets/images/picSlider31.png")}
        resizeMode="contain"
        style={styles3.image1}
      ></Image>
    </View>

    
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  OwlItem: {
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  title: {
    height: 48,
    marginTop: 400,
    marginLeft: 90,
    marginRight: 90
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get('window').width * 3,
    flexDirection: 'row',
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    textAlign: "center",
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16
  },
  slider: {
    height: 8,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 40,
    width: Dimensions.get('window').width,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 8
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 8
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot5Row: {
    height: 8,
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainButton: {
    height: 43,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16
  },
  button: {
    height: 35,
    marginTop: 9
  },
  image: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').width - 10,
    height: '50%',
    position: 'absolute', 
    top: -10
  }
});



const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  title: {
    height: 48,
    fontWeight: 'bold',
    marginTop: 376,
    marginLeft: 90,
    marginRight: 90
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    textAlign: "center",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  slider: {
    height: 8,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 16,
    width: Dimensions.get('window').width,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    marginLeft: 4,
    marginRight: 4
  },
  dot3: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 4,
    marginRight: 4,
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot5Row: {
    height: 8,
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainButton: {
    height: 43,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16
  },
  button: {
    height: 35,
    marginTop: 9
  },
  image1: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').width - 10,
    height: '50%',
    position: 'absolute', 
    top: -10
  }
});



const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  title: {
    height: 48,
    marginTop: 376,
    marginLeft: 37,
    marginRight: 37
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#121212",
    fontSize: 14,
    textAlign: "center",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  slider: {
    height: 8,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 16,
    width: Dimensions.get('window').width,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  dot5: {
    width: 8,
    height: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.38)"
  },
  dotActive1: {
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
  dot4: {
    width: 8,
    height: 8,
    borderRadius: 100
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#c8b5a6",
    marginLeft: 8
  },
  dot5Row: {
    height: 8,
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainButton: {
    height: 43,
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16
  },
  button: {
    height: 35,
    marginTop: 9
  },
  image1: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').width - 10,
    height: '50%',
    position: 'absolute', 
    top: -10
  }
});

export default OpenSlider1;
