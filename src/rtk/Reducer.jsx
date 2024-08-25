import { createSlice } from "@reduxjs/toolkit";
import {login } from "./API";


const initialState = {
    products: [],
    user: null,
    status: 'idle',
    error: null
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app

        clearProducts: (state, action) => {
            state.products = [];
        },

        // Đăng xuất người dùng
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log("...loading");
            state.status = 'loading';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload; // Cập nhật user khi đăng nhập thành công
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log("...Rejected");
            state.error = action.error.message; 
        });
    }
});

export const { clearProducts, logout } = appSlice.actions;
export default appSlice.reducer;




