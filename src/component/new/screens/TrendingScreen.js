import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import NewsItem from '../component/NewsItem'
import { listNews } from '../../../http/value'
import { FlatList } from 'react-native-gesture-handler'

const TrendingScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={listNews}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.news}>
                            <NewsItem item={item} />
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />


        </View>
    )
}

export default TrendingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24
    },
    news:{
        marginBottom:8,
        height:290,
    }
})