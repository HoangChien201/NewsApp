import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import NewsItem from '../component/NewsItem'
import RenderCategory from '../component/RenderCategory'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LastesNews = (props) => {
    const { LastestHandle, data } = props
    const [categoryCurrent, setCategoryCurrent] = useState('All')
    const [isShow, setIsShow] = useState(false);
    function ChangeCategory(category) {
        setCategoryCurrent(category)
    }
    function SeeAllOnPress() {
        if (isShow) {
            LastestHandle('hide')
            setIsShow(false)
        } else {
            LastestHandle('show')
            setIsShow(true)
        }
    }
    return (
        <View style={[styles.container, isShow && { marginTop: 30 }]}>

            <View style={[styles.flexRow]}>
                <Text style={styles.heading}>Latest</Text>
                <TouchableOpacity onPress={SeeAllOnPress}>
                    <Text style={styles.seeAll}>{!isShow ? 'See all' : 'Hide'}</Text>
                </TouchableOpacity>
            </View>

            <RenderCategory ChangeCategory={ChangeCategory} />
            {
                categoryCurrent !== 'All' ?
                    data.filter(item => item.category == categoryCurrent).map((itemNews) => {
                        return (
                            <View style={styles.news} key={itemNews.id}>
                                <NewsItem
                                    type="small"
                                    item={itemNews}
                                />
                            </View>
                        )
                    })
                    :
                    data.map((itemNews) => {
                        return (
                            <View style={styles.news} key={itemNews.id}>
                                <NewsItem
                                    type="small"
                                    item={itemNews} />
                            </View>
                        )
                    })
            }

        </View>
    )
}

export default LastesNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    news: {
        height: 112,
    }
})