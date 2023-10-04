import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NewsItem from '../component/NewsItem'
import { useNavigation } from '@react-navigation/native'

const TrendingNews = (props) => {
    const {data}=props
    const navigation = useNavigation()
    function SeeAllOnPress() {
        navigation.navigate('StackRoot', {
            page: 'Trending'
        })
    }
    return (
        <View style={styles.container}>
            <View style={[styles.flexRow]}>
                <Text style={styles.heading}>Trending</Text>
                <TouchableOpacity onPress={SeeAllOnPress}>
                    <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.news}>
                <NewsItem
                    item={data[0]} />
            </View>

        </View>
    )
}

export default TrendingNews

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        color: '#000',
        fontFamily: "poppins",
        fontWeight: "bold",
        lineHeight: 24,
        letterSpacing: 0.12,
        fontSize: 16,
    },
    seeAll: {
        color: '#4e4b66',
        fontFamily: "poppins",
        fontWeight: "400",
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    news:{
        height:290
    }
})