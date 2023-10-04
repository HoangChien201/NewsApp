/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,

} from 'react-native';

import UserStack from './src/stack/UserStack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
function App(): JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <UserStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>

  );
}


export default App;
