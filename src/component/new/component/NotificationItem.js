import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IconText from './IconText'

const NotificationItem = ({item}) => {
  const { author, notification, avatar, follow,time }={...item}
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.notification}><Text style={styles.author}>{author}</Text> {notification}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      {
        follow && <IconText icon='add' size={24} colorIcon='#1877F2' textColor='#1877F2' text='Follow' style={styles.button} />
      }
    </View>
  )
}

export default NotificationItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF1F4',
    height: 100,
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 6,
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center'
  },
  image: {
    marginEnd: 16
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1
  },
  notification: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    fontFamily: 'poppins',
    color: '#050505',
  },
  author: {
    fontWeight: 'bold',
  },
  time: {
    color: '#4E4B66',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12
  },
  button: {
    borderRadius: 6,
    borderWidth: 1,
    width: 96,
    height: 32,
    borderColor: '#1877F2'
  }
})