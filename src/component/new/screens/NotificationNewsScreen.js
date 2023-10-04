import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NotificationItem from '../component/NotificationItem'
import { notifications } from '../../../http/value'

const NotificationNews = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.heading}>Today, April 22</Text>
          {
            notifications.map((item, index) => {
              return index < 3 && <NotificationItem item={item} />
            })
          }
          <Text style={styles.heading}>Yesterdat, April 21</Text>
          {
            notifications.map((item, index) => {
              return index > 2 && <NotificationItem item={item} />
            })
          }

        </View>
      </ScrollView>

    </View>
  )
}

export default NotificationNews

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 24
  },
  heading: {
    fontFamily: 'poppins',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: 0.24,
    color: "#000",
    marginVertical: 16
  }
})