import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { comments } from '../../../http/value'
import FormComment from '../component/FormComment'
import CommentWrapper from '../component/CommentWrapper'
import { addCommnent, replyComment } from '../../../store/commentReducer'

const CommentScreen = ({route}) => {
  const data = useSelector((state) => { return state.comments.value })
  const dispatch = useDispatch();
  const idNews=route.params.idNews;
  const dataCommnent=data.filter(item=>item.idNews===idNews)

  const [isReply, setIsRepLy] = useState(null);


  function ReplyPressHandle(author) {
    setIsRepLy(author);
  }
  function CancelReplyHandle() {
    setIsRepLy(null)
  }

  function CommentSubmit(comment) {
    if (!isReply) {
      const newComment = {
        id: new Date() + Math.random(),
        author: "Hoàng Chiến",
        avatar: require('../../../media/avt4.png'),
        comment: comment,
        like: '0',
        time: new Date().toISOString(),
        idNews:idNews,
        commentsReply: []
      }
      dispatch(addCommnent({ comment: newComment }))

      // setDataCommnent((prevData)=>{
      //   return [newComment,...prevData]
      // })

    }
    else {
      const newComment = {
        id: new Date() + Math.random(),
        author: "Hoàng Chiến",
        avatar: require('../../../media/avt4.png'),
        comment: comment,
        like: '0',
        time: new Date().toISOString(),
      }
      // setDataCommnent((prevData)=>{
      //   return prevData.filter(item=>{
      //     if(item.id === isReply.id){
      //       item.commentsReply.push(newComment)
      //     }
      //     return item
      //   })
      // })
      dispatch(replyComment({
        id:isReply.id,
        comment:newComment
      }))
    }
    setIsRepLy(null)
  }



  return (
    <View style={styles.container}>
      <View style={styles.commnents}>
        <FlatList
          data={dataCommnent}
          renderItem={({ item }) => {
            return (
              <CommentWrapper replyPress={ReplyPressHandle} item={item} />
            )
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />

      </View>
      <FormComment isReply={isReply} onPressCancle={CancelReplyHandle} submit={CommentSubmit} />
    </View>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commnents: {
    flex: 1,
    paddingHorizontal: 24,

  },

})