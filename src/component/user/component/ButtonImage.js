import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'

const ButtonImage = (props) => {
    const {children,source,style}=props
    return (
        <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <View style={[styles.container,style]}>
                <Image styles={styles.image} source={source} resizeMode='contain'/>
                <Text style={styles.children}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default ButtonImage

const styles = StyleSheet.create({
    pressed:{
        backgroundColor:'#ccc'
    },
    container:{
        width:'100%',
        height:'100%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center'
        
    },
    children:{
        color:"#667080",
        fontSize:16,
        fontWeight:"600",
        letterSpacing:0.12,
        fontFamily:'poppins',
        lineHeight:24,
        marginLeft:10

    },
    image:{
        width:40,
        height:40,
    }
})