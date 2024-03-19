import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../api";

export const fetchGetAllUsers = createAsyncThunk(
    "users/fetchAll",
    async () => {
        try {
            const result = await axios.get(`${BASE_URL}`);
            return result.data;
        } catch (err) {
            throw new Error("Error retrieving users: " + err);
        }
    }
);

export const fetchGetUser = createAsyncThunk(
    "users/fetchUser",
    async (inputValue) => {
        try {
            const result = await axios.get(`${BASE_URL}?term=${inputValue}`);
            return result.data;
        } catch (err) {
            throw new Error("Error retrieving users: " + err);
        }
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGetAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchGetAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchGetUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGetUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchGetUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
