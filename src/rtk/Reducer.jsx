import { createSlice } from "@reduxjs/toolkit";
import { listProducts, login } from "./API";
import { ToastAndroid } from "react-native";

const initialState = {
    products: [],
    user: null,
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
    // extraReducers: (builder) => {
    //     builder.addCase(listProducts.pending, (state, action) => {
    //         console.log("...Pending");
    //     });
    //     builder.addCase(listProducts.fulfilled, (state, action) => {
    //         state.products = action.payload;
    //         //console.log(action.payload);
    //     });
    //     builder.addCase(listProducts.rejected, (state, action) => {
    //         console.log("...Rejected");
    //         state.products = null;
    //     });
    // }
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload; // Cập nhật user khi đăng nhập thành công
        });
    }
});

export const { clearProducts, logout } = appSlice.actions;
export default appSlice.reducer;




