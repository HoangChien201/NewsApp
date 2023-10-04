import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../component/Input'
import Remember from '../component/Remember'
import ButtonCustom from '../component/ButtonCustom'
import ButtomImage from '../component/ButtonImage'

const SignUpScreen = ({navigation}) => {
    function LoginPressHandle(){
        navigation.navigate("LoginScreen")
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={[styles.title, { color: '#000' }]}>Hello</Text>
                </View>
                <View>
                    <Text style={styles.welcome}>Signup to get Started</Text>
                </View>
            </View>
            <View style={styles.form}>
                <Input lable='Username'/>
                <Input lable='Password' password={true}/>
                <Remember/>
                <ButtonCustom children='Sign Up' style={styles.button}/>
            </View>
            <Text style={{textAlign:'center',marginVertical:10}}>or continue with</Text>
            <View style={styles.buttonImageContainer}>
                <View style={styles.buttonImage}>
                    <ButtomImage children='Facebook' source={require('../../../media/facebook.png')}/>
                </View>
                <View style={styles.buttonImage}>
                    <ButtomImage children='Google' source={require('../../../media/google.png')}/>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:'center',marginVertical:16}}>
                <Text>don't have an account ?</Text>
                <TouchableOpacity onPress={LoginPressHandle}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        flex:1
    },
    headerContainer:{
        height:171
    },
    title: {
        fontSize: 48,
        fontFamily: 'poppins',
        lineHeight: 72,
        letterSpacing: 0.12,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0.12,
        width: 222
    },
    form:{
        marginTop:20
    },
    button:{
        paddingHorizontal:24,
        paddingVertical:13,
        borderRadius:6,
        backgroundColor:'#1877f2',
        height:50
    },
    buttonImage:{
        paddingHorizontal:24,
        paddingVertical:12,
        borderRadius:6,
        backgroundColor:'#eef1f4',
        height:50,
        width:'45%'
    },
    buttonImageContainer:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    login:{
        color:'#1877F2',
        fontSize:14,
        fontWeight:'bold',
        lineHeight:21,
    }
})