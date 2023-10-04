import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'


import HeadingNewsDetail from '../component/HeadingNewsDetail'

import FeedbackWrapper from '../component/FeedbackWrapper'
const NewsDetailScreen = ({ route }) => {
    const { id } = route.params;
    const listNews=useSelector(state=>state.news.value)
    const news = listNews.find((news) => {
        return news.id === id
    })
    const { image,
        category,
        title,
        content,
        } = news

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <HeadingNewsDetail />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.category}>{category}</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.content}>{content}</Text>
                    </View>
                </ScrollView>
            </View>
            <FeedbackWrapper news={news}/>
        </View>
    )
}

export default NewsDetailScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1
    },
    wrapper:{
        paddingHorizontal:24,
        flex:1
    },
    image: {
        marginVertical: 16
    },
    category: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 36,
        letterSpacing: 0.12
    },
    content: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    
})