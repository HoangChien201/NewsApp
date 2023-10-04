import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

import Input from '../../user/component/Input'
import IconButton from '../../user/component/IconButton'
import ImageIcon from '../../user/component/ImageIcon'
const FormComment = ({ isReply, onPressCancle, submit }) => {
    const [value, setValue] = useState('');
    function Submit(){
        submit(value)
        setValue('')
    }
    return (
        <View style={styles.formCommment}>
            {
                isReply && <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 5, }}>
                    <Text>Reply <Text style={{ fontWeight: 'bold' }}>{isReply.name}</Text></Text>
                    <IconButton name="remove" size={14} color='#ccc' style={{ marginStart: 5 }} onPress={onPressCancle} />
                </View>
            }

            <View style={{
                flexDirection: 'row', justifyContent: "space-between", alignItems: 'center',
            }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Type your comment'
                        placeholderTextColor='#A0A3BD'
                        onChangeText={(text)=>setValue(text)}
                        value={value}
                    />
                </View>
                <ImageIcon image={require('../../../media/send.png')} style={styles.buttonSend} onPress={Submit} />
            </View>

        </View>
    )
}

export default FormComment

const styles = StyleSheet.create({
    formCommment: {
        backgroundColor: '#fff',
        height: 90,
        paddingHorizontal: 24,
        elevation: 8,
        justifyContent: 'center'


    },
    buttonSend: {
        backgroundColor: "#1877F2",
        alignItems: 'center',
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 6,

    },
    input: {
        width: '100%',
        height: '100%'
    },
    inputContainer: {
        width: '85%',
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
    },
})