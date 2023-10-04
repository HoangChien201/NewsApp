import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
import IconButton from './IconButton';

const Input = (props) => {
    const { lable, password,inValid } = props;
    const [hidePassword, setHidePassword] = useState(true);
    function IconPasswordController() {
        if (hidePassword) {
            setHidePassword(false)
        } else {
            setHidePassword(true)
        }
    }
    function IconPassword() {
        return hidePassword ? <View style={styles.icon}>
            <IconButton name='eye-slash' size={24} color='#000' onPress={IconPasswordController} />
        </View> :
            <View style={styles.icon}>
                <IconButton name='eye' size={24} color='#000' onPress={IconPasswordController} />
            </View>
    }
    return (
        <View>
            <Text style={styles.lable}>{lable}<Text style={{ color: '#c30052' }}>*</Text></Text>
            <View style={styles.inputContainer}>
                <TextInput style={[styles.input,!inValid && styles.invalidFail]} secureTextEntry={hidePassword}/>
                {
                    password && <IconPassword />
                }

            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    lable: {
        width: 80,
        height: 21,
        fontFamily: 'poppins',
        fontWeight: '400',
        lineHeight: 21,
        fontSize: 14,
        letterSpacing: 0.12,
        marginVertical: 5
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,

    },
    inputContainer: {
        justifyContent: 'center'
    },
    icon: {
        position: 'absolute',
        right: 10
    },
    invalidFail:{
        borderColor:'#C30052',
        borderWidth:1
    }
})