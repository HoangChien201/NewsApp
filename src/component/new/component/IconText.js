import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
const IconText = ({ icon, colorIcon, size, style, text,onPress,textColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon name={icon} color={colorIcon} size={size}/>
        <Text style={[styles.text,{color:textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default IconText

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 10,
    justifyContent:"center"
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    marginStart: 5
  }
})