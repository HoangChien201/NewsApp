import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'

import IconButton from '../../user/component/IconButton'
import ImageIcon from '../../user/component/ImageIcon'
import { likeHandle } from '../../../store/newsReducer'
const FeedbackWrapper = ({news}) => {
    const navigation=useNavigation()
    const dispatch=useDispatch()

    const {
        id, 
        like,
        quantityLike,
        quantityComment,
        favorite } = news
    const [isLike, setIsLike] = useState(like)
    const [isFavorite, setIsFavorite] = useState(favorite)

    function IconLikeOnPress() {
        if(isLike){
            setIsLike(false)
            dispatch(likeHandle({id,type:'unlike'}))
        }else{
            setIsLike(true)
            dispatch(likeHandle({id,type:'like'}))
        }
    }
    function IconCommentOnPress() {
        navigation.navigate('CommentScreen',{
            idNews:id
        })
    }
    function IconFavoriteOnPress() {
        if(isFavorite){
            setIsFavorite(false)
        }else{
            setIsFavorite(true)
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.flexRow]}>
                <View style={[styles.flexRow, { width: 80 }]}>
                    <IconButton name='heart' size={24} color={isLike ? '#ED2E7E' : null} style={styles.icon} onPress={IconLikeOnPress}/>
                    <Text>{quantityLike}</Text>
                </View>
                <View style={[styles.flexRow, { width: 80 }]}>
                    <ImageIcon image={require('../../../media/icon-comment.png')} style={styles.icon} onPress={IconCommentOnPress}/>
                    <Text>{quantityComment}</Text>
                </View>
            </View>
            <IconButton name='bookmark' size={24} color={isFavorite ? '#1877F2' : null} onPress={IconFavoriteOnPress}/>

        </View>
    )
}

export default FeedbackWrapper

const styles = StyleSheet.create({
    container: {
        height: 78,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: "center",

    },
    icon: {
        marginEnd: 5
    }
})
