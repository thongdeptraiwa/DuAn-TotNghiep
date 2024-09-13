import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../helpers/AxiosHelper'

export const getPost = createAsyncThunk(
    "post/getHome",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("/post/getHome", data);
            console.log(response.post);
            return response.post;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);



