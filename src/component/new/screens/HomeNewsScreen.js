import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import Search from '../component/Search'
import HeaderHome from '../component/HeaderHome'
import TrendingNews from '../component/TrendingNews'
import LastesNews from '../component/LastesNews'

const HomeNewsSceen = ({navigation}) => {
  const [isLastest, setIsLastest] = useState(false)
  const dataNews=useSelector((state)=>{
    return state.news.value
  })
  function LastesHandle(type) {
    if (type === 'show') {
      setIsLastest(true)
    }
    if (type === 'hide') {
      setIsLastest(false)
    }

  }

  function SearchOnFocus(){
    navigation.navigate('SearchNewsScreen')
  }
  return (

    <View style={styles.container}>
      <HeaderHome />
      {
        !isLastest && 
        <View style={{ marginBottom: 16 }}>
          <Search onFocus={SearchOnFocus}/>
        </View>
      }

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          !isLastest && <TrendingNews data={dataNews}/>
        }
        <LastesNews data={dataNews} LastestHandle={LastesHandle} />

      </ScrollView>
    </View >
  )
}

export default HomeNewsSceen

const styles = StyleSheet.create({

  container: {
    padding: 24,
    flex: 1,
    height: '100%',
    backgroundColor: "#fff"

  },


})