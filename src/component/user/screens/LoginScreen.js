import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../component/Input'
import Remember from '../component/Remember'
import ButtonCustom from '../component/ButtonCustom'
import ButtonImage from '../component/ButtonImage'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LoginScreen = ({navigation}) => {
    function SignUpPressHandle(){
        navigation.navigate("SignUpScreen")
    }
    function LoginPressHandle(){
        navigation.navigate("BottomTab")
    }
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={[styles.title,styles.text, { color: '#000' }]}>Hello</Text>
                    <Text style={[styles.title,styles.text, { color: '#1877f2' }]}>Again !</Text>
                </View>
                <View>
                    <Text style={[styles.welcome,styles.text]}>Welcome back you've been missed</Text>
                </View>
            </View>
            <View style={styles.form}>
                <Input lable='Username' inValid={true}/>
                <Input lable='Password' password={true} inValid={true}/>
                <Remember/>
                <ButtonCustom children='Login' style={styles.button} onPress={LoginPressHandle}/>
            </View>
            <Text style={{textAlign:'center',marginVertical:10}}>or continue with</Text>
            <View style={styles.buttonImageContainer}>
                <View style={styles.buttonImage}>
                    <ButtonImage children='Facebook' source={require('../../../media/facebook.png')}/>
                </View>
                <View style={styles.buttonImage}>
                    <ButtonImage children='Google' source={require('../../../media/google.png')}/>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:'center',marginVertical:16}}>
                <Text>don't have an account ?</Text>
                <TouchableOpacity onPress={SignUpPressHandle}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        flex:1,
    },
    text:{
        letterSpacing: 0.12,
    },
    title: {
        fontSize: 48,
        fontFamily: 'poppins',
        lineHeight: 72,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
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
    signUp:{
        color:'#1877F2',
        fontSize:14,
        fontWeight:'bold',
        lineHeight:21,
    }
})