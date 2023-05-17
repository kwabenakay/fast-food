import { createSlice } from "@reduxjs/toolkit";


export const Login = createSlice({
    name:'login',
    initialState: {login:false},
    reducers: {
        toggleLogin:(state)=>{
            state.login=state.login!
            return state
        }
    }
})
export const {toggleLogin}= Login.actions

export default Login.reducer