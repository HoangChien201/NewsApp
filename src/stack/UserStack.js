import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { UserStackScreen } from './UserRootStack'
import BottomTab from '../bottom-tab/BottomTab';
import CreateNewsScreen from '../component/new/screens/CreateNewsScreen';

const Stack = createStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        {
          UserStackScreen.map((screen) => {
            return <Stack.Screen name={screen.name} component={screen.component} options={{ ...screen.options, cardStyle: { backgroundColor: "#fff", flex: 1, } }} key={screen.id} />
          })
        }
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="CreateNews" component={CreateNewsScreen} options={{
          title: 'Create News',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'poppins',
            fontSize: 16,
            fontWeight: '400',
          },
          cardStyle: { backgroundColor: '#fff' }
        }} />

      </Stack.Group>

      <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false, cardStyle: { backgroundColor: "#fff" } }} />
    </Stack.Navigator>
  )
}

export default UserStack;
