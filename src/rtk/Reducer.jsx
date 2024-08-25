import { createSlice } from "@reduxjs/toolkit";
import {login } from "./API";


const initialState = {
<<<<<<< HEAD
    products: [],
    user: null,
    status: 'idle',
    error: null
=======
    user: null, // thông tin user đăng nhập
    messageLogin: null,
    token: '', // token
    refreshToken: '',// refreshToken
>>>>>>> 53d9f3607e128b0352ba2f8b991ec993adfaa9e0
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app

        resetToken: (state, action) => {
            state.token = action.payload;
            //console.log(state.token);
        },

        // Đăng xuất người dùng
        logout: (state) => {
            state.user = null;
        }
    },
<<<<<<< HEAD
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log("...loading");
            state.status = 'loading';
=======

    extraReducers: (builder) => {
        //login
        builder.addCase(login.pending, (state, action) => {
            console.log("...Pending login");
            state.messageLogin = null;
            state.token = '';
            state.refreshToken = '';
>>>>>>> 53d9f3607e128b0352ba2f8b991ec993adfaa9e0
        });
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("...fulfilled login");
            state.user = action.payload?.user;
            state.messageLogin = null;
            state.token = action.payload?.token;
            state.refreshToken = action.payload?.refreshToken;
            //console.log('>>>>>', action.payload?.refreshToken);
        });
        builder.addCase(login.rejected, (state, action) => {
            //console.log('=====>>>>>',action.payload);
            console.log("...Rejected login");
            state.user = null;
            state.messageLogin = action?.payload;
            state.token = '';
            state.refreshToken = '';
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log("...Rejected");
            state.error = action.error.message; 
        });
    }
});

export const { resetToken, logout } = appSlice.actions;
export default appSlice.reducer;




