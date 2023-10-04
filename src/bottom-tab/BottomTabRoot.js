import {Image} from 'react-native'

import HomeNewsScreen from "../component/new/screens/HomeNewsScreen";
import HomeStack from "../component/new/stack/HomeStack";


import Icon from 'react-native-vector-icons/FontAwesome'
import ExploreNewsScreen from '../component/new/screens/ExploreNewsScreen';
import BookmarkNewsScreen from '../component/new/screens/BookmarkNewsScreen';

export const BottomTabScreen=[
    {
        id:1,
        name:"HomeStack",
        component:HomeStack,
        options:{
            headerShown:false,
            tabBarIcon:({color})=>{
                return (<Icon name='home' size={24} color={color}/>)
            },
            
        }
    },
    {
        id:2,
        name:"Explore",
        component:ExploreNewsScreen,
        options:{
            headerShown:false,
            tabBarIcon:({color})=>{
                return (<Icon name='safari' size={24} color={color}/>)
            },
            
        }
    },
    {
        id:3,
        name:"Bookmark",
        component:BookmarkNewsScreen,
        options:{
            headerShown:false,
            tabBarIcon:({color})=>{
                return (<Icon name='user-circle' size={24} color={color}/>)
            },
            
        }
    },
    {
        id:4,
        name:"Profile",
        component:HomeNewsScreen,
        options:{
            headerShown:false,
            tabBarIcon:({color})=>{
                return (<Icon name='bookmark' size={24} color={color}/>)
            },
            
        }
    }
]