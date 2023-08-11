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
import { getToken, getUserID, getDate, setDate } from '../../api/token';
import { post } from '../../api/fetch';
import { useNavigation, useFocusEffect }  from '@react-navigation/native';

function ProductList(props) {

  const navigation2 = useNavigation();
  const { dateday } = props.route.params ? props.route.params : {};
  const { meal } = props.route.params ? props.route.params : {};

  console.log(dateday);
  console.log(meal);



  const [isLoading, setLoading] = React.useState(true);
  const [biting, setbiting] = React.useState('');
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const [countprod, setcountprod] = React.useState('0');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);


  const getorders = async (request) => {


    const token = await getToken();
    await post('/foods/search', {
      request: request,
      token: token
    }).then(async res => {
      setData(res); console.log(res); setFilteredDataSource(res); setLoading(false);
      return res;
    }).finally(() => setLoading(false));


  }


  const addfood = async (fcid, user_prod_id, user_recipe_id) => {

    var weightfood = 100;
    for (var i in data) {
      if (((data[i].fdc_id != undefined && data[i].fdc_id == fcid) || (data[i].user_prod_id != undefined && data[i].user_prod_id == user_prod_id) || (data[i].user_recipe_id != undefined && data[i].user_recipe_id == user_recipe_id)) && data[i].weight) {
        weightfood = data[i].weight;
      }
    }

    const token = await getToken();
    const usId = await getUserID();
    var dateday2 = await getDate(); 
    var   date = new Date(); 
    var hourse = 1;
    var  meal2 = 1;
    if (meal == undefined) {
    
      hourse = date.getHours();
      console.log(hourse);
     
      if (hourse >= 0 && hourse < 12) {
        meal2 = 1;
      }
      if (hourse >= 12 && hourse < 18) {
        meal2 = 2;
      }
      if (hourse >= 18 && hourse <= 24) {
        meal2 = 3;
      }
    }





    console.log(usId + ' - ' + token + ' - ' + fcid + ' - ' + meal + ' - ' + dateday + ' - ' + weightfood);

    await post('/foods/selected-food', {
      user_id: usId,
      token: token,
      fdc_id: fcid,
      user_prod_id: user_prod_id,
      user_recipe_id: user_recipe_id,
      meal_time: meal != undefined ? meal : meal2,
      date: dateday != undefined ? dateday : dateday2,
      weight: weightfood
    }).then(async res => {
      console.log(res);

    }).finally(() => setLoading(false));

  }


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text && text.length > 3 && !isLoading) {
      setLoading(true);
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = getorders(text);
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

  const editWeight = (item, fcid, user_prod_id, user_recipe_id) => {
    setbiting(item);
    for (var i in data) {
      if ((data[i].fdc_id != undefined && data[i].fdc_id == fcid) || (data[i].user_prod_id != undefined && data[i].user_prod_id == user_prod_id) || (data[i].user_recipe_id != undefined && data[i].user_recipe_id == user_recipe_id)) {
        data[i].weight = item;
        data[i].energynew = parseInt(parseInt(data[i].energy) / 100 * parseInt(item));
        console.log(data[i].energynew);
      }
    }
  }

  const activethiselem = (fcid, user_prod_id, user_recipe_id) => {
    for (var i in data) {
      if ((data[i].fdc_id != undefined && data[i].fdc_id == fcid) || (data[i].user_prod_id != undefined && data[i].user_prod_id == user_prod_id) || (data[i].user_recipe_id != undefined && data[i].user_recipe_id == user_recipe_id)) {
        data[i].hasactive = 1;
      }
    }
    const newcount = parseInt(countprod) + 1;
    setcountprod(newcount.toString());
  }


  const generatedkkal = (fcid, user_prod_id, user_recipe_id) => {
    for (var i in data) {
      if ((data[i].fdc_id != undefined && data[i].fdc_id == fcid) || (data[i].user_prod_id != undefined && data[i].user_prod_id == user_prod_id) || (data[i].user_recipe_id != undefined && data[i].user_recipe_id == user_recipe_id)) {
        if (data[i].energynew) {
          return data[i].energynew;
        } else {
          return data[i].energy;
        }
      }
    }

  }
  const generated = (fcid, user_prod_id, user_recipe_id) => {
    var flag = 0;

    for (var i in data) {
      if (((data[i].fdc_id != undefined && data[i].fdc_id == fcid) || (data[i].user_prod_id != undefined && data[i].user_prod_id == user_prod_id) || (data[i].user_recipe_id != undefined && data[i].user_recipe_id == user_recipe_id)) && data[i].hasactive) {
        flag = 1;
      }
    }
    if (flag) {
      return (<View style={styles.v_but2}>
        <MaterialCommunityIconsIcon name="check-bold" style={styles.v_but_icon2}></MaterialCommunityIconsIcon>
      </View>);
    } else {
      return (<View style={styles.v_but}>
        <MaterialCommunityIconsIcon name="plus-circle-outline" style={styles.v_but_icon}></MaterialCommunityIconsIcon>
      </View>);
    }

  }

  React.useEffect(() => {

    getorders("");
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      setcountprod('0');
      setSearch("");
      getorders("");

    }, [])
      );

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
            <ColorBold loremIpsum={countprod} style={styles.colorBold}></ColorBold>
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
      <View style={styles.RootNavLine}>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          onPress={() => navigation2.navigate('MyProduct', { dateday: dateday, meal: meal })}>

          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='food' size={16} style={{ color: 'black' }} />    Мои продукты</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.RootNavLineRow}
          onPress={() => navigation2.navigate('MyRecept', { dateday: dateday, meal: meal })}>

          <Text style={styles.RootNavLineText}><MaterialCommunityIconsIcon name='receipt' size={16} style={{ color: 'black' }} />    Мои рецепты</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollArea1}>
        <ScrollView horizontal={false} contentContainerStyle={styles.scrollArea1_contentContainerStyle}>
          {isLoading ? (

            <View style={{
              flex: 1,
              justifyContent: "center"
            }}>
              <ActivityIndicator size="large" color="#c8b5a6" />
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
                    <TextInput
                      placeholder="100"
                      style={styles.textInput}
                      keyboardType={"number-pad"}
                      onChangeText={(text) => editWeight(text, item.fdc_id, item.user_prod_id, item.user_recipe_id)}
                    ></TextInput>
                    <Text style={styles.v_text_count}> г.</Text>
                  </View>
                  <View style={styles.v_ccal}>
                    <Text style={styles.v_text_ccal}>{generatedkkal(item.fdc_id, item.user_prod_id, item.user_recipe_id)} ккал</Text>
                  </View>
                  <TouchableOpacity onPress={() => { activethiselem(item.fdc_id, item.user_prod_id, item.user_recipe_id); addfood(item.fdc_id, item.user_prod_id, item.user_recipe_id); }}>

                    {generated(item.fdc_id, item.user_prod_id, item.user_recipe_id)}
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
  RootNavLine: {
    display: 'flex',
    flexDirection: 'row'
  },
  RootNavLineRow: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2,
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
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },

  pageService: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f7',
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
  icon2: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 24,
    width: 24,
    height: 26,
    marginRight: 16,
    marginTop: 15
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
  }
});

export default ProductList;
