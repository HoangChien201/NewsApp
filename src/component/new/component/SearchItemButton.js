import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import IconText from './IconText'

const SearchItemButton = ({item,text}) => {
    return (
        <View style={styles.container}>
            <Image source={item.avatar} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
            </View>
            {
              text==='Save' ? <IconText textColor='#1877F2' text={text} style={styles.button} />
                :<IconText icon='add' size={24} colorIcon='#1877F2' textColor='#1877F2' text={text} style={styles.button} />
            }
            
        </View>
    )
}

export default SearchItemButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:"center",
        marginBottom:16
    },
    image:{
        marginEnd:8
    },
    content: {
        flex:1,
        justifyContent:'space-between',
        paddingEnd:10,
        
    },
    category: {
        color:'#000',
        fontSize:16,
        fontWeight:'400',
        lineHeight:24,
        letterSpacing:0.12
    },
    description: {
        color:'#4E4B66',
        fontSize:14,
        fontWeight:'400',
        lineHeight:21,
        letterSpacing:0.12
    },
    button: {
        borderRadius: 6,
        borderWidth: 1,
        width: 96,
        height: 32,
        borderColor: '#1877F2'
    }
})