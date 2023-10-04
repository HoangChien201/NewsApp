import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Search from '../component/Search'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { listAuthor, listCategory, listNews } from '../../../http/value'
import NewsItem from '../component/NewsItem'
import SearchItemButton from '../component/SearchItemButton'
const selects = ['New', 'Topic', 'Author']
const SearchNewsScreen = () => {
  const [indexSelect, setIndexSelect] = useState(0)
  function SelectPressHanlde(index) {
    setIndexSelect(index)
  }

  function SearchByNews() {
    return (
      <FlatList
        data={listNews}
        renderItem={({ item }) => {
          return (
            <View style={styles.news}>
              <NewsItem item={item} type='small' />
            </View>
          )
        }}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicato={false}
      />
    )
  }

  function SearchByTopic() {
    return (
      <FlatList
        data={listCategory}
        renderItem={({ item }) => {
          return <SearchItemButton item={item} text='Save' />
        }}
        keyExtractor={item => item.id}
      />
    )
  }

  function SearchByAuthor() {
    return (
      <FlatList
        data={listAuthor}
        renderItem={({ item }) => {
          return <SearchItemButton item={item} text='Follow' />
        }}
        keyExtractor={item => item.id}
      />
    )
  }

  function ResultSearch() {
    switch (indexSelect) {
      case 1:
        return <SearchByTopic />
      case 2:
        return <SearchByAuthor />
      default:
        return <SearchByNews />
    }
  }
  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.selectContainer}>
        <FlatList
          data={selects}
          renderItem={({ item, index }) => {
            return (
              <View style={[styles.box, indexSelect === index && styles.boxSelected]}>
                <TouchableOpacity onPress={SelectPressHanlde.bind(this, index)}>
                  <Text style={[styles.select, indexSelect === index && { color: '#000' }]}>{item}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
          keyExtractor={item => item}
          horizontal={true}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ResultSearch />
      </View>
    </View>
  )
}

export default SearchNewsScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1
  },
  selectContainer: {
    marginVertical: 16,
    height: 34,
    alignItems: "center"
  },
  box: {
    marginEnd: 24,
    borderBottomColor: '#1877F2',
  },
  boxSelected: {
    borderBottomWidth: 4
  }
  ,
  select: {
    fontFamily: 'arial',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: -0.32,
    lineHeight: 22,
    color: '#4E4B66'
  },
  news: {
    height: 112
  }
})