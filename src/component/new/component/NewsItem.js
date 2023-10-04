import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const NewsItem = ({item,type}) => {
    const navigation=useNavigation()
    const {image,category,title,namePage,iconPage,time,id } = {...item};
    function OnPress(){
        navigation.navigate('NewsDetailScreen',{
            id:id
        })
    }
    return (
        <TouchableOpacity onPress={OnPress}>

            <View style={[styles.container, type === 'small' && { flexDirection: 'row' }]}>
                <Image style={type === 'small' ? styles.imageSmall : styles.imageFull} source={image} />
                <View style={[styles.contentContainer, , type === 'small' && { height: '100%', width: '71%', marginStart: 10 }]}>
                    <View>
                        <Text style={styles.category}>{category}</Text>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={[styles.flexRow]}>
                        <View style={[styles.flexRow, { marginEnd: 10 }]}>
                            <Image source={iconPage} resizeMode='cover' />
                            <Text style={[styles.namePage, styles.text]}>{namePage}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Image source={require('../../../media/icon-hour.png')} />
                            <Text style={[styles.time, styles.text]}>{time}</Text>
                        </View>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        padding: 8,
        overflow: 'hidden',
        height:'100%'
    },
    imageFull: {
        width: '100%',
        height: 183,
        borderRadius: 6
    },
    imageSmall: {
        width: 96,
        height: 96,
        borderRadius: 6
    },
    contentContainer: {
        flex:1,
        justifyContent:"space-between",
    },
    category: {
        color: '#4e4b66',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19.5,
        marginVertical: 5,
    },
    text: {
        fontFamily: 'poppins',
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    title: {
        color: '#000',
        fontWeight: '400',
        fontSize: 16,
        width: '100%'
    },
    namePage: {
        color: '#4e4b66',
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 19.5,
        marginStart: 5
    },
    time: {
        color: '#4e4b66',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19.5,
        marginStart: 5
    },

})