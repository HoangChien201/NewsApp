import commentReducer from "./commentReducer";
import newsReducer from "./newsReducer";

const { configureStore } = require("@reduxjs/toolkit");


export const store=configureStore({
    reducer:{
        news:newsReducer,
        comments:commentReducer      
    }
})