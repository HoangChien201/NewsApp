import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ButtonCustom from '../../user/component/ButtonCustom'

const HeadingNewsDetail = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.image} source={require('../../../media/icon-page-bbc-1024.png')} />
                <View>
                    <Text style={styles.namePage}>BBC News</Text>
                    <Text style={styles.date}>14m ago</Text>
                </View>
            </View>
            <ButtonCustom children="Following" style={styles.button}/>
        </View>
    )
}

export default HeadingNewsDetail

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between'
    },
    image: {
        width:50,
        height:50,
        marginEnd:4
    },
    namePage: {
        fontFamily:'poppins',
        fontSize:16,
        fontWeight:'bold',
        lineHeight:24,
        letterSpacing:0.12,
        color:'#000'
    },
    date: {

    },
    button: {
        backgroundColor:"#1877F2",
        paddingVertical:5,
        paddingHorizontal:12,
        borderRadius:6,
        width:103,
        height:34
    },
})