import React, {Component} from 'react';
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
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorBold from '../components/ColorBold';
import {getToken, getUserID} from '../../api/token';
import {post} from '../../api/fetch';
import {useNavigation} from '@react-navigation/native';
import LongSlider from '../components/LongSlider';
import MainButton from '../components/MainButton';
import TextColorButton from '../components/TextColorButton';
import ColorTitle from '../components/ColorTitle';
import Backbutton from '../components/Backbutton';

function AddProduct(props) {
  const navigation2 = useNavigation();
  const [isLoading, SetLoading] = React.useState(false);
  const [description, SetDescription] = React.useState('');
  const [proteins, SetProteins] = React.useState('');
  const [carbohydrates, SetCarbohydrates] = React.useState('');
  const [fats, SetFats] = React.useState('');
  const [energy, SetEnergy] = React.useState('');
  const [VitaminA, SetVitaminA] = React.useState('');
  const [VitaminC, SetVitaminC] = React.useState('');
  const [VitaminB6, SetVitaminB6] = React.useState('');
  const [VitaminB12, SetVitaminB12] = React.useState('');
  const [Iron, SetIron] = React.useState('');
  const [Calcium, SetCalcium] = React.useState('');
  const [Magnesium, SetMagnesium] = React.useState('');
  const [Zinc, SetZinc] = React.useState('');
  const [Leucine, SetLeucine] = React.useState('');
  const [Tyrosine, SetTyrosine] = React.useState('');
  const [Lysine, SetLysine] = React.useState('');
  const [Cysteine, SetCysteine] = React.useState('');
  const [Valine, SetValine] = React.useState('');
  const [Tryptophan, SetTryptophan] = React.useState('');
  const [Isoleucine, SetIsoleucine] = React.useState('');
  const [Methionine, SetMethionine] = React.useState('');
  const [Threonine, SetThreonine] = React.useState('');
  const [Glyk, SetGlyk] = React.useState(0);

  const submit = async () => {
    SetLoading(true);
    const token = await getToken();
    const usId = await getUserID();

    var vitamins = null;
    var aminokislotes = null;

    if (
      VitaminA != '' ||
      VitaminB6 != '' ||
      VitaminB12 != '' ||
      VitaminC != '' ||
      Iron != '' ||
      Calcium != '' ||
      Magnesium != '' ||
      Zinc != ''
    ) {
      vitamins = [];

      if (VitaminA != '') {
        vitamins.push({name: 'VitaminA', amount: VitaminA});
      }
      if (VitaminB6 != '') {
        vitamins.push({name: 'VitaminB6', amount: VitaminB6});
      }
      if (VitaminB12 != '') {
        vitamins.push({name: 'VitaminB12', amount: VitaminB12});
      }
      if (VitaminC != '') {
        vitamins.push({name: 'VitaminC', amount: VitaminC});
      }
      if (Iron != '') {
        vitamins.push({name: 'Iron', amount: Iron});
      }
      if (Calcium != '') {
        vitamins.push({name: 'Calcium', amount: Calcium});
      }
      if (Magnesium != '') {
        vitamins.push({name: 'VitaminA', amount: Magnesium});
      }
      if (Zinc != '') {
        vitamins.push({name: 'Zinc', amount: Zinc});
      }
    }

    if (
      Leucine != '' ||
      Tyrosine != '' ||
      Lysine != '' ||
      Cysteine != '' ||
      Valine != '' ||
      Tryptophan != '' ||
      Isoleucine != '' ||
      Methionine != '' ||
      Threonine != ''
    ) {
      aminokislotes = [];

      if (Leucine != '') {
        aminokislotes.push({name: 'Leucine', amount: Leucine});
      }
      if (Tyrosine != '') {
        aminokislotes.push({name: 'Tyrosine', amount: Tyrosine});
      }
      if (Lysine != '') {
        aminokislotes.push({name: 'Lysine', amount: Lysine});
      }
      if (Cysteine != '') {
        aminokislotes.push({name: 'Cysteine', amount: Cysteine});
      }
      if (Tryptophan != '') {
        aminokislotes.push({name: 'Tryptophan', amount: Tryptophan});
      }
      if (Valine != '') {
        aminokislotes.push({name: 'Valine', amount: Valine});
      }
      if (Isoleucine != '') {
        aminokislotes.push({name: 'Isoleucine', amount: Isoleucine});
      }
      if (Methionine != '') {
        aminokislotes.push({name: 'Methionine', amount: Methionine});
      }
      if (Threonine != '') {
        aminokislotes.push({name: 'Threonine', amount: Threonine});
      }
    }

    console.log(
      description +
        ' - ' +
        usId +
        ' - ' +
        token +
        ' - ' +
        description +
        ' - ' +
        proteins +
        ' - ' +
        carbohydrates +
        ' - ' +
        fats +
        ' - ' +
        energy,
    );
    console.log(aminokislotes);
    console.log(vitamins);
    await post('/userprods/add-prod', {
      user_id: usId,
      token: token,
      description: description,
      proteins: proteins,
      carbohydrates: carbohydrates,
      fats: fats,
      energy: energy,
      glycemic_load: Glyk == '' ? 0 : Glyk,
      vitamins: vitamins,
      aminokislotes: aminokislotes,
    })
      .then(async (res) => {
        console.log(res);

        SetDescription('');
        SetProteins('');
        SetCarbohydrates('');
        SetFats('');
        SetEnergy('');
        SetVitaminA('');
        SetVitaminC('');
        SetVitaminB6('');
        SetVitaminB12('');
        SetIron('');
        SetCalcium('');
        SetMagnesium('');
        SetZinc('');
        SetLeucine('');
        SetTyrosine('');
        SetLysine('');
        SetCysteine('');
        SetValine('');
        SetTryptophan('');
        SetIsoleucine('');
        SetMethionine('');
        SetThreonine('');

        await navigation2.goBack();
      })
      .catch((res) => {
        console.log(res);
        console.log(res.error);
        SetLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.backSpiralStack}>
        <Image
          source={require('../assets/images/spiral_1.png')}
          resizeMode="contain"
          style={styles.backSpiral}></Image>

        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}>
            <View style={styles.textField}>
              <Text style={styles.innerText}>Добавление продукта</Text>
            </View>
            <View style={styles.textField2}>
              <Text style={styles.innerText2}>
                Содержание на 100г. продукта
              </Text>
            </View>
            <View style={styles.inputField}>
              <View style={styles.rect1}>
                <TextInput
                  placeholder="Название*"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.placeholder}
                  onChangeText={SetDescription}></TextInput>
              </View>
            </View>
            <View style={styles.inputField1}>
              <View style={styles.rect2}>
                <TextInput
                  placeholder="Белки*"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput}
                  onChangeText={SetProteins}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField2}>
              <View style={styles.rect3}>
                <TextInput
                  placeholder="Жиры*"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput2}
                  onChangeText={SetFats}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Углеводы*"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetCarbohydrates}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Калории*"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetEnergy}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Гликемическая нагрузка"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetGlyk}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.textField3}>
              <Text style={styles.innerText2}>
                Витамины (г.) не обязательны к заполнению{' '}
              </Text>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Витамин А"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetVitaminA}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Витамин B6"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetVitaminB6}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Витамин B12"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetVitaminB12}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Витамин С"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetVitaminC}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Цинк"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetZinc}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Магнезий"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetMagnesium}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Кальций"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetCalcium}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Железо"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetIron}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.textField3}>
              <Text style={styles.innerText2}>
                Кислоты (мкг.) не обязательны к заполнению{' '}
              </Text>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Треонин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetThreonine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Метионин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetMethionine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Изолейцин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetIsoleucine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Триптофан"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetTryptophan}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Валин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetValine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Цистеин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetCysteine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Лизин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetLysine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Тирозин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetTyrosine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <View style={styles.inputField4}>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="Лейцин"
                  placeholderTextColor="rgba(0,0,0,0.6)"
                  style={styles.textInput4}
                  onChangeText={SetLeucine}
                  keyboardType={'number-pad'}></TextInput>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                submit();
              }}>
              <MainButton
                style={styles.mainButton}
                buttonText={
                  isLoading ? 'Добавление...' : 'Добавить продукт'
                }></MainButton>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.rect}>
          <Backbutton style={styles.backbutton}></Backbutton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textField: {
    flex: 1,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  innerText: {
    fontSize: 17,
  },
  textField2: {
    flex: 1,
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -15,
  },
  textField3: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
  innerText2: {
    fontSize: 13,
  },
  backSpiral: {
    top: 4,
    position: 'absolute',
    opacity: 0.05,
    left: 0,
    right: 0,
    height: 456,
  },
  scrollArea: {
    left: 0,
    height: Dimensions.get('window').height - 100,
    position: 'absolute',
    right: 0,
  },
  scrollArea_contentContainerStyle: {
    paddingBottom: 30,
  },
  inputField: {
    height: 56,
    marginLeft: 16,
    marginRight: 16,
  },
  rect1: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  inputField1: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  rect2: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  inputField2: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  rect3: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  textInput2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  inputField3: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  rect4: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  textInput3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  inputField4: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  rect5: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  textInput4: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  inputField5: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  rect6: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  textInput5: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  longSlider: {
    position: 'absolute',
    top: 24,
    height: 8,
    width: 72,
    left: 128,
  },
  inputField6: {
    top: 0,
    left: 0,
    height: 56,
    position: 'absolute',
    right: 0,
  },
  rect7: {
    height: 56,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#c8b5a6',
    borderRadius: 4,
  },
  textInput6: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  longSliderStack: {
    height: 56,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  mainButton: {
    height: 43,
    marginTop: 48,
    marginLeft: 16,
    marginRight: 16,
  },
  politicsText: {
    height: 14,
    marginTop: 13,
  },
  loremIpsum1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    textAlign: 'center',
    fontSize: 12,
  },
  text7: {
    fontFamily: 'roboto-regular',
    color: '#c8b5a6',
    textAlign: 'center',
    fontSize: 12,
  },
  info1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 91,
    width: Dimensions.get('window').width,
  },
  greyText1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,0.38)',
    textAlign: 'left',
    fontSize: 12,
    marginRight: 4,
  },
  textColorButton1: {
    marginLeft: 4,
    marginTop: 2,
  },
  colorTitle1: {
    position: 'absolute',
    top: 0,
    height: 29,
    left: 0,
    right: 0,
  },
  backSpiralStack: {
    height: 603,
    marginTop: 88,
  },
  header: {
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
  },
  rect: {
    height: 56,
    backgroundColor: '#c8b5a6',
  },
  backbutton: {
    height: 27,
    width: 26,
    marginTop: 15,
    marginLeft: 15,
  },
});

export default AddProduct;
