import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabScreen } from './BottomTabRoot';

const Tab=createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
        {
            BottomTabScreen.map((screen)=>{
                return <Tab.Screen key={screen.id} name={screen.name} component={screen.component} options={screen.options}/>
            })
        }
    </Tab.Navigator>
  )
}

export default BottomTab