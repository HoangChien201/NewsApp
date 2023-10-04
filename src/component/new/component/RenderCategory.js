import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../../../http/value'
import { TouchableOpacity } from 'react-native-gesture-handler';

const RenderCategory = ({ChangeCategory}) => {
  const [indexPress, setIndexPress] = useState(0);

  function CategoryOnPress(indexPress){
    const category=categories.find((item,index)=>{
      return index===indexPress
    })
    ChangeCategory(category);
    setIndexPress(indexPress)
  }

  function Category({category,index}) {
    return (
      <TouchableOpacity onPress={CategoryOnPress.bind(this,index)}>
        <View style={[{marginEnd:10},index === indexPress ? styles.bottomBorder : null]}>
          <Text style={styles.category}>{category}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.caterogyContainer}>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            index == 0 ? <Category category="All" index={index}/> :
            <Category category={item} index={index}/>
          )
        }}
        keyExtractor={(item,index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default RenderCategory

const styles = StyleSheet.create({
  caterogyContainer: {
    marginVertical: 16
  },
  category: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66'
  },
  bottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
})