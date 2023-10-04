import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[
        {
            id:new Date() + Math.random(),
            author:"Wilson Franci",
            avatar:require('../media/avt1.png'),
            comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            like:'23',
            time:'2023-9-25 11:45:00',
            idNews:"1",
            commentsReply:[
                {
                    id:new Date() + Math.random(),
                    author:"Marley Botosh",
                    avatar:require('../media/avt2.png'),
                    comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    like:'10',
                    time:'2023-9-26 0:45:00',
                },
                {
                    id:new Date() + Math.random(),
                    author:"Alfonso Septimus",
                    avatar:require('../media/avt3.png'),
                    comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    like:'21',
                    time:'2023-9-26 1:05:00',
                }
            ]
        },
        {
            id:new Date() + Math.random(),
            author:"Marley Botosh",
            avatar:require('../media/avt2.png'),
            comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            like:'50',
            time:'2023-9-21 0:45:00',
            idNews:'1',
            commentsReply:[]
        },
        {
            id:new Date() + Math.random(),
            author:"Alfonso Septimus",
            avatar:require('../media/avt3.png'),
            comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            like:'23',
            time:'2023-9-26 0:45:00',
            idNews:'2',
            commentsReply:[
                {
                    id:new Date() + Math.random(),
                    author:"Wilson Franci",
                    avatar:require('../media/avt1.png'),
                    comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    like:'2',
                    time:'2023-9-26 2:45:00',
                }
            ]
        },
        {
            id:new Date() + Math.random(),
            author:"Omar Herwitz",
            avatar:require('../media/avt4.png'),
            comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            like:'23',
            time:'2023-9-22 0:45:00',
            idNews:'3',
            commentsReply:[]
        },
        {
            id:new Date() + Math.random(),
            author:"Corey Geidt",
            avatar:require('../media/avt5.png'),
            comment:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            like:'23',
            time:'2023-9-27 7:45:00',
            idNews:'3',
            commentsReply:[]
        },
    ]
}

export const commentReducer=createSlice({
    name:'commnents',
    initialState,
    reducers:{
        addCommnent:(state,action)=>{
            state.value=[action.payload.comment,...state.value]
        },
        replyComment:(state,action)=>{
            const commnentIsReply=state.value.find(item=>item.id===action.payload.id)
            commnentIsReply.commentsReply.push(action.payload.comment)
            state.value.map((item)=>{
                if (item.id===action.payload.id){
                    return commnentIsReply;
                }
                return item;
            })
        }
    }
})

export const {addCommnent,replyComment} = commentReducer.actions

export default commentReducer.reducer;