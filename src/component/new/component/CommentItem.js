import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import IconText from './IconText'
import { GetTimeComment } from '../../format/FormatDate'

const CommentItem = ({ item,replyPress }) => {
    const { id,author, comment, like, avatar, commentsReply,time } = item

    return (
        <View style={styles.container}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.name}>{author}</Text>
                    <Text style={styles.comment}>{comment}</Text>
                </View>
                <View style={styles.interactWrapper}>
                    <Text style={styles.time}>{GetTimeComment(time)}</Text>
                    <IconText text={like} icon='heart' colorIcon="#ED2E7E" size={14} />
                    {
                        commentsReply && <TouchableOpacity>
                            <IconText text="reply" icon='return-down-back' colorIcon="#ccc" size={14} onPress={replyPress.bind(this,{name:author,id:id})}/>
                        </TouchableOpacity>
                    }

                </View>

            </View>
        </View>
    )
}

export default CommentItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 8,
        width: '100%',
        minHeight: 90,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginEnd: 8
    },
    content: {
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000'
    },
    comment: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000'
    },
    interactWrapper: {
        flexDirection: "row",
        marginVertical: 4
    },
    time: {
        marginEnd: 10
    },

})