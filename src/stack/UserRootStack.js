import React from 'react'
import { View } from 'react-native'

import LoginScreen from '../component/user/screens/LoginScreen'
import SignUpScreen from '../component/user/screens/SignUpScreen'
import NewsDetailScreen from '../component/new/screens/NewsDetailScreen'
import ImageIcon from '../component/user/component/ImageIcon'
import CommentScreen from '../component/new/screens/CommentScreen'
import CreateNews from '../component/new/screens/CreateNewsScreen'
import IconButton from '../component/user/component/IconButton'
import SearchNewsScreen from '../component/new/screens/SearchNewsScreen'

export const UserStackScreen = [
    {
        id: '1',
        name: 'LoginScreen',
        component: LoginScreen,
        options: {
            headerShown: false
        }
    },
    {
        id: '2',
        name: 'SignUpScreen',
        component: SignUpScreen,
        options: {
            headerShown: false
        }
    },
    {
        id: '3',
        name: 'NewsDetailScreen',
        component: NewsDetailScreen,
        options: {
            headerTitle: '',
            headerRight: () => {
                return (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 24 }}>
                        <ImageIcon image={require('../media/icon-share.png')} />
                        <ImageIcon image={require('../media/icon-three-doc.png')} />
                    </View>
                )
            },

        }
    },
    {
        id: '4',
        name: 'CommentScreen',
        component: CommentScreen,
        options: {
            title: 'Comments',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: 'poppins',
                fontSize: 16,
                fontWeight: '400',

            }

        }
    },
    {
        id: '5',
        name: 'SearchNewsScreen',
        component: SearchNewsScreen,
        options: {
            headerShown:false

        }
    },
    // ,
    // {
    //     id: '5',
    //     name: 'CreateNews',
    //     component: CreateNews,
    //     options: {
    //         title: 'Create News',
    //         headerTitleAlign: 'center',
    //         headerTitleStyle: {
    //             fontFamily: 'poppins',
    //             fontSize: 16,
    //             fontWeight: '400',
    //         },
            

    //     }
    // },
]
