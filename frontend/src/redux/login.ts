import { createSlice } from "@reduxjs/toolkit";


export const LOGIN = createSlice({
    name:'login',
    initialState: {login:false},
    reducers: {
        toggleLogin:(state)=>{
            state.login=state.login!
            return state
        }
    }
})
export const {toggleLogin}= LOGIN.actions

export default LOGIN.reducer