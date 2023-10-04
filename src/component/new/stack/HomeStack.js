import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeNewsSceen from '../screens/HomeNewsScreen';
import NotificationNewsScreen from '../screens/NotificationNewsScreen';
import StackRoot from './StackRoot';

const Stack=createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeNewsScreen" component={HomeNewsSceen} options={{headerShown:false}}/>
        <Stack.Screen name="StackRoot" component={StackRoot} options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
              fontFamily: 'poppins',
              fontSize: 16,
              fontWeight: 'bold',

          }
        }}/>

    </Stack.Navigator>
  )
}

export default HomeStack