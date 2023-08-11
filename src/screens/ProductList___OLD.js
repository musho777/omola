import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  Text,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ColorBold from "../components/ColorBold";
import { getToken, getUserID } from '../../api/token';
import { post } from '../../api/fetch';
import {useNavigation} from '@react-navigation/native';

function ProductList(props) {

  const navigation2 = useNavigation();
  const { dateday } = props.route.params;
  const { meal } = props.route.params;

  console.log(dateday);
  console.log(meal);


  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  

  const getorders = async (request) => {
    const token = await getToken();
    await post('/foods/search', {
      request: request,
      token: token
    }).then(async res => {
      setData(res); console.log(res); setFilteredDataSource(res);
      return res;
    }).finally(() => setLoading(false));

  }


  const addfood = async (fcid) => {
    const token = await getToken();
    const usId = await getUserID();


    console.log(usId +' - '+token  +' - '+fcid  +' - '+ meal  +' - '+ dateday);

    await post('/foods/selected-food', {
      user_id:usId,
      token: token,
      fdc_id: fcid,
      meal_time:meal,
      date: dateday
    }).then(async res => {
      console.log(res);
     
    }).finally(() => setLoading(false));

  }


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text && text.length>3) {
        // Inserted text is not blank
        // Filter the masterDataSource and update FilteredDataSource
        const newData =  getorders(text);
        setFilteredDataSource(newData);
        setSearch(text);
    } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setData([]);
        setFilteredDataSource(data);
        setSearch(text);
    }

  };

  React.useEffect(() => {
    
    getorders("");
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
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
                    value={search}
                    onChangeText={searchFilterFunction}
                  ></TextInput>
                </View>
              </View>
            </View>
            <ColorBold loremIpsum="0" style={styles.colorBold}></ColorBold>
          </View>
          <View style={styles.icon1RowFiller}></View>
          <TouchableOpacity onPress={() => navigation2.goBack()}>
          <MaterialCommunityIconsIcon
            name="check"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrollArea1}>
        <ScrollView horizontal={false} contentContainerStyle={styles.scrollArea1_contentContainerStyle}>
        {isLoading ? (

<View style={{
  flex: 1,
  justifyContent: "center"
}}>
  <ActivityIndicator size="large" color="#bc2d3f" />
</View>

) : (
  <FlatList
    data={filteredDataSource}
    keyExtractor={({ id }, index) => index.toString()}
    renderItem={({ item }) => (
          <View style={styles.v_line_group}>
            <View style={styles.v_name}>
              <Text style={styles.v_text_name}>{item.description[0]}</Text>
            </View> 
            <View style={styles.v_count}>
              <Text style={styles.v_text_count}>100 г</Text>
            </View>
            <View style={styles.v_ccal}>
              <Text style={styles.v_text_ccal}>{item.energy}</Text>
            </View>
            <TouchableOpacity onPress={() => addfood(item.fdc_id)}>
            <View style={styles.v_but}>
                <MaterialCommunityIconsIcon name="plus-circle-outline" style={styles.v_but_icon}></MaterialCommunityIconsIcon>
            </View>
            </TouchableOpacity>
          </View>

)}
/>
)}

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
    width: 240,
    height: 40,
    marginLeft: 7
  },
  rect16: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
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
    width: 193,
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
  icon2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginRight: 16,
    marginTop: 15
  },
  scrollArea1: {
    height: Dimensions.get('window').height - 130,
    marginTop: 23,
    marginLeft: 16,
    marginRight: 16
  },
  scrollArea1_contentContainerStyle: {

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
    position: 'relative',
    width: Dimensions.get('window').width - 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 2,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  v_name: {
    width: Dimensions.get('window').width / 2 - 30,
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
    width: Dimensions.get('window').width / 4  - 30,
    // backgroundColor:'green',
  },
  v_text_count: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.38)",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "left"
  },
  v_text_ccal: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: 14,
    lineHeight: 14,
    textAlign: "right"
  },
  v_ccal: {
    width: Dimensions.get('window').width / 4  - 30,
    // backgroundColor:'blue',
  },
  v_but_icon: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    marginLeft: 16
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
  }
});

export default ProductList;
