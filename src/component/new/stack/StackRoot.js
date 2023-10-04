import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import NotificationNews from '../screens/NotificationNewsScreen'
import TrendingNews from '../component/TrendingNews'
import TrendingScreen from '../screens/TrendingScreen'

const StackRoot = ({navigation,route}) => {
    const page=route.params.page;
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:page
        })
    },[navigation])
    function Page(){
        switch (page) {
            case 'Notification': return <NotificationNews/>
            case 'Trending' :return <TrendingScreen/>
        }
    }
  return (
      <Page/>
  )
}

export default StackRoot

const styles = StyleSheet.create({})