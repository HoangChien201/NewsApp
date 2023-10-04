import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import IconButton from '../../user/component/IconButton';
import ImageIcon from '../../user/component/ImageIcon';

const HeaderHome = () => {
  const navigation=useNavigation();
  function IconNotificationPress(){
    navigation.navigate('StackRoot',{
      page:'Notification'
    })
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Image source={require('../../../media/logo.png')} />
      <View style={styles.icon}>
        <ImageIcon image={require('../../../media/bell.png')} onPress={IconNotificationPress}/>
      </View>
    </View>
  )
}

export default HeaderHome;

const styles = StyleSheet.create({
  icon: {
    borderRadius: 6,
    backgroundColor: '#fff',
    width: 32,
    height: 32,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:16
  }
})