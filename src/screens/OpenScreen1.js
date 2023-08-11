import React, { Component } from "react";
import { getToken, setDate } from '../../api/token';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";


  const OpenScreen1  = ({ route, navigation })  => { 


 



  console.log(Dimensions.get('window').width);

  var mytGlobalimer;
  
  
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        const gettocken = async({ route, navigation }) => {
          const token = await getToken();
          
          var today = new Date();
          var dd = today.getDate();
          dd = dd < 10 ? '0' + dd : dd;
          var mm = today.getMonth() + 1;
          mm = mm < 10 ? '0' + mm : mm;
          var yyyy = today.getFullYear();
          var rezDate = dd + '.' + mm + '.' + yyyy;
          await  setDate(rezDate);
      

          mytGlobalimer = await setTimeout(() => {
           
          if(token==null){
            navigation.navigate('OpenSlider1');
          }else{
  
            navigation.navigate('Autorized');
          }
      }, 1000);
          
        }
        gettocken({ route, navigation });
       
      });
  
      return unsubscribe;
    }, [navigation]);


  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <ImageBackground
        source={require("../assets/images/Gradient_VsjgDoC.png")}
        resizeMode="contain"
        style={styles.back_spiral}
        imageStyle={styles.back_spiral_imageStyle}
      >
        <Image
          source={require("../assets/images/logo2.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c8b5a6"
  },
  back_spiral: {
    height: 456,
    marginTop: Dimensions.get('window').height/2-225
  },
  back_spiral_imageStyle: {
    opacity: 0.15
  },
  logo: {
    height: 200,
    width: 263,
    marginTop: 115,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default OpenScreen1;
