import 'react-native-gesture-handler'
import React, { useState } from "react";

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation';

const App = () => {

 
  return (
  <NavigationContainer>
     <RootNavigator />
  </NavigationContainer>
  );
}
export default App;
