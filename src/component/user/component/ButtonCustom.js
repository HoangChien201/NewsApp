import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonCustom = (props) => {
    const { children,textColor,style,onPress } = props
    return (
        <Pressable style={({pressed})=> pressed && styles.pressed} onPress={onPress}>
            <View style={[styles.container,style]}>
                <Text style={[styles.children,textColor && {color:textColor}]}>{children}</Text>
            </View>
        </Pressable>

    )
}

export default ButtonCustom

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7
    },
    container:{
        width:'100%',
        height:'100%',
        justifyContent:"center",
        alignItems:"center",
        
    },
    children:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:0.12,
        fontFamily:'poppins',
        lineHeight:24
    }
})