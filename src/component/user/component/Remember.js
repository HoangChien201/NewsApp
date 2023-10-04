import { StyleSheet, Text, TouchableOpacity, View, Check, TextInput } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Remember = () => {
    function IconCheckBox() {
        return (
            <Icon name='checkbox-blank-outline' size={24} color='#000' />
            // <Icon name='checkbox-marked' size={24} color='#000'/>

        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.remember}>
                <IconCheckBox />
                <Text>Remember</Text>
            </View>
            <TouchableOpacity>
                <Text style={[{ color: '#5890ff' }]}>Forgot the password ?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Remember

const styles = StyleSheet.create({
    container: {
        height: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10
    },
    remember: {
        flexDirection: "row",
        alignItems: 'center'
    }
})