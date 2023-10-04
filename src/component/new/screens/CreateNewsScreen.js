import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../../user/component/IconButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import ButtonCustom from '../../user/component/ButtonCustom'

const CreateNews = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ color }) => {
        return <IconButton style={{ marginEnd: 10 }} name='ellipsis-v' size={24} color={color} />
      }
    })
  }, [navigation])
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.addImageContainer}>
          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <View style={styles.buttonAdd}>
                <Icon name='plus' size={24} color='#000' />
                <Text style={styles.textAdd}>Add Cover Photo</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TextInput style={styles.inputTitle} placeholder='News title' multiline={true} />
        <View style={styles.line}></View>
        <TextInput style={styles.inputNews} placeholder='Add news/Article' multiline={true}/>
      </View>

    <View style={styles.formPublish}>
        <ButtonCustom children='Puslish' textColor="#667080" style={styles.buttonPublish}/>
    </View>

    </View>
  )
}

export default CreateNews

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent:"space-between",
    flex:1
  },
  line:{
    height:1,
    width:'100%',
    backgroundColor:'#C4C4C4'
  },
  addWrapper: {
    height: 183,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#4E4B66'
  },
  buttonAdd: {
    height: 53,
    width: 120,
    alignItems: "center",
    justifyContent: 'center'
  },
  textAdd: {
    fontSize: 14,
    fontFamily: "poppins",
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0.12,
  },
  inputNews: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  formPublish:{
    justifyContent:"center",
    alignItems:'flex-end',
    height:78,
    width:'100%',
  },
  buttonPublish:{
    width:109,
    height:50,
    backgroundColor:'#EEF1F4',
    borderRadius:6
  }
})