import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import CommentItem from '../component/CommentItem'

const CommentWrapper = ({replyPress,item}) => {
  const [isSeeMore, setIsSeeMore] = useState(false)
  function SeeMore({ quantityComment }) {
    function SeeMoreOnpress() {
      isSeeMore ? setIsSeeMore(false) : setIsSeeMore(true);
    }
    
    return (
      <TouchableOpacity onPress={SeeMoreOnpress}>
        {
          isSeeMore ? <Text style={styles.seeMore}>{`Hide`}</Text>
           : <Text style={styles.seeMore}>{`See more (${quantityComment})`}</Text>
        }
        
      </TouchableOpacity>
    )
  }
    return (
        <View>
            <CommentItem item={item} replyPress={replyPress} />
            <View style={{ width: '78%', marginStart: 40 }}>
                {
                    isSeeMore &&
                    item.commentsReply.map((itemCommentReply) => {
                        return (
                            <View key={itemCommentReply.id}>
                                <CommentItem item={itemCommentReply} />
                            </View>
                        )
                    })
                }
                {
                    item.commentsReply.length > 0 && <SeeMore quantityComment={item.commentsReply.length} text='Hide' />
                }

            </View>
        </View>
    )
}

export default CommentWrapper

const styles = StyleSheet.create({
    
  seeMore: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.12,
    lineHeight: 24,
    marginStart: "10%"
  }
})