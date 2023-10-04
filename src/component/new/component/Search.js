import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
const Search = ({autoFocus,onFocus}) => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={24} color="#000" />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} autoFocus={autoFocus} onFocus={onFocus}/>
                <TouchableOpacity style={styles.iconFrame}>
                    <Image  source={require("../../../media/Frame.png")} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:6,
        borderWidth:1,
        borderColor:"#4E4B66"
    },
    inputContainer: {
        flex:1,
        justifyContent:'center'
    },
    input: {
        height:40,
        fontFamily:"poppins",
        fontSize:14,
        fontWeight:"400",
        letterSpacing:0.12,
    },
    iconFrame: {
        height:24,
        width:24,
        position:'absolute',
        right:10
    },
})